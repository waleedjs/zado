import { Metadata } from "next";
import BlogDetailsMain from "@/pages/blog/blog-details";

export const metadata: Metadata = {
  title: "ZADO - Blog Details page",
};

const BlogDetailsPage = () => {
  return (
    <BlogDetailsMain id={1} />
  );
};

export default BlogDetailsPage;