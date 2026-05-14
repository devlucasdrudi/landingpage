"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { cn } from "@/lib/cn";
import { formatCurrency } from "@/lib/format";

export function CartDrawer() {
  const isCartOpen = useUiStore((state) => state.isCartOpen);
  const closeCart = useUiStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal());

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-noir/45"
        aria-label="Fechar carrinho"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-[min(100vw,430px)] flex-col bg-chalk text-noir shadow-soft transition-transform duration-500 ease-luxury",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-linen px-6">
          <div>
            <p className="editorial-kicker">Carrinho</p>
            <p className="text-sm text-graphite">{items.length} itens</p>
          </div>
          <button
            type="button"
            className="focus-luxury inline-flex h-10 w-10 items-center justify-center"
            aria-label="Fechar carrinho"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          {items.length === 0 ? (
            <div className="flex h-full flex-col justify-center">
              <p className="font-display text-4xl">Seu carrinho esta vazio.</p>
              <p className="mt-4 text-sm leading-6 text-graphite">
                A estrutura do mini carrinho esta pronta para receber os itens do catalogo na Sprint 2.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.variantId} className="border-b border-linen pb-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-editorial text-graphite">
                        {item.size} · {item.color}
                      </p>
                    </div>
                    <p className="text-sm">{formatCurrency(item.priceInCents / 100)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-linen p-6">
          <div className="mb-5 flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal / 100)}</strong>
          </div>
          <Link
            href="/carrinho"
            className="focus-luxury flex h-12 items-center justify-center bg-noir px-6 text-sm uppercase tracking-editorial text-chalk transition-colors hover:bg-graphite"
            onClick={closeCart}
          >
            Ir para o carrinho
          </Link>
        </div>
      </aside>
    </div>
  );
}
