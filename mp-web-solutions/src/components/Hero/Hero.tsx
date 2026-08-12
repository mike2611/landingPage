import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { fadeIn, heroFadeIn, staggerContainer } from "../../lib/animations";

function HeroInlinePill({
  icon: Icon,
  label,
}: {
  icon: typeof Building2;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 align-middle rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 sm:px-3.5 sm:py-2 text-base sm:text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/85" aria-hidden />
      {label}
    </span>
  );
}

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState({}, "", "/");
    }
  };

  return (
    <section className="relative overflow-hidden -mt-24 pt-24 min-h-screen flex">
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
          className="relative flex w-full lg:w-full lg:justify-self-center min-h-[22rem] lg:h-[calc(100vh-18rem)] lg:min-h-0"
        >
          <div className="relative flex h-full w-full flex-col justify-between bg-surface/30 backdrop-blur-sm border border-white/10 rounded-[1.75rem] px-8 sm:px-10 lg:px-12 xl:px-14 py-10 lg:py-12 xl:py-14">
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
              Automatización con IA para <span className="italic font-bold">escalar tu Negocio</span>
            </motion.h1>

            <p className="text-base md:text-lg text-tertiary/90 font-light leading-relaxed">
              Elimino los cuellos de botella operativos mediante soluciones con IA para que tu equipo enfoque su energía en crecimiento, no en tareas manuales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 shrink-0" aria-hidden />
                Agenda tu consulta
              </Link>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 text-white/90 px-4 py-3.5 rounded-full font-semibold text-base hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                Ver Metodología
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
              </button>
            </div>
          </div>

          <div className="hidden lg:block shrink-0 pt-6 lg:pt-8 border-t border-white/10">
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white/55">
              Escala tu{" "}
              <HeroInlinePill icon={Building2} label="empresa" />
              {" "}sin comprometer{" "}
              <HeroInlinePill icon={ShieldCheck} label="seguridad" />
            </p>
          </div>
          </div>
        </motion.div>

        {/* Floating product card — Productos */}
        <motion.div
          variants={fadeIn}
          className="relative flex w-full lg:w-[96%] lg:justify-self-center lg:self-center min-h-[20rem] lg:h-[calc((100vh-18rem)*0.71)]"
        >
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-background p-6 sm:p-8 md:p-10 lg:p-12 aspect-auto lg:aspect-[689/410]">
            <img
              src="/images/bg_img_hero.png"
              alt=""
              className="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-none select-none"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 from-0% via-black/30 via-[32%] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background from-0% via-background via-[42%] to-background/55 to-[68%] to-background/20 to-[88%] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_88%_50%,rgba(231,99,84,0.08),transparent_55%)]"
              aria-hidden
            />

            <div className="relative z-10 flex flex-1 flex-col justify-center gap-5 lg:gap-6 max-w-[92%] sm:max-w-[85%] lg:max-w-[72%]">
              <div className="flex items-center gap-2.5" aria-hidden>
                <span className="w-2 h-2 rotate-45 bg-primary shadow-[0_0_8px_rgba(231,99,84,0.6)]" />
                <span className="w-2 h-2 rotate-45 bg-tertiary/70" />
                <span className="w-2 h-2 rotate-45 bg-white/20" />
              </div>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-snug text-balance">
                Plataformas Web y Automatización
              </h2>
              <p className="text-base md:text-lg text-tertiary/90 font-light leading-relaxed mt-4">
                Soluciones web integradas con automatización inteligente desde el día uno listas para escalar tu presencia digital.
              </p>
            </div>
            <Link
              to="/soluciones"
              className="relative z-10 mt-6 inline-flex shrink-0 items-center justify-center gap-2 self-start bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold hover:shadow-[0_0_30px_rgba(231,99,84,0.45)] transition-shadow duration-200 active:scale-[0.98]"
            >
              Ver Soluciones Rápidas
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
