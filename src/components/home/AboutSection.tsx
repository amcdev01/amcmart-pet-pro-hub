import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

const AboutSection = () => {
  const highlights = [
    "Official Mindray Animal Medical Distributor",
    "Comprehensive veterinary equipment solutions",
    "Premium pet accessories and nutrition",
    "Dedicated customer support and service",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800"
                alt="Veterinary care"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About AMC Mart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Empowering Veterinary Excellence in Bangladesh
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
