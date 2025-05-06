import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections when hash links are clicked
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      return; // Let React Router handle the navigation to '/#section'
    }

    // We're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without page reload
      window.history.pushState(null, "", `/#${sectionId}`);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 lg:px-8",
        isScrolled
          ? "bg-islamic-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 border-2 border-gold-light rounded-full opacity-60"></div>
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-xl font-bold gold-gradient font-cinzel">
                خ
              </span>
            </div>
          </div>
          <span className="font-cinzel text-xl font-semibold gold-gradient">
            KHILAFAH
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm text-white hover:text-gold-light transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/#caliphs"
            className="text-sm text-white hover:text-gold-light transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("caliphs");
            }}
          >
            Caliphs
          </Link>
          <Link
            to="/#practices"
            className="text-sm text-white hover:text-gold-light transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("practices");
            }}
          >
            Practices
          </Link>
          <Link
            to="/#history"
            className="text-sm text-white hover:text-gold-light transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("history");
            }}
          >
            History
          </Link>
          <Link
            to="/#experts"
            className="text-sm text-white hover:text-gold-light transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experts");
            }}
          >
            Experts
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-gold-light transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-islamic-black/95 backdrop-blur-md z-40 transition-transform duration-300 pt-16",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <Link
            to="/"
            className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home <ChevronRight size={20} className="text-gold-light" />
          </Link>
          <Link
            to="/#caliphs"
            className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("caliphs");
            }}
          >
            Caliphs <ChevronRight size={20} className="text-gold-light" />
          </Link>
          <Link
            to="/#practices"
            className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("practices");
            }}
          >
            Practices <ChevronRight size={20} className="text-gold-light" />
          </Link>
          <Link
            to="/#history"
            className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("history");
            }}
          >
            History <ChevronRight size={20} className="text-gold-light" />
          </Link>
          <Link
            to="/#experts"
            className="text-lg text-white hover:text-gold-light transition-colors duration-200 flex justify-between items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experts");
            }}
          >
            Experts <ChevronRight size={20} className="text-gold-light" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
