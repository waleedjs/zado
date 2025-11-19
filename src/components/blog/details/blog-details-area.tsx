"use client";

import React, { useState } from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { Tag } from "@/components/svg";
import BlogDetailsNavigation from "./blog-details-navigation";
import Link from "next/link";
import { IBlogDT } from "@/types/blog-d-t";
import { blog_data } from "@/data/blog-data";
import { useTheme } from "next-themes";
// import DOMPurify from 'isomorphic-dompurify';
import styles from './blog-details-area.module.scss';

interface Props {
  blog: IBlogDT;
}

export default function BlogDetailsArea({ blog }: Props) {
    const [showShareOptions, setShowShareOptions] = useState(false);
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const { theme } = useTheme();
    const currentTheme = theme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

   const copyToClipboard = () => {
     navigator.clipboard.writeText(currentUrl);
     alert('Link copied to clipboard!');
   };

   return (
     <section className="postbox__area tp-blog-sidebar-sticky-area pt-120">
       <div className="container">
         <div className="row">
           <div className="col-xxl-8 col-xl-8 col-lg-8">
             <div className="postbox__wrapper">
               {/* Blog Featured Image */}
               <div className="blog-details-featured-image mb-40">
                 <Image
                   src={blog.img!}
                   alt={`Featured image for blog post: ${blog.title}`}
                   title={blog.title}
                   width={800}
                   height={400}
                   style={{
                     width: "100%",
                     height: "400px",
                     objectFit: "cover"
                   }}
                   className="blog-featured-img d-none d-md-block"
                 />
                 <Image
                   src={blog.img!}
                   alt={`Featured image for blog post: ${blog.title}`}
                   title={blog.title}
                   width={600}
                   height={300}
                   style={{
                     width: "100%",
                     height: "300px",
                     objectFit: "cover"
                   }}
                   className="blog-featured-img d-md-none"
                 />
               </div>

               <div className="blog-details-left-content">
                 <h1
                   className={`blog-details-left-title ${currentTheme === 'dark' ? 'theme-dark-heading' : 'theme-light-heading'}`}
                 >
                   {blog.title}
                 </h1>
                 <p className="mb-20">
                   {blog.desc}
                 </p>
                 {blog.content ? (
                   <div
                     className={`${styles.blogContent} blog-content ${currentTheme === 'dark' ? 'dark-mode' : ''}`}
                     dangerouslySetInnerHTML={{
                       __html: blog.content.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, (match, href, text) => {
                         return `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color: #ff6b35; font-weight: 500; text-decoration: none;">${text}</a>`;
                       }).replace(/<h2>/g, `<h2 class="blog-details-left-title ${currentTheme === 'dark' ? 'theme-dark-heading' : 'theme-light-heading'}">`)
                     }}
                   />
                 ) : (
                   <p>
                     At ZADO, we believe in delivering exceptional digital marketing solutions that drive real results for our clients. Our team of experts combines creativity with data-driven strategies to help businesses thrive in the digital landscape.
                   </p>
                 )}
               </div>
              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <Link href="#">Web Design</Link>
                      <Link href="#">SEO</Link>
                      <Link href="#">Web Development</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details navigation */}
              <BlogDetailsNavigation blog={blog} allBlogs={blog_data} />
              {/* blog details navigation */}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

