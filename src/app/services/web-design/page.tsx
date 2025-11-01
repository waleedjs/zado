import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import services_data from "@/data/services-data";

export const metadata: Metadata = {
  title: "ZADO - Web Design",
  description: "Modern and responsive web design services to create engaging digital experiences. We craft beautiful, user-friendly websites that drive results.",
  keywords: "web design, responsive design, UI/UX design, website development, digital experiences",
  openGraph: {
    title: "ZADO - Web Design",
    description: "Modern and responsive web design services to create engaging digital experiences.",
    type: "website",
  },
};

export default function WebDesignPage() {
  const service = services_data.find(s => s.slug === 'web-design');
  return <ServiceDetailsMain service={service} />;
}