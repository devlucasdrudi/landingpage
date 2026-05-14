"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useUiStore } from "@/store/ui-store";
import { cn } from "@/lib/cn";

const suggestedTerms = ["vestidos", "bolsas", "alfaiataria", "sandalias"];

export function SearchOverlay() {
  const isSearchOpen = useUiStore((state) => state.isSearchOpen);
  const closeSearch = useUiStore((state) => state.closeSearch);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-chalk text-noir transition-all duration-500 ease-luxury",
        isSearchOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-6 opacity-0"
      )}
      aria-hidden={!isSearchOpen}
    >
      <div className="container-luxury flex min-h-screen flex-col py-6">
        <div className="flex h-14 items-center justify-between">
          <p className="font-display text-2xl">Buscar</p>
          <button
            type="button"
            className="focus-luxury inline-flex h-10 w-10 items-center justify-center"
            aria-label="Fechar busca"
            onClick={closeSearch}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16">
          <label htmlFor="global-search" className="editorial-kicker mb-5">
            Busca instantanea
          </label>
          <div className="flex items-center border-b border-noir">
            <Search className="mr-4 h-6 w-6 text-graphite" />
            <input
              id="global-search"
              type="search"
              placeholder="O que voce procura?"
              className="h-20 w-full bg-transparent font-display text-4xl outline-none placeholder:text-graphite/50 sm:text-6xl"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {suggestedTerms.map((term) => (
              <Link
                key={term}
                href={`/busca?q=${term}`}
                className="focus-luxury border border-linen px-4 py-2 text-xs uppercase tracking-editorial transition-colors hover:border-noir"
                onClick={closeSearch}
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
