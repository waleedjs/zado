"use client";

import React from "react";
import { notFound } from "next/navigation";
import { blog_data } from "@/data/blog-data";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import { IBlogDT } from "@/types/blog-d-t";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailsClient = ({ params }: Props) => {
  const [blog, setBlog] = React.useState<IBlogDT | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlog = async () => {
      const { slug } = await params;
      const foundBlog = blog_data.find((b) => b.slug === slug);
      if (!foundBlog) {
        notFound();
      }
      setBlog(foundBlog);
      setLoading(false);
    };

    fetchBlog();
  }, [params]);

  if (loading || !blog) {
    return <div>Loading...</div>;
  }

  return <BlogDetailsArea blog={blog} />;
};

export default BlogDetailsClient;