import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Politica de privacidade e diretrizes LGPD da Moda Versatil."
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="LGPD"
      title="Privacidade, consentimento e uso de dados entram aqui."
      description="Esta pagina vai acompanhar o banner de cookies e as preferencias de consentimento quando formos para a camada de conformidade."
    />
  );
}
