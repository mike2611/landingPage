import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { fadeIn, heroFadeIn, staggerContainer } from "../../lib/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden -mt-24 pt-24 min-h-screen flex">
      {/* Left zone — dot grid (fades into photo at the seam) */}
      <div
        className="hero-dot-grid pointer-events-none absolute inset-y-0 left-0 z-[1] w-full"
        aria-hidden
      />

      {/* Right zone — photo bleeds into dot grid */}
      <div className="hero-photo-layer pointer-events-none absolute inset-x-0 top-[34%] bottom-0 z-0 overflow-hidden lg:inset-y-0">
        <img
          src="/images/bg_img_pepper4.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          width={1705}
          height={891}
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-[55%_center] opacity-90"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-transparent lg:from-background lg:via-background/20 lg:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_50%,var(--color-background)_0%,transparent_55%)] opacity-90 lg:opacity-100"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/25"
          aria-hidden
        />
      </div>

      {/* ── Foreground content ───────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 lg:gap-10 px-6 sm:px-10 lg:px-16 py-10 min-h-[calc(100vh-6rem)] lg:content-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Floating panel — Consultoría */}
        <motion.div
          variants={fadeIn}
          className="relative flex w-full lg:w-full lg:justify-self-center min-h-[22rem] flex-col justify-between bg-surface/30 backdrop-blur-sm border border-white/10 rounded-[1.75rem] px-8 sm:px-10 lg:px-12 xl:px-14 py-10 lg:h-[calc(100vh-18rem)] lg:min-h-0 lg:py-12 xl:py-14 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)]"
        >
          <div className="flex flex-1 flex-col justify-center gap-6 sm:gap-7 lg:gap-8">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30" />
            </div>

            <motion.h1
              variants={heroFadeIn}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white tracking-tight text-balance leading-[1.08]"
            >
              Sistemas de automatización para{" "}
              <span className="italic font-bold text-white">escalar tu negocio</span>.
            </motion.h1>

            <p className="text-base md:text-lg text-tertiary font-light leading-relaxed">
              Diseño sistemas digitales que eliminan cuellos de botella y
              convierten visitas en clientes — desde tu web hasta el seguimiento
              automatizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 shrink-0" aria-hidden />
                Agenda tu consulta
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 text-white/90 px-4 py-3.5 rounded-full font-semibold text-base hover:text-primary transition-colors duration-200"
              >
                Ver Portafolio
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="shrink-0 pt-6 lg:pt-8 border-t border-white/10">
            <p className="text-[11px] font-bold tracking-[0.28em] text-white/40 uppercase">
              Confiado por equipos que escalan en serio
            </p>
          </div>
        </motion.div>

        {/* Floating product card — Productos */}
        <motion.div
          variants={fadeIn}
          className="flex w-full lg:w-[96%] lg:justify-self-center lg:self-center lg:h-[calc((100vh-18rem)*0.71)]"
        >
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10 lg:p-12 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] aspect-[689/410] lg:aspect-auto">
            <div
              className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(110deg,transparent_38%,rgba(0,0,0,0.03)_50%,transparent_62%)]"
              aria-hidden
            />

            <div className="relative z-10 flex flex-1 flex-col justify-center gap-5 lg:gap-6">
              <div className="flex items-center gap-2.5" aria-hidden>
                <span className="w-2 h-2 rotate-45 bg-primary" />
                <span className="w-2 h-2 rotate-45 bg-secondary-container" />
                <span className="w-2 h-2 rotate-45 bg-background/30" />
              </div>
              <p className="text-xs lg:text-sm font-bold tracking-[0.28em] text-primary uppercase">
                Productos web pre-diseñados
              </p>
              <h2 className="text-background text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-snug">
                Soluciones web listas para  escalar tu presencia digital.
              </h2>
            </div>
            <Link
              to="/products"
              className="relative z-10 mt-6 inline-flex shrink-0 items-center justify-center gap-2 self-start bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold hover:shadow-[0_0_30px_rgba(231,99,84,0.45)] transition-shadow duration-200 active:scale-[0.98]"
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
