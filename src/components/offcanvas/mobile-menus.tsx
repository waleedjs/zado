import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";
import { useTheme } from "next-themes";

export default function MobileMenus() {
  const { theme } = useTheme();

  return (
    <ul className="tp-mobile-menu">
      {mobile_menu_data.map((menu) => (
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
        </li>
      ))}
    </ul>
  );
}