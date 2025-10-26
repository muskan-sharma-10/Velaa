
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/pages/HomePage/featuresection";
import GirlProductsSection from "@/pages/HomePage/girlproductsection";
import ProductsSection from "@/pages/HomePage/productsection";
import ShopCategories from "@/pages/HomePage/shopcategories";
import SoftStyleSection from "@/pages/HomePage/softstylesection";
import SummerSection from "@/pages/HomePage/summersection";



export default function Home() {
  return (
    <main className="relative min-h-screen">
 <HeroSection
        title="Shop Pastel Dreams"
        subtitle="A soft-hued escape into calm. This dreamy collection plays with light tones, airy fabrics, and soothing textures."
        textColor="text-green-800"
      />
      {/* Hero Section - Fixed Background */}
      <div className="fixed inset-0 z-0">
     

      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 pt-[100vh]">
        {/* Products Section - Scrolls over hero */}
        <ProductsSection/>
        
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