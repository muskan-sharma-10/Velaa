"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <Image
          src="/images/contact-bg.avif"
          alt="Contact background"
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
            Contact us
          </h2>
          <p className="text-[#524200] text-[13.5px] leading-relaxed">
            We’re here for you — reach out about orders, sizing, collaborations, or anything else on your mind.
          </p>
        </div>
      </div>
    </section>
  );
}
