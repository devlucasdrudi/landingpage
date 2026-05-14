import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato, FAQ e orientacoes de atendimento da marca."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contato"
      title="Atendimento e FAQ com a mesma calma da loja."
      description="A rota ja esta no layout principal para receber formulario, perguntas frequentes, trocas, prazos e canais de suporte."
    />
  );
}
