
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import whiteLogo from '@/assets/img/logo/Zado Final Logo Design White.png';
import { RightArrow } from '@/components/svg';
import Link from 'next/link';
import Loader from '@/components/loader';

export default function FooterThree() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "594b1d84-c2bf-40b2-9762-15c47bd36275");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const responseData = await response.json();

    setIsLoading(false);

    if (responseData.success) {
      setResult("Success! You've been subscribed to our newsletter.");
      e.currentTarget.reset();
    } else {
      setResult("Error: Something went wrong. Please try again.");
    }

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <footer>

      <div className="tp-footer-4-area black-bg pt-70 pb-120" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }} role="img" aria-label="Footer background texture">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p>Have a project in mind? <br /> Let’s work together!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link className="tp-btn-white-lg" href="/contact">{"Let's"} Talk!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-2-area black-bg pb-20" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }} role="img" aria-label="Footer background texture">
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={whiteLogo} alt="ZADO Logo" title="ZADO Digital Marketing Agency Logo" width={120} height={120} />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>Drop us a message and we’ll reach out to you. Let’s make something that stands out.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Pages</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span className="text-lg">2255 Dundas Street West,<br />Suite 207 Mississauga, ON L5K 1R6</span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span className="text-sm"><Link href="mailto:info@zado.com">Email: info@zado.com</Link></span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">Subscribe to our newsletter</h4>
                  {result && (
                    <div className={`alert mb-4 p-3 rounded ${result.includes("Success") ? "bg-green-100 border border-green-400 text-green-700" : "bg-red-100 border border-red-400 text-red-700"}`}>
                      {result.includes("Success") ? "Thank you for subscribing! We'll keep you updated." : result}
                    </div>
                  )}
                  <form onSubmit={onSubmit}>
                    <div className="tp-footer-2-input p-relative">
                      <input name="email" type="email" placeholder="Enter your email..." required />
                      <button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <Loader size="sm" />
                          </div>
                        ) : (
                          <RightArrow />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }} role="img" aria-label="Footer background texture">
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>All rights reserved — {new Date().getFullYear()} © zado</p>
              </div>
            </div>
            {/* <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link className="mb-10" href="#">Linkedin</Link>
                <Link className="mb-10" href="#">Twitter</Link>
                <Link className="mb-10" href="#">Instagram</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </footer>
  )
}
