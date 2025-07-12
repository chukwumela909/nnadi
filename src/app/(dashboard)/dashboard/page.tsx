"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Download,
  Star,
  TrendingUp,
  Clock,
  Award,
  Users,
  ChevronRight,
  Plus,
  Search,
  Filter
} from "lucide-react";

// Mock data - in real app, this would come from API/database
const dashboardStats = {
  totalBooks: 12,
  totalDownloads: 89,
  creditsSpent: 3500,
  creditsRemaining: 2450,
  readingStreak: 7,
  favoriteCategory: "Computer Science"
};

const recentBooks = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=200&h=300&fit=crop&crop=center",
    progress: 65,
    lastRead: "2 hours ago",
    category: "Computer Science"
  },
  {
    id: "2", 
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop&crop=center",
    progress: 30,
    lastRead: "1 day ago",
    category: "Software Development"
  },
  {
    id: "3",
    title: "System Design Interview",
    author: "Alex Xu", 
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop&crop=center",
    progress: 85,
    lastRead: "3 days ago",
    category: "System Design"
  }
];

const recommendations = [
  {
    id: "4",
    title: "Data Structures and Algorithms in Python",
    author: "Michael T. Goodrich",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop&crop=center",
    credits: 450,
    rating: 4.7,
    reason: "Because you enjoyed Introduction to Algorithms"
  },
  {
    id: "5", 
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=200&h=300&fit=crop&crop=center",
    credits: 400,
    rating: 4.8,
    reason: "Recommended for Software Development enthusiasts"
  },
  {
    id: "6",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop&crop=center",
    credits: 500,
    rating: 4.9,
    reason: "Perfect for System Design learners"
  }
];

export default function ResetPasswordPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordPage />
    </Suspense>
  );
}

function ResetPasswordPage() {
  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-school-blue to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-blue-100 text-lg">
              Ready to continue your learning journey? You have {dashboardStats.creditsRemaining} credits to explore new books.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 rounded-lg p-4">
              <Award className="w-12 h-12 text-yellow-300 mb-2" />
              <p className="text-sm">Reading Streak</p>
              <p className="text-2xl font-bold">{dashboardStats.readingStreak} days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Books Owned</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalBooks}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-school-blue" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +2 this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Downloads</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalDownloads}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12 this week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Credits Spent</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.creditsSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              Since joining
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Favorite Category</p>
                <p className="text-lg font-bold text-gray-900">{dashboardStats.favoriteCategory}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Badge variant="secondary" className="text-xs">
                8 books read
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Books Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Continue Reading</h2>
          <Link href="/library">
            <Button variant="outline" className="flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex space-x-4">
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
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-school-blue transition-colors">
                      <Link href={`/books/${book.id}`}>
                        {book.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                    <Badge variant="secondary" className="text-xs mb-3">
                      {book.category}
                    </Badge>
                    
                    <div className="space-y-2">
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
                      <p className="text-xs text-gray-500">Last read {book.lastRead}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-school-blue transition-colors">
                    <Link href={`/books/${book.id}`}>
                      {book.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-school-blue font-semibold">
                      {book.credits} credits
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-4 italic">{book.reason}</p>
                  
                  <Button className="w-full bg-school-blue hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Library
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/">
            <Button variant="outline" className="w-full h-12 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Browse New Books
            </Button>
          </Link>
          
          <Link href="/categories">
            <Button variant="outline" className="w-full h-12 flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Categories
            </Button>
          </Link>
          
          <Link href="/profile">
            <Button variant="outline" className="w-full h-12 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Update Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}