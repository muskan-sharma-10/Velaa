"use client";

import Image from "next/image";

export default function ShippingReturns() {
  return (
    <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <Image
          src="/images/shipping-bg.avif"
          alt="shipping background"
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
           Shipping & Returns
          </h2>
          <p className="text-[#524200] text-[13.5px] leading-relaxed">
           At Velaa Online Shop, enjoy reliable shipping and easy returns. We’re committed to a smooth shopping experience.
          </p>
        </div>
      </div>
    </section>
  );
}
