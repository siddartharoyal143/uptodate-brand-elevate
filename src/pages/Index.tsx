import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import OEMServices from "@/components/OEMServices";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCategories />
      <OEMServices />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
