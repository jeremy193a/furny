import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 mt-auto border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Note */}
          <div className="flex flex-col space-y-4">
            <Link href="/" aria-label="Furny Asia Home">
              <Image
                src="/assets/logo/logo.png"
                alt="Furny Asia Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hospitality furniture manufacturing and selected FF&E supply for global projects.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4 lg:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>Email: <a href="mailto:inquiries@furny.asia" className="hover:text-primary transition-colors">inquiries@furny.asia</a></p>
              <p>Phone: <a href="tel:+84909809755" className="hover:text-primary transition-colors">+84 909 809755</a></p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Singapore</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Furny Asia Pte. Ltd<br />
              470 North Bridge Road, #05-12 Bugis Cube<br />
              Singapore 188735
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Vietnam</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Furny Vietnam (Office & Showroom)<br />
              2 Bac Nam Street, An Phu Ward, District 2<br />
              Ho Chi Minh City, 700000, Vietnam
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/expertise" className="hover:text-primary transition-colors">Expertise</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/furny-asia/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.5 9.88h2.88V18H5.5V9.88Zm4.69 0h2.76v1.11h.04c.38-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.84 3.47 4.24V18h-2.88v-3.78c0-.9-.02-2.06-1.32-2.06-1.32 0-1.52 1-1.52 1.99V18H10.2V9.88Z" />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Furny Asia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
