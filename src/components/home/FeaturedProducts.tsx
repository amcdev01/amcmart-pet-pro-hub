import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products-data";

const FeaturedProducts = () => {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Top Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular veterinary medical equipment trusted by professionals across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.categorySlug}/${product.slug}`}
              className="group bg-card rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {product.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
