export interface SiteInfo {
  logoSrc: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  instagram: string;
  instagramUrl: string;
  city: string;
  deliveryArea: string;
  hours: string;
  orderLeadTime: string;
}

export const siteInfo: SiteInfo = {
  logoSrc: "/images/logo.png",
  // Link oficial de contato — o mesmo divulgado no Instagram da Uai Cookies
  whatsappUrl:
    "https://api.whatsapp.com/message/P6JER47EO4DLA1?autoload=1&app_absent=0&utm_source=ig",
  whatsappDisplay: "O mesmo contato do Instagram",
  instagram: "@uaicookies_",
  instagramUrl: "https://www.instagram.com/uaicookies_/",
  city: "Uberlândia - MG",
  deliveryArea: "Uberlândia e região", // TODO: dado real
  hours: "Segunda a sábado, das 9h às 18h", // TODO: dado real
  orderLeadTime: "Encomendas com pelo menos 24h de antecedência", // TODO: dado real
};
