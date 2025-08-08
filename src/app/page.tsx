import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Features from '@/components/sections/features';
import Contact from '@/components/sections/contact';
import Faq from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
