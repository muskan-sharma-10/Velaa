import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  bgColor: string;
  outOfStock?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Coral Curve Skirt",
    image: "/images/product-1.avif",
    price: 100,
    oldPrice: 177,
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    name: "Mist Ruffle Top",
    image: "/images/product-2.avif",
    price: 113,
    oldPrice: 160,
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Willow Knit Top",
    image: "/images/product-3.avif",
    price: 94,
    bgColor: "bg-purple-100",
  },
  {
    id: 4,
    name: "Midnight Hoodie",
    image: "/images/product-4.avif",
    price: 97,
    bgColor: "bg-orange-100",
  },
    {
    id: 5,
    name: "Coral Curve Skirt",
    image: "/images/product-5.avif",
    price: 100,
    oldPrice: 177,
    bgColor: "bg-pink-100",
  },
  {
    id: 6,
    name: "Mist Ruffle Top",
    image: "/images/product-6.avif",
    price: 113,
    oldPrice: 160,
    bgColor: "bg-yellow-100",
  },
  {
    id: 7,
    name: "Willow Knit Top",
    image: "/images/product-7.avif",
    price: 94,
    bgColor: "bg-purple-100",
  },
  {
    id: 8,
    name: "Midnight Hoodie",
    image: "/images/product-8.avif",
    price: 97,
    bgColor: "bg-orange-100",
  },
];

export default function RelatedProducts() {
  return (
    <section className="min-h-screen bg-white py-10 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-1 font-[Cabinet_Grotesk]">
           Related Items
          </h2>
          <p className="text-sm text-gray-600">
           More styles you'll love, curated just for you.
          </p>
        </div>

        {/* Products Grid */}
      <Link href="/products/category" >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
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
                  <span className="text-black text-sm">
                    ${product.price}
                  </span>
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

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            href="/products/allproduct"
            className="text-gray-900 font-normal flex items-center justify-center gap-2 hover:underline"
          >
            View More →
          </Link>
        </div>
      </div>
    </section>
  );
}
