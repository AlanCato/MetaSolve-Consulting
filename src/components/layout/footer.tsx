import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-3">
            <Facebook className="h-6 w-6 text-primary" />
            <Instagram className="h-6 w-6 text-primary" />
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} MetaSolve Consulting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
