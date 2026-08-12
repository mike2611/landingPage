export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="16" cy="24" r="6" fill="#E76354" />
      <circle cx="40" cy="24" r="6" fill="#C7DBE6" fillOpacity="0.6" />
      <circle cx="64" cy="24" r="6" fill="#C7DBE6" fillOpacity="0.3" />

      <polygon points="16,46 26,56 16,66 6,56" fill="#E76354" />
      <polygon points="40,46 50,56 40,66 30,56" fill="#C7DBE6" fillOpacity="0.6" />
      <polygon points="64,46 74,56 64,66 54,56" fill="#C7DBE6" fillOpacity="0.3" />
    </svg>
  );
}
