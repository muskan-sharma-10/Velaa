"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-purple-100 to-white py-20">
      <div className="max-w-7xl mx-auto  text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold pt-16 text-purple-900 my-4">
          About us
        </h2>
        <p className="text-gray-600 text-sm max-w-sm mx-auto mb-24">
          Get to know the story, values, and vision behind Velaa—where modern
          fashion meets mindful design.
        </p>

        {/* Team Photos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-24 rounded-lg">
          {/* Card 1 */}
          <div className="transform -rotate-2 bg-purple-100 p-1 rounded-xl max-h-[50px] shadow-sm">
            <Image
              src="/images/about1.avif"
              alt="Team member 1"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="transform rotate-1 bg-green-100 p-1 rounded-xl  max-h-[50px] shadow-sm">
            <Image
              src="/images/about2.avif"
              alt="Team member 2"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="transform -rotate-1 bg-purple-100 p-1 rounded-xl max-h-[50px] shadow-sm">
            <Image
              src="/images/about3.avif"
              alt="Team member 3"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
