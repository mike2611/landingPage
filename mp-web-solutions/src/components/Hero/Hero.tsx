import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { fadeIn, staggerContainer } from "../../lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-8 z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeIn}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface"
          >
            MP WEB SOLUTIONS
          </motion.span>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
          >
            Soluciones web que convierten <span className="text-primary">visitas en clientes.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-tertiary max-w-2xl font-light leading-relaxed mb-12"
          >
            Diseñamos experiencias digitales con precisión de arquitecto. Automatiza contactos y recibe mensajes directos por WhatsApp.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6">
            <button className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-all active:scale-95">
              <MessageSquare className="w-6 h-6" />
              Contáctanos por WhatsApp
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent border border-tertiary/30 text-tertiary px-8 py-5 rounded-lg font-bold text-lg hover:bg-tertiary/5 transition-all active:scale-95">
              Ver Portafolio
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] w-full bg-surface-high rounded-xl overflow-hidden shadow-2xl relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTEJjnAhdD2c5qhr7LtgkRWmoRvHooyn4PLfL7UND_CvNj6YdDPxP_SdHdQQ9Wrn2YVu1YTGjPori1QyxnruwO6KA2g4TLUWF6XYVcJtDBPSQ3MrZq_QsATlGIktdrVVu3bIN_joZRwqKvfQm0K378p0djhA57psuNcZW_Kc-P6S8FlH7ofx7akCcQScXXsUr2mjw5NpxFHyWBMBv22hzimyEz7dM8ZSi59remkpemxeiYOmvzYfkZ32md7wpEXMb3Yrc-b6HDFMDn"
              alt="Professional Architect"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-lg">
              <p className="text-xs text-primary font-black tracking-widest uppercase mb-1">Expertise</p>
              <p className="text-white font-medium">Conversion Optimization & SEO</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
