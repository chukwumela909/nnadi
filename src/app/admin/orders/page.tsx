"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart,
  Search,
  Filter,
  Download,
  Eye,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  CreditCard,
  FileText,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  BookOpen,
  User,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2024-001234",
    userId: "20180001234",
    userName: "Chukwuemeka Okafor",
    userEmail: "c.okafor@uniport.edu.ng",
    userDepartment: "Computer Science",
    userLevel: "400L",
    bookId: "1",
    bookTitle: "Introduction to Algorithms",
    bookAuthor: "Thomas H. Cormen",
    bookCover: "/api/placeholder/60/90",
    credits: 800,
    amount: 1200,
    orderDate: "2024-01-15T14:30:00Z",
    status: "completed",
    paymentMethod: "credits",
    downloadCount: 3,
    lastDownload: "2024-01-15T16:45:00Z",
    transactionId: "TXN-789123456"
  },
  {
    id: "ORD-2024-001235",
    userId: "20190002345",
    userName: "Adaeze Ugwu",
    userEmail: "a.ugwu@uniport.edu.ng",
    userDepartment: "Software Engineering",
    userLevel: "300L",
    bookId: "2",
    bookTitle: "Clean Code: A Handbook",
    bookAuthor: "Robert C. Martin",
    bookCover: "/api/placeholder/60/90",
    credits: 650,
    amount: 950,
    orderDate: "2024-01-14T10:15:00Z",
    status: "completed",
    paymentMethod: "credits",
    downloadCount: 1,
    lastDownload: "2024-01-14T10:20:00Z",
    transactionId: "TXN-789123457"
  },
  {
    id: "ORD-2024-001236",
    userId: "20200003456",
    userName: "Ibrahim Mohammed",
    userEmail: "i.mohammed@uniport.edu.ng",
    userDepartment: "Information Systems",
    userLevel: "200L",
    bookId: "4",
    bookTitle: "Machine Learning Yearning",
    bookAuthor: "Andrew Ng",
    bookCover: "/api/placeholder/60/90",
    credits: 500,
    amount: 800,
    orderDate: "2024-01-13T16:45:00Z",
    status: "pending",
    paymentMethod: "credits",
    downloadCount: 0,
    lastDownload: null,
    transactionId: "TXN-789123458"
  },
  {
    id: "ORD-2024-001237",
    userId: "20210004567",
    userName: "Blessing Okoro",
    userEmail: "b.okoro@uniport.edu.ng",
    userDepartment: "Cybersecurity",
    userLevel: "100L",
    bookId: "1",
    bookTitle: "Introduction to Algorithms",
    bookAuthor: "Thomas H. Cormen",
    bookCover: "/api/placeholder/60/90",
    credits: 800,
    amount: 1200,
    orderDate: "2024-01-12T09:30:00Z",
    status: "failed",
    paymentMethod: "credits",
    downloadCount: 0,
    lastDownload: null,
    transactionId: "TXN-789123459"
  },
  {
    id: "ORD-2024-001238",
    userId: "20220005678",
    userName: "Kelechi Nwankwo",
    userEmail: "k.nwankwo@uniport.edu.ng",
    userDepartment: "Data Science",
    userLevel: "MSc",
    bookId: "2",
    bookTitle: "Clean Code: A Handbook",
    bookAuthor: "Robert C. Martin",
    bookCover: "/api/placeholder/60/90",
    credits: 650,
    amount: 950,
    orderDate: "2024-01-11T14:20:00Z",
    status: "refunded",
    paymentMethod: "credits",
    downloadCount: 2,
    lastDownload: "2024-01-11T15:10:00Z",
    transactionId: "TXN-789123460"
  }
];

const orderStatuses = [
  "All Status",
  "completed",
  "pending",
  "failed",
  "refunded",
  "cancelled"
];

const paymentMethods = [
  "All Methods",
  "credits",
  "bank_transfer",
  "card"
];

const departments = [
  "All Departments",
  "Computer Science",
  "Software Engineering",
  "Information Systems",
  "Cybersecurity",
  "Data Science",
  "Computer Engineering"
];

const orderStats = {
  totalOrders: 1836,
  completedOrders: 1654,
  pendingOrders: 89,
  failedOrders: 93,
  totalRevenue: 2456700,
  averageOrderValue: 850,
  monthlyGrowth: 15.2
};

export default function OrdersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [paymentFilter, setPaymentFilter] = useState("All Methods");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [dateRange, setDateRange] = useState("7d");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("orderDate");
  const ordersPerPage = 10;

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || order.status === statusFilter;
    const matchesPayment = paymentFilter === "All Methods" || order.paymentMethod === paymentFilter;
    const matchesDepartment = departmentFilter === "All Departments" || order.userDepartment === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment && matchesDepartment;
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortBy) {
      case "orderDate":
        return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
      case "amount":
        return b.amount - a.amount;
      case "userName":
        return a.userName.localeCompare(b.userName);
      case "bookTitle":
        return a.bookTitle.localeCompare(b.bookTitle);
      default:
        return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
    }
  });

  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  const handleSelectOrder = (orderId: string) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === paginatedOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(paginatedOrders.map(order => order.id));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Pending</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Failed</Badge>;
      case "refunded":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Refunded</Badge>;
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPaymentMethodBadge = (method: string) => {
    switch (method) {
      case "credits":
        return <Badge variant="outline" className="text-orange-600 border-orange-300">Credits</Badge>;
      case "bank_transfer":
        return <Badge variant="outline" className="text-blue-600 border-blue-300">Bank Transfer</Badge>;
      case "card":
        return <Badge variant="outline" className="text-purple-600 border-purple-300">Card</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600 mt-1">
            Track and manage all book purchases and transactions in your e-library.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Orders
          </Button>
          <Button variant="outline" className="flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{orderStats.totalOrders.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +{orderStats.monthlyGrowth}% this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">{orderStats.completedOrders.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>{Math.round((orderStats.completedOrders / orderStats.totalOrders) * 100)}% success rate</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-gray-900">{orderStats.pendingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-yellow-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Needs attention
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">₦{orderStats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <span>Avg: ₦{orderStats.averageOrderValue}/order</span>
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
                  placeholder="Search by order ID, user, book, or transaction..."
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
                {orderStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
              
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="orderDate">Newest First</option>
                <option value="amount">Highest Amount</option>
                <option value="userName">User A-Z</option>
                <option value="bookTitle">Book A-Z</option>
              </select>
            </div>
          </div>
          
          {selectedOrders.length > 0 && (
            <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-700">
                  {selectedOrders.length} order(s) selected
                </span>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Process
                  </Button>
                  <Button size="sm" variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50">
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Refund
                  </Button>
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-300 hover:bg-orange-50">
                    <Download className="w-4 h-4 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Orders ({sortedOrders.length})</CardTitle>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedOrders.length === paginatedOrders.length && paginatedOrders.length > 0}
              onChange={handleSelectAll}
              className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-500">Select all</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === paginatedOrders.length && paginatedOrders.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Book
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{order.id}</div>
                        <div className="text-gray-500">{formatDate(order.orderDate)}</div>
                        <div className="text-xs text-gray-400">{order.transactionId}</div>
                        <div className="mt-1">
                          {getPaymentMethodBadge(order.paymentMethod)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">
                              {order.userName.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{order.userName}</div>
                          <div className="text-xs text-gray-500">{order.userEmail}</div>
                          <div className="text-xs text-gray-400">{order.userDepartment} - {order.userLevel}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-8">
                          <div className="h-12 w-8 bg-gradient-to-br from-orange-400 to-red-500 rounded flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 line-clamp-1">
                            {order.bookTitle}
                          </div>
                          <div className="text-xs text-gray-500">by {order.bookAuthor}</div>
                          <div className="text-xs text-gray-400">
                            Downloads: {order.downloadCount}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{order.credits} credits</div>
                        <div className="text-gray-500">₦{order.amount.toLocaleString()}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {((currentPage - 1) * ordersPerPage) + 1} to {Math.min(currentPage * ordersPerPage, sortedOrders.length)} of {sortedOrders.length} results
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 