import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blog_data.find((b) => b.slug === params.slug);

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

const BlogDetailsPage = ({ params }: Props) => {
  const blog = blog_data.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailsMain blog={blog} />;
};

export default BlogDetailsPage;