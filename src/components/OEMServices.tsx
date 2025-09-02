import { Button } from "@/components/ui/button";

const OEMServices = () => {
  const services = [
    {
      title: "Custom Manufacturing",
      description: "End-to-end manufacturing solutions tailored to your specifications",
      icon: "🏭"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every production stage",
      icon: "✅"
    },
    {
      title: "Global Logistics",
      description: "Seamless shipping and delivery to international destinations",
      icon: "🌍"
    },
    {
      title: "Sustainable Practices",
      description: "Eco-friendly manufacturing with certified sustainable materials",
      icon: "🌱"
    }
  ];

  return (
    <section id="oem" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OEM Manufacturing Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Partner with us for comprehensive OEM solutions that meet international standards 
            and exceed your quality expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your OEM Project?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to discuss your requirements and provide a customized solution 
            that fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sustainable" size="xl">
              Get OEM Quote
            </Button>
            <Button variant="outline-white" size="xl">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEMServices;