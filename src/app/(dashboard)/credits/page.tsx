"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CreditCard,
  Plus,
  Minus,
  Calendar,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Download,
  Star,
  RefreshCw,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  History
} from "lucide-react";

// Mock credit data
const creditStats = {
  currentBalance: 2450,
  totalEarned: 5000,
  totalSpent: 2550,
  thisMonthSpent: 850,
  averageMonthlySpending: 425
};

const transactions = [
  {
    id: "1",
    type: "debit",
    amount: 500,
    description: "Introduction to Algorithms",
    category: "Book Purchase",
    date: "2024-01-15",
    status: "completed",
    bookId: "1"
  },
  {
    id: "2",
    type: "debit", 
    amount: 350,
    description: "Clean Code: A Handbook of Agile Software Craftsmanship",
    category: "Book Purchase",
    date: "2024-01-10",
    status: "completed",
    bookId: "2"
  },
  {
    id: "3",
    type: "credit",
    amount: 1000,
    description: "Monthly allowance from administration",
    category: "Admin Credit",
    date: "2024-01-01",
    status: "completed"
  },
  {
    id: "4",
    type: "debit",
    amount: 450,
    description: "System Design Interview – An insider's guide",
    category: "Book Purchase",
    date: "2024-01-08",
    status: "completed",
    bookId: "3"
  },
  {
    id: "5",
    type: "credit",
    amount: 500,
    description: "Bonus credits for academic excellence",
    category: "Academic Bonus",
    date: "2023-12-30",
    status: "completed"
  },
  {
    id: "6",
    type: "debit",
    amount: 400,
    description: "Machine Learning Yearning",
    category: "Book Purchase", 
    date: "2023-12-28",
    status: "completed",
    bookId: "4"
  },
  {
    id: "7",
    type: "debit",
    amount: 300,
    description: "JavaScript: The Good Parts",
    category: "Book Purchase",
    date: "2023-12-20",
    status: "completed",
    bookId: "5"
  },
  {
    id: "8",
    type: "credit",
    amount: 2000,
    description: "Semester credit allocation",
    category: "Semester Allowance",
    date: "2023-12-15",
    status: "completed"
  }
];

const creditPackages = [
  {
    id: "basic",
    name: "Basic Package",
    credits: 1000,
    price: "₦25,000",
    popular: false,
    benefits: ["1,000 credits", "Valid for 6 months", "All book categories"]
  },
  {
    id: "standard", 
    name: "Standard Package",
    credits: 2500,
    price: "₦60,000",
    popular: true,
    benefits: ["2,500 credits", "Valid for 12 months", "All book categories", "Priority support"]
  },
  {
    id: "premium",
    name: "Premium Package", 
    credits: 5000,
    price: "₦100,000",
    popular: false,
    benefits: ["5,000 credits", "Valid for 18 months", "All book categories", "Priority support", "Early access to new books"]
  }
];

export default function CreditsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterTransactions(query, filterType);
  };

  const handleFilter = (type: string) => {
    setFilterType(type);
    filterTransactions(searchQuery, type);
  };

  const filterTransactions = (query: string, type: string) => {
    let filtered = [...transactions];

    if (query) {
      filtered = filtered.filter(transaction =>
        transaction.description.toLowerCase().includes(query.toLowerCase()) ||
        transaction.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (type !== "all") {
      filtered = filtered.filter(transaction => transaction.type === type);
    }

    setFilteredTransactions(filtered);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Credits Management</h1>
          <p className="text-gray-600 mt-1">
            Manage your credits and view transaction history
          </p>
        </div>
        
        <Button className="mt-4 sm:mt-0 bg-school-blue hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Request Credits
        </Button>
      </div>

      {/* Credit Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-school-blue to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Current Balance</p>
                <p className="text-3xl font-bold">{creditStats.currentBalance.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 text-blue-100 text-sm">
              Available for purchases
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earned</p>
                <p className="text-3xl font-bold text-gray-900">{creditStats.totalEarned.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              All time
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900">{creditStats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-red-600">
              <ArrowDownRight className="w-4 h-4 mr-1" />
              All time
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-3xl font-bold text-gray-900">{creditStats.thisMonthSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>Avg. {creditStats.averageMonthlySpending}/month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Credit Packages */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creditPackages.map((pkg) => (
            <Card key={pkg.id} className={`relative ${pkg.popular ? 'border-school-blue border-2' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-school-blue hover:bg-blue-700">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-school-blue">{pkg.credits.toLocaleString()}</div>
                <div className="text-lg text-gray-600">credits</div>
                <div className="text-2xl font-bold">{pkg.price}</div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-school-blue mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-school-blue hover:bg-blue-700' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  {pkg.popular ? 'Get Started' : 'Select Package'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
          <Button variant="outline" className="mt-4 sm:mt-0">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterType} onValueChange={handleFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="credit">Credits Only</SelectItem>
              <SelectItem value="debit">Debits Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Transactions List */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <Plus className={`w-5 h-5 text-green-600`} />
                          ) : (
                            <Minus className={`w-5 h-5 text-red-600`} />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {transaction.description}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <Badge variant="outline" className="text-xs">
                              {transaction.category}
                            </Badge>
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            <Badge 
                              variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : '-'}{transaction.amount.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">credits</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <History className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No transactions found</h3>
                  <p className="text-gray-600">
                    {searchQuery ? "Try adjusting your search or filter criteria." : "Your transaction history will appear here."}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-school-blue rounded-lg flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Need More Credits?</h3>
              <p className="text-gray-600 mb-4">
                Contact your department administrator or the library staff to request additional credits. 
                Academic performance bonuses and special allocations may be available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
                  Contact Admin
                </Button>
                <Button variant="ghost" className="text-school-blue hover:bg-school-blue/10">
                  View Credit Policy
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}