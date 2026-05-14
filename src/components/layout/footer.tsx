import Link from "next/link";

const footerSections = [
  {
    title: "Comprar",
    links: [
      { href: "/produtos", label: "Produtos" },
      { href: "/colecoes", label: "Colecoes" },
      { href: "/lookbook", label: "Lookbook" },
      { href: "/busca", label: "Busca" }
    ]
  },
  {
    title: "Atendimento",
    links: [
      { href: "/contato", label: "Contato" },
      { href: "/contato#faq", label: "FAQ" },
      { href: "/checkout", label: "Entrega" },
      { href: "/conta", label: "Minha conta" }
    ]
  },
  {
    title: "Institucional",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/privacidade", label: "Privacidade" },
      { href: "/termos", label: "Termos" },
      { href: "/admin", label: "Admin" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-linen bg-noir text-chalk">
      <div className="container-luxury py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="editorial-kicker mb-5 text-sand">Moda Versatil</p>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Elegancia editorial, tecnologia precisa e checkout brasileiro.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-linen">
              Pagamentos com cartao, Pix, boleto e parcelamento. Emails transacionais,
              estoque reservado e catalogo conectado ao SQL Server nas proximas sprints.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-xs uppercase tracking-editorial text-sand">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-linen">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="focus-luxury transition-colors hover:text-chalk"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-chalk/10 pt-8 text-xs uppercase tracking-editorial text-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Moda Versatil</p>
          <p>Stripe · Cloudinary · Prisma · Resend</p>
        </div>
      </div>
    </footer>
  );
}
