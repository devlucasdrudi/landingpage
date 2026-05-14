import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Colecoes",
  description: "Colecoes editoriais com narrativa visual e curadoria minimalista."
};

export default function CollectionsPage() {
  return (
    <PageShell
      eyebrow="Colecoes"
      title="Campanhas e narrativas visuais entram aqui."
      description="A estrutura da pagina esta pronta para receber colecoes com hero proprio, vitrines associadas e lookbook conectado ao banco."
      primaryCta={{ href: "/produtos", label: "Explorar catalogo" }}
    />
  );
}
