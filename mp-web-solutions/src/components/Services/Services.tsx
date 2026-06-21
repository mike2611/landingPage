import { motion } from "motion/react";
import { staggerContainer } from "../../lib/animations";

type Service = {
  title: string;
  desc: string;
  detail: string;
};

const services: Service[] = [
  {
    title: "Tu Negocio en Piloto Automático",
    desc: "Audito los procesos de tu negocio para identificar cuellos de botella reales y determinar qué automatizar y qué no.",
    detail: "Flujos de trabajo automatizados.",
  },
  {
    title: "Experiencias Digitales de Alto Rendimiento",
    desc: "Diseño interfaces rápidas y optimizadas que mejoran la experiencia y la conversión.",
    detail: "Velocidad de carga en segundos.",
  },
  {
    title: "Seguridad y Estabilidad a Escala Global",
    desc: "Tu presencia respaldada por la misma tecnología que utilizan empresas internacionales. Infraestructura en la nube para escalabilidad y disponibilidad.",
    detail: "Hasta 99.9% de uptime. AWS",
  },
];

const markerColors = [
  "bg-primary",
  "bg-tertiary/60",
  "bg-tertiary/30",
] as const;

function ServiceCardMarker({ count }: { count: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2 mb-4" aria-hidden>
      {markerColors.slice(0, count).map((color, i) => (
        <span key={i} className={`w-2 h-2 shrink-0 rounded-full ${color}`} />
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-10 md:py-24 lg:py-32 px-6 md:px-12 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-black tracking-[0.35em] max-sm:tracking-[0.28em] text-primary mb-4">
              El Proceso
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Metodología de Precisión
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col items-start text-left h-full bg-surface-high rounded-[1.75rem] group cursor-pointer
                           border border-tertiary/10  backdrop-blur-sm
                           hover:border-primary/10
                           hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85),0_12px_40px_-8px_rgba(231,99,84,0.35)]
                           px-8 sm:px-10 lg:px-12 xl:px-14 py-10 lg:py-12 xl:py-14
                           transition-[box-shadow] duration-200"
              >

                <ServiceCardMarker count={(i + 1) as 1 | 2 | 3} />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Default desc */}
                <p className="text-tertiary text-sm md:text-[1rem] leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover reveal */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-300 ease-out">
                  <p className="text-tertiary text-xs font-mono font-medium mt-4 pt-4 border-t border-primary/20">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
