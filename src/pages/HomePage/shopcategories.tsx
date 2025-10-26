"use client";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Outwear",
    subtitle: "Light, flowy, easy",
    image: "/images/product-1.avif",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Tops",
    subtitle: "Cute meets comfy",
    image: "/images/product-2.avif",
    bgColor: "bg-pink-200",
  },
  {
    id: 3,
    title: "Bottoms",
    subtitle: "Relaxed fits, always",
    image: "/images/product-3.avif",
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    title: "Accessories",
    subtitle: "Small things, big vibe",
    image: "/images/product-4.avif",
    bgColor: "bg-yellow-100",
  },
];

export default function ShopCategories() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-[Cabinet_Grotesk]">
            Shop Categories
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            View and find what you want.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex flex-col items-center cursor-pointer transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-[420px] rounded-[24px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={400}
                  height={420}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

             {/* Floating Label Box */}
              <div
                className={`${cat.bgColor} absolute bottom-6 w-[90%] rounded-2xl shadow-md text-center py-4 transition-all duration-500 overflow-hidden group-hover:py-6`}
              >
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {cat.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">{cat.subtitle}</p>
                </div>

                {/* Shop Now Button */}
                <div className="mt-4 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
