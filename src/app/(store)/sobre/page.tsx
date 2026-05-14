import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Manifesto da marca, acabamento editorial e historia da casa."
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Sobre a marca"
      title="Uma casa de moda pensada com silencio, textura e precisao."
      description="A pagina institucional ja esta ligada ao layout global e vai receber manifesto, materiais, atelie e compromisso de atendimento nas proximas entregas."
    />
  );
}
