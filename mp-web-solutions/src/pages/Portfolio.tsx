import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bot, Gauge, ScanEye, Workflow, type LucideIcon } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/animations";
import cattleVideo from "../assets/bg-card-cattle.mp4";
import aiGenVideo from "../assets/bg-video-gen.mp4";
import posterCattle from "../assets/poster-cattle.webp";
import posterVideoGen from "../assets/poster-video-gen.webp";
import bgAutomation from "../assets/bg-aut.webp";
import bgLighthouse from "../assets/bg-light.png";

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
  poster?: string;
  image?: string;
};

const projects: Project[] = [
  {
    icon: Gauge,
    tag: "Performance",
    title: "Ingeniería enfocada en rendimiento",
    desc: "Arquitecturas optimizadas para tiempos de carga rápidos y una experiencia fluida desde el primer acceso.",
    stack: ["Vite", "React", "Tailwind"],
    colSpan: "lg:col-span-1 lg:col-start-3 lg:row-start-1",
    image: bgLighthouse,
  },
  {
    icon: Bot,
    tag: "AI & Multimedia",
    title: "Orquestación de Medios AI",
    desc: "Generación automatizada de contenido visual con múltiples modelos. Producción en segundos, no minutos.",
    stack: ["FastAPI", "Groq", "Replicate"],
    colSpan: "lg:col-span-2 lg:col-start-1 lg:row-start-1",
    video: aiGenVideo,
    poster: posterVideoGen,
  },
  {
    icon: ScanEye,
    tag: "Computer Vision",
    title: "Visión Artificial Agroindustrial",
    desc: "Monitoreo de ganado en tiempo real con modelos YOLO. Detección automática de patrones y comportamiento.",
    stack: ["Python", "YOLO", "Cloud Storage"],
    colSpan: "lg:col-span-1",
    video: cattleVideo,
    poster: posterCattle,
  },
  {
    icon: Workflow,
    tag: "Process Automation",
    title: "Infraestructura en Piloto Automático",
    desc: "Automatización de flujos conectados a WhatsApp y web. Captura y gestión de leads sin intervención manual.",
    extra: "Sistemas autogestionables.",
    stack: ["Webhooks", "WhatsApp API"],
    colSpan: "lg:col-span-2",
    image: bgAutomation,
  },
];

// Loads & plays video only on hover; shows a poster image before first play.
function HoverVideo({ src, poster, playing }: { src: string; poster?: string; playing: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Inject <source> on first hover
  useEffect(() => {
    if (playing && !loaded) setLoaded(true);
  }, [playing, loaded]);

  // Play / pause driven by parent hover state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loaded) return;
    if (playing) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [playing, loaded]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {/* Poster image — always visible behind the video */}
      {poster && (
        <img
          src={poster}
          alt=""
          width={800}
          height={534}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.07] transition-transform duration-700 ease-out"
        />
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={[
          "absolute inset-0 w-full h-full object-cover",
          "scale-100 group-hover:scale-[1.07] transition-[transform,opacity] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        {loaded && <source src={src} type="video/mp4" />}
      </video>
      <div className="absolute inset-0 bg-surface/[0.82] group-hover:bg-surface/[0.68] transition-colors duration-500" />
    </div>
  );
}

function CardImageBg({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      <img
        src={src}
        alt=""
        width={800}
        height={534}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.07] transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-surface/[0.82] group-hover:bg-surface/[0.68] transition-colors duration-500" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.article
      variants={fadeIn}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group relative overflow-hidden flex flex-col gap-6 p-8 md:p-10 rounded-2xl border border-border bg-surface",
        project.video || project.image
          ? "hover:border-white/20 transition-colors duration-300"
          : "hover:bg-surface-high hover:border-white/15 transition-colors duration-200",
        project.dotGrid
          ? "bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
          : "",
        project.colSpan,
      ].join(" ")}
    >
      {/* Media background */}
      {project.video ? (
        <HoverVideo src={project.video} poster={project.poster} playing={hovered} />
      ) : project.image ? (
        <CardImageBg src={project.image} />
      ) : null}

      {/* Top row: icon + tag */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} aria-hidden />
        </div>
        <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-tertiary border border-tertiary/25 bg-tertiary/10 px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
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
}

export default function Portfolio() {
  return (
    <section className="min-h-[80vh] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20"
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
