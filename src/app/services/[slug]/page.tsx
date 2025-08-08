import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">{service.icon}</div>
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {service.longDescription}
                </p>
                <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/#contact">Contact for Solution</Link>
                </Button>
              </div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">What's Included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
