import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Coins, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for featured books with real images
const featuredBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Computer Science",
    credits: 500,
    rating: 4.8,
    readers: 234,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=400&fit=crop&crop=center",
    description: "A comprehensive guide to algorithms and data structures."
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Development",
    credits: 350,
    rating: 4.9,
    readers: 189,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=center",
    description: "A handbook of agile software craftsmanship."
  },
  {
    id: 3,
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    category: "Data Science",
    credits: 400,
    rating: 4.7,
    readers: 156,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center",
    description: "Technical strategy for AI engineers in the era of deep learning."
  },
  {
    id: 4,
    title: "System Design Interview",
    author: "Alex Xu",
    category: "System Design",
    credits: 450,
    rating: 4.6,
    readers: 203,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center",
    description: "An insider's guide to system design interviews."
  }
];

export function FeaturedBooks() {
  return (
    <section id="books" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-school-blue">Books</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular books and resources, carefully curated for computing students.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={book.image}
                    alt={`${book.title} cover`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 bg-school-blue text-white"
                  >
                    {book.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-school-blue transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  by {book.author}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {book.description}
                </p>
                
                {/* Book Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{book.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{book.readers}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 text-school-blue font-semibold">
                      <Coins className="w-4 h-4" />
                      <span>{book.credits} credits</span>
                    </div>
                  </div>
                  <Button className="w-full bg-school-blue hover:bg-blue-700" asChild>
                    <Link href={`/books/${book.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Books CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-school-blue text-school-blue hover:bg-blue-50"
            asChild
          >
            <Link href="/books">
              View All Books →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 