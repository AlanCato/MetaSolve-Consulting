import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/services';

export default function Services() {
  return (
    <section id="services" className="container py-12 md:py-24 bg-secondary/50 rounded-3xl">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We offer a range of specialized services to address your account needs across all Meta platforms with confidentiality and precision.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
        {services.slice(0, 2).map((service) => (
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
                <Link href={`/services/${service.slug}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
