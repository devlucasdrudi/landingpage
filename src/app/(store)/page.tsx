import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moda feminina de luxo",
  description:
    "A primeira vitrine editorial da Moda Versatil, preparada para as proximas sprints de catalogo, carrinho e checkout."
};

const collectionLinks = [
  "Alfaiataria essencial",
  "Couro escultural",
  "Vestidos de noite"
];

export default function HomePage() {
  return (
    <div className="bg-chalk">
      <section className="relative flex min-h-screen items-end overflow-hidden bg-noir text-chalk">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,13,13,0.96),rgba(60,60,60,0.45)),url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="container-luxury relative z-10 pb-20 pt-36 sm:pb-24 lg:pb-28">
          <p className="editorial-kicker mb-6 text-linen">Sprint 1 foundation</p>
          <h1 className="max-w-4xl font-display text-6xl font-medium leading-[0.92] sm:text-7xl lg:text-8xl">
            Silhuetas precisas para uma loja feita com calma.
          </h1>
          <div className="mt-8 flex flex-col gap-4 text-sm text-linen sm:flex-row sm:items-center">
            <Link
              href="/produtos"
              className="focus-luxury inline-flex h-11 w-fit items-center border border-chalk px-6 uppercase tracking-editorial transition-colors duration-300 hover:bg-chalk hover:text-noir"
            >
              Ver produtos
            </Link>
            <span>Design system, Header, Footer e Prisma prontos para evoluir.</span>
          </div>
        </div>
      </section>

      <section className="container-luxury py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="editorial-kicker mb-4">Colecoes em destaque</p>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              Uma base minimalista para receber catalogo, checkout e conta.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {collectionLinks.map((item) => (
              <Link
                key={item}
                href="/colecoes"
                className="focus-luxury border border-linen bg-chalk p-6 text-sm uppercase tracking-editorial transition-colors duration-300 hover:border-noir hover:bg-linen"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
