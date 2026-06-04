import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <header className="relative -mt-16 lg:-mt-24">
      {/* Background */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-marrom-dark/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-creme-dark" />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-16 text-center sm:px-6 lg:pt-40 lg:pb-20">
        <h1
          className={`font-sans text-3xl font-bold lg:text-4xl ${
            backgroundImage ? "text-branco" : "text-marrom"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-3 text-lg ${
              backgroundImage ? "text-branco/80" : "text-texto-soft"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
