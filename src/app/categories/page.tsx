import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-school-blue/10 rounded-full">
              <BookOpen className="w-8 h-8 text-school-blue" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Browse by <span className="text-school-blue">Categories</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection organized by computing disciplines and specializations. 
            Find the perfect resources for your academic journey.
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
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-school-blue transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        
                        {/* Book Count Badge */}
                        <Badge variant="secondary" className="mb-4">
                          {category.bookCount} books available
                        </Badge>
                        
                        {/* Browse Link */}
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

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Library Statistics</h2>
            <p className="text-muted-foreground">
              Comprehensive coverage across all computing disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-school-blue mb-1">
                {categories.reduce((total, cat) => total + cat.bookCount, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-school-blue mb-1">
                {categories.length}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-school-blue mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-school-blue mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-school-blue to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Can&apos;t Find What You&apos;re Looking For?</h3>
            <p className="mb-6 opacity-90">
              Our library is constantly growing. Suggest new books or categories to help us serve you better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/suggest">
                  Suggest a Book
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue" asChild>
                <Link href="/contact">
                  Contact Library
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 