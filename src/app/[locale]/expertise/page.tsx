"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Box, Check, Factory, Globe2, ScanFace, FileSignature, Ruler, HandMetal, FlaskConical, SearchCheck, Truck } from "lucide-react";

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

export default function Expertise() {
  const t = useTranslations("Expertise");

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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[500px] lg:h-[600px] mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-2xl rotate-3 transform-gpu"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/assets/pic/pic-6.jpg"
                  alt="Furny expertise visual representing hospitality furniture production"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block z-10">
                <Image src="/assets/pic/pic-1.png" alt="Furniture detail representation" fill className="object-cover" />
              </div>
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block z-10">
                <Image src="/assets/pic/pic-9.jpg" alt="Crafted hospitality interior" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING IN VIETNAM */}
      <section id="manufacturing" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Globe2 className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.p variants={fadeIn} className="text-sm font-semibold tracking-wider text-accent uppercase mb-4 text-accent-foreground">
                {t("MfgEyebrow")}
              </motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-5xl font-heading font-medium leading-tight mb-8">
                {t("MfgTitle")}
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-primary-foreground/80 mb-10">
                {t("MfgDesc")}
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-6">
                {[
                  { title: t("MfgList1Title"), desc: t("MfgList1Desc"), icon: Factory },
                  { title: t("MfgList2Title"), desc: t("MfgList2Desc"), icon: Box },
                  { title: t("MfgList3Title"), desc: t("MfgList3Desc"), icon: ScanFace },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl bg-white/5 p-4"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image src="/assets/logo/manufacture_in_vn_2.png" alt="Manufacturing in Vietnam" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">{t("ProcessEyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
              {t("ProcessTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, title: t("Step1Title"), desc: t("Step1Desc"), icon: FileSignature },
              { id: 2, title: t("Step2Title"), desc: t("Step2Desc"), icon: Ruler },
              { id: 3, title: t("Step3Title"), desc: t("Step3Desc"), icon: HandMetal },
              { id: 4, title: t("Step4Title"), desc: t("Step4Desc"), icon: FlaskConical },
              { id: 5, title: t("Step5Title"), desc: t("Step5Desc"), icon: Factory },
              { id: 6, title: t("Step6Title"), desc: t("Step6Desc"), icon: SearchCheck },
              { id: 7, title: t("Step7Title"), desc: t("Step7Desc"), icon: Truck },
            ].map((step, i) => (
              <motion.article 
                key={step.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border border-border bg-background hover:border-accent transition-colors $`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-black text-muted-foreground/20">{step.id}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
