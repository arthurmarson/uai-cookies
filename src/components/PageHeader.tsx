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
          <div className="photo-scrim absolute inset-0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-creme-dark" />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-16 text-center sm:px-6 lg:pt-40 lg:pb-20">
        <h1
          className={`text-balance font-sans text-3xl font-bold tracking-tight lg:text-5xl ${
            backgroundImage ? "text-on-photo text-branco" : "text-marrom"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-3 text-balance text-lg ${
              backgroundImage ? "text-on-photo text-creme/95" : "text-texto-soft"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
