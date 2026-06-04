export interface Cookie {
  id: string;
  name: string;
  description: string;
  price: number; // em centavos (ex: 1200 = R$12,00)
  category: "classico" | "especial";
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
    id: "chocolate-meio-amargo",
    name: "Chocolate Meio Amargo",
    description: "Cookie com gotas e recheio de chocolate meio amargo",
    price: 1200, // TODO: dado real
    category: "classico",
    featured: true,
  },
  {
    id: "nutella",
    name: "Nutella",
    description: "Cookie recheado com creme de avelã Nutella",
    price: 1400, // TODO: dado real
    category: "classico",
    featured: true,
  },
  {
    id: "doce-de-leite",
    name: "Doce de Leite",
    description: "Cookie com recheio cremoso de doce de leite mineiro",
    price: 1400, // TODO: dado real
    category: "classico",
    featured: true,
  },
  {
    id: "cookies-and-cream",
    name: "Cookies & Cream",
    description: "Cookie com pedaços de biscoito e recheio de chocolate branco",
    price: 1400, // TODO: dado real
    category: "especial",
    featured: false,
  },
  {
    id: "pistache",
    name: "Pistache",
    description: "Cookie com creme de pistache e chocolate branco",
    price: 1600, // TODO: dado real
    category: "especial",
    featured: false,
  },
];

export const combos: Combo[] = [
  {
    id: "combo-classicos",
    name: "Caixa Clássicos",
    description: "Uma seleção dos nossos cookies mais amados",
    items: [
      "2x Chocolate Meio Amargo",
      "2x Nutella",
      "2x Doce de Leite",
    ],
    price: 6000, // TODO: dado real
    seasonal: false,
    active: true,
  },
  {
    id: "combo-natal",
    name: "Caixa de Natal",
    description: "Para presentear quem você ama neste Natal",
    items: [
      "2x Chocolate Meio Amargo",
      "2x Nutella",
      "2x Doce de Leite",
      "Embalagem especial de Natal",
    ],
    price: 7500, // TODO: dado real
    seasonal: true,
    seasonLabel: "Especial de Natal",
    active: false, // TODO: ativar na época
  },
];
