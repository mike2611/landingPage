import { motion } from "motion/react";
import { Bot, Gauge, ScanEye, Workflow, type LucideIcon } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/animations";
import cattleVideo from "../assets/bg-card-cattle.mp4";

type Project = {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  extra?: string;
  stack: string[];
  metric?: { value: string; label: string };
  colSpan: string;
  dotGrid?: boolean;
  video?: string;
};

const projects: Project[] = [
  {
    icon: Bot,
    tag: "AI & Multimedia",
    title: "Orquestación de Medios AI",
    desc: "Arquitectura asíncrona que coordina múltiples modelos de lenguaje y visión para generar contenido de alta fidelidad. Un flujo de trabajo agentic que transforma prompts en activos visuales profesionales en segundos.",
    stack: ["FastAPI", "Groq", "Replicate", "AWS"],
    colSpan: "lg:col-span-2",
    dotGrid: true,
  },
  {
    icon: Gauge,
    tag: "Performance",
    title: "Ingeniería de Carga Instantánea",
    desc: "Mientras el estándar carga en 5 segundos, nuestra arquitectura entrega experiencias en menos de 1 segundo. Cero fricción, máxima retención.",
    stack: ["Vite", "React 19", "Tailwind 4"],
    metric: { value: "99+", label: "Lighthouse Score · Zero CLS" },
    colSpan: "lg:col-span-1",
  },
  {
    icon: ScanEye,
    tag: "Computer Vision",
    title: "Visión Artificial Agroindustrial",
    desc: "Agente inteligente para el monitoreo preventivo de ganado. Implementación de modelos YOLO para la detección de patrones de alimentación y comportamiento en tiempo real, optimizando la salud animal en el sector Laguna.",
    stack: ["Python", "YOLO", "Cloud Storage"],
    colSpan: "lg:col-span-1",
    video: cattleVideo,
  },
  {
    icon: Workflow,
    tag: "Process Automation",
    title: "Infraestructura en Piloto Automático",
    desc: "Eliminamos el cuello de botella manual de tu negocio. Diseñamos flujos que conectan tu sitio web directamente con tu WhatsApp y CRM, asegurando que ningún lead se pierda y que tu equipo se enfoque solo en cerrar ventas.",
    extra: "Sistemas autogestionables que reducen el error humano en un 80%.",
    stack: ["n8n", "Webhooks", "WhatsApp API"],
    colSpan: "lg:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section className="min-h-[80vh] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface">
            MP WEB SOLUTIONS
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Portafolio
          </h1>
          <p className="text-xl text-tertiary max-w-2xl font-light leading-relaxed">
            Arquitectura de precisión. Cada proyecto resuelve un problema real de negocio.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                variants={fadeIn}
                className={[
                  "group relative overflow-hidden flex flex-col gap-6 p-8 md:p-10 rounded-2xl border border-border",
                  project.video
                    ? "hover:border-white/20 transition-colors duration-300"
                    : "bg-surface hover:bg-surface-high hover:border-white/15 transition-colors duration-200",
                  project.dotGrid
                    ? "bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
                    : "",
                  project.colSpan,
                ].join(" ")}
              >
                {/* Video background — subtle cinematic layer */}
                {project.video && (
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-surface/[0.82] group-hover:bg-surface/[0.68] transition-colors duration-500" />
                  </div>
                )}

                {/* Top row: icon + tag */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-tertiary/70 border border-border px-3 py-1 rounded-full whitespace-nowrap">
                    {project.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="relative z-10 flex flex-col gap-3 flex-1">
                  <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h2>
                  <p className="text-tertiary text-sm md:text-[0.9375rem] leading-relaxed">
                    {project.desc}
                  </p>
                  {project.extra && (
                    <p className="text-primary text-xs font-semibold tracking-wide mt-1">
                      — {project.extra}
                    </p>
                  )}
                </div>

                {/* Footer: metric or stack pills */}
                <div className="relative z-10 border-t border-border pt-5 mt-auto">
                  {project.metric ? (
                    <div>
                      <p className="font-heading font-extrabold text-4xl text-primary leading-none mb-1">
                        {project.metric.value}
                      </p>
                      <p className="text-tertiary text-xs tracking-widest uppercase">
                        {project.metric.label}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-tertiary/80 bg-secondary-container/60 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
