"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, X } from "lucide-react";
import NavDropdownCard from "../ui/NavDropdownCard";
import CartDrawer from "../ui/CartDrawer";
import Link from "next/link";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownData = {
    women: {
      links: [
        { label: "Shop All", href: "/women" },
        { label: "Outwear", href: "/women/outwear" },
        { label: "Tops", href: "/women/tops" },
        { label: "Bottoms", href: "/women/bottoms" },
        { label: "Accessories", href: "/women/accessories" },
      ],
    },
    men: {
      links: [
        { label: "Shop All", href: "/men" },
        { label: "Outerwear", href: "/men/outerwear" },
        { label: "Tops", href: "/men/tops" },
        { label: "Bottoms", href: "/men/bottoms" },
        { label: "Accessories", href: "/men/accessories" },
      ],
    },
    collections: {
      links: [
        { label: "All collections", href: "/collections/new" },
        { label: "Pastel Dreams", href: "/collections/trending" },
        { label: "Summer 2025", href: "/collections/best" },
      ],
    },
    company: {
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Journal", href: "/journal" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact us", href: "/contact-us" },
      ],
    },
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSearchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between relative">
            {/* Left Nav */}
            <nav className="flex items-center gap-8 relative">
              {Object.keys(dropdownData).map((item) => {
                const key = item as keyof typeof dropdownData;
                return (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button
                      className={`text-sm font-normal transition-opacity ${
                        isScrolled
                          ? "text-[#151517] hover:opacity-70"
                          : "text-[#151517] hover:opacity-80"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                    {activeMenu === item && dropdownData[key] && (
                      <NavDropdownCard links={dropdownData[key].links} />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center">
              <Link href="/" ><div
                className={`text-2xl font-serif ${
                  isScrolled ? "text-[#151517]" : "text-[#151517]"
                }`}
              >
                Velaa
              </div>
              </Link>
              <div className="flex justify-center gap-0.5 mt-0.5">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full ${
                      isScrolled ? "bg-black" : "bg-black"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`hover:opacity-70 transition-opacity ${
                  isScrolled ? "text-[#151517]" : "text-[#151517]"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`flex items-center gap-2 hover:opacity-70 transition-opacity ${
                  isScrolled ? "text-[#151517]" : "text-[#151517]"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="text-sm">Cart</span>
                <span className="text-sm">(0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50">
          <div className="max-w-lg mx-auto px-4 pt-32">
            <div className="relative">
              <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg px-3 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-base text-gray-700 placeholder-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}