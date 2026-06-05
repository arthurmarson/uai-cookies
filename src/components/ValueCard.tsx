import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <article className="rounded-2xl bg-branco p-8 text-center shadow-md">
      <div className="flex justify-center">
        <Icon
          className="size-12 text-caramelo"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 font-sans text-lg font-semibold text-marrom">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-texto-soft">
        {description}
      </p>
    </article>
  );
}
