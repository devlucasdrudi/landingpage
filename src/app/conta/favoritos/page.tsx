import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Wishlist conectada a sessao e sincronizada entre dispositivos."
};

export default function WishlistPage() {
  return (
    <PageShell
      eyebrow="Favoritos"
      title="A wishlist esta reservada para o heart toggle e sincronizacao com login."
      description="A rota existe para fechar o fluxo de navegacao do header e vai receber persistencia real assim que a camada de autenticacao entrar."
    />
  );
}
