import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, Globe } from "lucide-react";
import { COMPANY_INFO, FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import amcLogo from "@/assets/amc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={amcLogo} alt="AMC Mart" className="h-12 w-auto" />
            </Link>
            <p className="text-footer-foreground/80 text-sm mb-4">
              Your trusted partner in veterinary medical equipment and pet care solutions.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-footer-foreground/80">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground/80 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-footer-foreground/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-footer-foreground/60">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. A proud concern of the AMC Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
