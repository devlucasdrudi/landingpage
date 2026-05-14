import Link from "next/link";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    href: string;
    label: string;
  };
};

export function PageShell({
  eyebrow,
  title,
  description,
  primaryCta
}: PageShellProps) {
  return (
    <section className="bg-chalk pt-32">
      <div className="container-luxury py-16 sm:py-20">
        <p className="editorial-kicker mb-6">{eyebrow}</p>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
          <div className="max-w-xl justify-self-end">
            <p className="text-sm leading-7 text-graphite sm:text-base">{description}</p>
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="focus-luxury mt-8 inline-flex h-11 items-center border border-noir px-6 text-xs uppercase tracking-editorial transition-colors duration-300 hover:bg-noir hover:text-chalk"
              >
                {primaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
