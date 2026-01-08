import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, MISSION_VISION, SISTER_CONCERNS } from "@/lib/constants";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AMC Mart</h1>
            <p className="text-lg text-secondary-foreground/80">
              A proud concern of the AMC Group, dedicated to delivering excellence in veterinary medical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Your Trusted Partner in Veterinary Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {COMPANY_INFO.description}
              </p>
              <Button asChild>
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800"
                  alt="Veterinary professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                {MISSION_VISION.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                {MISSION_VISION.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vet Solution */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Comprehensive Vet Solutions
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              As the official distributor of Mindray Animal Medical in Bangladesh, we provide end-to-end veterinary solutions backed by expertise and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10">
              <h3 className="text-xl font-semibold mb-3">Medical Equipment</h3>
              <p className="text-secondary-foreground/70">
                State-of-the-art diagnostic and treatment equipment from leading manufacturers for modern veterinary practices.
              </p>
            </div>
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10">
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-secondary-foreground/70">
                Expert installation, training, and ongoing maintenance support to ensure optimal equipment performance.
              </p>
            </div>
            <div className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10">
              <h3 className="text-xl font-semibold mb-3">Pet Care Products</h3>
              <p className="text-secondary-foreground/70">
                Premium pet accessories, nutrition solutions, and care products for companion animal well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sister Concerns */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              AMC Group
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Sister Concerns
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AMC Mart is part of the larger AMC Group, a diversified conglomerate with ventures across multiple sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SISTER_CONCERNS.map((concern) => (
              <div
                key={concern.slug}
                className="bg-card rounded-xl p-6 border border-border text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{concern.name}</h3>
                <p className="text-sm text-muted-foreground">{concern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your veterinary equipment needs and discover how we can support your practice.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
