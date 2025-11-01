'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.webp';
import ab_2 from '@/assets/img/home-02/about/ab-2.webp';
import ab_3 from '@/assets/img/home-02/about/ab-s.webp';

const AboutOne = () => {

  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                Driving Digital Success Through
                Innovative Marketing Strategies
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image width={301} height={376} src={ab_1} alt="ab-img"/>
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image style={{width:"100%", height:"auto"}} width={221} height={278}  src={ab_2} alt="ab-img" />
                <span className="tp-about-2-thumb-text">DIGITAL MARKETING EXPERTS</span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span>EXPERTISE IN DIGITAL MARKETING</span>
              <p className="mb-30">
                At Zado, we specialize in transforming businesses through innovative digital marketing solutions. Our team of experts leverages the latest strategies and technologies to help brands connect with their audience, drive traffic, and achieve measurable results.
              </p>
              <p className="mb-0">
                From SEO and social media marketing to content creation and PPC campaigns, we provide comprehensive services tailored to your unique needs and goals.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1">
            <div className="tp-about-2-right-thumb text-end">
              <Image style={{ width: "100%", height: "auto" }} data-speed="auto" src={ab_3} alt="ab-img" data-lag="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;