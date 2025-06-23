import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { 
  Star, 
  Users, 
  ChevronRight,
  SortAsc,
  Filter,
  ShoppingCart
} from "lucide-react";
import { categories, getCategoryById, getBooksByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = getCategoryById(id);
  
  if (!category) {
    notFound();
  }

  const booksInCategory = getBooksByCategory(id);
  const IconComponent = category.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/categories" className="hover:text-foreground transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-school-blue to-blue-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`p-4 rounded-xl ${category.color} bg-white/20`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-xl opacity-90">{category.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-white/80">
            <span className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {category.bookCount} books available
            </span>
            <span>•</span>
            <span>Updated regularly</span>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">
              Books in {category.name} ({booksInCategory.length})
            </h2>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="w-4 h-4 mr-2" />
              Sort by: Popular
            </Button>
          </div>
        </div>

        {/* Books Grid */}
        {booksInCategory.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {booksInCategory.map((book) => (
              <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-school-blue/20">
                <CardContent className="p-0">
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Book Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-school-blue transition-colors">
                      <Link href={`/books/${book.id}`}>
                        {book.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                      by {book.author}
                    </p>
                    
                    {/* Rating and Readers */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{book.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({book.totalRatings})
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="w-3 h-3 mr-1" />
                        {book.readers}
                      </div>
                    </div>
                    
                    {/* Credits and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-school-blue font-semibold">
                          {book.credits} credits
                        </Badge>
                      </div>
                      
                      <Button size="sm" className="bg-school-blue hover:bg-blue-700">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <IconComponent className="w-16 h-16 mx-auto text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No books found</h3>
            <p className="text-muted-foreground mb-6">
              We're working on adding more books to this category. Check back soon!
            </p>
            <Button asChild>
              <Link href="/categories">
                Browse Other Categories
              </Link>
            </Button>
          </div>
        )}

        {/* Other Categories Section */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter(cat => cat.id !== id)
              .slice(0, 6)
              .map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <Link 
                    key={cat.id} 
                    href={`/categories/${cat.id}`}
                    className="group"
                  >
                    <Card className="hover:shadow-md transition-all duration-200 border hover:border-school-blue/30">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${cat.color} group-hover:scale-110 transition-transform`}>
                            <CatIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium group-hover:text-school-blue transition-colors">
                              {cat.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {cat.bookCount} books
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-school-blue group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/categories">
                View All Categories
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
