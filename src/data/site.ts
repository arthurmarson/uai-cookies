export interface SiteInfo {
  logoSrc: string;
  whatsapp: string;
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
  whatsapp: "5534999999999", // TODO: dado real
  whatsappDisplay: "(34) 99999-9999", // TODO: dado real
  instagram: "@uaicookies", // TODO: dado real
  instagramUrl: "https://instagram.com/uaicookies", // TODO: dado real
  city: "Uberlândia - MG",
  deliveryArea: "Uberlândia e região", // TODO: dado real
  hours: "Segunda a sábado, das 9h às 18h", // TODO: dado real
  orderLeadTime: "Encomendas com pelo menos 24h de antecedência", // TODO: dado real
};
