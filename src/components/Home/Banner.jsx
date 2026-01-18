import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between py-16 lg:py-24 gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              The Green Leaf Bookstore
            </h1>
            <p className="mb-6 text-lg sm:text-xl">
              Explore a world of books and dive into stories that inspire,
              educate, and entertain.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link href="/products" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <Link href="/blog" className="btn btn-accent btn-lg">
                Learn More
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              width={500}
              height={500}
              src="/assets/book-hero-image.png"
              alt="Bookshelf Illustration"
              className="max-w-md w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
