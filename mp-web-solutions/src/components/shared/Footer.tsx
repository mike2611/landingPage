import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import {
  githubHref,
  linkedinHref,
  mailtoConsultHref,
  opensInHttpTab,
  resumeDownloadHref,
  whatsappHref,
} from "../../lib/links";

export default function Footer() {
  const wa = whatsappHref();
  const waNewTab = opensInHttpTab(wa);
  const mail = mailtoConsultHref();
  const resumeUrl = resumeDownloadHref();
  const linkedIn = linkedinHref();
  const gh = githubHref();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-sm">
        <div className="flex items-center gap-2">
          <span className="text-tertiary font-semibold uppercase tracking-widest">
            MP WEB SOLUTIONS
          </span>
        </div>
        <div className="text-tertiary/60 text-center md:text-start">
          © {new Date().getFullYear()} MP Web Solutions
        </div>
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-tertiary/60"
          aria-label="Pie de página"
        >
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              CV
            </a>
          ) : (
            <Link
              to="/#resume"
              className="hover:text-white transition-colors duration-200"
            >
              Trayectoria
            </Link>
          )}
          <a
            href={wa}
            {...(waNewTab
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {})}
            className="hover:text-white transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a href={mail} className="hover:text-white transition-colors duration-200">
            <Mail className="w-4 h-4 inline me-1 align-text-bottom" aria-hidden />
            Email
          </a>
          {linkedIn ? (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4 inline me-1 align-text-bottom" aria-hidden />
              LinkedIn
            </a>
          ) : null}
          {gh ? (
            <a
              href={gh}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4 inline me-1 align-text-bottom" aria-hidden />
              GitHub
            </a>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
