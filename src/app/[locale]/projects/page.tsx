"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/pic/pic-1.png", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-2.jpg", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-3-bis.jpg", alt: "Samanea Wellness Resort", title: "Samanea Wellness Resort, Osaom, Cambodia" },
  { src: "/assets/pic/pic-4.jpg", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-5.jpg", alt: "Above Eleven Rooftop Bar", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-6.jpg", alt: "Akuna Restaurant", title: "Akuna Restaurant, Le Méridien, Ho Chi Minh City, Vietnam" },
  { src: "/assets/pic/pic-7.jpg", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-8.JPG", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/pic-9.jpg", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/picture-10.jpeg", alt: "Bar Son", title: "Bar Son, Le Méridien, Ho Chi Minh, Cambodia" },
  { src: "/assets/pic/picture-11.jpeg", alt: "Le Méridien", title: "Le Méridien, Ho Chi Minh, Cambodia" },
  { src: "/assets/pic/picture-12.JPG", alt: "Soma Riverside Hotel", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/picture-13.jpg", alt: "Above Eleven", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/picture-14.jpg", alt: "Above Eleven", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/picture-15.jpg", alt: "Above Eleven", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" },
  { src: "/assets/pic/picture-16.jpg", alt: "Above Eleven", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" }
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-wider text-accent uppercase mb-4"
            >
              {t("HeroEyebrow")}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-6 text-foreground"
            >
               {t("HeroTitle")}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("HeroDesc")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] w-full" 
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
                  <span className="text-white font-medium drop-shadow-md">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
