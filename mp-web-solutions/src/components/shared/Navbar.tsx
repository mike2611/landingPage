import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, MessageCircle, Network, X } from "lucide-react";
import { opensInHttpTab, whatsappHref } from "../../lib/links";

const navClass =
  "text-tertiary font-medium hover:text-primary transition-colors duration-200";

const navActive = "text-primary";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const wa = whatsappHref();
  const waNewTab = opensInHttpTab(wa);

  const linkMobile = `${navClass} text-lg py-1`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Network className="text-primary w-8 h-8 shrink-0" aria-hidden />
          <span className="text-lg font-bold tracking-[0.2em] uppercase truncate">
            MP Web Solutions
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${navActive} font-semibold` : navClass
            }
          >
            INICIO
          </NavLink>
          <Link to="/#services" className={navClass}>
            SERVICIOS
          </Link>
          <Link to="/#resume" className={navClass}>
            TRAYECTORIA
          </Link>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? `${navActive} font-semibold` : navClass
            }
          >
            PORTAFOLIO
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa}
            {...(waNewTab
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {})}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:opacity-95 transition-opacity duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden />
            WhatsApp
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-tertiary hover:text-white hover:bg-white/5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden />
            ) : (
              <Menu className="w-6 h-6" aria-hidden />
            )}
            <span className="sr-only">Menú</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-24 bottom-0 z-40 bg-background/98 backdrop-blur-md border-t border-border px-6 py-8 flex flex-col gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación móvil"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${navActive} text-lg py-1 font-semibold` : linkMobile
            }
          >
            INICIO
          </NavLink>
          <Link to="/#services" className={linkMobile} onClick={() => setMenuOpen(false)}>
            SERVICIOS
          </Link>
          <Link to="/#resume" className={linkMobile} onClick={() => setMenuOpen(false)}>
            TRAYECTORIA
          </Link>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? `${navActive} text-lg py-1 font-semibold` : linkMobile
            }
          >
            PORTAFOLIO
          </NavLink>
          <a
            href={wa}
            {...(waNewTab
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {})}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-lg text-base font-bold tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden />
            WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  );
}
