import type { Metadata } from "next";
import { getMenu, getActiveCombos } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { CookieCard } from "@/components/CookieCard";
import { ComboCard } from "@/components/ComboCard";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Cardápio — Uai Cookies",
  description:
    "Confira nosso cardápio de cookies artesanais. Cookie tradicional, com cobertura de chocolate ou recheio de Nutella. Combos a partir de R$ 33.",
};

export default function Cardapio() {
  const cookies = getMenu();
  const combos = getActiveCombos();

  return (
    <>
      <PageHeader
        title="Nosso Cardápio"
        subtitle="Escolha seus favoritos e faça seu pedido"
        backgroundImage="/images/varios-cookies-visao-de-cima.jpg"
      />

      {/* Unidades */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-sans text-2xl font-semibold text-marrom lg:text-3xl">
            Unidades
          </h2>
          <p className="mt-2 text-center text-texto-soft">
            Cookies artesanais feitos um a um
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cookies.map((cookie) => (
              <CookieCard key={cookie.id} cookie={cookie} />
            ))}
          </div>
        </div>
      </section>

      {/* Combos */}
      <section className="bg-creme-dark py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-sans text-2xl font-semibold text-marrom lg:text-3xl">
            Combos
          </h2>
          <p className="mt-2 text-center text-texto-soft">
            Monte sua caixa com 6 cookies
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {combos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Gostou? Faça seu pedido!"
        buttonText="Pedir pelo WhatsApp"
      />
    </>
  );
}
