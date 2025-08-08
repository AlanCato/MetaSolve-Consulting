import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, EyeOff, Copyright, Users, BadgeCheck, AtSign, Ghost } from 'lucide-react';

const services = [
  {
    title: 'Account Unbanning',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    description: "Regain access to your account. We handle appeals for various violations.",
    causes: [
      { name: 'Nudity & Community Guidelines', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Copyright Infringement', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Impersonation Claims', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
    ],
  },
  {
    title: 'Legacy Verification',
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    description: 'Get the blue tick without press. Our private consultation guides you through the legacy verification process.',
    causes: [
      { name: 'Meeting hidden criteria', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Insider submission channels', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Disclaimer: Results vary', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
    ],
  },
  {
    title: 'Rare Username Acquisition',
    icon: <AtSign className="h-8 w-8 text-primary" />,
    description: 'Secure a short, unique, or high-value username. We consult on acquiring 3, 4, or 5-character names.',
    causes: [
        { name: 'Inactive account claims', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
        { name: 'Trademark negotiations', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
        { name: 'Private acquisitions', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
    ],
  },
  {
    title: 'Shadowban & Content Appeal',
    icon: <Ghost className="h-8 w-8 text-primary" />,
    description: 'Restore your reach. We identify and help resolve shadowbans and content restrictions.',
    causes: [
      { name: 'Spammy or repetitive behavior', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Use of banned hashtags', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Flagged content reports', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-12 md:py-24 bg-secondary/50 rounded-3xl">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We offer a range of specialized services to address your Instagram account needs with confidentiality and precision.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
              <h4 className="font-semibold mb-2 text-foreground">Possible Causes:</h4>
              <ul className="space-y-2">
                {service.causes.map((cause) => (
                  <li key={cause.name} className="flex items-center gap-3">
                    {cause.icon}
                    <span className="text-sm text-muted-foreground">{cause.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Contact for Solution</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
