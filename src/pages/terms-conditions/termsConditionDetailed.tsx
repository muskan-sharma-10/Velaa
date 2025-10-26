'use client';

import { Route } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

export default function TermsConditionsDetailedSection() {
  const [activeSection, setActiveSection] = useState('Terms & Conditions');

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
            <h1 className="text-xl font-semibold mb-6">1. Introduction</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to Velaa Online Shop! These Terms and Conditions ("Terms") govern your use
              of our website and any products or services we offer. By accessing or using our site,
              you agree to be bound by these Terms. If you do not agree with any part of these
              Terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">2. Eligibility</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              You must be at least 18 years old to use our website and make purchases. By using our
              site, you represent and warrant that you meet this age requirement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">3. Account Registration</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To make purchases, you may need to create an account with us. You agree to provide
              accurate, current, and complete information during the registration process. You are
              responsible for maintaining the confidentiality of your account and password and for
              restricting access to your computer or device. You agree to accept responsibility for
              all activities that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">4. Products and Services</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We offer a wide range of clothing and accessories for men, women, and unisex. We
              strive to provide accurate descriptions and images of our products. However, we cannot
              guarantee that the images or descriptions will be error-free or that the products will
              match the images exactly due to differences in screen resolutions and other factors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">5. Orders and Payments</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Placing Orders: You can place orders through our website. Orders are subject to
              availability and acceptance by us. We reserve the right to refuse or cancel any order
              at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">6.  Refunds and Returns</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Returns: You may return items within 30 days of delivery. Items must be in their original condition, with tags attached, and accompanied by a proof of purchase. Please contact our customer service team to initiate a return.
              <br/>
              Refunds: Refunds will be issued to the original form of payment within 14 days of receiving the returned item. We reserve the right to deduct a restocking fee or refuse a refund if the item is not returned in its original condition.
            </p>
          </div>

           <div>
            <h2 className="text-xl font-semibold mb-6">7. Shipping and Delivery</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
               Shipping Charges: Shipping charges apply to all orders and are calculated based on the weight and destination of your order.
              <br/>
              Delivery Time: We aim to deliver your order within the estimated delivery time provided during checkout. However, we cannot guarantee specific delivery dates and times.
              <br/>
              Lost or Damaged Items: If your order is lost or damaged in transit, please contact our customer service team immediately. We will work with the shipping carrier to resolve the issue.
            </p>
          </div>

           <div>
            <h2 className="text-xl font-semibold mb-6">8. Intellectual Property</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              All content on our website, including text, images, logos, and other materials, is the property of Velaa Online Shop or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any of our content without our prior written consent.
            </p>
          </div>
             <div>
            <h2 className="text-xl font-semibold mb-6">9.Limitation of Liability</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Velaa Online Shop and its affiliates, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or any products or services we offer.
            </p>
          </div>
             <div>
            <h2 className="text-xl font-semibold mb-6">10.Indemnification</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
             You agree to indemnify and hold Velaa Online Shop and its affiliates, officers, directors, employees, and agents harmless from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of our website or any breach of these Terms.
            </p>
          </div>
             <div>
            <h2 className="text-xl font-semibold mb-6">11. Governing Law</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization]. The arbitration shall take place in [Your Jurisdiction], and the decision of the arbitrator shall be final and binding on both parties.
            </p>
          </div>
           <div>
            <h2 className="text-xl font-semibold mb-6">13. Changes to Terms</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page, and your continued use of our website after such changes constitutes your acceptance of the revised Terms.
            </p>
          </div>
           <div>
            <h2 className="text-xl font-semibold mb-6">14. Contact Information</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have any questions or concerns about these Terms or our website, please contact our customer service team at [Email Address] or [Phone Number].
              <br/>
              <br/>
              By using Velaa Online Shop, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
              <br/>
              <br/>
              Thank you for choosing Velaa Online Shop!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
