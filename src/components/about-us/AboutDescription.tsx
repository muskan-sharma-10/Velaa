"use client";

import Image from "next/image";

export default function AboutDescription() {
  return (
    <section className="relative w-full bg-white py-48 overflow-hidden">
      {/* Background wave */}
      <div className="absolute inset-x-0 bottom-0 opacity-10">
        <Image
          src="/images/wave.svg"
          alt="wave background"
          width={1600}
          height={200}
          className="w-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <p className="text-lg md:text-2xl text-purple-900 leading-relaxed font-bold font-[cabinet-grotesk]">
          Velaa is an online clothing brand built around the beauty of contrast
          — clean silhouettes in expressive tones. Whether it’s a lavender tee
          or a peach-toned hoodie, our collections are designed to be both
          effortless and eye-catching.
        </p>
      </div>
    </section>
  );
}
