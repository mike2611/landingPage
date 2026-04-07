import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Building2 className="text-primary w-8 h-8" />
          <span className="text-lg font-bold tracking-[0.2em] uppercase">MP Web Solutions</span>
        </div>
        <nav className="hidden md:flex gap-10">
          <Link to="/" className="text-primary font-semibold">HOME</Link>
          <a href="#services" className="text-tertiary font-medium hover:text-primary transition-colors">SERVICES</a>
          <a href="#resume" className="text-tertiary font-medium hover:text-primary transition-colors">RESUME</a>
          <Link to="/portfolio" className="text-tertiary font-medium hover:text-primary transition-colors">PORTFOLIO</Link>
        </nav>
        <div className="flex items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-widest hover:bg-opacity-90 transition-all active:scale-95"
          >
            RESUME
          </a>
        </div>
      </div>
    </header>
  );
}
