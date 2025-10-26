"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { id: 1, image: "/images/look-1.avif", bg: "bg-purple-100" },
  { id: 2, image: "/images/look-2.avif", bg: "bg-orange-100" },
  { id: 3, image: "/images/look-3.avif", bg: "bg-sky-100" },
  { id: 4, image: "/images/look-4.avif", bg: "bg-orange-200" },
  { id: 5, image: "/images/look-5.avif", bg: "bg-green-100" },
  { id: 6, image: "/images/look-6.avif", bg: "bg-rose-100" },
];

// Infinite loop animation using Framer Motion
export default function WhatYoullFindSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-[cabnet-grotesk]">
          What You’ll Find at Velaa
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto mb-12">
          Essential hoodies, breezy tees, timeless accessories, and small
          seasonal collections — each tied together by our signature love for
          softness, style, and intention.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className={`relative w-[250px]  flex-shrink-0 rounded-2xl overflow-hidden ${item.bg}`}
            >
              <Image
                src={item.image}
                alt={`look-${item.id}`}
                width={280}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
