'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="text-foreground/80 hover:text-foreground transition-colors font-medium"
    >
      {children}
    </Link>
  );

  const navLinks = (
    <>
      <NavLink href="/#services">Services</NavLink>
      <NavLink href="/appeal-assessment">AI Appeal Assessment</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Instagram className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">InstaSolve Consulting</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-6">
          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                  {navLinks}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              {navLinks}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
