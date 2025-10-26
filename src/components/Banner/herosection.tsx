"use client";

import { ChevronDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 " />
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full">
        <div className="pl-10 md:pl-20  max-w-2xl">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold text-gray-900 mb-2 font-[Cabinet_Grotesk] leading-tight whitespace-nowrap">
            Effortless Style, <br/>Thoughtfully Made
          </h1>

          <p className="text-black text-md mb-4 leading-relaxed max-w-sm">
            Modern essentials in soft tones and timeless cuts — designed to feel
            good and look even better.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-1 rounded-full hover:bg-gray-800 transition-colors">
              Shop Women
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-5 py-1 rounded-full border border-black hover:bg-gray-50 transition-colors">
              Shop Men
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6" />
        <ChevronDown className="w-6 h-6 -mt-4" />
      </div>
    </section>
  );
}
