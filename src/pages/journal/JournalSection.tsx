"use client";

import Image from "next/image";

export default function JournalSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background image */}
        <Image
          src="/images/journal-bg.avif"
          alt="Journal background"
          fill
          priority
          className="object-cover object-right md:object-center"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6d58b]/40 via-[#f6d58b]/50 to-white" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 ">
        <div className="max-w-[450px] text-left">
          <h2 className="text-4xl sm:text-5xl font-[cabinet-grotesk] font-semibold text-[#524200] mb-3">
            Journal
          </h2>
          <p className="text-[#524200] text-[15px] leading-relaxed">
            From design notes to seasonal reflections — stories that go beyond
            the clothes.
          </p>
        </div>
      </div>
    </section>
  );
}
