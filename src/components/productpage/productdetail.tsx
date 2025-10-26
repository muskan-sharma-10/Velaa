'use client';

import React, { useState } from 'react';
import { Minus, Plus, Package, Shirt } from 'lucide-react';
import Image from 'next/image';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XL');
  const [selectedColor, setSelectedColor] = useState('Pastel Pink');

  const colors = ['Pastel Pink', 'Purple', 'Pastel Green'];
  const images = [
    '/images/products/img1.avif',
    '/images/products/img2.avif',
    '/images/products/img3.avif'
  ];

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images (Scrollable) */}
         <div className="space-y-4">
  {images.map((img, idx) => (
    <div 
      key={idx}
      className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100"
    >
      <Image
        src={img}
        alt={`Product image ${idx + 1}`}
        width={500}
        height={800}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

          {/* Right Side - Product Details (Sticky) */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-500">
                Women • Accessories • AccessoriesSKU-004
              </div>

              {/* Title & Price */}
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-medium">Coral Curve Skirt</h1>
                <div className="text-right">
                  <div className="text-3xl font-medium">$100</div>
                  <div className="text-lg text-gray-400 line-through">$177</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                Accessories in pastel pink shade. Designed for everyday style. Made from high-quality, 
                sustainable materials, it offers both comfort and style. Finished with careful attention 
                to detail for a premium feel.
              </p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm text-gray-600 mb-3">Size</label>
                <button className="px-8 py-3 border-2 border-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                  {selectedSize}
                </button>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm text-gray-600 mb-3">Color</label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                        selectedColor === color
                          ? 'bg-gray-900 text-white'
                          : 'border-2 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Stock */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 border-2 border-gray-200 rounded-full px-6 py-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <span className="text-gray-500">Out of stock</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  disabled
                  className="flex-1 py-4 rounded-full bg-gray-300 text-gray-500 font-medium cursor-not-allowed"
                >
                  Not available
                </button>
                <button className="flex-1 py-4 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition">
                  Add to Cart
                </button>
              </div>

              {/* Payment Icons */}
              <div className="flex justify-center gap-3 pt-2">
                {['visa', 'mastercard', 'amex', 'discover', 'diners', 'unionpay', 'jcb'].map((card) => (
                  <div key={card} className="w-12 h-8 bg-gray-100 rounded border border-gray-200"></div>
                ))}
              </div>

              {/* Shipping Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-2">Shipping & Returns</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We offer free shipping on all orders over €50. Orders are processed within 1–2 
                      business days and delivered within 3–7 days. Need to return something? No problem — 
                      you have 14 days to request a return or exchange.
                    </p>
                    <button className="text-sm text-blue-900 font-medium mt-2 hover:underline">
                      For more: Shipping & Returns
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Shirt className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-2">Size & Fit Guide</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Each product includes a detailed sizing chart to help you find the perfect fit. Still 
                      unsure? We recommend sizing up if you're between sizes or contacting us for 
                      personalized guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;