import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useWindowScroll } from "@/hooks/use-mobile";
import logo from "../../assets/fulllogo_nobuffer.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useWindowScroll();
  const isScrolled = scrollY > 0;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full bg-[#f8e8b3] ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="Curries Inc Logo" 
                  className="h-14"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-medium text-[#2e0101] hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone & Order CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919601503194"
              className="flex items-center mr-4 text-[#2e0101] hover:text-primary"
            >
              <i className="fas fa-phone mr-2"></i> Call to Order
            </a>
            <Button
              asChild
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <a href="#order" onClick={handleLinkClick}>
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#2e0101] hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-3 pb-3 bg-[#f8e8b3]`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-2 text-[#2e0101] hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col mt-3 space-y-3">
            <a
              href="tel:+919601503194"
              className="flex items-center text-[#2e0101] hover:text-primary"
            >
              <i className="fas fa-phone mr-2"></i> Call to Order
            </a>
            <Button
              asChild
              className="bg-primary text-white px-4 py-2 rounded-md text-center hover:bg-opacity-90"
            >
              <a href="#order" onClick={handleLinkClick}>
                Order Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
