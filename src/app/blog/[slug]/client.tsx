"use client";

import React from "react";
import { notFound } from "next/navigation";
import { blog_data } from "@/data/blog-data";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import { IBlogDT } from "@/types/blog-d-t";
import useScrollSmooth from "@/hooks/use-scroll-smooth";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailsClient = ({ params }: Props) => {
  useScrollSmooth();
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
    return (
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <BlogDetailsArea blog={blog} />
    </main>
  );
};

export default BlogDetailsClient;