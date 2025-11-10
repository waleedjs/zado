import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Contact ZADO | Get In Touch With Our Digital Marketing Experts",
  description: "Ready to transform your business? Contact ZADO today for expert digital marketing solutions, creative strategies, and innovative campaigns that drive results.",
  keywords: "contact ZADO, digital marketing agency contact, get in touch, marketing consultation, ZADO agency",
  openGraph: {
    title: "Contact ZADO | Get In Touch With Our Digital Marketing Experts",
    description: "Ready to transform your business? Contact ZADO today for expert digital marketing solutions, creative strategies, and innovative campaigns that drive results.",
    type: "website",
    url: "https://zadoagency.com/contact",
    siteName: "ZADO Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ZADO | Get In Touch With Our Digital Marketing Experts",
    description: "Ready to transform your business? Contact ZADO today for expert digital marketing solutions, creative strategies, and innovative campaigns that drive results.",
  },
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
