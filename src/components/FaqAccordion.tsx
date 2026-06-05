"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-creme-dark"
        >
          <AccordionTrigger className="cursor-pointer py-4 text-left font-sans text-lg font-semibold text-marrom hover:no-underline [&>svg]:text-caramelo">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-texto">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
