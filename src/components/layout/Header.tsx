import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { categories } from "@/lib/products-data";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import amcLogo from "@/assets/amc-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-header text-header-foreground shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={amcLogo} alt="AMC Mart" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_LINKS.map((link) =>
                  link.href === "/products" ? (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuTrigger
                        className={`bg-transparent hover:bg-secondary/20 text-header-foreground hover:text-primary px-4 py-2 ${
                          isActive(link.href) ? "text-primary" : ""
                        }`}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                          {categories.map((category) => (
                            <NavigationMenuLink key={category.id} asChild>
                              <Link
                                to={`/products/${category.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {category.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <div className="p-4 pt-0">
                          <Link
                            to="/products"
                            className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                          >
                            View All Products
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.href}>
                      <Link
                        to={link.href}
                        className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                          isActive(link.href) ? "text-primary" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="default" className="ml-4">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-header border-t border-border/20 animate-slide-in-right">
          <div className="container-custom py-4">
            <Accordion type="single" collapsible className="w-full">
              {NAV_LINKS.map((link) =>
                link.href === "/products" ? (
                  <AccordionItem key={link.href} value={link.href} className="border-border/20">
                    <AccordionTrigger className="text-header-foreground hover:text-primary py-3">
                      {link.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-2">
                        <Link
                          to="/products"
                          className="block py-2 text-sm text-header-foreground/80 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          All Products
                        </Link>
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/products/${category.slug}`}
                            className="block py-2 text-sm text-header-foreground/80 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <div key={link.href} className="border-b border-border/20">
                    <Link
                      to={link.href}
                      className={`block py-3 text-header-foreground hover:text-primary ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                )
              )}
            </Accordion>
            <Button asChild variant="default" className="w-full mt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
