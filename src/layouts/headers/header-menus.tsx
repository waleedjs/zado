"use client";
import { useEffect, useState } from "react";
import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const HeaderMenus = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // Scroll ka pata lagane ke liye
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text color ke liye behtar banaya gaya function
  const getTextColor = (isTitle = false) => {
    // Jab page scroll ho chuka ho
    if (isScrolled) {
      return isTitle ? "text-white" : "text-white hover:text-indigo-400";
    }
    // Jab page scroll na ho (Default state)
    if (isTitle) {
      return theme === "dark" ? "text-white" : "text-black";
    }
    return theme === "dark" ? "text-white hover:text-indigo-400" : "text-black hover:text-indigo-600";
  };

  // Background color ke liye helper function
  const getBgColor = () => {
    if (isScrolled) {
      return "bg-black text-white border-gray-800";
    }
    return theme === "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200";
  };
  
  // Link ke text color ke liye alag se function
  const getLinkTextColor = () => {
    if (isScrolled) {
      return "text-white hover:text-indigo-400";
    }
    return theme === "dark" ? "text-white hover:text-indigo-400" : "text-black hover:text-indigo-600";
  }

  return (
    <ul className="flex items-center gap-6">
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown relative group">
          {/* Main Menu Link */}
          <Link
            href={menu.link}
            className={`transition-colors duration-200 ${getLinkTextColor()}`}
          >
            {menu.title}
          </Link>

          {/* HOME MEGA MENU */}
          {menu.home_menus && (
            <div
              className={`tp-submenu submenu tp-mega-menu border shadow-lg transition-opacity duration-300 ${getBgColor()}`}
            >
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper p-4">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {menu.home_menus.map((home_menu, i) => (
                      <div key={i} className="col homemenu">
                        <div className="homemenu-thumb-wrap mb-4">
                          <div className="homemenu-thumb fix">
                            <Link href={home_menu.link}>
                              <Image
                                style={{ width: "auto", height: "auto" }}
                                src={home_menu.img}
                                alt="home-img"
                                width={250}
                                height={235}
                                className="rounded-lg"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className={`homemenu-title ${getTextColor(true)}`}>
                            <Link
                              href={home_menu.link}
                              className={`transition-colors duration-200 ${getLinkTextColor()}`}
                            >
                              {home_menu.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGES MEGA MENU */}
          {menu.pages_mega_menu && (
            <div
              className={`tp-submenu submenu tp-mega-menu border shadow-lg transition-opacity duration-300 ${getBgColor()}`}
            >
              <div className="tp-megamenu-wrapper p-6">
                <div className="row gx-50">
                  <div className="col-xl-8">
                    <div className="tp-megamenu-list-box">
                      <div className="row gx-50">
                        <div className="col-xl-8">
                          <div className="tp-megamenu-list">
                            <h4
                              className={`tp-megamenu-title font-semibold mb-2 ${getTextColor(true)}`}
                            >
                              {menu.pages_mega_menu.first.title}
                            </h4>
                            <ul className="space-y-1">
                              {menu.pages_mega_menu.first.submenus.map(
                                (psm, i) => (
                                  <li key={i}>
                                    <Link
                                      href={psm.link}
                                      className={`transition-colors duration-200 ${getLinkTextColor()}`}
                                    >
                                      {psm.title}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list tp-megamenu-list-2">
                            <h4
                              className={`tp-megamenu-title font-semibold mb-2 ${getTextColor(true)}`}
                            >
                              {menu.pages_mega_menu.second.title}
                            </h4>
                            <ul className="space-y-1">
                              {menu.pages_mega_menu.second.submenus.map(
                                (psm, i) => (
                                  <li key={i}>
                                    <Link
                                      href={psm.link}
                                      className={`transition-colors duration-200 ${getLinkTextColor()}`}
                                    >
                                      {psm.title}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-megamenu-shop-style">
                      <div className="tp-shop-banner-left p-relative">
                        <div className="tp-shop-banner-thumb">
                          
                        </div>
                        <div className={`tp-shop-banner-content ${getTextColor(true)}`}>
                          <h4 className="tp-shop-banner-title">Sale</h4>
                          <span>20% Off all Shoes</span>
                          <Link
                            className="tp-shop-btn text-indigo-600 dark:text-indigo-400 hover:underline"
                            href="/shop"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* DROPDOWN MENUS */}
          {menu.dropdown_menus && (
            <ul
              className={`tp-submenu submenu border shadow-md transition-opacity duration-300 ${getBgColor()} left-0`}
            >
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link
                    href={mm.link}
                    className={`block px-3 py-1 transition-colors duration-200 ${getLinkTextColor()}`}
                  >
                    {mm.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;