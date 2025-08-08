'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { runAssessUnbanAppeal } from '@/app/actions';
import type { AssessUnbanAppealOutput } from '@/ai/flows/assess-unban-appeal';
import { Loader2, Sparkles, AlertTriangle, Lightbulb } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  instagramUsername: z.string().min(1, { message: 'Instagram username is required.' }),
  issueType: z.string({ required_error: 'Please select an issue type.' }),
  appealMessage: z.string().min(20, { message: 'Appeal message must be at least 20 characters.' }),
  policyViolations: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
});

const issueTypes = ['Nudity', 'Copyright', 'Impersonation', 'Spam', 'Hate Speech', 'Other'];

export default function AppealForm() {
  const [assessmentResult, setAssessmentResult] = React.useState<AssessUnbanAppealOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instagramUsername: '',
      appealMessage: '',
      policyViolations: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAssessmentResult(null);
    try {
      const result = await runAssessUnbanAppeal(values);
      setAssessmentResult(result);
    } catch (e) {
      setError('An unexpected error occurred. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  }
  
  const getLikelihoodPill = (likelihood: string) => {
    switch (likelihood.toLowerCase()) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Appeal Information</CardTitle>
          <CardDescription>Provide the details of your appeal for an AI-powered analysis.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="instagramUsername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram Username</FormLabel>
                    <FormControl>
                      <Input placeholder="@username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="issueType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Issue Type</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the reason for the ban" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {issueTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="policyViolations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Ban (as stated by Instagram)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the policy Instagram claims you violated..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appealMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Appeal Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste or write the appeal message you plan to send..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : 'Assess My Appeal'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && <div className="text-center py-8"><Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" /></div>}

      {error && <p className="text-destructive mt-4 text-center">{error}</p>}

      {assessmentResult && (
        <Card className="mt-8 animate-in fade-in-50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Sparkles className="text-accent" />
                  Assessment Result
                </CardTitle>
                <CardDescription>Here is the AI-driven analysis of your appeal.</CardDescription>
              </div>
              <span className={`text-sm font-bold py-1 px-3 rounded-full border ${getLikelihoodPill(assessmentResult.likelihoodOfSuccess)}`}>
                {assessmentResult.likelihoodOfSuccess} Success
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="text-primary"/>Reasoning</h3>
              <p className="text-sm text-muted-foreground bg-secondary/50 p-4 rounded-md">{assessmentResult.reasoning}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb className="text-primary"/>Suggested Actions</h3>
              <p className="text-sm text-muted-foreground bg-secondary/50 p-4 rounded-md whitespace-pre-wrap">{assessmentResult.suggestedActions}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
