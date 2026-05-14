import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Endereco, frete e pagamento com Stripe para cartao, Pix e boleto."
};

export default function CheckoutPage() {
  return (
    <PageShell
      eyebrow="Checkout"
      title="Endereco, frete e pagamento vao convergir aqui."
      description="Esta rota ja esta reservada para a Sprint 3, quando entrarem reserva de estoque, PaymentIntent do Stripe e confirmacao de pedido."
    />
  );
}
