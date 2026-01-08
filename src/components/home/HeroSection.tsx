import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.2)_0%,transparent_50%)]" />
      </div>

      <div className="relative container-custom py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Official Mindray Distributor in Bangladesh
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-primary">Veterinary Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Delivering reliable veterinary medical equipment, pet accessories, and premium nutrition solutions that empower professionals and elevate clinical outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up">
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 text-center border border-secondary-foreground/10">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-secondary-foreground/70">Premium equipment from trusted brands</p>
            </div>
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 text-center border border-secondary-foreground/10">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Authorized Dealer</h3>
              <p className="text-sm text-secondary-foreground/70">Official Mindray Animal Medical partner</p>
            </div>
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-6 text-center border border-secondary-foreground/10">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headset className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-secondary-foreground/70">Dedicated technical & customer care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
