'use client';

import { Route } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ShippingSection() {
  const [activeSection, setActiveSection] = useState('ShippingSection');

  const sections: { title: string; path: Route }[] = [
     { title: 'Privacy Policy', path: '/legal/privacy-policy' as Route },
     { title: 'Shipping & Returns', path: '/legal/shipping-returns' as Route },
     { title: 'Terms & Conditions', path: '/legal/terms-conditions' as Route },
   ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6 py-16">
        {/* Left Sidebar */}
       <aside className="md:w-1/4 lg:w-1/5">
                 <div className="sticky top-24 space-y-4">
                   {sections.map((section) => (
                     <Link
                       key={section.title}
                       href={section.path}
                       className="block w-full text-left text-sm text-gray-500 hover:text-gray-900 transition-colors"
                     >
                       {section.title}
                     </Link>
                   ))}
                 </div>
               </aside>

        {/* Right Content */}
        <main className="flex-1 max-w-2xl space-y-12">
          <div>
            <h1 className="text-xl font-semibold mb-6">Shipping:</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              We offer a variety of shipping options to ensure your order reaches you as quickly and conveniently as possible. Shipping charges are calculated based on the weight and destination of your order, and you can select your preferred shipping method during checkout. We aim to process and ship your order within [X] business days. Once your order is shipped, you will receive a confirmation email with tracking details. Please note that delivery times may vary depending on your location and the shipping service selected. If your order is lost or damaged in transit, please contact our customer service team immediately. We will work with the shipping carrier to resolve the issue and ensure you receive your items promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Returns:</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              At Velaa Online Shop, we want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return items within 30 days of delivery. Items must be in their original condition, with tags attached, and accompanied by a proof of purchase. To initiate a return, please contact our customer service team at [Email Address] or [Phone Number]. Once we receive your returned item, we will inspect it and notify you about the status of your refund. If your return is approved, we will initiate a refund to your original method of payment within 14 days. If you have any questions or need assistance with a return, our customer service team is here to help. We reserve the right to deduct a restocking fee or refuse a refund if the item is not returned in its original condition. Please note that shipping costs for returns are the responsibility of the customer unless the return is due to our error or the item is defective.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Exchange Policy:</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you would like to exchange an item, please follow the same return process. Once we receive and approve your return, we will ship the exchanged item to you. Please note that exchanges are subject to availability and may incur additional shipping charges.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Final Sale Items:</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Certain items, such as sale items, custom orders, or personalized products, may be marked as final sale and not eligible for return or exchange. Please check the product description for details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Us:</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have any questions or concerns about our shipping and return policies, or if you need assistance with your order, please do not hesitate to contact our customer service team at [Email Address] or [Phone Number]. We are here to help and ensure your shopping experience is as smooth as possible.
              <br/>
              Thank you for choosing Velaa Online Shop!
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
