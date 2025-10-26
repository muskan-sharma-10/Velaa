"use client";

import Image from "next/image";

export default function TermsConditions() {
  return (
    <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <Image
          src="/images/term&condition-bg.avif"
          alt="term&condition background"
          fill
          priority
          className="object-cover object-right md:object-center"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b0cddf]/10 via-[#f2e6ef]/50 to-white" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 ">
        <div className="max-w-[450px] text-left">
          <h2 className="text-4xl  font-[cabinet-grotesk] font-semibold text-[#524200] mb-3">
           Terms & Conditions
          </h2>
          <p className="text-[#524200] text-[13.5px] leading-relaxed">
           At Velaa Online Shop, embrace clear and fair terms and conditions. We’re dedicated to a transparent and hassle-free shopping journey.
          </p>
        </div>
      </div>
    </section>
  );
}
