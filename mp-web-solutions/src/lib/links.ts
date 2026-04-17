function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** Use with `target` / `rel` so mailto and in-page anchors stay in the same tab. */
export function opensInHttpTab(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function whatsappHref(): string {
  const phone = digitsOnly(import.meta.env.VITE_WHATSAPP_PHONE ?? "");
  if (!phone) return mailtoConsultHref();
  const url = new URL(`https://wa.me/${phone}`);
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE?.trim();
  if (message) url.searchParams.set("text", message);
  return url.toString();
}

export function mailtoConsultHref(): string {
  const email = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "";
  if (!email) return "#contact";
  const subject = encodeURIComponent("Consulta — MP Web Solutions");
  return `mailto:${email}?subject=${subject}`;
}

export function resumePublicHref(): string | undefined {
  const url = import.meta.env.VITE_RESUME_URL?.trim();
  return url || undefined;
}

export function linkedinHref(): string | undefined {
  const url = import.meta.env.VITE_LINKEDIN_URL?.trim();
  return url || undefined;
}

export function githubHref(): string | undefined {
  const url = import.meta.env.VITE_GITHUB_URL?.trim();
  return url || undefined;
}
