import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Busca",
  description: "Resultados instantaneos e curadoria refinada para a experiencia de busca."
};

export default function SearchPage() {
  return (
    <PageShell
      eyebrow="Busca"
      title="A busca full-screen ja conversa com uma pagina de resultados dedicada."
      description="Na Sprint 2 vamos ligar esta rota a pesquisa instantanea de produtos, categorias e colecoes usando debounce, API route e cards de resultado."
      primaryCta={{ href: "/produtos", label: "Ver produtos" }}
    />
  );
}
