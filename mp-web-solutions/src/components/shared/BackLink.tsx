import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type BackLinkProps = {
  to: string;
  label: string;
};

export default function BackLink({ to, label }: BackLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-secondary font-medium text-sm
        border border-primary/10 bg-tertiary/10 hover:bg-tertiary/20 hover:text-white hover:border-tertiary/50
        px-3 py-1.5 rounded-full transition-colors duration-150 mb-8
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <ArrowLeft className="w-4 h-4 text-primary" strokeWidth={2} aria-hidden />
      {label}
    </Link>
  );
}
