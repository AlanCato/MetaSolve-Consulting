import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Your Meta Accounts, <span className="text-foreground">Reclaimed and Secured.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          At MetaSolve, we specialize in resolving complex issues across Facebook, Instagram, and WhatsApp with expertise and complete privacy. From account recovery to securing rare usernames, we provide tailored solutions to get you back on track.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/#contact">Get Help Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
