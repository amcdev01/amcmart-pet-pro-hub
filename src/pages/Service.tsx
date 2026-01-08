import { Link } from "react-router-dom";
import { ArrowRight, Headset, Wrench, Cog, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  headset: <Headset className="h-8 w-8" />,
  wrench: <Wrench className="h-8 w-8" />,
  cog: <Cog className="h-8 w-8" />,
};

const Service = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Service" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-secondary-foreground/80">
              Comprehensive support services to keep your veterinary equipment running at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md border border-border card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  {iconMap[service.icon]}
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Expert Support You Can Trust
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of certified technicians and customer service professionals are dedicated to ensuring your equipment operates flawlessly. We understand the critical nature of veterinary care and provide responsive, reliable support.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>24/7 emergency technical support availability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Certified technicians trained by manufacturers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Genuine spare parts with warranty</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Preventive maintenance programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Equipment installation and training</span>
                </li>
              </ul>

              <Button asChild>
                <Link to="/contact">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800"
                  alt="Technical service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Equipment Support?</h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to assist you with any technical issues, maintenance needs, or spare parts requirements.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contact Our Service Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
