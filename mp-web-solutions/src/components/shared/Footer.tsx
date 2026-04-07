import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-sm">
        <div className="flex items-center gap-2">
          <span className="text-tertiary font-semibold uppercase tracking-widest">MP WEB SOLUTIONS</span>
        </div>
        <div className="text-tertiary/60">
          © {new Date().getFullYear()} MP Web Solutions. Built with Precision.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-tertiary/60 hover:text-white transition-colors">Resume</a>
          <a href="#" className="text-tertiary/60 hover:text-white transition-colors"><Mail className="w-4 h-4 inline mr-1" /> Message</a>
          <a href="#" className="text-tertiary/60 hover:text-white transition-colors"><Linkedin className="w-4 h-4 inline mr-1" /> LinkedIn</a>
          <a href="#" className="text-tertiary/60 hover:text-white transition-colors"><Github className="w-4 h-4 inline mr-1" /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}
