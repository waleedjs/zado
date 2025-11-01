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

   // Force theme detection for fast switching
   const currentTheme = theme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`tp-header-4-area tp-header-4-mob-space tp-transparent z-index-5 ${isSticky?'header-sticky':''}`}
          style={{
            position: isSticky ? 'fixed' : 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            transition: 'all 0.3s ease-in-out',
            backgroundColor: isSticky ? (currentTheme === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)') : 'transparent',
            backdropFilter: isSticky ? 'blur(25px)' : 'none',
            borderBottom: isSticky ? '1px solid rgba(255,255,255,0.15)' : 'none'
          }}
        >
          <div className="container container-1770">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-4">
                <div className="tp-header-logo">
                  <Link href="/" style={{ color: isSticky ? 'white' : theme === "dark" ? 'white' : 'black', fontSize: '24px', fontWeight: 'bold' }}>
=======
                  <Link href="/" style={{ color: isSticky ? 'white' : theme === "dark" ? 'white' : 'black', fontSize: '24px', fontWeight: 'bold' }}>
>>>>>>> 9662d95e512f6dae3ca41889f1eb07e291827806
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
                        color: isSticky ? (currentTheme === 'dark' ? 'white' : 'black') : (currentTheme === 'dark' ? 'white' : 'black'),
                        backgroundColor: isSticky ? (currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)') : 'transparent',
                        border: isSticky ? `1px solid ${currentTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}` : '1px solid currentColor',
                        transition: 'all 0.3s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.color = currentTheme === 'dark' ? '#fff' : '#000';
                        target.style.backgroundColor = currentTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.color = isSticky ? (currentTheme === 'dark' ? 'white' : 'black') : (currentTheme === 'dark' ? 'white' : 'black');
                        target.style.backgroundColor = isSticky ? (currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)') : 'transparent';
                      }}
                      href="/contact"
                    >
                      Get in touch
                    </Link>
                    <button onClick={() => setOpenOffCanvas(true)} className="ml-20 d-xl-none tp-header-4-bar tp-offcanvas-open-btn" style={{
                      color: isSticky ? (currentTheme === "dark" ? 'white' : 'black') : (currentTheme === "dark" ? 'white' : 'black'),
                      transition: 'color 0.3s ease-in-out'
                    }}>
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
