import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// images
import port_1 from "@/assets/img/home-03/portfolio/port-1.webp";
import port_2 from "@/assets/img/home-03/portfolio/port-2.webp";
import port_3 from "@/assets/img/home-03/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-03/portfolio/port-4.jpg";
import port_5 from "@/assets/img/home-03/portfolio/port-5.jpg";
import port_6 from "@/assets/img/home-03/portfolio/port-6.jpg";
import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_5,
    img_2: port_6,
    meta: "DEC 2024 . Real Estate Website",
    title: "Real Estate Industry",
    link: "https://bungalowfinder.ca/",
  },
  {
    id: 2,
    img_1: port_1,
    img_2: port_2,
    meta: "AUG 2025 . Creative",
    title: "Fashion Industry Projects",
    link: "https://dureshahwar.com/",
  },
  {
    id: 3,
    img_1: port_3,
    img_2: port_4,
    meta: "OCT 2024 .  Responsive Design",
    title: "Food Industry Projects",
    link: "https://maifrozenfood.com/",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt={`${item.title} project image 1`}
                        title={`${item.title} project image 1`}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="See Project"
                        aria-label="See Project"
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt={`${item.title} project image 2`}
                        title={`${item.title} project image 2`}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
