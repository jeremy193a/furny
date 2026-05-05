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
      {/* VISION & CORE VALUES (NEW HERO) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="lg:col-span-3"
            >
              <motion.p variants={fadeIn} className="text-sm font-semibold tracking-wider text-accent uppercase mb-6">{t("VisionEyebrow")}</motion.p>
              <motion.p variants={fadeIn} className="text-2xl md:text-3xl lg:text-4xl font-heading text-primary font-medium leading-relaxed">
                {t("VisionTitle")}
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col items-center"
            >
              <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl group mb-3">
                <Image
                  src="/assets/pic/jonathan_profile.jpg"
                  alt="Jonathan Dao, BD Director and co-founder"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium text-center">Jonathan Dao, BD Director and co-founder</p>
            </motion.div>
          </div>

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
    </div>
  );
}
