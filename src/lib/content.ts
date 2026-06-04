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

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteInfo.whatsapp}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
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
