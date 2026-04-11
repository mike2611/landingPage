import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText } from "lucide-react";
import { resumeDownloadHref } from "../../lib/links";

const highlights = [
  "Experiencia liderando desarrollo en plataformas financieras donde seguridad, precisión y velocidad son innegociables.",
  "Construcción de soluciones con estándares empresariales, enfocadas en escalabilidad y rendimiento.",
];

const stackLayers = [
  { label: "Frontend", items: ["React", "Angular", "TypeScript"] },
  { label: "Cloud", items: ["AWS", "Azure"] },
  { label: "AI / ML", items: ["Video Pipelines"] },
  { label: "Sistemas", items: ["Fintech", "Banking"] },
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
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" aria-hidden />
                  <span className="text-tertiary text-lg">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <div className="btn-gradient-border group">
                {resumePdf ? (
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-surface-high text-white px-8 py-5 rounded-[7px] hover:bg-surface transition-colors duration-200 font-bold"
                  >
                    <FileText className="group-hover:rotate-12 transition-transform duration-200" aria-hidden />
                    Descargar CV (PDF)
                  </a>
                ) : (
                  <Link
                    to="/#resume"
                    className="inline-flex items-center gap-4 bg-surface-high text-white px-8 py-5 rounded-[7px] hover:bg-surface transition-colors duration-200 font-bold"
                  >
                    <FileText className="group-hover:rotate-12 transition-transform duration-200" aria-hidden />
                    Ver trayectoria
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative space-y-3">
              <p className="text-xs font-mono text-tertiary uppercase tracking-widest mb-6">Arquitectura Técnica</p>
              {stackLayers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-4 shadow-lg"
                >
                  <span className="text-xs font-mono text-primary w-20 shrink-0">{layer.label}</span>
                  <div className="w-px h-4 bg-border shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-primary/10 text-white border border-primary/20 px-3 py-1 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stackLayers.length * 0.1, duration: 0.3 }}
                className="flex items-center gap-4 bg-primary/10 border border-primary/30 rounded-xl px-5 py-4"
              >
                <span className="text-xs font-mono text-primary w-20 shrink-0">Exp.</span>
                <div className="w-px h-4 bg-primary/30 shrink-0" />
                <span className="text-sm text-white font-medium">5+ años · Enterprise Grade</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
