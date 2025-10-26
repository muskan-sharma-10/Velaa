'use client';

import { useEffect, useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQ[];
}

export default function FAQSection() {
  const [activeSection, setActiveSection] = useState('Company');

  const faqData: Record<string, FAQSection> = {
    Company: {
      title: 'Company',
      items: [
        {
          question: 'What is Velaa all about?',
          answer: 'Velaa is a design-focused online store that brings together thoughtfully made lifestyle products—from everyday essentials to limited-edition pieces.'
        },
        {
          question: 'Where is Velaa based?',
          answer: "We're proudly based on Earth, but we work with creators and makers from around the Galaxy to bring you the best."
        },
        {
          question: 'How did Velaa start?',
          answer: 'Velaa was born from a simple idea: making beautifully crafted, functional products more accessible online. We launched in 2044 with a small collection and big ambitions.'
        },
        {
          question: 'Is Velaa an independent business?',
          answer: "Yes! We're an independently run company, which means we personally curate and oversee every product and collaboration that ends up on the site."
        },
        {
          question: 'Do you work with other brands or artists?',
          answer: "Absolutely. We collaborate with designers, artists, and niche brands to create unique collections and one-of-a-kind items."
        }
      ]
    },
    Products: {
      title: 'Products',
      items: [
        {
          question: 'What kind of products do you sell?',
          answer: 'We offer a curated mix of home goods, accessories, apparel, and more—always with an emphasis on quality, aesthetics, and sustainability.'
        },
        {
          question: 'Are your products ethically made?',
          answer: 'Yes. We prioritize partners who value ethical production, fair wages, and responsible materials. Sustainability matters to us.'
        },
        {
          question: 'How often do you release new items?',
          answer: "New drops happen every month. Some products are limited runs, so once they're gone, they might not come back!"
        },
        {
          question: 'Can I request a restock of a sold-out product?',
          answer: "You can sign up for back-in-stock alerts on the product page. For limited edition items, restocks aren't guaranteed—but we always listen to demand."
        },
        {
          question: 'Do your products come with a warranty or guarantee?',
          answer: "Yes, most items come with a standard guarantee. If there's an issue, we'll make it right—just reach out to our support team."
        }
      ]
    },
    Other: {
      title: 'Other',
      items: [
        {
          question: 'Do you offer gift wrapping?',
          answer: "Yes! You can add gift wrapping at checkout. We'll make it look special and include a note if you'd like."
        },
        {
          question: 'Can I buy Velaa products in a physical store?',
          answer: 'Currently, Velaa is online-only—but we occasionally pop up at select events or concept stores. Stay tuned via our newsletter.'
        },
        {
          question: 'How can I stay updated on new releases and offers?',
          answer: 'Subscribe to our newsletter or follow us on Instagram and TikTok @velaashop for first dibs on new drops and exclusive promos.'
        },
        {
          question: 'Do you offer discounts or promo codes?',
          answer: 'We do from time to time! Sign up for our newsletter or check the homepage banners for current deals.'
        }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    Object.keys(faqData).forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-40">
          {/* Left Sidebar - Fixed */}
          <div className="w-32 flex-shrink-0">
            <div className="sticky top-20 space-y-4 pt-5">
              {Object.keys(faqData).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left text-[13px] transition-colors ${
                    activeSection === section
                      ? 'text-gray-900 font-normal'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Scrollable with all sections */}
          <div className="flex-1 max-w-xl space-y-16">
            {Object.keys(faqData).map((sectionKey) => (
              <div key={sectionKey} id={sectionKey} className="pt-4">
                <h2 className="text-[13px] font-medium mb-12 text-gray-900 border-b border-gray-200 pb-4">
                  {faqData[sectionKey].title}
                </h2>

                <div className="space-y-10">
                  {faqData[sectionKey].items.map((faq, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-[13px] font-normal text-black">
                        {String(index + 1).padStart(2, '0')}. {faq.question}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}