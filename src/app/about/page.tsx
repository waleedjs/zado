import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "About ZADO | Digital Marketing Agency Driving Digital Success",
  description: "Learn about ZADO's mission to transform brands through digital solutions, creative strategies, and innovative marketing campaigns. Meet our expert team.",
  keywords: "about ZADO, digital marketing agency, creative solutions, digital strategies, marketing campaigns, ZADO team",
  openGraph: {
    title: "About ZADO | Digital Marketing Agency Driving Digital Success",
    description: "Learn about ZADO's mission to transform brands through digital solutions, creative strategies, and innovative marketing campaigns.",
    type: "website",
    url: "https://zadoagency.com/about",
    siteName: "ZADO Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ZADO | Digital Marketing Agency Driving Digital Success",
    description: "Learn about ZADO's mission to transform brands through digital solutions, creative strategies, and innovative marketing campaigns.",
  },
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;