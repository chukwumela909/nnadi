"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Download,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  FileText,
  Image,
  Tag,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  AlertTriangle,
  Globe
} from "lucide-react";

// Mock books data
const mockBooks = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    isbn: "978-0262033848",
    category: "Computer Science",
    price: 1200,
    credits: 800,
    status: "published",
    downloads: 234,
    rating: 4.8,
    reviews: 67,
    fileSize: "15.2 MB",
    pages: 1312,
    language: "English",
    publishDate: "2023-09-15",
    uploadDate: "2023-09-10",
    cover: "/api/placeholder/120/180",
    description: "A comprehensive introduction to algorithms and data structures."
  },
  {
    id: "2",
    title: "Clean Code: A Handbook",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    category: "Software Engineering",
    price: 950,
    credits: 650,
    status: "published",
    downloads: 189,
    rating: 4.6,
    reviews: 45,
    fileSize: "8.7 MB",
    pages: 464,
    language: "English",
    publishDate: "2023-10-22",
    uploadDate: "2023-10-18",
    cover: "/api/placeholder/120/180",
    description: "Best practices for writing clean and maintainable code."
  },
  {
    id: "3",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    isbn: "978-0078022159",
    category: "Database Systems",
    price: 1100,
    credits: 750,
    status: "pending",
    downloads: 0,
    rating: 0,
    reviews: 0,
    fileSize: "12.4 MB",
    pages: 1376,
    language: "English",
    publishDate: "2023-11-15",
    uploadDate: "2023-11-10",
    cover: "/api/placeholder/120/180",
    description: "Comprehensive coverage of database design and implementation."
  },
  {
    id: "4",
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    isbn: "978-0999579312",
    category: "Machine Learning",
    price: 800,
    credits: 500,
    status: "published",
    downloads: 156,
    rating: 4.9,
    reviews: 89,
    fileSize: "6.1 MB",
    pages: 118,
    language: "English",
    publishDate: "2023-12-01",
    uploadDate: "2023-11-25",
    cover: "/api/placeholder/120/180",
    description: "Practical advice for machine learning projects."
  },
  {
    id: "5",
    title: "Network Security Essentials",
    author: "William Stallings",
    isbn: "978-0134527338",
    category: "Cybersecurity",
    price: 1050,
    credits: 700,
    status: "draft",
    downloads: 0,
    rating: 0,
    reviews: 0,
    fileSize: "10.8 MB",
    pages: 464,
    language: "English",
    publishDate: "2024-01-20",
    uploadDate: "2024-01-15",
    cover: "/api/placeholder/120/180",
    description: "Essential concepts in network security and cryptography."
  }
];

const categories = [
  "All Categories",
  "Computer Science",
  "Software Engineering",
  "Database Systems",
  "Machine Learning",
  "Cybersecurity",
  "Data Science",
  "Web Development"
];

const bookStatuses = [
  "All Status",
  "published",
  "pending", 
  "draft",
  "rejected"
];

const bookStats = {
  totalBooks: 2854,
  publishedBooks: 2456,
  pendingApproval: 23,
  totalDownloads: 45678,
  averageRating: 4.6,
  monthlyRevenue: 245000
};

export default function BooksManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("uploadDate");
  const booksPerPage = 8;

  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.isbn.includes(searchQuery);
    const matchesCategory = selectedCategory === "All Categories" || book.category === selectedCategory;
    const matchesStatus = statusFilter === "All Status" || book.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "author":
        return a.author.localeCompare(b.author);
      case "downloads":
        return b.downloads - a.downloads;
      case "rating":
        return b.rating - a.rating;
      case "uploadDate":
      default:
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    }
  });

  const paginatedBooks = sortedBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  const handleSelectBook = (bookId: string) => {
    setSelectedBooks(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const handleSelectAll = () => {
    if (selectedBooks.length === paginatedBooks.length) {
      setSelectedBooks([]);
    } else {
      setSelectedBooks(paginatedBooks.map(book => book.id));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Published</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Pending</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Draft</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Books Management</h1>
          <p className="text-gray-600 mt-1">
            Manage your digital library catalog, add new books, and handle approvals.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Catalog
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Book
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-3xl font-bold text-gray-900">{bookStats.totalBooks.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              {bookStats.publishedBooks} published
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                <p className="text-3xl font-bold text-gray-900">{bookStats.pendingApproval}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-yellow-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Needs review
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                <p className="text-3xl font-bold text-gray-900">{bookStats.totalDownloads.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15% this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-3xl font-bold text-gray-900">{bookStats.averageRating}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>From 2,456 reviews</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-1 items-center space-x-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search books, authors, or ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {bookStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="uploadDate">Newest First</option>
                <option value="title">Title A-Z</option>
                <option value="author">Author A-Z</option>
                <option value="downloads">Most Downloaded</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {selectedBooks.length > 0 && (
            <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-700">
                  {selectedBooks.length} book(s) selected
                </span>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                    <XCircle className="w-4 h-4 mr-1" />
                    Reject
                  </Button>
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-300 hover:bg-orange-50">
                    <Edit className="w-4 h-4 mr-1" />
                    Bulk Edit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedBooks.map((book) => (
          <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedBooks.includes(book.id)}
                onChange={() => handleSelectBook(book.id)}
                className="absolute top-3 left-3 z-10 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              {getStatusBadge(book.status)}
              <div className="absolute top-3 right-3 z-10">
                {getStatusBadge(book.status)}
              </div>
              
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="w-24 h-36 bg-gradient-to-br from-orange-400 to-red-500 rounded-md flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(book.rating)}
                  </div>
                  <span className="text-xs text-gray-500">
                    {book.rating > 0 ? `${book.rating} (${book.reviews})` : 'No ratings'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{book.category}</span>
                  <span>{book.fileSize}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{book.credits} credits</span>
                    <span className="text-gray-500 ml-1">(₦{book.price})</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Download className="w-3 h-3 mr-1" />
                    {book.downloads}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <Button size="sm" variant="outline" className="flex-1 mr-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 ml-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((currentPage - 1) * booksPerPage) + 1} to {Math.min(currentPage * booksPerPage, sortedBooks.length)} of {sortedBooks.length} books
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 