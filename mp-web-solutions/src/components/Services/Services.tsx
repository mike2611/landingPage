import { motion } from "motion/react";
import { Brain, Zap, MessageCircle, type LucideIcon } from "lucide-react";
import { staggerContainer } from "../../lib/animations";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string;
};

const services: Service[] = [
  {
    icon: Brain,
    title: "Experiencias de Alto Rendimiento que Convierten",
    desc: "Interfaces rápidas y optimizadas que convierten visitas en clientes.",
    detail: "Velocidad de carga en segundos · Lighthouse 99+",
  },
  {
    icon: Zap,
    title: "Seguridad y Estabilidad de Escala Global",
    desc: "Tu presencia respaldada por la misma tecnología que utilizan empresas internacionales.",
    detail: "99.9% uptime garantizado · Arquitectura AWS",
  },
  {
    icon: MessageCircle,
    title: "Tu Negocio en Piloto Automático",
    desc: "Transformamos procesos manuales en sistemas inteligentes que trabajan para ti.",
    detail: "Leads directo a tu WhatsApp · Sin intermediarios",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-low" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-black tracking-[0.35em] max-sm:tracking-[0.28em] uppercase text-primary mb-4">
              El Proceso
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Metodología de Precisión
            </h2>
          </motion.div>
          <motion.p
            className="text-tertiary max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            No solo creamos sitios; construimos infraestructuras digitales
            diseñadas para el crecimiento sostenido y la captura de leads.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col p-8 md:p-10 bg-surface rounded-2xl group cursor-pointer
                           border border-white/5
                           hover:border-primary/25
                           hover:bg-surface-high
                           hover:shadow-[0_8px_32px_-8px_rgba(231,99,84,0.2)]
                           transition-colors duration-200"
              >
                {/* Icon */}
                <div className="flex justify-center items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-secondary-container group-hover:bg-tertiary/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <Icon
                      className="w-7 h-7 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Default desc */}
                <p className="text-tertiary text-sm md:text-[0.9375rem] leading-relaxed">
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
