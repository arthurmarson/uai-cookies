# Uai Cookies 🍪

Landing page informativa para uma empresa fabricante artesanal de cookies recheados em Uberlândia - MG.

🔗 **Site no ar:** <https://uai-cookies.vercel.app/>

## 📌 Sobre o projeto

A Uai Cookies vende por Instagram e WhatsApp. O site centraliza cardápio, preços, história e canais de contato em um lugar só, com o CTA principal levando ao WhatsApp.

**Sem backend, sem banco, sem carrinho ou checkout** — o pedido é fechado na conversa do WhatsApp.

Estética: *"quentinho de casa mineira"* — tons quentes, cantos arredondados, fotos reais. **Mobile-first**, porque o público chega pelo Instagram, no celular.

## ✨ O que já existe

| Rota | Conteúdo |
|------|----------|
| `/` | Hero fullscreen, cookies em destaque, como funciona, preview da história, combos sazonais |
| `/cardapio` | Cookies e combos com preços |
| `/sobre` | História artesanal, valores |
| `/contato` | Canais (WhatsApp/Instagram), horários, área de entrega, FAQ |

Presentes em todas as páginas: navbar fixa com menu mobile, footer, FAB flutuante do WhatsApp e animações de fade-in no scroll (respeitando `prefers-reduced-motion`).

## 🛠️ Stack

| Tech | Versão | Notas |
|------|--------|-------|
| Next.js | 16.2.x | App Router, Server Components por padrão |
| React | 19.x | `"use client"` só quando precisa de interatividade |
| TypeScript | 5.x | Strict mode |
| Tailwind CSS | v4 | Tokens de marca em `globals.css` via `@theme inline` |
| shadcn/ui | latest | Baseado em `@base-ui/react` (**não** Radix) |
| lucide-react | 1.x | Ícones |
| pnpm | — | Único gerenciador permitido |

## 🚀 Como executar localmente

> Pré-requisitos: Node.js 20+ e [pnpm](https://pnpm.io/installation).
> **Use pnpm** — o projeto tem `pnpm-lock.yaml`; npm ou yarn quebram a consistência de deps.

```bash
git clone https://github.com/arthurmarson/uai-cookies.git
cd uai-cookies
pnpm install
pnpm dev
```

Abra <http://localhost:3000>.

### Outros comandos

```bash
pnpm build      # build de produção
pnpm start      # servir o build local
pnpm lint       # ESLint
pnpm dlx shadcn@latest add <componente>   # adicionar componente shadcn
```

## 📁 Estrutura

```
.
├── public/
│   └── images/           # imagens otimizadas servidas pelo next/image
└── src/
    ├── app/
    │   ├── layout.tsx    # layout raiz — fontes, navbar, footer, FAB
    │   ├── page.tsx      # Home
    │   ├── globals.css   # tokens de marca (@theme inline) e animações
    │   ├── cardapio/
    │   ├── sobre/
    │   └── contato/
    ├── components/
    │   └── ui/           # primitivos shadcn (accordion, button)
    ├── data/             # FONTE DE DADOS — menu, site, faq, about
    └── lib/
        ├── content.ts    # camada de acesso aos dados
        └── utils.ts      # cn() — merge de classes Tailwind
```

## 🎨 Tokens de marca

Definidos em `src/app/globals.css`:

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-creme` | `#F5EDDA` | Background principal |
| `--color-creme-dark` | `#EAD9A6` | Seções alternadas |
| `--color-caramelo` | `#B07A1E` | CTAs, destaques, ícones |
| `--color-marrom` | `#6E4A1A` | Títulos, texto forte |
| `--color-texto` | `#1A1A1A` | Texto principal |
| `--color-whatsapp` | `#25D366` | Botão e FAB do WhatsApp |

Fontes: **Caveat** (`font-display`, títulos expressivos) e **Quicksand** (`font-sans`, corpo e UI).

## 👨‍💻 Autor

[Arthur Marson](https://github.com/arthurmarson)
