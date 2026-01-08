import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import {
  categories,
  products,
  getProductsByCategory,
  getProductsBySubcategory,
  getCategoryBySlug,
} from "@/lib/products-data";

const Products = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const navigate = useNavigate();

  const selectedCategory = categorySlug;
  const selectedSubcategory = subcategorySlug;

  const category = selectedCategory ? getCategoryBySlug(selectedCategory) : undefined;
  const subcategory = category?.subcategories?.find(
    (s) => s.slug === selectedSubcategory
  );

  const filteredProducts = useMemo(() => {
    if (selectedSubcategory) {
      return getProductsBySubcategory(selectedSubcategory);
    }
    if (selectedCategory) {
      return getProductsByCategory(selectedCategory);
    }
    return products;
  }, [selectedCategory, selectedSubcategory]);

  const handleCategoryChange = (slug: string | undefined) => {
    if (slug) {
      navigate(`/products/${slug}`);
    } else {
      navigate("/products");
    }
  };

  const handleSubcategoryChange = (slug: string | undefined) => {
    if (slug && selectedCategory) {
      navigate(`/products/${selectedCategory}/${slug}`);
    } else if (selectedCategory) {
      navigate(`/products/${selectedCategory}`);
    }
  };

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    ...(category ? [{ label: category.name, href: `/products/${category.slug}` }] : []),
    ...(subcategory ? [{ label: subcategory.name }] : []),
  ];

  const pageTitle = subcategory?.name || category?.name || "All Products";

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl md:text-4xl font-bold">{pageTitle}</h1>
          <p className="text-secondary-foreground/80 mt-2">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar Filter */}
            <div className="lg:col-span-1">
              <ProductFilter
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onCategoryChange={handleCategoryChange}
                onSubcategoryChange={handleSubcategoryChange}
              />
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
