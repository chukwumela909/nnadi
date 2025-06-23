"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search,
  Filter,
  Grid,
  List,
  Download,
  Eye,
  Star,
  Clock,
  SortAsc,
  BookOpen,
  Calendar,
  Tag,
  MoreHorizontal
} from "lucide-react";

// Mock purchased books data
const purchasedBooks = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=600&fit=crop&crop=center",
    category: "Computer Science",
    credits: 500,
    purchaseDate: "2024-01-15",
    lastRead: "2 hours ago",
    progress: 65,
    downloads: 3,
    rating: 4.8,
    pages: 1312,
    format: "PDF",
    size: "25.4 MB"
  },
  {
    id: "2",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=center",
    category: "Software Development",
    credits: 350,
    purchaseDate: "2024-01-10",
    lastRead: "1 day ago",
    progress: 30,
    downloads: 2,
    rating: 4.9,
    pages: 464,
    format: "PDF",
    size: "12.8 MB"
  },
  {
    id: "3",
    title: "System Design Interview – An insider's guide",
    author: "Alex Xu",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
    category: "System Design",
    credits: 450,
    purchaseDate: "2024-01-08",
    lastRead: "3 days ago",
    progress: 85,
    downloads: 5,
    rating: 4.6,
    pages: 322,
    format: "PDF",
    size: "18.2 MB"
  },
  {
    id: "4",
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
    category: "Data Science",
    credits: 400,
    purchaseDate: "2023-12-28",
    lastRead: "1 week ago",
    progress: 100,
    downloads: 8,
    rating: 4.7,
    pages: 118,
    format: "PDF",
    size: "8.5 MB"
  },
  {
    id: "5",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=center",
    category: "Web Development",
    credits: 300,
    purchaseDate: "2023-12-20",
    lastRead: "2 weeks ago",
    progress: 75,
    downloads: 4,
    rating: 4.5,
    pages: 176,
    format: "PDF",
    size: "6.2 MB"
  },
  {
    id: "6",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop&crop=center",
    category: "System Design",
    credits: 500,
    purchaseDate: "2023-12-15",
    lastRead: "3 weeks ago",
    progress: 45,
    downloads: 2,
    rating: 4.9,
    pages: 616,
    format: "PDF",
    size: "32.1 MB"
  }
];

const categories = ["All Categories", "Computer Science", "Software Development", "System Design", "Data Science", "Web Development"];
const sortOptions = [
  { value: "recent", label: "Recently Read" },
  { value: "purchased", label: "Recently Purchased" },
  { value: "progress", label: "Progress" },
  { value: "title", label: "Title A-Z" },
  { value: "author", label: "Author A-Z" }
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredBooks, setFilteredBooks] = useState(purchasedBooks);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterBooks(query, selectedCategory, sortBy);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterBooks(searchQuery, category, sortBy);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    filterBooks(searchQuery, selectedCategory, sort);
  };

  const filterBooks = (query: string, category: string, sort: string) => {
    let filtered = [...purchasedBooks];

    // Filter by search query
    if (query) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category !== "All Categories") {
      filtered = filtered.filter(book => book.category === category);
    }

    // Sort books
    switch (sort) {
      case "recent":
        filtered.sort((a, b) => new Date(b.lastRead).getTime() - new Date(a.lastRead).getTime());
        break;
      case "purchased":
        filtered.sort((a, b) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime());
        break;
      case "progress":
        filtered.sort((a, b) => b.progress - a.progress);
        break;
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        filtered.sort((a, b) => a.author.localeCompare(b.author));
        break;
    }

    setFilteredBooks(filtered);
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks.map((book) => (
        <Card key={book.id} className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/90 text-gray-700">
                  {book.format}
                </Badge>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-school-blue transition-colors">
                <Link href={`/books/${book.id}`}>
                  {book.title}
                </Link>
              </h3>
              
              <p className="text-sm text-gray-600 mb-2 line-clamp-1">by {book.author}</p>
              
              <Badge variant="outline" className="text-xs mb-3">
                {book.category}
              </Badge>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{book.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-school-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Last read {book.lastRead}</span>
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{book.downloads}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1 bg-school-blue hover:bg-blue-700">
                    <Eye className="w-4 h-4 mr-1" />
                    Read
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredBooks.map((book) => (
        <Card key={book.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <div className="relative w-20 h-28 flex-shrink-0">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="80px"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-1 hover:text-school-blue transition-colors">
                      <Link href={`/books/${book.id}`}>
                        {book.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-2">by {book.author}</p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline">{book.category}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Purchased {new Date(book.purchaseDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Star className="w-4 h-4" />
                        <span>{book.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>{book.pages} pages</span>
                      <span>{book.size}</span>
                      <span>Downloaded {book.downloads} times</span>
                      <span>Last read {book.lastRead}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <Button size="sm" className="bg-school-blue hover:bg-blue-700">
                      <Eye className="w-4 h-4 mr-1" />
                      Read
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Reading Progress</span>
                    <span className="font-medium">{book.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-school-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Library</h1>
          <p className="text-gray-600 mt-1">
            {purchasedBooks.length} books • {purchasedBooks.reduce((total, book) => total + book.credits, 0).toLocaleString()} credits spent
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-school-blue hover:bg-blue-700" : ""}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-school-blue hover:bg-blue-700" : ""}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search books by title or author..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={handleCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={sortBy} onValueChange={handleSort}>
          <SelectTrigger className="w-full sm:w-48">
            <SortAsc className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredBooks.length} of {purchasedBooks.length} books
        </p>
        
        {filteredBooks.length === 0 && searchQuery && (
          <Button variant="outline" onClick={() => handleSearch("")}>
            Clear search
          </Button>
        )}
      </div>

      {/* Books Display */}
      {filteredBooks.length > 0 ? (
        viewMode === "grid" ? <GridView /> : <ListView />
      ) : (
        <div className="text-center py-16">
          <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {searchQuery ? "No books found" : "Your library is empty"}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery 
              ? `Try searching for something else or browse by category.`
              : `Start building your library by purchasing books from our collection.`
            }
          </p>
          <Link href="/">
            <Button className="bg-school-blue hover:bg-blue-700">
              <Search className="w-4 h-4 mr-2" />
              Browse Books
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}