import { Cookie as CookieIcon } from "lucide-react";
import { formatPrice } from "@/lib/content";
import type { Cookie } from "@/data/menu";

interface CookieCardProps {
  cookie: Cookie;
}

export function CookieCard({ cookie }: CookieCardProps) {
  return (
    <article className="group cursor-pointer rounded-2xl bg-branco shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Faixa decorativa */}
      <div className="flex h-6 items-center justify-center rounded-t-2xl bg-creme-dark">
        <CookieIcon className="size-4 text-caramelo" aria-hidden="true" />
      </div>

      {/* Corpo */}
      <div className="px-5 py-4">
        <h3 className="font-sans text-lg font-bold text-marrom">{cookie.name}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-texto-soft">
          {cookie.description}
        </p>
        <p className="mt-2 font-display text-xl font-bold text-caramelo">
          {formatPrice(cookie.price)}
        </p>
      </div>
    </article>
  );
}
