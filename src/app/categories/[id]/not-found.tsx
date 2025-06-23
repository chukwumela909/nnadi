import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Search, ArrowLeft } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-school-blue/10 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-school-blue" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Sorry, the category you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/categories">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse All Categories
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">
                Go to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 