'use client';

import { Route } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PrivacyDescription() {
  const [activeSection, setActiveSection] = useState('PrivacyPolicy');
  
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
            <p className="text-sm text-gray-600 leading-relaxed">
              At Velaa Online Shop, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">1. Information We Collect</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We may collect various types of information from you, including but not limited to:
              <br/>
               <br/>
               - Personal Information: Such as your name, address, email, and phone number.
  <br/>
   <br/>
- Payment Information: Credit/debit card details or other payment methods.
  <br/>
   <br/>
- Usage Data: Information about how you use our website, including pages visited and actions taken.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Exchange Policy:</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We may collect various types of information from you, including but not limited to:
              <br/>
               -Personal Information: Such as your name, address, email, and phone number.
  <br/>
- Payment Information: Credit/debit card details or other payment methods.
  <br/>
- Usage Data: Information about how you use our website, including pages visited and actions taken.
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
