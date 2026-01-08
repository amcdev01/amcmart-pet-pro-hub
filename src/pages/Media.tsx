import { Link } from "react-router-dom";
import { ArrowRight, Play, Calendar, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";

const mediaItems = [
  {
    type: "news",
    title: "AMC Mart Partners with Mindray Animal Medical",
    date: "2024-01-15",
    excerpt: "Official distribution partnership announcement for Bangladesh market.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800",
  },
  {
    type: "event",
    title: "Veterinary Equipment Exhibition 2024",
    date: "2024-02-20",
    excerpt: "Join us at the annual veterinary equipment showcase in Dhaka.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
  },
  {
    type: "news",
    title: "New Product Launch: Vetus NOVA Ultrasound",
    date: "2024-03-10",
    excerpt: "Introducing the next-generation portable veterinary ultrasound system.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
  },
];

const Media = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Media Center" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
            <p className="text-lg text-secondary-foreground/80">
              Stay updated with the latest news, events, and announcements from AMC Mart.
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <article
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border card-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-primary font-medium capitalize">
                      • {item.type}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <button className="inline-flex items-center text-primary font-medium hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resources & Downloads</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access product brochures, technical specifications, and other resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Product Catalogs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download our comprehensive product catalogs.
              </p>
              <Button variant="outline" size="sm">
                Coming Soon
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Technical Specs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access detailed technical specifications.
              </p>
              <Button variant="outline" size="sm">
                Coming Soon
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <Play className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Video Gallery</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Watch product demos and tutorials.
              </p>
              <Button variant="outline" size="sm">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for more information about our products and services.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
