"use client";

import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <section className="relative w-full h-[56vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <Image
          src="/images/privacy-policy-bg.avif"
          alt="privacy-policy background"
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
           Privacy Policy
          </h2>
          <p className="text-[#524200] text-[13.5px] leading-relaxed">
           At Velaa Online Shop, trust in our robust privacy measures and transparent data handling. We’re dedicated to safeguarding your information.
          </p>
        </div>
      </div>
    </section>
  );
}
