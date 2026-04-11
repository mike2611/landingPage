/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_PHONE?: string;
  readonly VITE_WHATSAPP_MESSAGE?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_RESUME_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_GITHUB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
