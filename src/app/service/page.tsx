import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "ZADO - Services page",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;