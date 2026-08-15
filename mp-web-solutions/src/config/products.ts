import { AppWindow, MessageCircle, type LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  extraIcons?: LucideIcon[];
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "landing-page",
    icon: AppWindow,
    title: "Landing Page",
    description:
      "Una página de alto impacto diseñada para capturar clientes desde el día uno. Captura leads directo a tu correo de forma segura y sin complicaciones.",
    features: [
      "Diseño personalizado y responsivo",
      "Estructura enfocada en conversión",
      "Formulario de contacto con envío seguro directo a tu correo",
      "Hosting en AWS para máxima velocidad y confiabilidad",
      "3 meses de hosting incluidos",
    ],
    cta: "Quiero este paquete",
    ctaHref: "/agendar",
  },
  {
    id: "landing-page-bot",
    icon: MessageCircle,
    extraIcons: [AppWindow],
    title: "Landing Page + Bot de WhatsApp",
    description:
      "Todo lo del paquete Landing Page, más un asistente inteligente de WhatsApp que responde y mantiene a tus clientes atendidos 24/7, incluso cuando estás ocupado.",
    features: [
      "Todo lo incluido en el paquete Landing Page",
      "Respuestas automáticas e inteligentes por WhatsApp",
      "Tu negocio disponible 24/7 para no perder ventas",
    ],
    cta: "Quiero el paquete completo",
    ctaHref: "/agendar",
    featured: true,
    badge: "MÁS COMPLETO",
  },
];
