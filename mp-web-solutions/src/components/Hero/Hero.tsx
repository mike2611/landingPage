import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "../../lib/animations";
import { opensInHttpTab, whatsappHref } from "../../lib/links";
import heroImage from "../../assets/web-solutions-bk.webp";

export default function Hero() {
  const wa = whatsappHref();
  const waNewTab = opensInHttpTab(wa);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background image — bleeds right, fades left */}
      <motion.div
        className="absolute inset-y-0 end-0 w-full lg:w-[60%] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="Vista de panel web MP Web Solutions"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeIn}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface/80"
          >
            MP WEB SOLUTIONS
          </motion.span>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
          >
            Soluciones web que convierten{" "}
            <span className="text-primary">visitas en clientes.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-tertiary max-w-lg font-light leading-relaxed mb-10"
          >
            Diseñamos experiencias digitales con precisión de arquitecto. Automatiza contactos y recibe mensajes directos por WhatsApp.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <a
              href={wa}
              {...(waNewTab
                ? { target: "_blank", rel: "noopener noreferrer" as const }
                : {})}
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden />
              Contáctanos por WhatsApp
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-colors duration-200 active:scale-[0.98]"
            >
              Ver Portafolio
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 right-6 md:right-16 z-20 p-6 md:p-7 glass-panel rounded-2xl max-w-[min(100vw-3rem,20rem)] md:max-w-[22rem] border border-tertiary/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <p className="text-xs text-primary font-black tracking-widest uppercase mb-1">
          Especialización
        </p>
        <p className="text-white text-sm font-medium leading-snug">
          Integración de IA en tiempo real (GenAI, Whisper, visión por computadora) en sistemas web escalables.
        </p>
      </motion.div>

    </section>
  );
}
