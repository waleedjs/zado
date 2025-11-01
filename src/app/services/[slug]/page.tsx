import { Metadata } from "next";
import { notFound } from "next/navigation";
import services_data from "@/data/services-data";
import ServiceDetailsMain from "@/pages/service/service-details";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services_data.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services_data.find((s) => s.slug === params.slug);

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

export default function ServicePage({ params }: Props) {
  const service = services_data.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Pass the service data to the component
  return <ServiceDetailsMain service={service} />;
}