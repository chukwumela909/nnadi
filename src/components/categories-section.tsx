import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Browse by <span className="text-school-blue">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection organized by computing disciplines and specializations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                href={`/categories/${category.id}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-school-blue/20 group-hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg ${category.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-school-blue transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        
                        {/* Book Count Badge */}
                        <Badge variant="secondary" className="mb-4">
                          {category.bookCount} books available
                        </Badge>
                        
                        {/* Browse Button */}
                        <div className="inline-flex items-center text-school-blue hover:text-blue-700 transition-colors text-sm font-medium">
                          Browse Books
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-school-blue text-school-blue hover:bg-blue-50"
            asChild
          >
            <Link href="/categories">
              Explore All Categories →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 