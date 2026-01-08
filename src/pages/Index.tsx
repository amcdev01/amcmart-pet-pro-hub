import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CTASection from "@/components/home/CTASection";
import { COMPANY_INFO } from "@/lib/constants";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>AMC Mart - Veterinary Medical Equipment & Pet Solutions in Bangladesh</title>
      <meta
        name="description"
        content="AMC Mart is Bangladesh's trusted distributor of Mindray veterinary medical equipment, pet accessories, and nutrition solutions. Expert support and quality products."
      />
      
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <FeaturedProducts />
      <CTASection />
    </Layout>
  );
};

export default Index;
