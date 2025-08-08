'use server';

/**
 * @fileOverview An AI tool that assesses the likelihood of success for an Instagram unban appeal.
 *
 * - assessUnbanAppeal - A function that handles the assessment of the unban appeal.
 * - AssessUnbanAppealInput - The input type for the assessUnbanAppeal function.
 * - AssessUnbanAppealOutput - The return type for the assessUnbanAppeal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessUnbanAppealInputSchema = z.object({
  instagramUsername: z.string().describe('The Instagram username of the account under appeal.'),
  issueType: z.string().describe('The type of issue leading to the ban (e.g., nudity, copyright, impersonation).'),
  appealMessage: z.string().describe('The user-submitted appeal message.'),
  policyViolations: z.string().describe('Description of the specific Instagram policy violations that led to the ban.'),
});
export type AssessUnbanAppealInput = z.infer<typeof AssessUnbanAppealInputSchema>;

const AssessUnbanAppealOutputSchema = z.object({
  likelihoodOfSuccess: z
    .string()
    .describe(
      'An assessment of the likelihood of the appeal being successful (e.g., High, Medium, Low), based on the provided information.'
    ),
  reasoning: z.string().describe('The AI’s reasoning behind the assessed likelihood of success.'),
  suggestedActions: z
    .string()
    .describe(
      'Suggestions for improving the appeal or alternative actions the user could take, given the assessment.'
    ),
});
export type AssessUnbanAppealOutput = z.infer<typeof AssessUnbanAppealOutputSchema>;

export async function assessUnbanAppeal(input: AssessUnbanAppealInput): Promise<AssessUnbanAppealOutput> {
  return assessUnbanAppealFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessUnbanAppealPrompt',
  input: {schema: AssessUnbanAppealInputSchema},
  output: {schema: AssessUnbanAppealOutputSchema},
  prompt: `You are an AI assistant that assesses the likelihood of success for Instagram unban appeals. Based on the information provided, evaluate the appeal’s chances of success and provide reasoning and suggested actions.

Instagram Username: {{{instagramUsername}}}
Issue Type: {{{issueType}}}
Appeal Message: {{{appealMessage}}}
Policy Violations: {{{policyViolations}}}

Assess the likelihood of success as High, Medium, or Low. Provide a concise reasoning for your assessment and suggest specific actions the user can take to improve their appeal or resolve the issue.

Likelihood of Success: {{likelihoodOfSuccess}}
Reasoning: {{reasoning}}
Suggested Actions: {{suggestedActions}}`,
});

const assessUnbanAppealFlow = ai.defineFlow(
  {
    name: 'assessUnbanAppealFlow',
    inputSchema: AssessUnbanAppealInputSchema,
    outputSchema: AssessUnbanAppealOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
