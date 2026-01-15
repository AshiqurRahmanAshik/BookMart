import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold flex items-center gap-2 justify-center"
    >
      <Image
        alt="BookMart Logo"
        src="/assets/book-logo.png"
        width={80}
        height={40}
      />
      <h2>
        <span className="text-primary">Book </span>Mart
      </h2>
    </Link>
  );
};

export default Logo;
