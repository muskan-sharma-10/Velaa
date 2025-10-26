import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="relative w-full rounded-3xl overflow-hidden max-h-[630px]  bg-pink-100">
          {/* Background Image */}
          <Image
            src="/images/model-pink.avif" 
            alt="Model wearing pastel top"
            width={1600}
            height={100}
            className="w-full h-auto object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
              {/* Left Side - Plus Icon */}
              <button className="absolute top-[55%] left-[14%] -translate-y-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Plus className="w- h-5" />
              </button>

              {/* Right Side - Text Content */}
              <div className="md:w-[40%] ml-auto text-black bg-transparent space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight font-[Cabinet_Grotesk]">
                  Pastel Dreams
                </h2>
                <p className="text-sm text-gray-800 leading-relaxed max-w-5xl">
                  Effortless fashion for every mood — light, calm, and a little playful.
                  Inspired by pastels, natural textures, and everyday essentials.
                </p>

                <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-all hover:gap-4 mt-6 group">
                  <Link href="/products/allproduct"> <span className="text-base font-medium">Explore Collection</span></Link>
                 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
