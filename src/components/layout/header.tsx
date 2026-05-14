"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/produtos", label: "Produtos" },
  { href: "/colecoes", label: "Colecoes" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/sobre", label: "Sobre" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const cartCount = useCartStore((state) => state.totalItems());
  const openCart = useUiStore((state) => state.openCart);
  const openSearch = useUiStore((state) => state.openSearch);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerTone = isScrolled ? "bg-chalk/95 text-noir shadow-soft backdrop-blur" : "bg-transparent text-chalk";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxury",
          headerTone
        )}
      >
        <div className="container-luxury flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            className="focus-luxury inline-flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-luxury text-xs uppercase tracking-editorial transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="focus-luxury absolute left-1/2 -translate-x-1/2 font-display text-2xl font-medium"
            aria-label="Moda Versatil inicio"
          >
            Moda Versatil
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-3">
            <button
              type="button"
              className="focus-luxury inline-flex h-10 w-10 items-center justify-center"
              aria-label="Abrir busca"
              onClick={openSearch}
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/conta/favoritos"
              className="focus-luxury hidden h-10 w-10 items-center justify-center sm:inline-flex"
              aria-label="Favoritos"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              href="/login"
              className="focus-luxury hidden h-10 w-10 items-center justify-center sm:inline-flex"
              aria-label="Minha conta"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="focus-luxury relative inline-flex h-10 w-10 items-center justify-center"
              aria-label="Abrir carrinho"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-camel px-1 text-[0.62rem] leading-none text-chalk">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-noir/40 transition-opacity duration-300 lg:hidden",
          isMobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isMobileOpen}
      >
        <aside
          className={cn(
            "h-full w-[min(88vw,360px)] bg-chalk p-6 text-noir transition-transform duration-500 ease-luxury",
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-display text-2xl">Moda Versatil</span>
            <button
              type="button"
              className="focus-luxury inline-flex h-10 w-10 items-center justify-center"
              aria-label="Fechar menu"
              onClick={() => setIsMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-5" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-luxury border-b border-linen pb-4 font-display text-3xl"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="focus-luxury pt-4 text-sm uppercase tracking-editorial">
              Entrar
            </Link>
          </nav>
        </aside>
      </div>

      <SearchOverlay />
      <CartDrawer />
    </>
  );
}
