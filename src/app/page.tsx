
import HeroSection from "@/components/Banner/herosection";
import FeaturedSection from "@/components/HomePage/featuresection";
import GirlProductsSection from "@/components/HomePage/girlproductsection";
import ProductsSection from "@/components/HomePage/productsection";
import ShopCategories from "@/components/HomePage/shopcategories";
import SoftStyleSection from "@/components/HomePage/softstylesection";
import SummerSection from "@/components/HomePage/summersection";


export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Hero Section - Fixed Background */}
      <div className="fixed inset-0 z-0">
        <HeroSection />
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 pt-[100vh]">
        {/* Products Section - Scrolls over hero */}
        <ProductsSection />
        
         {/* Featured Collection Section */}
        <FeaturedSection />

        <SoftStyleSection/>

        <GirlProductsSection/>
        <SummerSection/>
        <ShopCategories/>
       
      </div>

    </main>
  );
}