import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  info: string;
  buttonText: string;
  href: string;
  variant: "primary" | "secondary";
}

export function ContactCard({
  icon,
  title,
  info,
  buttonText,
  href,
  variant,
}: ContactCardProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-pointer flex-col items-center rounded-2xl border-2 border-transparent bg-branco p-8 text-center shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-caramelo hover:shadow-lg"
    >
      <div className="flex size-12 items-center justify-center">{icon}</div>

      <h3 className="mt-4 font-sans text-xl font-bold text-marrom">{title}</h3>
      <p className="mt-1 text-texto-soft">{info}</p>

      <span
        className={`mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
          isPrimary
            ? "bg-whatsapp text-white group-hover:bg-whatsapp/90"
            : "border-2 border-marrom text-marrom group-hover:bg-marrom group-hover:text-creme"
        }`}
      >
        {buttonText}
      </span>
    </a>
  );
}
