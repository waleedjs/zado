'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";
import hero_bg from "@/assets/img/home-02/hero/hero-bg-1.jpg";

const HeroBannerTwo = () => {
  return (
    <div className="tp-hero-2-area tp-hero-2-pt" >
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative " style={{ backgroundColor: '#b98847' }}>
                <div className=" tp-gsap-bg tp-hero-bg-single">
                  <Image src={hero_bg} alt="hero-bg" title="about-hero-bg" fill style={{ display: 'none' }} />
                </div>
                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h1 className="tp-hero-2-title text-1 z-index-5">
                      About Us
                    </h1>
                    
                  </div>
                  <div className="tp-hero-2-content">
                    <p>
                     Creative solutions and digital strategies built to connect, captivate, and grow your business.
                    </p>
                    <div className="breadcrumb">
                      <div className="breadcrumb__list">
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span>About Us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
