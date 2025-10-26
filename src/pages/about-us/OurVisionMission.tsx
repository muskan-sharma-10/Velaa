"use client";

import Image from "next/image";

export default function OurVisionMission() {
  return (
    <section className="w-full bg-[#fafafa] py-16 ">
      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] items-center gap-12">
        {/* Left Content */}
        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Velaa, we believe that beauty lives in the balance of contrast:
            bold simplicity, soft structure, and expressive tones. Our vision is
            to redefine everyday fashion with calm confidence and effortless
            charm.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/vision.avif"
            alt="Our Vision workspace"
            width={700}
            height={450}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/vision.avif"
            alt="Our Mission workspace"
            width={700}
            height={450}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Velaa, we believe that beauty lives in the balance of contrast:
            bold simplicity, soft structure, and expressive tones. Our mission
            is to redefine everyday fashion with calm confidence and effortless
            charm.
          </p>
        </div>
      </div>
    </section>
  );
}
