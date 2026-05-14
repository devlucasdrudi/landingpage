import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Minha conta",
  description: "Pedidos, enderecos, wishlist e configuracoes da cliente."
};

export default function AccountPage() {
  return (
    <PageShell
      eyebrow="Conta"
      title="Pedidos, enderecos e favoritos vao morar aqui."
      description="A rota de conta ja responde para o layout global e vai ganhar protecao de sessao, historico de pedidos e preferencias quando entrarmos em autenticacao."
    />
  );
}
