'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import logo from '@/assets/img/logo/logo-white.png';
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";
import { useTheme } from "next-themes";

export default function HeaderThree() {
   const {isSticky, headerFullWidth} = useStickyHeader(20);
  const { theme } = useTheme();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`tp-header-4-area tp-header-4-mob-space tp-transparent z-index-5 ${isSticky?'header-sticky':''}`}
        >
          <div className="container container-1770">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-4">
                <div className="tp-header-logo">
                  <Link href="/" style={{ color: isSticky ? 'white' : theme === "dark" ? 'white' : 'black', fontSize: '24px', fontWeight: 'bold' }}>
                    ZADO
                  </Link>
                  {/* <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="tp-header-4-menu header-main-menu">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-7 col-8">
                <div className="tp-header-4-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-4-btn d-flex align-items-center ml-30">
                    <Link
                      className="tp-btn-border-sm d-none d-sm-block"
                      style={{
                        color: isSticky ? 'white' : theme === "dark" ? 'white' : 'black'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'black'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = isSticky ? 'white' : theme === "dark" ? 'white' : 'black'}
                      href="/contact"
                    >
                      Get in touch
                    </Link>
                    <button onClick={() => setOpenOffCanvas(true)} className="ml-20 d-xl-none tp-header-4-bar tp-offcanvas-open-btn" style={{ color: theme === "dark" ? 'white' : 'black' }}>
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
