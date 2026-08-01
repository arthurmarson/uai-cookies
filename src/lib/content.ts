import { cookies, combos, type Cookie, type Combo } from "@/data/menu";
import { siteInfo, type SiteInfo } from "@/data/site";
import { faqItems, type FaqItem } from "@/data/faq";
import { aboutText } from "@/data/about";

export function getMenu(): Cookie[] {
  return cookies;
}

export function getFeaturedCookies(): Cookie[] {
  return cookies.filter((c) => c.featured);
}

export function getCookiesByCategory(
  category: Cookie["category"]
): Cookie[] {
  return cookies.filter((c) => c.category === category);
}

export function getCombos(): Combo[] {
  return combos;
}

export function getActiveCombos(): Combo[] {
  return combos.filter((c) => c.active);
}

export function getSeasonalCombos(): Combo[] {
  return combos.filter((c) => c.seasonal && c.active);
}

export function getSiteInfo(): SiteInfo {
  return siteInfo;
}

export function getLogoSrc(): string {
  return siteInfo.logoSrc;
}

// Usamos o link curto oficial (api.whatsapp.com/message/<codigo>), o mesmo do
// Instagram. Esse formato nao aceita texto pre-preenchido via `?text=`, entao o
// parametro `message` fica aceito por compatibilidade, mas e ignorado.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getWhatsAppUrl(_message?: string): string {
  return siteInfo.whatsappUrl;
}

export function getFaq(): FaqItem[] {
  return faqItems;
}

export function getAboutText(): string {
  return aboutText;
}

export function formatPrice(cents: number): string {
  return `R$ ${(cents / 100).toFixed(2).replace(".", ",")}`;
}
