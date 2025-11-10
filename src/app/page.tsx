import { Metadata } from "next";
import HomeFourPage from "./home/page";

export const metadata: Metadata = {
  title: "ZADO - Digital Marketing Agency | Creative Solutions & Digital Strategies",
  description: "ZADO is a leading digital marketing agency specializing in creative solutions, digital strategies, and innovative marketing campaigns. Transform your business with our expert team.",
  keywords: "digital marketing agency, creative solutions, digital strategies, marketing campaigns, ZADO, branding, SEO, social media marketing",
  openGraph: {
    title: "ZADO - Digital Marketing Agency | Creative Solutions & Digital Strategies",
    description: "ZADO is a leading digital marketing agency specializing in creative solutions, digital strategies, and innovative marketing campaigns.",
    type: "website",
    url: "https://zadoagency.com",
    siteName: "ZADO Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZADO - Digital Marketing Agency | Creative Solutions & Digital Strategies",
    description: "ZADO is a leading digital marketing agency specializing in creative solutions, digital strategies, and innovative marketing campaigns.",
  },
};

export default function Home() {
  return (
    <>
      <HomeFourPage />
    </>
  );
}
