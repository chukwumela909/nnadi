"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tag,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  BookOpen,
  TrendingUp,
  Users,
  Download,
  Star,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Code,
  Database,
  Shield,
  Brain,
  Globe,
  Laptop,
  Smartphone,
  Layout,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock
} from "lucide-react";

// Mock categories data with icons
const mockCategories = [
  {
    id: "1",
    name: "Computer Science",
    slug: "computer-science",
    description: "Fundamental computer science concepts, algorithms, and theory",
    icon: Code,
    color: "blue",
    booksCount: 487,
    totalDownloads: 12450,
    averageRating: 4.6,
    status: "active",
    createdDate: "2023-01-15",
    lastUpdated: "2024-01-10",
    isDefault: true,
    order: 1
  },
  {
    id: "2", 
    name: "Software Engineering",
    slug: "software-engineering",
    description: "Software development methodologies, design patterns, and best practices",
    icon: Layout,
    color: "green",
    booksCount: 324,
    totalDownloads: 9876,
    averageRating: 4.7,
    status: "active",
    createdDate: "2023-01-15",
    lastUpdated: "2023-12-20",
    isDefault: true,
    order: 2
  },
  {
    id: "3",
    name: "Database Systems",
    slug: "database-systems", 
    description: "Database design, management, and optimization techniques",
    icon: Database,
    color: "purple",
    booksCount: 156,
    totalDownloads: 5432,
    averageRating: 4.5,
    status: "active",
    createdDate: "2023-02-01",
    lastUpdated: "2023-11-15",
    isDefault: true,
    order: 3
  },
  {
    id: "4",
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Information security, cryptography, and ethical hacking",
    icon: Shield,
    color: "red",
    booksCount: 289,
    totalDownloads: 8734,
    averageRating: 4.8,
    status: "active",
    createdDate: "2023-02-15",
    lastUpdated: "2024-01-05",
    isDefault: true,
    order: 4
  },
  {
    id: "5",
    name: "Machine Learning",
    slug: "machine-learning",
    description: "AI, machine learning algorithms, and data science techniques",
    icon: Brain,
    color: "orange",
    booksCount: 203,
    totalDownloads: 7891,
    averageRating: 4.9,
    status: "active",
    createdDate: "2023-03-01",
    lastUpdated: "2023-12-30",
    isDefault: true,
    order: 5
  },
  {
    id: "6",
    name: "Web Development",
    slug: "web-development",
    description: "Frontend and backend web development technologies",
    icon: Globe,
    color: "teal",
    booksCount: 145,
    totalDownloads: 4567,
    averageRating: 4.4,
    status: "active",
    createdDate: "2023-03-15",
    lastUpdated: "2023-12-10",
    isDefault: false,
    order: 6
  },
  {
    id: "7",
    name: "Mobile Development",
    slug: "mobile-development",
    description: "iOS, Android, and cross-platform mobile app development",
    icon: Smartphone,
    color: "indigo",
    booksCount: 98,
    totalDownloads: 3456,
    averageRating: 4.3,
    status: "active", 
    createdDate: "2023-04-01",
    lastUpdated: "2023-11-25",
    isDefault: false,
    order: 7
  },
  {
    id: "8",
    name: "Computer Engineering",
    slug: "computer-engineering",
    description: "Hardware design, embedded systems, and computer architecture",
    icon: Laptop,
    color: "gray",
    booksCount: 67,
    totalDownloads: 2345,
    averageRating: 4.2,
    status: "draft",
    createdDate: "2023-04-15",
    lastUpdated: "2023-10-30",
    isDefault: false,
    order: 8
  }
];

const categoryStats = {
  totalCategories: 8,
  activeCategories: 7,
  draftCategories: 1,
  totalBooksAcrossCategories: 1769,
  mostPopularCategory: "Computer Science",
  fastestGrowingCategory: "Machine Learning"
};

const colorOptions = [
  { name: "Blue", value: "blue", class: "bg-blue-500" },
  { name: "Green", value: "green", class: "bg-green-500" },
  { name: "Purple", value: "purple", class: "bg-purple-500" },
  { name: "Red", value: "red", class: "bg-red-500" },
  { name: "Orange", value: "orange", class: "bg-orange-500" },
  { name: "Teal", value: "teal", class: "bg-teal-500" },
  { name: "Indigo", value: "indigo", class: "bg-indigo-500" },
  { name: "Gray", value: "gray", class: "bg-gray-500" }
];

export default function CategoriesManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("order");
  const [showAddForm, setShowAddForm] = useState(false);
  const categoriesPerPage = 12;

  const filteredCategories = mockCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.slug.includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || category.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "booksCount":
        return b.booksCount - a.booksCount;
      case "downloads":
        return b.totalDownloads - a.totalDownloads;
      case "rating":
        return b.averageRating - a.averageRating;
      case "order":
      default:
        return a.order - b.order;
    }
  });

  const paginatedCategories = sortedCategories.slice(
    (currentPage - 1) * categoriesPerPage,
    currentPage * categoriesPerPage
  );

  const totalPages = Math.ceil(sortedCategories.length / categoriesPerPage);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === paginatedCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(paginatedCategories.map(category => category.id));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Draft</Badge>;
      case "archived":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Archived</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      red: "bg-red-500",
      orange: "bg-orange-500",
      teal: "bg-teal-500",
      indigo: "bg-indigo-500",
      gray: "bg-gray-500"
    };
    return colorMap[color] || "bg-gray-500";
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
          <h1 className="text-3xl font-bold text-gray-900">Categories Management</h1>
          <p className="text-gray-600 mt-1">
            Organize your digital library by managing book categories and their properties.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" className="flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            Preview Site
          </Button>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Categories</p>
                <p className="text-3xl font-bold text-gray-900">{categoryStats.totalCategories}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              {categoryStats.activeCategories} active
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-3xl font-bold text-gray-900">{categoryStats.totalBooksAcrossCategories.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>Across all categories</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Most Popular</p>
                <p className="text-xl font-bold text-gray-900">{categoryStats.mostPopularCategory}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-orange-600">
              <Star className="w-4 h-4 mr-1" />
              487 books
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fastest Growing</p>
                <p className="text-xl font-bold text-gray-900">{categoryStats.fastestGrowingCategory}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-purple-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +25% this month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-1 items-center space-x-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="order">Order</option>
                <option value="name">Name A-Z</option>
                <option value="booksCount">Most Books</option>
                <option value="downloads">Most Downloads</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {selectedCategories.length > 0 && (
            <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-700">
                  {selectedCategories.length} category(ies) selected
                </span>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Activate
                  </Button>
                  <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                    <XCircle className="w-4 h-4 mr-1" />
                    Archive
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

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleSelectCategory(category.id)}
                  className="absolute top-3 left-3 z-10 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <div className="absolute top-3 right-3 z-10">
                  {getStatusBadge(category.status)}
                </div>
                
                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className={`w-16 h-16 ${getColorClass(category.color)} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  {category.isDefault && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="text-xs bg-white">Default</Badge>
                    </div>
                  )}
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Books:</span>
                      <span className="font-semibold text-gray-900">{category.booksCount}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Downloads:</span>
                      <span className="font-semibold text-gray-900">{category.totalDownloads.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {renderStars(category.averageRating)}
                        </div>
                        <span className="font-semibold text-gray-900">{category.averageRating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
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
          );
        })}
      </div>

      {/* Pagination */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((currentPage - 1) * categoriesPerPage) + 1} to {Math.min(currentPage * categoriesPerPage, sortedCategories.length)} of {sortedCategories.length} categories
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