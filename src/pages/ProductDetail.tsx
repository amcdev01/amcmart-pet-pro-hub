import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getProductBySlug, getCategoryBySlug } from "@/lib/products-data";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const subcategory = category?.subcategories?.find(
    (s) => s.slug === product.subcategorySlug
  );

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products/${product.categorySlug}` },
    ...(subcategory
      ? [
          {
            label: subcategory.name,
            href: `/products/${product.categorySlug}/${subcategory.slug}`,
          },
        ]
      : []),
    { label: product.name },
  ];

  return (
    <Layout>
      {/* Breadcrumbs */}
      <section className="bg-muted/50 py-4">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* Product Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden bg-muted"
                    >
                      <img
                        src={img}
                        alt={`${product.name} - Image ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {product.subcategory || product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {product.shortDescription}
              </p>

              {/* Key Features */}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Species Supported */}
              {product.speciesSupported && product.speciesSupported.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Species Supported</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.speciesSupported.map((species, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-muted rounded-full text-sm"
                      >
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* System Capabilities */}
          {product.systemCapabilities && product.systemCapabilities.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">System Capabilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.systemCapabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {product.description && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
