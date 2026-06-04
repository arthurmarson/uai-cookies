export interface Cookie {
  id: string;
  name: string;
  description: string;
  price: number; // em centavos (ex: 600 = R$6,00)
  category: "tradicional" | "cobertura" | "recheado";
  featured: boolean;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  seasonal: boolean;
  seasonLabel?: string;
  active: boolean;
}

export const cookies: Cookie[] = [
  {
    id: "cookie-tradicional",
    name: "Cookie Tradicional",
    description: "Cookie amanteigado artesanal, crocante por fora e macio por dentro",
    price: 600,
    category: "tradicional",
    featured: true,
  },
  {
    id: "cookie-cobertura-chocolate",
    name: "Cookie com Cobertura de Chocolate",
    description: "Cookie amanteigado com generosa cobertura de chocolate",
    price: 700,
    category: "cobertura",
    featured: true,
  },
  {
    id: "cookie-recheio-nutella",
    name: "Cookie com Recheio de Nutella",
    description: "Cookie amanteigado recheado com creme de avelã Nutella",
    price: 800,
    category: "recheado",
    featured: true,
  },
];

export const combos: Combo[] = [
  {
    id: "aquele-trem-la",
    name: "Aquele trem lá",
    description: "6 cookies amanteigados viciantes e saborosos",
    items: ["6x Cookie Tradicional"],
    price: 3300,
    seasonal: false,
    active: true,
  },
  {
    id: "uai-so",
    name: "Uai, só!",
    description: "6 cookies com cobertura de chocolate",
    items: ["6x Cookie com Cobertura de Chocolate"],
    price: 3800,
    seasonal: false,
    active: true,
  },
  {
    id: "trem-bao",
    name: "Trem bão é coisa boa",
    description: "6 cookies amanteigados recheados com Nutella",
    items: ["6x Cookie com Recheio de Nutella"],
    price: 4000,
    seasonal: false,
    active: true,
  },
  {
    id: "cafe-com-leite",
    name: "Café com leite",
    description: "3 cookies de chocolate e 3 cookies de baunilha recheados com Nutella",
    items: [
      "3x Cookie de Chocolate com Recheio de Nutella",
      "3x Cookie de Baunilha com Recheio de Nutella",
    ],
    price: 4000,
    seasonal: false,
    active: true,
  },
];
