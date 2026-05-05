"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'fr', label: 'Français', flag: 'fr' },
  { code: 'ja', label: '日本語', flag: 'jp' },
  { code: 'ko', label: '한국어', flag: 'kr' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const langRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const currentLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

  const handleLanguageChange = (nextLocale: string) => {
    setLangOpen(false);
    setIsOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  const mainNav = [
    { href: "/", label: t("Home") },
    { href: "/about", label: t("About") },
    { href: "/expertise", label: t("Expertise") },
    { href: "/projects", label: t("Projects") },
  ];

  const LanguageSwitcher = () => (
    <div className="relative" ref={langRef}>
      <button 
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-2 border border-border rounded-full p-1 pr-2 focus:outline-none hover:bg-secondary transition-colors bg-background"
        aria-label="Select language"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0">
          <Image src={`https://flagcdn.com/w40/${currentLang.flag}.png`} alt={currentLang.label} fill className="object-cover" />
        </div>
        <span className="text-sm font-medium uppercase">{currentLang.code}</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>
      {langOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-secondary transition-colors",
                locale === lang.code && "text-primary font-medium bg-secondary/50"
              )}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden relative shrink-0">
                <Image src={`https://flagcdn.com/w40/${lang.flag}.png`} alt={lang.label} fill className="object-cover" />
              </div>
              <span className="uppercase">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

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
            <LanguageSwitcher />
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
            <div className="pt-4 border-t border-border flex flex-col space-y-4 items-start">
              <LanguageSwitcher />
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
