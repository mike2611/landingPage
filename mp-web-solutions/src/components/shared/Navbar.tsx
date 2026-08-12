import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navClass =
  "text-white/90 font-semibold tracking-wide hover:text-primary transition-colors duration-200";

const navActive = "text-primary font-bold";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const linkMobile = `${navClass} text-lg py-1`;
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-3 min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Logo className="w-10 h-10 shrink-0" />
          <span className="text-lg font-bold tracking-[0.2em] uppercase truncate">
            MP Tech
          </span>
        </Link>

        <div className="flex items-center gap-10 md:gap-16">
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            <NavLink
              to="/"
              end
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? navActive : navClass)}
            >
              INICIO
            </NavLink>
            <NavLink
              to="/soluciones"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? navActive : navClass)}
            >
              SOLUCIONES
            </NavLink>
            {/* TODO: Uncomment when portfolio is ready */}
            {/* <NavLink
              to="/portfolio"
              onClick={scrollToTop}
              className={({ isActive }) => (isActive ? navActive : navClass)}
            >
              PORTAFOLIO
            </NavLink> */}
          </nav>

          <div className="flex items-center gap-3">
          <Link
            to="/agendar"
            onClick={scrollToTop}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:opacity-95 transition-opacity duration-200 active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden />
            Agendar Consulta
          </Link>

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
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="md:hidden absolute inset-x-0 top-full h-screen z-40 bg-background border-t border-border px-6 py-8 flex flex-col gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación móvil"
        >
          <NavLink
            to="/"
            end
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? `${navActive} text-lg py-1 font-semibold` : linkMobile
            }
          >
            INICIO
          </NavLink>
          <NavLink
            to="/soluciones"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? `${navActive} text-lg py-1 font-semibold` : linkMobile
            }
          >
            SOLUCIONES
          </NavLink>
          {/* TODO: Uncomment when portfolio is ready */}
          {/* <NavLink
            to="/portfolio"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? `${navActive} text-lg py-1 font-semibold` : linkMobile
            }
          >
            PORTAFOLIO
          </NavLink> */}
          <Link
            to="/agendar"
            onClick={() => setMenuOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-lg text-base font-bold tracking-wide"
          >
            <Calendar className="w-5 h-5 shrink-0" aria-hidden />
            Agendar Consulta
          </Link>
        </div>
      ) : null}
    </header>
  );
}
