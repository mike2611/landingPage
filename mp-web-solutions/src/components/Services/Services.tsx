import { motion } from "motion/react";
import { Brain, Zap, MessageCircle, Cloud, Settings2, type LucideIcon } from "lucide-react";
import { fadeIn, staggerContainer } from "../../lib/animations";

const services: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Brain,
    title: "Experiencias de Alto Rendimiento que Convierten",
    desc: "Combinamos psicología del consumidor con ingeniería de vanguardia. No solo creamos interfaces modernas y elegantes; construimos infraestructuras de carga instantánea (compruébalo navegando este sitio). Eliminamos la fricción desde el primer clic para asegurar que cada visita se transforme en un cliente potencial.",
  },
  {
    icon: Zap,
    title: "Seguridad y Estabilidad de Escala Global",
    desc: "Tu presencia digital respaldada por la misma tecnología que utilizan las empresas más grandes del mundo. Implementamos arquitectura en la nube (AWS) para garantizar hasta un 99.9% de disponibilidad. Un sitio robusto, escalable y siempre en línea para que tú te enfoques solo en crecer.",
  },
  {
    icon: MessageCircle,
    title: "Tu Negocio en Piloto Automático",
    desc: "Transformamos procesos manuales en sistemas inteligentes que trabajan por ti. Implementamos flujos de captura que conectan directamente con tu WhatsApp, permitiéndote recibir leads calificados y automatizar el llenado de formularios. Tu sitio deja de ser un folleto para convertirse en tu mejor vendedor, activo las 24 horas.",
  }
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
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-primary mb-4">
              El Proceso
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Metodología de Precisión
            </h3>
            <h2 className="text-sm font-black tracking-[0.35em] max-sm:tracking-[0.28em] uppercase text-primary mb-4">
              El Proceso
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Metodología de Precisión</h3>
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
                variants={fadeIn}
                className="flex flex-col p-8 md:p-10 bg-surface rounded-2xl group hover:bg-surface-high transition-all duration-500 border border-white/5 hover:border-white/10"
              > 
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-center items-center">
                 <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-8 shrink-0 group-hover:scale-105 transition-transform duration-500">
                   <Icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
                 </div>
                </div>
                <h4 className="text-xl md:text-2xl font-bold font-heading tracking-tight mb-5">
                  {item.title}
                </h4>
                <p className="text-tertiary font-sanstext-sm md:text-[0.9375rem] leading-relaxed mt-auto">
                  {item.desc}
                </p>
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="p-10 bg-surface rounded-xl group hover:bg-surface-high transition-colors duration-200 border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
                
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
