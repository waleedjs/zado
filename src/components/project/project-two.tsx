"use client";
import React from "react";
import Image from "next/image";

const project_data = [
  {
    id: 1,
    img: "/assets/img/home-02/project/project-1.webp",
    subtitle: "SEO Campaign",
    title: "Traffic Boost",
  },
  {
    id: 2,
    img: "/assets/img/home-02/project/project-2.webp",
    subtitle: "Social Media",
    title: "Brand Engagement",
  },
  {
    id: 3,
    img: "/assets/img/home-02/project/project-3.webp",
    subtitle: "Content Marketing",
    title: "Lead Generation",
  },
  // {
  //   id: 4,
  //   img: "/assets/img/home-02/project/project-4.webp",
  //   subtitle: "PPC Ads",
  //   title: "Conversion Rate",
  // },
  // {
  //   id: 5,
  //   img: "/assets/img/home-02/project/project-5.webp",
  //   subtitle: "Email Marketing",
  //   title: "Customer Retention",
  // },
  {
    id: 6,
    img: "/assets/img/home-02/project/project-6.webp",
    subtitle: "Analytics",
    title: "Data Insights",
  },
  {
    id: 7,
    img: "/assets/img/home-02/project/project-7.webp",
    subtitle: "Web Design",
    title: "User Experience",
  },
];

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt={`${item.title} project showcase`} title={`${item.title} project showcase`} width={900} height={500} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
