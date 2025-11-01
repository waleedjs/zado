import { Metadata } from "next";
import { notFound } from "next/navigation";
import services_data from "@/data/services-data";
import ServiceDetailsMain from "@/pages/service/service-details";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services_data.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services_data.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `ZADO - ${service.title}`,
    description: service.text,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services_data.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Pass the service data to the component
  return <ServiceDetailsMain service={service} />;
}