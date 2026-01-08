import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Category } from "@/lib/products-data";

interface ProductFilterProps {
  categories: Category[];
  selectedCategory?: string;
  selectedSubcategory?: string;
  onCategoryChange: (slug: string | undefined) => void;
  onSubcategoryChange: (slug: string | undefined) => void;
}

const ProductFilter = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: ProductFilterProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([selectedCategory || ""]);

  const toggleCategory = (slug: string) => {
    setOpenCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const FilterContent = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Categories</h3>
        {(selectedCategory || selectedSubcategory) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onCategoryChange(undefined);
              onSubcategoryChange(undefined);
            }}
            className="text-xs text-muted-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      <div className="space-y-1">
        {categories.map((category) => (
          <Collapsible
            key={category.id}
            open={openCategories.includes(category.slug)}
            onOpenChange={() => toggleCategory(category.slug)}
          >
            <div className="flex items-center">
              <button
                onClick={() => {
                  onCategoryChange(category.slug);
                  onSubcategoryChange(undefined);
                }}
                className={`flex-1 text-left py-2 px-3 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.slug && !selectedSubcategory
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {category.name}
              </button>
              {category.subcategories && category.subcategories.length > 0 && (
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openCategories.includes(category.slug) ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
              )}
            </div>

            {category.subcategories && category.subcategories.length > 0 && (
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      onCategoryChange(category.slug);
                      onSubcategoryChange(sub.slug);
                    }}
                    className={`w-full text-left py-1.5 px-3 rounded-lg text-sm transition-colors ${
                      selectedSubcategory === sub.slug
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter */}
      <div className="hidden lg:block sticky top-24 bg-card rounded-xl border p-6">
        <FilterContent />
      </div>

      {/* Mobile Filter */}
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filter Products
              {(selectedCategory || selectedSubcategory) && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {selectedSubcategory ? 2 : 1}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductFilter;
