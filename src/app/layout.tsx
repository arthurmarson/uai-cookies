import type { Metadata } from "next";
import { Caveat, Quicksand } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uai Cookies — Cookies Artesanais Recheados",
  description:
    "Cookies artesanais recheados, feitos com receita própria e ingredientes selecionados. De Uberlândia, com amor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${caveat.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-24">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
