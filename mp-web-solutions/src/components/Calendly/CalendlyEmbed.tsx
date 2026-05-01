import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/mpuentes2611/30min?background_color=151e16&text_color=c7dbe6&primary_color=e76354";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
      <div
        className="calendly-inline-widget w-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "800px" }}
      />
    </div>
  );
}
