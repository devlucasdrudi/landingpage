import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Login",
  description: "Entrar com email ou Google para acessar pedidos, enderecos e favoritos."
};

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="Autenticacao"
      title="Login e cadastro entram na Sprint 4 com NextAuth."
      description="Por enquanto deixamos a rota viva para o header e para o fluxo de navegacao. Quando o auth entrar, a pagina ja esta posicionada dentro do app."
    />
  );
}
