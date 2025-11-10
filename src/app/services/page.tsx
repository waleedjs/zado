import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "ZADO Services | Digital Marketing, Web Development & Design Solutions",
  description: "Explore ZADO's comprehensive digital services including software development, graphic design, web & mobile development, digital marketing, SEO, and email marketing solutions.",
  keywords: "digital marketing services, web development, software development, graphic design, SEO services, email marketing, ZADO agency",
  openGraph: {
    title: "ZADO Services | Digital Marketing, Web Development & Design Solutions",
    description: "Explore ZADO's comprehensive digital services including software development, graphic design, web & mobile development, digital marketing, SEO, and email marketing solutions.",
    type: "website",
    url: "https://zadoagency.com/services",
    siteName: "ZADO Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZADO Services | Digital Marketing, Web Development & Design Solutions",
    description: "Explore ZADO's comprehensive digital services including software development, graphic design, web & mobile development, digital marketing, SEO, and email marketing solutions.",
  },
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;