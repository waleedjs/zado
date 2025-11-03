import Link from "next/link";
import React from "react";
import { IBlogDT } from "@/types/blog-d-t";

interface Props {
  blog: IBlogDT;
  allBlogs: IBlogDT[];
}

export default function BlogDetailsNavigation({ blog, allBlogs }: Props) {
  const currentIndex = allBlogs.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;
  return (
    <div className="blog-details-navigation-style mb-120">
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
        {prevBlog ? (
          <Link className="project-details-1-prev" href={`/blog/${prevBlog.slug}`}>
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
            <span>Prev</span>
          </Link>
        ) : (
          <span className="project-details-1-prev disabled">
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
            <span>Prev</span>
          </span>
        )}
        <Link href="/blog">
          <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="3" r="3" fill="#19191A"/>
              <circle cx="3" cy="3" r="3" fill="#19191A"/>
              <circle cx="3" cy="17" r="3" fill="#19191A"/>
              <circle cx="17" cy="17" r="3" fill="#19191A"/>
            </svg>
          </span>
        </Link>
        {nextBlog ? (
          <Link className="project-details-1-next" href={`/blog/${nextBlog.slug}`}>
            <span>Next</span>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </Link>
        ) : (
          <span className="project-details-1-next disabled">
            <span>Next</span>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </span>
        )}
      </div>
    </div>
  );
}
