import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.4)_0%,transparent_50%)]" />
      </div>

      <div className="relative container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Veterinary Practice?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Get in touch with our expert team for personalized recommendations and competitive quotes on veterinary medical equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            >
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
