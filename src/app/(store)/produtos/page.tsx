import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catalogo de moda feminina de luxo com filtros, ordenacao e grid editorial."
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Catalogo"
      title="Produtos preparados para receber filtros, sort e grade editorial."
      description="Esta rota ja existe dentro da estrutura App Router e sera a base da Sprint 2, quando entrarem listagem real do SQL Server, filtros por categoria e cards conectados ao carrinho."
      primaryCta={{ href: "/", label: "Voltar ao inicio" }}
    />
  );
}
