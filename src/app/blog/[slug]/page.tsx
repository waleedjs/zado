import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog_data } from "@/data/blog-data";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header";
import FooterThree from "@/layouts/footers/footer";
// Import client component without .tsx extension to avoid TypeScript error
import BlogDetailsClient from "./client";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blog_data.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found - ZADO Digital Marketing Agency",
      description: "Read insightful articles about digital marketing, branding, and business growth strategies from ZADO.",
    };
  }

  return {
    title: `How Responsive Design Impacts Brand Credibility and SEO | ZADO Digital Marketing Agency`,
    description: "Discover how responsive design enhances brand credibility and boosts SEO performance in today's mobile-first digital landscape. Learn about mobile-first indexing, user experience, and Google ranking factors.",
    keywords: "responsive design, mobile-first design, SEO, brand credibility, mobile optimization, web design, digital marketing, ZADO, Google ranking, user experience",
    openGraph: {
      title: `How Responsive Design Impacts Brand Credibility and SEO | ZADO Digital Marketing Agency`,
      description: "Discover how responsive design enhances brand credibility and boosts SEO performance in today's mobile-first digital landscape. Learn about mobile-first indexing, user experience, and Google ranking factors.",
      type: 'article',
      publishedTime: blog.date,
      authors: ['ZADO Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `How Responsive Design Impacts Brand Credibility and SEO | ZADO Digital Marketing Agency`,
      description: "Discover how responsive design enhances brand credibility and boosts SEO performance in today's mobile-first digital landscape. Learn about mobile-first indexing, user experience, and Google ranking factors.",
    },
  };
}

export async function generateStaticParams() {
  return blog_data
    .filter((blog) => blog.slug)
    .map((blog) => ({
      slug: blog.slug!,
    }));
}

const BlogDetailsPage = ({ params }: Props) => {
  return (
    <Wrapper>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BlogDetailsClient params={params} />
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;