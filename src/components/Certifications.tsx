const Certifications = () => {
  const certifications = [
    {
      name: "SEDEX",
      description: "Ethical Trade Compliance",
      badge: "SEDEX"
    },
    {
      name: "GRS",
      description: "Global Recycled Standard",
      badge: "GRS"
    },
    {
      name: "ISO 9001",
      description: "Quality Management",
      badge: "ISO"
    },
    {
      name: "OEKO-TEX",
      description: "Textile Safety Standard",
      badge: "OEKO"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Certified Quality & Compliance
          </h2>
          <p className="text-lg text-muted-foreground">
            Our international certifications ensure the highest standards of quality, 
            sustainability, and ethical manufacturing.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg text-center shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="w-16 h-16 bg-premium text-premium-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {cert.badge}
              </div>
              <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;