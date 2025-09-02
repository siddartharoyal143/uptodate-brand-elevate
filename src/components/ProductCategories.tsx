import { Button } from "@/components/ui/button";
import bagsImage from "@/assets/bags-product.jpg";
import garmentsImage from "@/assets/garments-product.jpg";
import matsImage from "@/assets/mats-product.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Premium Bags",
      description: "High-quality canvas, jute, and eco-friendly bags for global markets. Customizable designs with sustainable materials.",
      image: bagsImage,
      features: ["Canvas Tote Bags", "Jute Shopping Bags", "Custom Branding", "Eco-Friendly Materials"]
    },
    {
      title: "Export Garments",
      description: "Professional textile manufacturing with premium fabrics. Complete OEM solutions for international brands.",
      image: garmentsImage,
      features: ["Premium Textiles", "Custom Manufacturing", "Quality Assurance", "International Standards"]
    },
    {
      title: "Professional Mats",
      description: "Yoga mats, exercise mats, and specialized rubber products. Built for durability and export quality.",
      image: matsImage,
      features: ["Yoga Mats", "Exercise Equipment", "Rubber Products", "Custom Specifications"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by international brands for premium quality and sustainable manufacturing
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-smooth group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-50 transition-smooth" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-sustainable rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;