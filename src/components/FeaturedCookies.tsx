import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getFeaturedCookies } from "@/lib/content";
import { CookieCard } from "./CookieCard";

export function FeaturedCookies() {
  const cookies = getFeaturedCookies();

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-sans text-2xl font-bold text-marrom lg:text-3xl">
            Os mais pedidos
          </h2>
          <p className="mt-2 text-texto-soft">
            Descubra os favoritos dos nossos clientes
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cookies.map((cookie) => (
            <CookieCard key={cookie.id} cookie={cookie} />
          ))}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-1 font-semibold text-caramelo transition-colors hover:text-caramelo-hover hover:underline"
          >
            Ver cardápio completo
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
