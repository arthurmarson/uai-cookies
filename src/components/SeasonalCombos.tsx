import { getSeasonalCombos, getWhatsAppUrl, formatPrice } from "@/lib/content";

export function SeasonalCombos() {
  const combos = getSeasonalCombos();

  if (combos.length === 0) return null;

  return (
    <section className="bg-creme-dark py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {combos.map((combo) => {
          const whatsappUrl = getWhatsAppUrl(
            `Olá! Tenho interesse no ${combo.name} 🍪`
          );

          return (
            <div
              key={combo.id}
              className="overflow-hidden rounded-2xl bg-marrom text-creme"
            >
              <div className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                {/* Badge sazonal */}
                {combo.seasonLabel && (
                  <span className="inline-block font-display text-lg text-creme-dark">
                    {combo.seasonLabel}
                  </span>
                )}

                <h2 className="mt-2 font-sans text-2xl font-bold lg:text-3xl">
                  {combo.name}
                </h2>

                <p className="mt-3 max-w-xl text-creme/80">
                  {combo.description}
                </p>

                {/* Lista de itens */}
                <ul className="mt-6 space-y-1">
                  {combo.items.map((item) => (
                    <li key={item} className="text-sm text-creme/70">
                      • {item}
                    </li>
                  ))}
                </ul>

                {/* Preco + CTA */}
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <span className="font-display text-3xl font-bold text-creme-dark">
                    {formatPrice(combo.price)}
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-caramelo px-8 py-3 font-semibold text-branco transition-colors hover:bg-caramelo-hover"
                  >
                    Pedir combo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
