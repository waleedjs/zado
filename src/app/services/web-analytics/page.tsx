import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import services_data from "@/data/services-data";

export const metadata: Metadata = {
  title: "ZADO - Web Analytics",
  description: "Data-driven web analytics services to optimize performance and user experience. Get actionable insights to improve your website.",
  keywords: "web analytics, data analysis, conversion tracking, user behavior, performance optimization",
  openGraph: {
    title: "ZADO - Web Analytics",
    description: "Data-driven web analytics services to optimize performance and user experience.",
    type: "website",
  },
};

export default function WebAnalyticsPage() {
  const service = services_data.find(s => s.slug === 'web-analytics');
  return <ServiceDetailsMain service={service} />;
}