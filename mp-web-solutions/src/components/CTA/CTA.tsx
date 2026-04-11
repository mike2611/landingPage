import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { opensInHttpTab, whatsappHref } from "../../lib/links";

export default function CTA() {
  const wa = whatsappHref();
  const waNewTab = opensInHttpTab(wa);

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ChevronRight className="inline-block text-primary w-12 h-12 md:w-20 md:h-20 align-middle" aria-hidden />{" "}
          Haz crecer tu negocio con una <br className="hidden md:block" /> página web profesional
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.25 }}
        >
          <a
            href={wa}
            {...(waNewTab
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {})}
            className="inline-flex items-center justify-center bg-primary text-white px-12 py-6 rounded-lg text-xl font-bold hover:shadow-[0_20px_60px_rgba(231,99,84,0.3)] transition-shadow duration-200 active:scale-[0.98]"
          >
            Comienza tu Proyecto
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
    </section>
  );
}
