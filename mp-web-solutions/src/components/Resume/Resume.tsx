import { motion } from "motion/react";
import { CheckCircle2, FileText } from "lucide-react";

const highlights = [
  "Estrategias avanzadas de SEO para posicionamiento global.",
  "Desarrollo Frontend con enfoque en rendimiento y accesibilidad."
];

export default function Resume() {
  return (
    <section className="py-32 px-6 md:px-12 overflow-hidden" id="resume">
      <div className="max-w-7xl mx-auto bg-surface-high rounded-3xl p-8 md:p-20 relative border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">MP Web Solutions Resume</h2>
            <p className="text-tertiary text-xl mb-12 leading-relaxed font-light">
              Más de <span className="text-white font-bold">8 años de experiencia</span> transformando visiones comerciales en realidades técnicas. Especialistas en Next.js, React, SEO técnico y optimización de conversión (CRO).
            </p>
            <ul className="space-y-6 mb-12">
              {highlights.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-tertiary text-lg">{text}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-4 bg-tertiary/10 border border-tertiary/30 text-white px-8 py-5 rounded-lg hover:bg-tertiary/20 transition-all font-bold group">
              <FileText className="group-hover:rotate-12 transition-transform" />
              Descargar MP Web Solutions Resume
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative bg-surface rounded-2xl p-8 border border-white/5 shadow-2xl font-mono text-sm">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="space-y-2">
                <p className="text-tertiary"><span className="text-primary">const</span> solution = {"{"}</p>
                <p className="pl-4 text-tertiary">agency: <span className="text-primary">"MP Web Solutions"</span>,</p>
                <p className="pl-4 text-tertiary">experience: <span className="text-primary">"8+ years"</span>,</p>
                <p className="pl-4 text-tertiary">stack: [<span className="text-primary">"Next.js", "React", "Node"</span>],</p>
                <p className="pl-4 text-tertiary">focus: <span className="text-primary">"Conversion Optimization"</span></p>
                <p className="text-tertiary">{"};"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
