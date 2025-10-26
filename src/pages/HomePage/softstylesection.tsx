"use client";

import Image from "next/image";

export default function SoftStyleSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
         <div className="sm:mb-72">
           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 leading-tight font-[Cabinet_Grotesk]">
            A softer take on style.
          </h2>
          <p className="text-gray-600 text-base md:text-[14px] leading-relaxed max-w-lg mx-auto md:mx-0">
            We’re here for effortless fashion that fits your mood — light, calm,
            and just a little playful. Inspired by pastel palettes, natural
            textures, and the kind of pieces you’ll reach for{" "}
            <em>every day.</em>
          </p>
         </div>

          {/* FLOATING TAGS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-16">
            <span className="bg-pink-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              24 years in service
            </span>
            <span className="bg-green-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              5+ Countries
            </span>
            <span className="bg-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              Free Shipping
            </span>
            <span className="bg-yellow-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              3 Sub brands
            </span>
            <span className="bg-blue-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              10M+ Happy Customers
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden bg-[#E6D8F6] w-full max-w-[600px]">
            <Image
              src="/images/soft-fashion.avif"
              alt="Fashion model"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
