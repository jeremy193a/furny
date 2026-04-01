import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furny Asia | End-to-end Hospitality Furniture",
  description: "Vietnam-based hospitality furniture manufacturing and selected FF&E supply for global projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furny.asia/",
    siteName: "Furny Asia",
    title: "Furny Asia | End-to-end Hospitality Furniture",
    description: "Vietnam-based hospitality furniture manufacturing and selected FF&E supply for global projects.",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Furny Asia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furny Asia | End-to-end Hospitality Furniture",
    description: "Vietnam-based hospitality furniture manufacturing and selected FF&E supply for global projects.",
    images: ["/assets/logo/logo.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
