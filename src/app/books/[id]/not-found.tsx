import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="flex justify-center">
          <div className="p-4 bg-school-blue/10 rounded-full">
            <BookOpen className="w-16 h-16 text-school-blue" />
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Book Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, the book you're looking for doesn't exist in our library.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="bg-school-blue hover:bg-blue-700">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Library
            </Link>
          </Button>
          
          <div>
            <Link 
              href="/books" 
              className="text-school-blue hover:underline text-sm"
            >
              Browse all books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 