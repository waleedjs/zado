import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog-modern";

export const metadata: Metadata = {
  title: "ZADO Blog | Digital Marketing Insights, Tips & Industry News",
  description: "Stay updated with ZADO's latest blog posts on digital marketing strategies, branding tips, SEO insights, and industry trends. Expert advice for business growth.",
  keywords: "digital marketing blog, marketing tips, SEO insights, branding strategies, ZADO blog, marketing news, business growth",
  openGraph: {
    title: "ZADO Blog | Digital Marketing Insights, Tips & Industry News",
    description: "Stay updated with ZADO's latest blog posts on digital marketing strategies, branding tips, SEO insights, and industry trends.",
    type: "website",
    url: "https://zadoagency.com/blog",
    siteName: "ZADO Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZADO Blog | Digital Marketing Insights, Tips & Industry News",
    description: "Stay updated with ZADO's latest blog posts on digital marketing strategies, branding tips, SEO insights, and industry trends.",
  },
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;