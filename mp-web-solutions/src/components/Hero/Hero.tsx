import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "../../lib/animations";
import heroImage from "../../assets/web-solutions-bk.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background image — bleeds right, fades left */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="MP Web Solutions Dashboard Preview"
          className="w-full h-full object-cover object-left"
        />
        {/* Fade from background on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        {/* Fade from background on the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        {/* Subtle top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeIn}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface/80"
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
            <button className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" />
              Contáctanos por WhatsApp
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-all active:scale-95">
              Ver Portafolio
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating expertise card — bottom right */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-16 z-20 p-6 md:p-7 glass-panel rounded-2xl max-w-[min(100vw-3rem,20rem)] md:max-w-[22rem] border border-tertiary/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="font-heading text-[0.65rem] text-tertiary/80 font-semibold tracking-[0.22em] uppercase mb-3">
          Especialidad
        </p>
        <p className="font-heading text-[0.95rem] md:text-base text-white/95 font-semibold leading-snug tracking-tight">
          Ingeniería de Ventas Digitales y{" "}
          <span className="text-primary font-semibold">SEO Local</span>
        </p>
      </motion.div>

    </section>
  );
}
