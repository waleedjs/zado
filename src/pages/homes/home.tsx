"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterThree from "@/layouts/footers/footer";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* 2nd about section start */}
            <div
              className="ab-brand-area pt-120  black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
              }}>
              <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                    <div className="ab-brand-title-box">
                      <h1 className="ab-brand-title">About Us</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="ab-brand-content tp_title_anim">
                      <p>
                        We are ZADO, a Ontario-based creative studio that helps brands stand out, connect, and grow.
                        Through thoughtful branding, digital design, and motion experiences, we turn ideas into
                        experiences that feel effortless, meaningful, and memorable. Our work isn’t just about visuals —
                        it’s about helping your brand make an impact and leave a lasting impression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd about section end */}

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* video area start */}
            <VideoThree />
            {/* video area end */}

            {/* service area start */}
            <ServiceFour />
            {/* service area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
