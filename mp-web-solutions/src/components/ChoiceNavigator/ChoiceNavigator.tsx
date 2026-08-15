import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const SOLUCIONES_BG = "/images/productos_bg.png";

const CONSULTING_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBibSgy1NiVPKdfi-mABluMZuFe67J0cen8kKeHqfDaeTHtzYoTiJnewqWPauNQZyZoAuyHjrCq6sMy47VRH0ZFBVGaDThV6fb6caVjrm9w8IJlf8rS4c3GK-2Qgmf2l3aq4863kHGwsdUhgeEs6cG0bl7mSZagw2_nMyfG3dUC3i2qfWJUqPcpP274iK0zu-2drPhmZ-7CbOEYUEz4F_k8Rh2tW4Fus8jnvpJsVGQqt5pOl0Y1-hZBBf0MWgnn6n6UTDMlvBzr7QY";

export default function ChoiceNavigator() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen min-h-[100dvh] w-full relative">

      {/* Left — Products */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex-1 w-full md:w-[60%] md:flex-none
                   flex items-center justify-center
                   p-10 md:p-20 md:pr-[15%]
                   overflow-hidden z-10 diagonal-split-left group bg-surface"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
          <img
            src={SOLUCIONES_BG}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-r from-surface/80 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md text-center md:text-left flex flex-col items-center md:items-start gap-6">

          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Soluciones web pre-diseñadas.
          </h1>
          <p className="text-tertiary text-base md:text-lg leading-relaxed">
            Soluciones instantáneas para escalar tu presencia digital.
          </p>
          <Link
            to="/soluciones"
            className="flex items-center gap-2 py-3 px-8 rounded-full text-sm font-semibold
                       border border-white/15 text-tertiary
                       hover:border-white/25 hover:text-white hover:bg-white/5
                       transition-all duration-200 active:scale-[0.98]
                       backdrop-blur-sm"
          >
            Ve las soluciones
            <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </motion.section>

      {/* Right — Consulting */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="relative flex-1 w-full md:w-[55%] md:flex-none md:-ml-[15%]
                   flex items-center justify-center
                   p-10 md:p-20 md:pl-[18%]
                   overflow-hidden z-0 diagonal-split-right group bg-background"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
          <img
            src={CONSULTING_BG}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-md text-center md:text-right flex flex-col items-center md:items-end gap-6">

          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Consultoría personalizada.
          </h2>
          <p className="text-tertiary text-base md:text-lg leading-relaxed">
            Diseño de sistemas desde 0 basados en tus necesidades específicas, con enfoque en automatización y escalabilidad.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 py-3 px-8 rounded-full text-sm font-semibold
                       bg-primary text-white hover:opacity-90 active:scale-[0.98]
                       transition-all duration-150
                       shadow-[0_0_30px_rgba(231,99,84,0.4)]"
          >
            Conoce el proceso
            <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </motion.section>

    </div>
  );
}
