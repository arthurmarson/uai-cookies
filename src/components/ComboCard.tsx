import { formatPrice } from "@/lib/content";
import type { Combo } from "@/data/menu";

interface ComboCardProps {
  combo: Combo;
}

export function ComboCard({ combo }: ComboCardProps) {
  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-caramelo bg-branco shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Badge sazonal */}
      {combo.seasonal && combo.seasonLabel && (
        <span className="absolute top-3 right-3 rounded-full bg-caramelo px-3 py-1 text-xs font-semibold text-branco">
          {combo.seasonLabel}
        </span>
      )}

      <div className="px-6 py-5">
        {/* Nome mineiro com destaque */}
        <h3 className="font-sans text-xl font-bold text-marrom">
          {combo.name}
        </h3>

        <p className="mt-1 text-texto-soft">{combo.description}</p>

        {/* Itens */}
        <ul className="mt-4 space-y-1">
          {combo.items.map((item) => (
            <li key={item} className="text-sm text-texto-soft">
              • {item}
            </li>
          ))}
        </ul>

        {/* Preco */}
        <p className="mt-4 font-sans text-2xl font-bold tabular-nums text-caramelo">
          {formatPrice(combo.price)}
        </p>
      </div>
    </article>
  );
}
