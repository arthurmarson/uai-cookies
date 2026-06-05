import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, ScrollText, Heart } from "lucide-react";
import { getAboutText, getWhatsAppUrl } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ValueCard } from "@/components/ValueCard";

export const metadata: Metadata = {
  title: "Sobre — Uai Cookies",
  description:
    "Conheça a história da Uai Cookies. Nascemos em Uberlândia em 2021, e desde então levamos cookies artesanais feitos com carinho.",
};

const values = [
  {
    icon: ChefHat,
    title: "Artesanal de verdade",
    description:
      "Cada cookie é preparado à mão, em pequenos lotes, com atenção a cada detalhe — do preparo à embalagem.",
  },
  {
    icon: ScrollText,
    title: "Receita própria",
    description:
      "Nossa receita foi desenvolvida com carinho e testada até a perfeição. O segredo? Ingredientes selecionados e muito amor.",
  },
  {
    icon: Heart,
    title: "Feito com amor",
    description:
      "Mais do que cookies, entregamos afeto. Cada caixa leva um pedacinho de Minas direto pra sua casa.",
  },
] as const;

export default function Sobre() {
  const aboutText = getAboutText();
  const paragraphs = aboutText.split("\n\n");
  const whatsappUrl = getWhatsAppUrl("Olá! Gostaria de fazer um pedido 🍪");

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Nossa História"
        backgroundImage="/images/varios-cookies-visao-de-cima.jpg"
      />

      {/* Historia */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/cookies-recheados-1.jpg"
              alt="Close-up de cookie artesanal recheado da Uai Cookies"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="font-display text-2xl text-caramelo lg:text-3xl">
              De Uberlândia, com amor
            </span>

            <div className="mt-4 max-w-[65ch] space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-texto">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-creme-dark py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-sans text-2xl font-bold text-marrom lg:text-3xl">
            O que nos move
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Frase de impacto */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <blockquote className="font-display text-2xl text-marrom lg:text-4xl">
            &ldquo;Cada cookie é feito à mão, com ingredientes selecionados e
            muito carinho mineiro.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA com 2 botoes */}
      <section className="bg-creme-dark py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-sans text-2xl font-bold text-marrom lg:text-3xl">
            Experimente você também
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cardapio"
              className="inline-block rounded-full border-2 border-marrom px-8 py-3 font-semibold text-marrom transition-colors hover:bg-marrom hover:text-creme"
            >
              Ver cardápio
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-caramelo px-8 py-3 font-semibold text-branco transition-colors hover:bg-caramelo-hover"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Faça seu pedido
            </a>
          </div>

          <p className="mt-4 font-display text-lg text-texto-soft">
            Respondemos rápido!
          </p>
        </div>
      </section>
    </>
  );
}
