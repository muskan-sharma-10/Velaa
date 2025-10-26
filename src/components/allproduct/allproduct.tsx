"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  bgColor: string;
  outOfStock?: boolean;
  category: "pastel" | "summer";
}

const products: Product[] = [
  // Pastel Dreams Products
  {
    id: 1,
    name: "Coral Curve Skirt",
    image: "/images/product-1.avif",
    price: 100,
    oldPrice: 177,
    bgColor: "bg-pink-100",
    category: "pastel",
  },
  {
    id: 2,
    name: "Mist Ruffle Top",
    image: "/images/product-2.avif",
    price: 113,
    oldPrice: 160,
    bgColor: "bg-yellow-100",
    category: "pastel",
  },
  {
    id: 3,
    name: "Willow Knit Top",
    image: "/images/product-3.avif",
    price: 94,
    bgColor: "bg-purple-100",
    category: "pastel",
  },
  {
    id: 4,
    name: "Midnight Hoodie",
    image: "/images/product-4.avif",
    price: 97,
    bgColor: "bg-orange-100",
    category: "pastel",
  },
  {
    id: 5,
    name: "Coral Curve Skirt",
    image: "/images/product-5.avif",
    price: 100,
    oldPrice: 177,
    bgColor: "bg-pink-100",
    category: "pastel",
  },
  {
    id: 6,
    name: "Mist Ruffle Top",
    image: "/images/product-6.avif",
    price: 113,
    oldPrice: 160,
    bgColor: "bg-yellow-100",
    category: "pastel",
  },
  {
    id: 7,
    name: "Willow Knit Top",
    image: "/images/product-7.avif",
    price: 94,
    bgColor: "bg-purple-100",
    category: "pastel",
  },
  {
    id: 8,
    name: "Midnight Hoodie",
    image: "/images/product-8.avif",
    price: 97,
    bgColor: "bg-orange-100",
    category: "pastel",
  },
  
  // Summer 2025 Products (using different image paths)
  {
    id: 9,
    name: "Sky Blue Dress",
    image: "/images/summer-1.avif",
    price: 120,
    oldPrice: 180,
    bgColor: "bg-blue-100",
    category: "summer",
  },
  {
    id: 10,
    name: "Sage Tank Top",
    image: "/images/summer-2.avif",
    price: 85,
    bgColor: "bg-green-100",
    category: "summer",
  },
  {
    id: 11,
    name: "Olive Cami",
    image: "/images/summer-3.avif",
    price: 78,
    bgColor: "bg-purple-100",
    category: "summer",
  },
  {
    id: 12,
    name: "Mint Sweater",
    image: "/images/summer-4.avif",
    price: 105,
    bgColor: "bg-teal-100",
    category: "summer",
  },
  {
    id: 13,
    name: "Ocean Breeze Top",
    image: "/images/summer-5.avif",
    price: 95,
    bgColor: "bg-cyan-100",
    category: "summer",
  },
  {
    id: 14,
    name: "Sunset Tank",
    image: "/images/summer-6.avif",
    price: 88,
    oldPrice: 130,
    bgColor: "bg-amber-100",
    category: "summer",
  },
  {
    id: 15,
    name: "Coastal Linen Shirt",
    image: "/images/summer-7.avif",
    price: 110,
    bgColor: "bg-sky-100",
    category: "summer",
  },
  {
    id: 16,
    name: "Tropical Vibes Dress",
    image: "/images/summer-8.avif",
    price: 135,
    oldPrice: 190,
    bgColor: "bg-lime-100",
    category: "summer",
  },
];

const categoryContent = {
  pastel: {
    title: "Shop Pastel Dreams",
    description: "A soft-hued escape into calm. This dreamy collection plays with light tones, airy fabrics, and soothing textures.",
  },
  summer: {
    title: "Shop Summer 2025",
    description: "Your summer starts here. A curated capsule of warm-weather pieces inspired by sun-soaked days and slow evenings.",
  },
};

export default function AllProductPage() {
  const [activeCategory, setActiveCategory] = useState<"pastel" | "summer">("pastel");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-[Cabinet_Grotesk] my-2 text-gray-900">
            {categoryContent[activeCategory].title}
          </h2>
          <p className="text-md text-gray-600 max-w-md mx-auto">
            {categoryContent[activeCategory].description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mt-22 mb-4">
          <button
            onClick={() => setActiveCategory("pastel")}
            className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-normal transition-all ${
              activeCategory === "pastel"
                ? "bg-green-200 text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pastel Dreams
            {activeCategory === "pastel" && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => setActiveCategory("summer")}
            className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium transition-all ${
              activeCategory === "summer"
                ? "bg-purple-200 text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Summer 2025
            {activeCategory === "summer" && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Products Grid */}
        <Link href="/products">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                {/* Image container */}
                <div
                  className={`relative rounded-3xl overflow-hidden h-[420px] ${product.bgColor} flex items-center justify-center`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={600}
                    width={400}
                  />

                  {/* Out of Stock Overlay */}
                  {product.outOfStock && (
                    <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                      <div className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium">
                        Out of Stock
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="mt-4 text-left">
                  <h3 className="text-md font-normal group-hover:underline">
                    {product.name}
                  </h3>

                  <div className="space-x-2">
                    <span className="text-black text-sm">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}