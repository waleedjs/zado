import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import services_data from "@/data/services-data";

export const metadata: Metadata = {
  title: "ZADO - Logos and Branding",
  description: "Professional logo design and branding services to establish your unique brand identity. We create impactful visual identities that capture your brand essence.",
  keywords: "logo design, branding, brand identity, graphic design, visual identity",
  openGraph: {
    title: "ZADO - Logos and Branding",
    description: "Professional logo design and branding services to establish your unique brand identity.",
    type: "website",
  },
};

export default function LogosAndBrandingPage() {
  const service = services_data.find(s => s.slug === 'logos-and-branding');
  return <ServiceDetailsMain service={service} />;
}