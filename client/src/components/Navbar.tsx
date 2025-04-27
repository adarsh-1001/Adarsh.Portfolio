import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Skills", path: "#skills", isHash: true },
  { name: "Projects", path: "#projects", isHash: true },
  { name: "Services", path: "#services", isHash: true },
  { name: "Testimonials", path: "#testimonials", isHash: true },
  { name: "Blog", path: "/blog", isHash: false },
  { name: "Hire Me", path: "#hire-me", isHash: true, highlight: true },
  { name: "Contact", path: "#contact", isHash: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";

  const getNavLinkElement = (item: typeof navLinks[0], mobile = false) => {
    // Base classes with conditional highlight styling
    const baseClasses = mobile 
      ? "block py-3 text-xl hover:text-primary transition-colors" 
      : "hover:text-primary transition-colors";

    // Additional highlight classes for the "Hire Me" link
    const highlightClasses = item.highlight 
      ? mobile 
        ? "font-bold text-pink-500 hover:text-pink-600"
        : "font-bold text-pink-500 hover:text-pink-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-500 after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      : "";

    // Combined classes
    const classes = `${baseClasses} ${highlightClasses}`;

    if (item.isHash && !isHomePage) {
      // If it's a hash link but we're not on the home page, link to home + hash
      return (
        <Link 
          href={`/${item.path}`} 
          onClick={() => mobile && setOpen(false)}
          className={classes}
        >
          {item.name}
        </Link>
      );
    } else if (item.isHash) {
      // Hash link on home page
      return (
        <a 
          href={item.path} 
          onClick={() => mobile && setOpen(false)}
          className={classes}
        >
          {item.name}
        </a>
      );
    } else {
      // Regular link (like /blog)
      return (
        <Link 
          href={item.path} 
          onClick={() => mobile && setOpen(false)}
          className={classes}
        >
          {item.name}
        </Link>
      );
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Portfolio<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.name}>
                  {getNavLinkElement(item)}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex-1">
                  <ul className="flex flex-col space-y-4 text-center">
                    {navLinks.map((item) => (
                      <li key={item.name}>
                        {getNavLinkElement(item, true)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;