import { Cookie, MessageCircle, Truck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";

const steps = [
  {
    icon: Cookie,
    title: "Escolha seus cookies",
    description: "Confira nosso cardápio e monte sua caixa com os sabores que mais ama.",
    number: "1",
  },
  {
    icon: MessageCircle,
    title: "Peça pelo WhatsApp",
    description:
      "Envie seu pedido direto no nosso WhatsApp. Atendimento rápido e pessoal.",
    number: "2",
  },
  {
    icon: Truck,
    title: "Receba em casa",
    description:
      "Entregamos em Uberlândia com todo cuidado que seus cookies merecem.",
    number: "3",
  },
] as const;

export function HowItWorks() {
  const whatsappUrl = getWhatsAppUrl("Olá! Gostaria de fazer um pedido 🍪");

  return (
    <section className="bg-creme-dark py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center font-sans text-2xl font-bold text-marrom lg:text-3xl">
          Seu pedido em três passos
        </h2>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Numero discreto */}
              <span
                className="font-sans text-3xl font-bold tabular-nums text-caramelo/70"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icone */}
              <div className="mt-2 flex justify-center">
                <step.icon
                  className="size-12 text-caramelo"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* Texto */}
              <h3 className="mt-4 font-sans text-lg font-semibold text-marrom">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-texto-soft">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-caramelo px-8 py-3 font-semibold text-branco transition-colors hover:bg-caramelo-hover"
          >
            Faça seu pedido
          </a>
        </div>
      </div>
    </section>
  );
}
