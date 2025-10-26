"use client";

import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SummerSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Outer container */}
        <div className="relative w-full rounded-3xl max-h-[580px]  overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/summer2025.avif" 
            alt="Model wearing summer collection"
            width={1600}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between">
              
              {/* Left Side - Text */}
              <div className="flex flex-col justify-center text-left md:w-[45%] space-y-6 z-10">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight  font-[Cabinet_Grotesk]">
                  Summer 2025
                </h2>
                <p className="text-gray-800 text-base leading-relaxed">
                  Effortless fashion for every mood — light, calm, and a little playful.
                  <br />
                  Inspired by pastels, natural textures, and everyday essentials.
                </p>

                <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-all group w-fit">
                 <Link href="/products/allproduct"> <span className="text-base font-medium">Explore Collection</span></Link>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Side  */}
              <div className="relative md:w-[55%] flex justify-center items-center mt-10 md:mt-0">
                <button className="absolute top-[55%] left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
