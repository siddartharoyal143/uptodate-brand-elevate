import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-export.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Export Solutions
            <span className="block text-sustainable-light">Globally Trusted</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Delivering sustainable, high-quality bags, garments, and mats to international markets 
            with SEDEX, GRS, and ISO certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              View Our Products
            </Button>
            <Button variant="sustainable" size="xl">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-white">
        <div className="text-center">
          <div className="text-3xl font-bold text-sustainable-light">15+</div>
          <div className="text-sm opacity-80">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-sustainable-light">50+</div>
          <div className="text-sm opacity-80">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-sustainable-light">100%</div>
          <div className="text-sm opacity-80">Quality Assured</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;