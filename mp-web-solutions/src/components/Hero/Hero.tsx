import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { fadeIn, heroFadeIn, staggerContainer } from "../../lib/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden -mt-24 pt-24 min-h-screen flex">
      {/* Full-width hero background (21:9) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg_hero_2.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          width={3024}
          height={1296}
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[45%_center]"
        />
      </div>

      {/* ── Foreground content ───────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] items-center lg:items-stretch gap-8 lg:gap-12 px-6 sm:px-10 lg:px-16 py-12 min-h-[calc(100vh-6rem)]"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Floating panel — Consultoría */}
        <motion.div
          variants={fadeIn}
          className="relative flex w-full min-h-[28rem] flex-col justify-between bg-surface border border-white/10 rounded-[1.75rem] px-10 sm:px-14 lg:px-16 xl:px-20 py-16 lg:min-h-[calc(100vh-11rem)] lg:py-20 xl:py-24 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] lg:max-w-none"
        >
          <div className="flex flex-1 flex-col justify-center gap-8 sm:gap-9 lg:gap-10 xl:gap-12">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30" />
            </div>

            <motion.h1
              variants={heroFadeIn}
              className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.06] xl:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight text-balance"
            >
              Sistemas de automatización para{" "}
              <span className="italic font-bold text-white">escalar tu negocio</span>.
            </motion.h1>

            <p className="text-base md:text-lg lg:text-xl text-tertiary font-light leading-relaxed lg:leading-relaxed">
              Diseño sistemas digitales que eliminan cuellos de botella y
              convierten visitas en clientes — desde tu web hasta el seguimiento
              automatizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 lg:px-9 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" aria-hidden />
                Agenda tu consulta
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 text-white/90 px-5 py-4 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:text-primary transition-colors duration-200"
              >
                Ver Portafolio
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="shrink-0 pt-8 lg:pt-10 border-t border-white/10">
            <p className="text-[11px] font-bold tracking-[0.28em] text-white/40 uppercase">
              Confiado por equipos que escalan en serio
            </p>
          </div>
        </motion.div>

        {/* Floating product card — Productos */}
        <motion.div
          variants={fadeIn}
          className="lg:justify-self-end lg:self-end w-full"
        >
          <div className="glass-panel rounded-3xl border border-white/15 p-10 md:p-12 lg:p-14 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.75)]">
            <div className="flex items-center gap-2.5 mb-5" aria-hidden>
              <span className="w-2 h-2 rotate-45 bg-tertiary/50" />
              <span className="w-2 h-2 rotate-45 bg-tertiary/30" />
              <span className="w-2 h-2 rotate-45 bg-primary" />
            </div>
            <p className="text-xs lg:text-sm font-bold tracking-[0.28em] text-white/60 uppercase mb-4">
              Productos
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-snug mb-4">
              Soluciones web listas para lanzar
            </h2>
            <p className="text-base md:text-lg text-tertiary leading-relaxed mb-8">
              Activos digitales pre-diseñados para escalar tu presencia sin
              esperar meses.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
            >
              Ver los productos
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
