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
      className="inline-flex items-center gap-2 text-tertiary/60 hover:text-tertiary text-sm transition-colors duration-150 mb-8"
    >
      <ArrowLeft className="w-4 h-4" strokeWidth={2} aria-hidden />
      {label}
    </Link>
  );
}
