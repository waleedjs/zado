import React from "react";
import Image from "next/image";
import { blog_modern } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import { IBlogDT } from "@/types/blog-d-t";
import BlogItem from "./blog-item/blog-item";
import Link from "next/link";

export default function BlogModern() {
  const blog_items = [...blog_modern];
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(blog_items, 6);

  return (
    <>
      <div className="tp-blog-standard-area pt-170">
        <div className="container container-1500">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-page-title">
                <h1 className="tp-section-title text-center">ZADO Blog</h1>
                <p className="text-center">Digital Marketing Insights, Tips & Industry News</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-realated-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            {currentItems.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <BlogItem item={item} />
              </div>
            ))}

            <div className="col-12">
              <div className="basic-pagination mt-40 d-flex align-items-center justify-content-center">
                <nav>
                  <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
