import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import BackLink from "../components/shared/BackLink";
import { staggerContainer } from "../lib/animations";
import { products, type Product } from "../config/products";

// ─── ProductCard ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative flex flex-col p-8 bg-surface rounded-2xl group
                 border border-white/5
                 hover:border-primary/25
                 hover:bg-surface-high
                 hover:shadow-[0_8px_32px_-8px_rgba(231,99,84,0.2)]
                 transition-colors duration-200"
    >
      {product.comingSoon && (
        <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold
                         bg-secondary-container text-tertiary px-2 py-0.5 rounded-full
                         tracking-widest uppercase">
          Coming Soon
        </span>
      )}

      {/* Icon */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-secondary-container group-hover:bg-tertiary/20
                        flex items-center justify-center shrink-0 transition-colors duration-200">
          <Icon
            className="w-7 h-7 text-primary group-hover:scale-110 group-hover:rotate-6
                       transition-transform duration-200"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
      </div>

      {/* Title + description */}
      <h3 className="text-xl font-bold font-heading tracking-tight mb-2 text-center">
        {product.title}
      </h3>
      <p className="text-tertiary text-sm leading-relaxed text-center mb-6">
        {product.description}
      </p>

      {/* Delivery time */}
      <div className="flex items-center justify-center gap-1.5 mb-6">
        <Clock className="w-3.5 h-3.5 text-tertiary/60" strokeWidth={1.75} aria-hidden />
        <span className="text-xs font-mono text-tertiary/60">{product.deliveryTime}</span>
      </div>

      {/* CTA */}
      {product.comingSoon ? (
        <button
          disabled
          className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold
                     bg-surface-high text-tertiary/40 cursor-not-allowed border border-white/5"
        >
          {product.cta}
        </button>
      ) : (
        <Link
          to={product.ctaHref}
          className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold text-center
                     bg-primary text-white hover:opacity-90 active:scale-[0.98]
                     transition-all duration-150 flex items-center justify-center gap-2"
        >
          {product.cta}
          <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden />
        </Link>
      )}
    </motion.div>
  );
}

// ─── Products Page ─────────────────────────────────────────────────────────────

export default function Products() {
  return (
    <section className="py-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">

        <BackLink to="/" label="Back to Home" />

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-black tracking-[0.35em] text-primary mb-4 uppercase">
            Growth Accelerators
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
            Ready-to-use Web Products
          </h1>
          <p className="text-tertiary text-lg max-w-xl leading-relaxed">
            Soluciones listas para escalar — entregadas en días, no meses.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
