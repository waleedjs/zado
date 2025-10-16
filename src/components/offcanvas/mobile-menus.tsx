import React from "react";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import { useTheme } from "next-themes";

export default function MobileMenus() {
  const { theme } = useTheme();

  return (
    <ul className="tp-mobile-menu">
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown mb-4">
          <Link
            href={menu.link}
            className="text-lg font-medium transition-colors duration-200"
            style={{
              color: theme === "dark" ? "white" : "black",
              fontFamily: "inherit"
            }}
          >
            {menu.title}
          </Link>
          {menu.dropdown_menus && (
            <ul className="tp-submenu submenu ml-4 mt-2">
              {menu.dropdown_menus.map((submenu, i) => (
                <li key={i} className="mb-2">
                  <Link
                    href={submenu.link}
                    className="text-base transition-colors duration-200"
                    style={{
                      color: theme === "dark" ? "white" : "black",
                      fontFamily: "inherit"
                    }}
                  >
                    {submenu.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}