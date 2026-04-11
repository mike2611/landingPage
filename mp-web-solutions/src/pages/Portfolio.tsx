import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <section className="min-h-[80vh] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase text-tertiary border border-tertiary/20 bg-surface">
            MP WEB SOLUTIONS
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Portafolio
          </h1>
          <p className="text-xl text-tertiary max-w-2xl font-light leading-relaxed">
            Proyectos diseñados con precisión para convertir visitas en clientes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Project cards go here */}
          <div className="aspect-video bg-surface rounded-xl border border-border flex items-center justify-center">
            <span className="text-tertiary/40 text-sm font-medium tracking-widest uppercase">Próximamente</span>
          </div>
          <div className="aspect-video bg-surface rounded-xl border border-border flex items-center justify-center">
            <span className="text-tertiary/40 text-sm font-medium tracking-widest uppercase">Próximamente</span>
          </div>
          <div className="aspect-video bg-surface rounded-xl border border-border flex items-center justify-center">
            <span className="text-tertiary/40 text-sm font-medium tracking-widest uppercase">Próximamente</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
