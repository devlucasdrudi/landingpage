import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Termos",
  description: "Termos de uso, politicas de compra e condicoes comerciais."
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Termos"
      title="Politicas de compra, entrega e devolucao terao uma casa clara."
      description="A rota esta pronta para receber os termos de uso e as regras comerciais do e-commerce sem quebrar o footer institucional."
    />
  );
}
