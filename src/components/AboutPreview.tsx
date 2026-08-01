import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAboutText } from "@/lib/content";

export function AboutPreview() {
  const aboutText = getAboutText();
  const firstParagraph = aboutText.split("\n\n")[0];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Imagem */}
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="/images/cookies-recheados-2.jpg"
            alt="Cookies recheados artesanais da Uai Cookies"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <span className="font-display text-3xl font-bold text-caramelo lg:text-4xl">
            De Uberlândia, com amor
          </span>

          <p className="mt-4 leading-relaxed text-texto-soft">
            {firstParagraph}
          </p>

          <Link
            href="/sobre"
            className="mt-6 inline-flex items-center gap-1 font-semibold text-caramelo transition-colors hover:text-caramelo-hover hover:underline"
          >
            Conheça nossa história
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
