import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Web Design & Development",
    desc: " Build intuitive, user-friendly digital experiences. Our team crafts responsive websites and applications that not only look great but also deliver seamless functionality across all devices.",
  },
  {
    id: 2,
    icon: ser_1,
    title: "SEO Optimization",
    desc: "Boost your online visibility and drive organic traffic with our expert SEO services. We implement proven strategies to improve your search engine rankings and attract qualified leads to your website.",
  },
  {
    id: 3,
    icon: ser_2,
    title: "Social Media Marketing",
    desc: "Engage your audience and build brand loyalty through targeted social media campaigns. Our team creates compelling content and manages your social presence across all major platforms.",
  },
  {
    id: 4,
    icon: ser_3,
    title: "Content Creation",
    desc: "Deliver valuable content that resonates with your audience. From blog posts and videos to infographics and email newsletters, we help you establish thought leadership in your industry.",
  },
  {
    id: 5,
    icon: ser_4,
    title: "PPC Advertising",
    desc: "Maximize your ROI with data-driven pay-per-click campaigns. We optimize your ads across Google, Bing, and social platforms to ensure you're reaching the right audience at the right time.",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt tp-service-2-pb z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                OUR SERVICES
              </span>
              <h4 className="tp-section-title-40">
                We provide comprehensive digital solutions to boost your online presence and drive business growth.
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="Service section decorative shape" title="Service section decorative shape" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <span>
                          <Image src={s.icon} alt={`${s.title} service icon`} title={`${s.title} service icon`} />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
