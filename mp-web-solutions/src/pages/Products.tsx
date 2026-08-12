import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import BackLink from "../components/shared/BackLink";
import { fadeIn, staggerContainer } from "../lib/animations";
import { products, type Product } from "../config/products";

// ─── ProductPanel ─────────────────────────────────────────────────────────────

function ProductPanel({ product }: { product: Product }) {
  const Icon = product.icon;
  const featured = product.featured;

  return (
    <motion.div
      variants={fadeIn}
      className={`relative flex flex-col rounded-[1.75rem] border backdrop-blur-xs overflow-hidden group
                  px-8 sm:px-10 lg:px-12 xl:px-14 py-12 lg:py-22 xl:py-16
                  transition-colors duration-200
                  ${featured
                    ? "border-primary/25 bg-surface/50"
                    : "border-white/10 bg-surface/50 hover:border-white/20"
                  }`}
    >
      {/* Featured glow — muted white */}
      {featured ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative z-10 flex h-full flex-col">
        {/* Dot indicator — round for standard, diamond for featured */}
        <div className="flex items-center justify-between mb-8">
          {featured ? (
            <div className="flex items-center gap-2" aria-hidden>
              <span className="w-2 h-2 rotate-45 bg-primary shadow-[0_0_8px_rgba(231,99,84,0.6)]" />
              <span className="w-2 h-2 rotate-45 bg-tertiary/70" />
              <span className="w-2 h-2 rotate-45 bg-white/20" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary/30" />
            </div>
          )}
          {product.badge ? (
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary border border-primary/30 bg-primary/10 px-3 py-1.5 rounded-full">
              {product.badge}
            </span>
          ) : (
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase px-3 py-1.5 rounded-full invisible" aria-hidden>M</span>
          )}
        </div>

        {/* Icons — centered, white */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {product.extraIcons?.map((ExtraIcon, i) => (
            <div key={`extra-${i}`} className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary-container border border-primary/30 flex items-center justify-center shrink-0">
                <ExtraIcon
                  className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-200"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <Plus className="w-5 h-5 text-tertiary/50" strokeWidth={2} aria-hidden />
            </div>
          ))}
          <div className="w-14 h-14 rounded-full bg-secondary-container border border-primary/30 flex items-center justify-center shrink-0">
            <Icon
              className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-200"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight mb-3 text-center">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-tertiary/90 font-light leading-relaxed mb-8 text-center">
          {product.description}
        </p>

        {/* Features — centered block, left-aligned bullets */}
        <div className="flex justify-center mb-10">
          <ul className="space-y-4">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                {featured ? (
                  <span className="w-2 h-2 rotate-45 bg-primary mt-2 shrink-0" aria-hidden />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden />
                )}
                <span className="text-white/90 text-base leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider + CTA */}
        <div className="mt-auto pt-6 border-t border-white/20 flex justify-center">
          <Link
            to={product.ctaHref}
            className="inline-flex items-center justify-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(231,99,84,0.4)] transition-shadow duration-200 active:scale-[0.98]"
          >
            {product.cta}
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Products Page ─────────────────────────────────────────────────────────────

export default function Products() {
  return (
    <section className="py-24 px-6 md:px-12 min-h-screen" id="soluciones">
      <div className="max-w-7xl mx-auto">

        <BackLink to="/" label="Volver al inicio" />

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
            <p className="text-sm font-black tracking-[0.35em] max-sm:tracking-[0.28em] text-primary uppercase">
              Soluciones
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4 max-w-2xl leading-[1.1]">
            Elige el paquete que se adapte a cómo quieres{" "}
            <span className="italic">crecer</span>
          </h1>
        </motion.div>

        {/* Panels */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {products.map((product) => (
            <ProductPanel key={product.id} product={product} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
