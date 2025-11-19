'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import whiteLogo from '@/assets/img/logo/Zado Final Logo Design White.png';
import blackLogo from '@/assets/img/logo/Zado Final Logo Design Black.png';
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";
import { useTheme } from "next-themes";

export default function HeaderThree() {
   const {isSticky, headerFullWidth} = useStickyHeader(20);
    const { theme, setTheme } = useTheme();
    const [openOffcanvas, setOpenOffcanvas] = React.useState(false);
   useEffect(() => {
     headerFullWidth();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // Force theme detection for fast switching
   const currentTheme = theme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
   const [isScrolled, setIsScrolled] = React.useState(false);
   React.useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 20);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
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
                  <Link href="/">
                    <Image src={currentTheme === 'dark' ? whiteLogo : blackLogo} alt="ZADO Logo" title="ZADO Digital Marketing Agency Logo" />
                  </Link>
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
                    {/* Theme Toggle Switch */}
                    <div className="tp-theme-toggle-switch mr-20">
                      <div
                        className="theme-toggle-container"
                        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                        style={{
                          position: 'relative',
                          width: '80px',
                          height: '40px',
                          backgroundColor: currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'lightgray',
                          border: isSticky ? `1px solid ${currentTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}` : '1px solid rgba(255,255,255,0.3)',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0 10px',
                          overflow: 'hidden'
                        }}
                        title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = currentTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'lightgray';
                        }}
                      >
                        {/* Sliding Background */}
                        <div
                          className="theme-toggle-slider"
                          style={{
                            position: 'absolute',
                            top: '04px',
                            left: currentTheme === 'dark' ? '45px' : '3px',
                            width: '31px',
                            height: '31px',
                            backgroundColor: currentTheme === 'dark' ? '#ff6b35' : '#333',
                            borderRadius: '100%',
                            transition: 'all 0.3s ease-in-out',
                            zIndex: 1
                          }}
                        ></div>

                        {/* Sun Icon */}
                        <i
                          className="fa-regular fa-sun"
                          style={{
                            fontSize: '16px',
                            color: 'white',
                            zIndex: 2,
                            position: 'relative',
                            transition: 'color 0.3s ease-in-out'
                          }}
                        ></i>

                        {/* Moon Icon */}
                        <i
                          className="fa-solid fa-moon"
                          style={{
                            fontSize: '14px',
                            color: currentTheme === 'dark' ? '#333' : 'white',
                            zIndex: 2,
                            position: 'relative',
                            transition: 'color 0.3s ease-in-out'
                          }}
                        ></i>
                      </div>
                    </div>
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
                    <button onClick={() => setOpenOffcanvas(true)} className="ml-20 d-xl-none tp-header-4-bar tp-offcanvas-open-btn" style={{
                      color: isSticky || isScrolled ? (currentTheme === "dark" ? 'white' : 'black') : (currentTheme === "dark" ? 'white' : 'black'),
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
      <MobileOffcanvas openOffcanvas={openOffcanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  );
}
