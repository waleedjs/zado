import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import services_data from "@/data/services-data";

export const metadata: Metadata = {
  title: "ZADO - Motion Design",
  description: "Creative motion design and animation services to bring your brand to life. We create stunning animations and motion graphics.",
  keywords: "motion design, animation, 2D animation, 3D animation, video production, brand storytelling",
  openGraph: {
    title: "ZADO - Motion Design",
    description: "Creative motion design and animation services to bring your brand to life.",
    type: "website",
  },
};

export default function MotionDesignPage() {
  const service = services_data.find(s => s.slug === 'motion-design');
  return <ServiceDetailsMain service={service} />;
}