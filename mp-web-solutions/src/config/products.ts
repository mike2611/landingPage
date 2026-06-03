import { Rocket, Bot, type LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliveryTime: string;
  cta: string;
  ctaHref: string;
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    id: "conversion-pack",
    icon: Rocket,
    title: "Conversion Pack",
    description: "Landing Page + Calendly + WhatsApp",
    deliveryTime: "5–7 días",
    cta: "Agendar",
    ctaHref: "/agendar",
  },
  {
    id: "ai-assistant",
    icon: Bot,
    title: "AI Assistant",
    description: "Chatbot modular para tu negocio",
    deliveryTime: "Próximamente",
    cta: "Notifícame",
    ctaHref: "#contact",
    comingSoon: true,
  },
];
