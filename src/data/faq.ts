export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "como-pedir",
    question: "Como faço meu pedido?",
    answer:
      "Entre em contato pelo nosso WhatsApp, escolha seus cookies favoritos e combinamos a entrega. Simples assim!",
  },
  {
    id: "prazo-encomenda",
    question: "Qual o prazo mínimo para encomendas?",
    answer: "Placeholder — preencher com prazo real.", // TODO: dado real
  },
  {
    id: "area-entrega",
    question: "Vocês entregam em quais regiões?",
    answer: "Placeholder — preencher com regiões atendidas.", // TODO: dado real
  },
  {
    id: "pedido-minimo",
    question: "Qual o pedido mínimo?",
    answer: "Placeholder — preencher com pedido mínimo.", // TODO: dado real
  },
  {
    id: "pagamento",
    question: "Quais as formas de pagamento?",
    answer: "Placeholder — preencher com formas aceitas.", // TODO: dado real
  },
  {
    id: "validade",
    question: "Os cookies têm validade de quantos dias?",
    answer: "Placeholder — preencher com validade.", // TODO: dado real
  },
  {
    id: "restricoes",
    question: "Tem opção sem glúten ou sem lactose?",
    answer: "Placeholder — preencher com informações sobre restrições.", // TODO: dado real
  },
  {
    id: "personalizar-combo",
    question: "Posso personalizar os sabores de um combo?",
    answer: "Placeholder — preencher com política de personalização.", // TODO: dado real
  },
];
