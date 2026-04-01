"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Fallback check icon since the previous one was using a helper embedded in file
function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

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

export default function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <motion.p variants={fadeIn} className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
                {t("HeroEyebrow")}
              </motion.p>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl font-heading font-medium leading-[1.1] mb-6">
                {t("HeroTitle")}
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t("HeroDesc")}
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-8 mb-12">
                {[
                  { icon: Mail, label: "Email", value: "inquiries@furny.asia", href: "mailto:inquiries@furny.asia" },
                  { icon: Phone, label: "Phone", value: "+84 909 809755", href: "tel:+84909809755" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-4 items-center group">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <a href={item.href} className="text-lg font-medium hover:text-primary transition-colors">{item.value}</a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <h3 className="text-lg font-semibold font-heading mb-4">{t("IncludeTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent">•</span>
                    <span>{t("Inc1")}</span>
                  </li>
                  <li className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent">•</span>
                    <span>{t("Inc2")}</span>
                  </li>
                  <li className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent">•</span>
                    <span>{t("Inc3")}</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
               className="lg:col-span-7"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-black/5 border border-border p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
                <h2 className="text-2xl font-heading font-semibold mb-8">{t("FormTitle")}</h2>
                
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("FormSuccessTitle")}</h3>
                    <p className="text-muted-foreground">{t("FormSuccessDesc")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">{t("LblName")} <span className="text-red-500">*</span></label>
                        <input id="name" required className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">{t("LblEmail")} <span className="text-red-500">*</span></label>
                        <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">{t("LblCompany")}</label>
                        <input id="company" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">{t("LblLoc")}</label>
                        <input id="location" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">{t("LblService")}</label>
                        <select id="service" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                          <option>{t("OptSvc1")}</option>
                          <option>{t("OptSvc2")}</option>
                          <option>{t("OptSvc3")}</option>
                          <option>{t("OptSvc4")}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="timeline" className="text-sm font-medium">{t("LblTimeline")}</label>
                        <select id="timeline" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                          <option>{t("OptTime1")}</option>
                          <option>{t("OptTime2")}</option>
                          <option>{t("OptTime3")}</option>
                          <option>{t("OptTime4")}</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">{t("LblMsg")} <span className="text-red-500">*</span></label>
                      <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {status === "submitting" ? t("BtnSending") : t("BtnSend")}
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
