import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import { IServiceData } from "@/data/services-data";

interface Props {
  service?: IServiceData;
}

export default function ServiceDetailsArea({ service }: Props) {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {service?.subtitle || "Design Studio"}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {service?.title || "Logo and branding"}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {service?.details?.description?.[0] || "Branding is essential to establish yourself in the market in a unique and permanent way. At Riveal, we attach great importance. We seek to understand your business to better convey your values and your talent through your brand image."}
                </p>
                <p className="tp_title_anim">
                  {service?.details?.description?.[1] || "Explore our achievements and let yourself be convinced!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                {service?.details?.description?.map((desc, index) => (
                  <p key={index} className={index === 0 ? "text-1 tp_title_anim" : ""}>
                    {desc}
                  </p>
                )) || (
                  <>
                    <p className="text-1 tp_title_anim">
                      Your logo is at the heart of your identity. An impactful
                      design, tailor-made and in line with your activity will allow
                      you to differentiate yourself and mark your audience.
                    </p>
                    <p>
                      Great user experience design lets users focus on the task they
                      have to complete and evokes emotion without distracting them.!
                    </p>
                  </>
                )}
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {service?.details?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) || (
                    <>
                      <li>Graphic research and production</li>
                      <li>Presentation of your logo on different media</li>
                      <li>
                        Advice on the graphic orientation of your logo or its
                        redesign
                      </li>
                      <li>Delivery of your logo in professional formats</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  {service?.details?.description?.[1] || "Great user experience design lets users focus on the task they have to complete & evokes emotion without distracting them. Bonus points for when it also looks & feels aesthetically pleasing!"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {service?.lists?.map((list, index) => {
                  const getServiceSlug = (listName: string) => {
                    switch (listName) {
                      case "Logo Design":
                      case "Graphic identity":
                      case "Business communication":
                      case "Web design":
                        return "logos-and-branding";
                      case "Responsive Design":
                      case "UI/UX Design":
                      case "User Experience":
                      case "Modern Interfaces":
                        return "web-design";
                      case "2D Animation":
                      case "3D Animation":
                      case "Video Production":
                      case "Brand Storytelling":
                        return "motion-design";
                      case "Traffic Analysis":
                      case "Conversion Tracking":
                      case "User Behavior":
                      case "Performance Optimization":
                        return "web-analytics";
                      default:
                        return service?.slug || "logos-and-branding";
                    }
                  };

                  return (
                    <Link
                      key={index}
                      href={`/services/${getServiceSlug(list)}`}
                      className={getServiceSlug(list) === service?.slug ? "active" : ""}
                    >
                      {list}
                    </Link>
                  );
                }) || (
                  <>
                    <Link href="/services/logos-and-branding">Strategy</Link>
                    <Link className="active" href={`/services/${service?.slug || 'logos-and-branding'}`}>
                      Logo Design
                    </Link>
                    <Link href="/services/web-design">Graphic identity</Link>
                    <Link href="/services/motion-design">Web Design</Link>
                    <Link href="/services/web-analytics">Development</Link>
                  </>
                )}
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  {service?.title || "Logo Design"}
                </h4>
                <p className="mb-20">
                  {service?.details?.description?.[0] || "Your logo is at the heart of your identity. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience."}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
