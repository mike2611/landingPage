import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ChevronRight className="inline-block text-primary w-12 h-12 md:w-20 md:h-20" /> Haz crecer tu negocio con una <br className="hidden md:block" /> página web profesional
        </motion.h2>
        <motion.button
          className="bg-primary text-white px-12 py-6 rounded-lg text-xl font-bold hover:shadow-[0_20px_60px_rgba(231,99,84,0.3)] transition-all active:scale-95"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Comienza tu Proyecto
        </motion.button>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
    </section>
  );
}
