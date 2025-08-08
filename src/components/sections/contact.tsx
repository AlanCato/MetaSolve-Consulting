import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Ready to resolve your Instagram issues? Fill out the form below for a private, personalized consultation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
