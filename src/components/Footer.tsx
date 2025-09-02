const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Uptodate Impex</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading manufacturer and exporter of premium bags, garments, and mats. 
              Committed to sustainable practices and international quality standards.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Export House, Industrial Area, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@uptodateimpex.in</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-sustainable-light transition-smooth">Products</a></li>
              <li><a href="#oem" className="hover:text-sustainable-light transition-smooth">OEM Services</a></li>
              <li><a href="#about" className="hover:text-sustainable-light transition-smooth">About Us</a></li>
              <li><a href="#contact" className="hover:text-sustainable-light transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Quality Policy</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Sustainability</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Canvas Bags</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Jute Bags</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Garments</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Yoga Mats</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Exercise Mats</a></li>
              <li><a href="#" className="hover:text-sustainable-light transition-smooth">Custom Products</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            © 2024 Uptodate Impex. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-sustainable-light transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-sustainable-light transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-sustainable-light transition-smooth">Export Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;