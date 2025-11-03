"use client";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog_data } from "@/data/blog-data";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header";
import FooterThree from "@/layouts/footers/footer";

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
    title: `${blog.title} | ZADO Digital Marketing Agency`,
    description: blog.desc || `Read about ${blog.category} strategies and insights from ZADO Digital Marketing Agency.`,
    keywords: `${blog.category}, digital marketing, ZADO, branding, business growth, marketing strategies`,
    openGraph: {
      title: `${blog.title} | ZADO Digital Marketing Agency`,
      description: blog.desc || `Read about ${blog.category} strategies and insights from ZADO Digital Marketing Agency.`,
      type: 'article',
      publishedTime: blog.date,
      authors: ['ZADO Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | ZADO Digital Marketing Agency`,
      description: blog.desc || `Read about ${blog.category} strategies and insights from ZADO Digital Marketing Agency.`,
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

const BlogDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blog = blog_data.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetailsArea blog={blog} />
          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;