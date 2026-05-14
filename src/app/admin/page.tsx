import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Admin",
  description: "Painel administrativo para produtos, pedidos, estoque e promocoes."
};

export default function AdminPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="O painel administrativo entra depois, mas a rota ja esta preparada."
      description="Ela sera expandida com dashboard, CRUD de produto, pedidos, estoque e promocoes quando chegarmos na sprint dedicada ao backoffice."
    />
  );
}
