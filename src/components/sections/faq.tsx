import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does the account recovery process take?',
    answer: 'The timeframe for account recovery can vary greatly depending on the complexity of the case. While some cases are resolved in a few days, others might take several weeks. We provide a timeline estimate after our initial assessment.',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. Client confidentiality is our top priority. All information you share with us is handled with the strictest privacy and stored securely. We never disclose client details without explicit consent.',
  },
  {
    question: 'What is your success rate?',
    answer: 'We have a very high success rate due to our specialized expertise and deep understanding of Meta\'s platform policies. However, we cannot guarantee a specific outcome as the final decision rests with Meta. We are transparent about the chances of success from the start.',
  },
  {
    question: 'What platforms do you cover?',
    answer: 'We specialize in all platforms under the Meta umbrella, including Facebook, Instagram, and WhatsApp. Our services cover a wide range of issues on these platforms.',
  },
  {
    question: 'How do I get started?',
    answer: 'To get started, please fill out the contact form on our website with as much detail as possible about your issue. Our team will review your case and get back to you to schedule a private consultation.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have questions? We have answers. Here are some of the most common questions we receive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
