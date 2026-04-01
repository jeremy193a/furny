"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Bed, Coffee, Utensils, Tent, Building, Leaf } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const t = useTranslations("Home");
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.p variants={fadeIn} className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
                {t("HeroEyebrow")}
              </motion.p>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] mb-6 text-foreground">
                {t("HeroTitle")}
              </motion.h1>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
                >
                  {t("BtnStart")}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                >
                  {t("BtnExplore")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] w-full mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-2xl -rotate-3 transform-gpu"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/logo/soma.JPEG"
                  alt="Furny hospitality project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                <Image src="/assets/pic/pic-7.jpg" alt="Crafted detail" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                <Image src="/assets/pic/pic-3-bis.jpg" alt="Completed interior" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="py-10 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground shrink-0">{t("TrustedBy")}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
              <span className="text-lg font-medium text-foreground/80">{t("Designers")}</span>
              <span className="hidden md:inline-block text-muted-foreground">•</span>
              <span className="text-lg font-medium text-foreground/80">{t("Operators")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">{t("ExpertiseEyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">{t("ExpertiseTitle")}</h2>
          </motion.div>


          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
            {[
              { icon: Bed, label: "Hotel Guestrooms" },
              { icon: Coffee, label: "Public Areas and Lobbies" },
              { icon: Utensils, label: "Restaurant and Bars" },
              { icon: Tent, label: "Outdoor Hospitality Environments" },
              { icon: Building, label: "Branded Residential Developments" }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/80 border border-border/50 shadow-sm hover:bg-secondary hover:border-border transition-all"
              >
                <cat.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">{cat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Factory, title: t("ExpItem1Title"), desc: t("ExpItem1Desc") },
              { icon: ShieldCheck, title: t("ExpItem2Title"), desc: t("ExpItem2Desc") },
              { icon: CheckCircle2, title: t("ExpItem3Title"), desc: t("ExpItem3Desc") }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="p-8 rounded-2xl bg-secondary/50 border border-border hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Standards & Certifications Mockups */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 mt-8 mb-4 border-y border-border/50 py-8 bg-secondary/10">
             <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-sm tracking-widest uppercase font-black text-primary">OEKO-TEX®</span>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-semibold">Confidence in Textiles</span>
                <span className="text-base font-bold mt-1 text-primary">STANDARD 100</span>
             </div>
             <div className="w-16 h-px sm:w-px sm:h-12 bg-border"></div>
             <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <Leaf className="w-8 h-8 text-emerald-700" />
                <div className="flex flex-col">
                  <span className="text-base font-black text-emerald-900 leading-none">FSC</span>
                  <span className="text-[10px] uppercase text-emerald-800 tracking-widest font-bold mt-1">100% Wood from well-managed forests</span>
                </div>
             </div>
          </div>

          {/* Featured Projects */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12 mt-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/assets/pic/pic-2.jpg", title: "Soma Riverside Hotel, Phnom Penh, Cambodia" },
              { src: "/assets/pic/pic-6.jpg", title: "Akuna Restaurant, Le Méridien, Ho Chi Minh City, Vietnam" },
              { src: "/assets/pic/picture-10.jpeg", title: "Bar Son, Le Méridien, Ho Chi Minh, Cambodia" },
              { src: "/assets/pic/picture-11.jpeg", title: "Le Méridien, Ho Chi Minh, Cambodia" },
              { src: "/assets/pic/pic-3-bis.jpg", title: "Samanea Wellness Resort, Osaom, Cambodia" },
              { src: "/assets/pic/pic-5.jpg", title: "Above Eleven Rooftop Bar, Novotel, Phnom Penh, Cambodia" },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="text-lg font-heading font-medium text-white drop-shadow-lg">{project.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY SECTION */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mb-16"
          >
            <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-3 text-accent-foreground">{t("SupplyEyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium">{t("SupplyTitle")}</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "/assets/ffe-supply/picture-1.png", title: t("SupCat1") },
              { src: "/assets/ffe-supply/picture-6.jpg", title: t("SupCat2") },
              { src: "/assets/ffe-supply/picture-4.png", title: t("SupCat3") },
              { src: "/assets/ffe-supply/picture-5.png", title: t("SupCat4") },
              { src: "/assets/ffe-supply/picture-2.png", title: t("SupCat5") },
              { src: "/assets/ffe-supply/picture-3.png", title: t("SupCat6") },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-lg font-medium text-white">{item.title}</span>
                  <ArrowRight className="w-5 h-5 text-white opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
