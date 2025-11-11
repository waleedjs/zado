import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItem({ item }: { item: IBlogDT }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        <Image
          src={item.img!}
          alt={item.imgAlt || `Blog post: ${item.title}`}
          title={item.imgTitle || `Blog post: ${item.title}`}
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "380px",
            objectFit: "cover",
          }}
          className="d-none d-md-block"
        />
        <Image
          src={item.img!}
          alt={item.imgAlt || `Blog post: ${item.title}`}
          title={item.imgTitle || `Blog post: ${item.title}`}
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
          }}
          className="d-md-none"
        />
        <div className="tp-blog-meta">
          <span>{item.date}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span>{item.category}</span>
        <h4 className="tp-blog-title-sm" style={{ lineHeight: '1.4' }}>
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
