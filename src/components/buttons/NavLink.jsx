"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`hover:text-primary ${
        path === href ? "text-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
