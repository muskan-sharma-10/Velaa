"use client";

import React from "react";

interface Stat {
  id: number;
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const stats: Stat[] = [
  {
    id: 1,
    number: "16K+",
    title: "Pieces sold worldwide",
    description:
      "Loved by customers across Europe, with every piece crafted to make a lasting impression.",
    bgColor: "bg-pink-200",
    textColor: "text-pink-900",
  },
  {
    id: 2,
    number: "12+",
    title: "Countries reached",
    description:
      "From Amsterdam to Barcelona, Velaa proudly travels with style—wherever you are.",
    bgColor: "bg-sky-300",
    textColor: "text-sky-900",
  },
  {
    id: 3,
    number: "98%",
    title: "Customer satisfaction rate",
    description:
      "Our buyers fell in love with the feel, fit, and philosophy behind each collection and individual products.",
    bgColor: "bg-yellow-200",
    textColor: "text-yellow-900",
  },
  {
    id: 4,
    number: "0%",
    title: "We don’t overproduce",
    description:
      "Rooted in slow fashion, we produce intentionally only what’s needed, nothing more.",
    bgColor: "bg-green-200",
    textColor: "text-green-900",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 font-[cabnet-grotesk]">
          Velaa by the Numbers
        </h2>
        <p className="text-gray-500 mb-12">
          A glimpse into the reach and impact of Velaa—measured through purpose,
          not just numbers.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`rounded-2xl p-7 ${stat.bgColor} shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <h3
                className={`text-4xl font-bold mb-4 ${stat.textColor}`}
              >
                {stat.number}
              </h3>
              <p className="font-medium text-gray-800 mb-2">{stat.title}</p>
              <p className="text-xs text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
