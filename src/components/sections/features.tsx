import { ShieldCheck, BrainCircuit, BarChart } from 'lucide-react';

const features = [
  {
    name: 'Total Privacy',
    description: 'Your case is handled with the utmost confidentiality. We never share your information and operate with complete discretion.',
    icon: ShieldCheck,
  },
  {
    name: 'Unmatched Expertise',
    description: 'Our team possesses deep, specialized knowledge of Instagram’s policies and internal workings to navigate complex issues effectively.',
    icon: BrainCircuit,
  },
  {
    name: 'Results-Oriented Approach',
    description: 'We focus on delivering tangible results. Our strategies are tailored to your specific situation to maximize the chances of success.',
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Why Choose Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            The InstaSolve Advantage
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide more than just solutions; we offer peace of mind. Our process is built on a foundation of trust, expertise, and a commitment to your success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
