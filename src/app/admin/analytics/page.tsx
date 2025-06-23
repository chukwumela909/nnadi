"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Download,
  DollarSign,
  Eye,
  Calendar,
  Filter,
  RefreshCw,
  FileText,
  Clock,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target
} from "lucide-react";

// Mock analytics data
const overviewStats = {
  totalUsers: 1247,
  activeUsers: 847,
  totalBooks: 2854,
  totalDownloads: 45678,
  totalRevenue: 2456700,
  averageRating: 4.6,
  conversionRate: 23.5,
  retentionRate: 78.2
};

const timeRangeStats = {
  "7d": {
    users: { current: 847, previous: 782, change: 8.3 },
    downloads: { current: 1234, previous: 1089, change: 13.3 },
    revenue: { current: 45600, previous: 42300, change: 7.8 },
    newUsers: { current: 89, previous: 67, change: 32.8 }
  },
  "30d": {
    users: { current: 847, previous: 723, change: 17.2 },
    downloads: { current: 5432, previous: 4876, change: 11.4 },
    revenue: { current: 156700, previous: 134500, change: 16.5 },
    newUsers: { current: 234, previous: 189, change: 23.8 }
  },
  "90d": {
    users: { current: 847, previous: 654, change: 29.5 },
    downloads: { current: 15678, previous: 13245, change: 18.4 },
    revenue: { current: 445600, previous: 378900, change: 17.6 },
    newUsers: { current: 567, previous: 445, change: 27.4 }
  }
};

const topBooks = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    downloads: 2345,
    revenue: 185600,
    rating: 4.8,
    category: "Computer Science"
  },
  {
    id: "2",
    title: "Clean Code: A Handbook",
    author: "Robert C. Martin",
    downloads: 1876,
    revenue: 156300,
    rating: 4.7,
    category: "Software Engineering"
  },
  {
    id: "3",
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    downloads: 1654,
    revenue: 134500,
    rating: 4.9,
    category: "Machine Learning"
  },
  {
    id: "4",
    title: "Network Security Essentials",
    author: "William Stallings",
    downloads: 1432,
    revenue: 123400,
    rating: 4.6,
    category: "Cybersecurity"
  },
  {
    id: "5",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    downloads: 1289,
    revenue: 98700,
    rating: 4.5,
    category: "Database Systems"
  }
];

const categoryPerformance = [
  {
    name: "Computer Science",
    books: 487,
    downloads: 12450,
    revenue: 567800,
    growth: 15.3,
    color: "blue"
  },
  {
    name: "Software Engineering",
    books: 324,
    downloads: 9876,
    revenue: 445600,
    growth: 22.1,
    color: "green"
  },
  {
    name: "Cybersecurity",
    books: 289,
    downloads: 8734,
    revenue: 389400,
    growth: 18.7,
    color: "red"
  },
  {
    name: "Machine Learning",
    books: 203,
    downloads: 7891,
    revenue: 334500,
    growth: 35.2,
    color: "orange"
  },
  {
    name: "Database Systems",
    books: 156,
    downloads: 5432,
    revenue: 234600,
    growth: 12.4,
    color: "purple"
  }
];

const deviceStats = {
  desktop: { percentage: 65.4, users: 553 },
  mobile: { percentage: 28.7, users: 243 },
  tablet: { percentage: 5.9, users: 51 }
};

const userActivity = [
  { hour: "00", users: 23 },
  { hour: "01", users: 18 },
  { hour: "02", users: 12 },
  { hour: "03", users: 8 },
  { hour: "04", users: 15 },
  { hour: "05", users: 25 },
  { hour: "06", users: 42 },
  { hour: "07", users: 68 },
  { hour: "08", users: 89 },
  { hour: "09", users: 126 },
  { hour: "10", users: 145 },
  { hour: "11", users: 167 },
  { hour: "12", users: 189 },
  { hour: "13", users: 156 },
  { hour: "14", users: 134 },
  { hour: "15", users: 178 },
  { hour: "16", users: 195 },
  { hour: "17", users: 203 },
  { hour: "18", users: 187 },
  { hour: "19", users: 165 },
  { hour: "20", users: 142 },
  { hour: "21", users: 118 },
  { hour: "22", users: 87 },
  { hour: "23", users: 54 }
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("users");

  const currentStats = timeRangeStats[timeRange as keyof typeof timeRangeStats];

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? (
      <ArrowUpRight className="w-4 h-4" />
    ) : (
      <ArrowDownRight className="w-4 h-4" />
    );
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

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case "desktop": return <Monitor className="w-4 h-4" />;
      case "mobile": return <Smartphone className="w-4 h-4" />;
      case "tablet": return <Tablet className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500"
    };
    return colorMap[color] || "bg-gray-500";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Track performance, user behavior, and business metrics for your e-library.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          
          <Button variant="outline" className="flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          
          <Button variant="outline" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-gray-900">{currentStats.users.current.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className={`mt-4 flex items-center text-sm ${getChangeColor(currentStats.users.change)}`}>
              {getChangeIcon(currentStats.users.change)}
              <span className="ml-1">{Math.abs(currentStats.users.change)}% vs previous period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Downloads</p>
                <p className="text-3xl font-bold text-gray-900">{currentStats.downloads.current.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className={`mt-4 flex items-center text-sm ${getChangeColor(currentStats.downloads.change)}`}>
              {getChangeIcon(currentStats.downloads.change)}
              <span className="ml-1">{Math.abs(currentStats.downloads.change)}% vs previous period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-3xl font-bold text-gray-900">₦{currentStats.revenue.current.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className={`mt-4 flex items-center text-sm ${getChangeColor(currentStats.revenue.change)}`}>
              {getChangeIcon(currentStats.revenue.change)}
              <span className="ml-1">{Math.abs(currentStats.revenue.change)}% vs previous period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Users</p>
                <p className="text-3xl font-bold text-gray-900">{currentStats.newUsers.current}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className={`mt-4 flex items-center text-sm ${getChangeColor(currentStats.newUsers.change)}`}>
              {getChangeIcon(currentStats.newUsers.change)}
              <span className="ml-1">{Math.abs(currentStats.newUsers.change)}% vs previous period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              User Activity (24h)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-1">
              {userActivity.map((data, index) => {
                const height = (data.users / Math.max(...userActivity.map(d => d.users))) * 100;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-sm"
                      style={{ height: `${height}%`, minHeight: '2px' }}
                      title={`${data.hour}:00 - ${data.users} users`}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1">{data.hour}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Device Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(deviceStats).map(([device, stats]) => (
                <div key={device} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
                      {getDeviceIcon(device)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 capitalize">{device}</p>
                      <p className="text-xs text-gray-500">{stats.users} users</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${stats.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-10">
                      {stats.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Books */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Books</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {topBooks.map((book, index) => (
                <div key={book.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                          {book.title}
                        </h4>
                        <p className="text-xs text-gray-500">by {book.author}</p>
                        <div className="flex items-center mt-1">
                          {renderStars(book.rating)}
                          <span className="text-xs text-gray-500 ml-1">({book.rating})</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        {book.downloads.toLocaleString()} downloads
                      </p>
                      <p className="text-xs text-gray-500">
                        ₦{book.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${getCategoryColor(category.color)}`}></div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {category.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {category.books} books • {category.downloads.toLocaleString()} downloads
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        ₦{category.revenue.toLocaleString()}
                      </p>
                      <p className={`text-xs flex items-center ${getChangeColor(category.growth)}`}>
                        {getChangeIcon(category.growth)}
                        <span className="ml-1">{category.growth}%</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Conversion Rate</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{overviewStats.conversionRate}%</p>
            <p className="text-sm text-gray-500 mt-1">Visitors to customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Retention Rate</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{overviewStats.retentionRate}%</p>
            <p className="text-sm text-gray-500 mt-1">Monthly user retention</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Avg Rating</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">{overviewStats.averageRating}</p>
            <p className="text-sm text-gray-500 mt-1">Across all books</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Total Books</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{overviewStats.totalBooks.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">In the catalog</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 