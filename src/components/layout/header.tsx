"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const mainNav = [
    { href: "/", label: t("Home") },
    { href: "/about", label: t("About") },
    { href: "/expertise", label: t("Expertise") },
    { href: "/projects", label: t("Projects") },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Furny Asia Home">
            <Image
              src="/assets/logo/logo.png"
              alt="Furny Asia Logo"
              width={140}
              height={40}
              className="h-8 w-auto object-contain dark:invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="bg-transparent text-sm font-medium focus:outline-none border border-border rounded px-2 py-1 cursor-pointer"
              aria-label="Select language"
            >
              <option value="en">English</option>
              {/* <option value="fr">Français</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option> */}
              
            </select>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {t("StartProject")}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col space-y-4">
              <select 
                value={locale}
                onChange={handleLanguageChange}
                className="bg-transparent text-sm font-medium p-2 border border-border rounded"
              >
                <option value="en">English</option>
                {/* <option value="fr">Français</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option> */}
                
              </select>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {t("StartProject")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
