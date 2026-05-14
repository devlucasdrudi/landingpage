import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Resumo do pedido, gift wrap, cupom e preparacao para checkout."
};

export default function CartPage() {
  return (
    <PageShell
      eyebrow="Carrinho"
      title="O carrinho completo entra na proxima sprint, com drawer e pagina sincronizados."
      description="O estado global em Zustand ja esta pronto. Agora a pagina serve como ponto de integracao para resumo do pedido, cupom, gift wrap e CTA de checkout."
      primaryCta={{ href: "/checkout", label: "Ir ao checkout" }}
    />
  );
}
