import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Editorial com imagens full-bleed, styling notes e links para compra."
};

export default function LookbookPage() {
  return (
    <PageShell
      eyebrow="Lookbook"
      title="O editorial da marca vai morar aqui, com ritmo de revista e CTA de compra."
      description="Nesta primeira sprint deixamos a rota e a assinatura visual alinhadas com a direcao Bottega-inspired, prontas para receber campanhas, motion e links de produto."
      primaryCta={{ href: "/colecoes", label: "Ver colecoes" }}
    />
  );
}
