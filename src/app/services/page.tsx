import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="services" className="container py-12 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a range of specialized services to address your account needs across all Meta platforms with confidentiality and precision.
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
                  <h4 className="font-semibold mb-2 text-foreground">Service Details:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{detail}</span>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
