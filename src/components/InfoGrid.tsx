import { Clock, MapPin, Timer, CalendarClock } from "lucide-react";
import { getSiteInfo } from "@/lib/content";

export function InfoGrid() {
  const site = getSiteInfo();

  const items = [
    {
      icon: Clock,
      title: "Horário de funcionamento",
      text: site.hours,
    },
    {
      icon: MapPin,
      title: "Área de entrega",
      text: site.deliveryArea,
    },
    {
      icon: Timer,
      title: "Tempo médio de entrega",
      text: "Consulte pelo WhatsApp", // TODO: dado real
    },
    {
      icon: CalendarClock,
      title: "Encomendas",
      text: site.orderLeadTime,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans text-2xl font-bold text-marrom lg:text-3xl">
          Informações úteis
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="shrink-0">
                <item.icon
                  className="size-6 text-caramelo"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-marrom">{item.title}</h3>
                <p className="mt-1 text-sm text-texto-soft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
