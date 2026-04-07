import { motion } from "motion/react";
import { Target, Code2, Smartphone } from "lucide-react";
import { fadeIn, staggerContainer } from "../../lib/animations";

const services = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Diseño Estratégico",
    desc: "Arquitectura de información orientada a objetivos comerciales y psicología de usuario."
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Desarrollo de Precisión",
    desc: "Código limpio y escalable utilizando Next.js and React para una velocidad de carga instantánea."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Automatización & WhatsApp",
    desc: "Integración directa de canales de comunicación para maximizar la tasa de contacto inmediato."
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
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-primary mb-4">El Proceso</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Metodología de Precisión</h3>
          </motion.div>
          <motion.p
            className="text-tertiary max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            No solo creamos sitios; construimos infraestructuras digitales diseñadas para el crecimiento sostenido y la captura de leads.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="p-10 bg-surface rounded-xl group hover:bg-surface-high transition-all duration-500 border border-white/5"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-tertiary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
