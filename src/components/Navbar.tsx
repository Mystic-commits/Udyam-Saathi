
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Udyam Saathi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/consultancy"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Consultancy
            </Link>
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2" onClick={() => window.location.href = '#book-call'}>
              <Phone size={16} /> Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg py-4 px-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/consultancy"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultancy
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full justify-center gap-2">
              <Phone size={16} /> Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
