"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("HeroDesc")}
              </motion.p>
              <motion.div variants={fadeIn} className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  {t("BtnViewExp")}
                </Link>
                <Link
                  href="/expertise"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
                >
                  {t("BtnViewExp")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="/assets/pic/pic-2.jpg"
                alt="Hospitality interior background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO BAND & STATS */}
      <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              {t("IntroParagraph")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t("Stat1Title"), desc: t("Stat1Desc") },
              { title: t("Stat2Title"), desc: t("Stat2Desc") },
              { title: t("Stat3Title"), desc: t("Stat3Desc") },
              { title: t("Stat4Title"), desc: t("Stat4Desc") }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="p-6 border border-border rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2 w-12 bg-accent rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-foreground mb-3">{stat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & CORE VALUES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-6">{t("VisionEyebrow")}</p>
            <p className="text-2xl md:text-4xl font-heading text-primary font-medium leading-relaxed">
              {t("VisionTitle")}
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">{t("CoreEyebrow")}</p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
                {t("CoreTitle")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: t("Val1Title"), desc: t("Val1Desc") },
                { num: "02", title: t("Val2Title"), desc: t("Val2Desc") },
                { num: "03", title: t("Val3Title"), desc: t("Val3Desc") }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-2xl bg-secondary/30 relative overflow-hidden group hover:bg-secondary/60 transition-colors"
                >
                  <span className="absolute top-6 right-6 text-6xl font-black text-border/40 group-hover:text-border/60 transition-colors">{val.num}</span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground mt-8">{val.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
