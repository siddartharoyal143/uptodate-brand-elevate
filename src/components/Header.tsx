import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-primary">
            Uptodate Impex
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#products" className="text-foreground hover:text-primary transition-smooth">
              Products
            </a>
            <a href="#oem" className="text-foreground hover:text-primary transition-smooth">
              OEM Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>
        </div>
        <Button variant="hero" size="lg">
          Request Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;