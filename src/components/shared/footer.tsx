import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-white pt-9 relative">
      <footer className="max-w-7xl mx-auto px-6 relative">
        <div className="relative bg-[#e5c8f7] rounded-3xl overflow-hidden h-[560px]">
          {/* Background Large Text - Bottom aligned */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[24rem] font-bold text-purple-400/30 select-none leading-none translate-y-16 pb-10">
              Velaa
            </h1>
          </div>

          {/* Main Content */}
          <div className="relative z-10 px-8 md:px-12 py-10">
            {/* Top Section - Subscribe on left, Links on right */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
              {/* Left - Subscribe Section */}
              <div className="lg:w-80 space-y-4">
                <h3 className="text-base font-medium text-gray-900 leading-snug">
                  Subscribe to our mailing list & <br />
                  Earn 20% off code to your inbox
                </h3>

                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 px-5 py-2.5 text-gray-800 focus:outline-none text-sm"
                  />
                  <button className="bg-black text-white p-2.5 rounded-full mr-1 hover:bg-gray-800 transition">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed max-w-lg">
                  By joining our email list, you're saying yes to style updates, cozy vibes, 
                  and thoughtful emails. We'll always treat your info with care.
                </p>
              </div>

              {/* Right - 4 Columns of Links */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Products Column */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    Products
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><a href="#" className="hover:underline">Women</a></li>
                    <li><a href="#" className="hover:underline">Men</a></li>
                    <li><a href="#" className="hover:underline">Collections</a></li>
                    <li><a href="#" className="hover:underline">Categories</a></li>
                  </ul>
                </div>

                {/* Company Column */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    Company
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><a href="/about-us" className="hover:underline">About us</a></li>
                    <li><a href="/journal" className="hover:underline">Journal</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li><a href="/contact-us" className="hover:underline">Contact us</a></li>
                  </ul>
                </div>

                {/* Find Us On Column */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    Find us on
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Twitter/x.com</a></li>
                    <li><a href="#" className="hover:underline">Threads</a></li>
                    <li><a href="#" className="hover:underline">Etsy</a></li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                    Legal
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><a href="/legal/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
                    <li><a href="/legal/shipping-returns" className="hover:underline">Shipping & Returns</a></li>
                    <li><a href="/legal/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">404</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-7 relative z-10 flex items-center justify-between text-xs text-gray-700 py-3">
        <p>© Velaa, 2025</p>
        <p>All Right Reserved</p>
      </div>
    </section>
  );
}