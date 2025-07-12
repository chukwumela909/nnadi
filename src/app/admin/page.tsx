"use client";

// import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  BookOpen,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  AlertTriangle,
  Activity,
  BarChart3,
  Plus,
  Settings,
  ChevronRight,
  UserCheck,
  Upload
} from "lucide-react";

// Mock admin data
const dashboardStats = {
  totalUsers: 1247,
  activeUsers: 847,
  totalBooks: 2854,
  totalOrders: 1836,
  monthlyRevenue: 125000,
  pendingOrders: 12,
  newUsersToday: 8,
  booksAddedThisWeek: 15
};

const recentActivity = [
  {
    id: "1",
    type: "user_registered",
    description: "New user registration: Jane Smith",
    time: "2 minutes ago",
    status: "success"
  },
  {
    id: "2", 
    type: "book_purchased",
    description: "Book purchased: Introduction to Algorithms by John Doe",
    time: "15 minutes ago",
    status: "success"
  },
  {
    id: "3",
    type: "book_uploaded",
    description: "New book uploaded: Machine Learning Basics",
    time: "1 hour ago",
    status: "success"
  },
  {
    id: "4",
    type: "user_issue",
    description: "Credit issue reported by user ID: 20180001234",
    time: "2 hours ago",
    status: "warning"
  },
  {
    id: "5",
    type: "system",
    description: "Daily backup completed successfully",
    time: "3 hours ago",
    status: "success"
  }
];

const pendingActions = [
  {
    id: "1",
    title: "Credit Requests",
    count: 5,
    description: "Students requesting additional credits",
    action: "Review",
    priority: "high"
  },
  {
    id: "2",
    title: "Book Approvals",
    count: 3,
    description: "New books pending approval",
    action: "Approve",
    priority: "medium"
  },
  {
    id: "3",
    title: "User Reports",
    count: 2,
    description: "User-reported issues",
    action: "Investigate",
    priority: "high"
  },
  {
    id: "4",
    title: "Category Updates",
    count: 1,
    description: "Category modification requests",
    action: "Update",
    priority: "low"
  }
];

const quickStats = [
  {
    title: "Today's Registrations",
    value: "8",
    change: "+12%",
    trend: "up"
  },
  {
    title: "Books Downloaded",
    value: "156",
    change: "+8%",
    trend: "up"
  },
  {
    title: "Active Sessions",
    value: "89",
    change: "-3%",
    trend: "down"
  },
  {
    title: "System Load",
    value: "72%",
    change: "+5%",
    trend: "up"
  }
];

export default function AdminDashboardPage() {

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_registered": return <UserCheck className="w-4 h-4" />;
      case "book_purchased": return <ShoppingCart className="w-4 h-4" />;
      case "book_uploaded": return <Upload className="w-4 h-4" />;
      case "user_issue": return <AlertTriangle className="w-4 h-4" />;
      case "system": return <Settings className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "success": return "text-green-600 bg-green-100";
      case "warning": return "text-yellow-600 bg-yellow-100";
      case "error": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your e-library today.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" className="flex items-center">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
            <Plus className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              {dashboardStats.activeUsers} active
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalBooks.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +{dashboardStats.booksAddedThisWeek} this week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalOrders.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-yellow-600">
              <Clock className="w-4 h-4 mr-1" />
              {dashboardStats.pendingOrders} pending
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-3xl font-bold text-gray-900">₦{dashboardStats.monthlyRevenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Button variant="outline" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.status)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 mb-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Actions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Actions</CardTitle>
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              {pendingActions.reduce((sum, action) => sum + action.count, 0)} total
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingActions.map((action) => (
              <div key={action.id} className={`p-4 rounded-lg border ${getPriorityColor(action.priority)}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{action.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {action.count}
                  </Badge>
                </div>
                <p className="text-sm mb-3">{action.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  {action.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/users">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="w-6 h-6" />
                <span>Manage Users</span>
              </Button>
            </Link>
            
            <Link href="/admin/books">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                <BookOpen className="w-6 h-6" />
                <span>Add Books</span>
              </Button>
            </Link>
            
            <Link href="/admin/orders">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                <ShoppingCart className="w-6 h-6" />
                <span>View Orders</span>
              </Button>
            </Link>
            
            <Link href="/admin/analytics">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                <BarChart3 className="w-6 h-6" />
                <span>Analytics</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 