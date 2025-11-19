import React, { useState } from "react";
import Image from "next/image";
import { blog_data } from "@/data/blog-data";
import Link from "next/link";

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const rc_posts = [...blog_data.filter((b) => b.img && b.slug)].slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const searchWords = searchTerm.toLowerCase().split(' ').filter(word => word.length > 0);
      const results = blog_data.filter(blog => {
        const title = blog.title.toLowerCase();
        const desc = blog.desc?.toLowerCase() || '';
        const category = blog.category.toLowerCase();

        // Check if all search words are present in title, desc, or category
        return searchWords.every(word =>
          title.includes(word) ||
          desc.includes(word) ||
          category.includes(word)
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };
  return (
    <div className="sidebar__wrapper sticky" style={{ position: 'sticky', top: '100px' }}>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-10 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog/${item.slug}`}>
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={item.img!}
                      alt="blog-img"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog/${item.slug}`}>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="sidebar__widget mb-65">
          <h3 className="sidebar__widget-title">
            Search Results
            <button onClick={clearSearch} className="clear-search-btn" style={{ float: 'right', background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>
              ✕
            </button>
          </h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {searchResults.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="rc__post mb-20 d-flex align-items-center"
                >
                  <div className="rc__post-thumb mr-20">
                    <Link href={`/blog/${item.slug}`}>
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        src={item.img!}
                        alt="blog-img"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </div>
                  <div className="rc__post-content">
                    <div className="rc__meta d-flex align-items-center">
                      <span>{item.date}</span>
                    </div>
                    <h3 className="rc__post-title">
                      <Link href={`/blog/${item.slug}`}>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Share Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
