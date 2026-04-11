import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText } from "lucide-react";
import { resumeDownloadHref } from "../../lib/links";

const highlights = [
  "Experiencia liderando desarrollo en plataformas financieras donde seguridad, precisión y velocidad son innegociables.",
  "Construcción de soluciones con estándares empresariales, enfocadas en escalabilidad y rendimiento.",
];

export default function Resume() {
  const resumePdf = resumeDownloadHref();

  return (
    <section className="py-32 px-6 md:px-12 overflow-hidden" id="resume">
      <div className="max-w-7xl mx-auto bg-surface-high rounded-3xl p-8 md:p-20 relative border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold mb-5">Líder Técnico & Arquitecto de Software</h2>

            <ul className="space-y-6 mb-12">
              {highlights.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-tertiary text-lg">{text}</span>
                </li>
              ))}
            </ul>
            {resumePdf ? (
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-tertiary/10 border border-tertiary/30 text-white px-8 py-5 rounded-lg hover:bg-tertiary/20 transition-colors duration-200 font-bold group"
              >
                <FileText className="group-hover:rotate-12 transition-transform duration-200" aria-hidden />
                Descargar CV (PDF)
              </a>
            ) : (
              <Link
                to="/#resume"
                className="inline-flex items-center gap-4 bg-tertiary/10 border border-tertiary/30 text-white px-8 py-5 rounded-lg hover:bg-tertiary/20 transition-colors duration-200 font-bold group"
              >
                <FileText className="group-hover:rotate-12 transition-transform duration-200" aria-hidden />
                Ver trayectoria
              </Link>
            )}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative bg-surface rounded-2xl p-8 border border-border shadow-2xl font-mono text-sm">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-primary">{">"} whoami</p>
                  <p className="text-white mt-1">Miguel &mdash; Tech Lead / Architect</p>
                </div>
                <div>
                  <p className="text-primary">{">"} skills</p>
                  <p className="text-tertiary mt-1">Cloud: <span className="text-white">AWS, Azure</span></p>
                  <p className="text-tertiary">Frontend: <span className="text-white">React, Angular</span></p>
                  <p className="text-tertiary">AI: <span className="text-white">Video pipelines</span></p>
                </div>
                <div>
                  <p className="text-primary">{">"} experience</p>
                  <p className="text-white mt-1">5+ años construyendo sistemas fintech</p>
                </div>
                <p className="text-primary animate-pulse">▊</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
