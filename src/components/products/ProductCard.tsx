import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/products-data";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.categorySlug}/${product.slug}`}
      className="group bg-card rounded-xl overflow-hidden shadow-md card-hover border border-border"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        {product.subcategory && (
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {product.subcategory}
          </span>
        )}
        <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.shortDescription}
        </p>
        <span className="inline-flex items-center text-sm text-primary font-medium">
          View Details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
