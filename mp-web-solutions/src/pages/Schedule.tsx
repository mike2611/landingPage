import { motion } from "motion/react";
import { fadeIn, heroFadeIn, staggerContainer } from "../lib/animations";
import CalendlyEmbed from "../components/Calendly/CalendlyEmbed";

export default function Schedule() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span
            variants={heroFadeIn}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface/80"
          >
            AGENDAR CONSULTA
          </motion.span>
          <motion.h1
            variants={heroFadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Agenda tu{" "}
            <span className="text-primary">consulta gratuita</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-tertiary font-light leading-relaxed"
          >
            Agenda un espacio.
            Platicamos 15 minutos sobre lo que necesitas y cómo puedo ayudarte.
          </motion.p>
        </motion.div>
      </section>

      {/* Calendly embed */}
      <section className="pb-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <CalendlyEmbed />
        </motion.div>
      </section>
    </>
  );
}
