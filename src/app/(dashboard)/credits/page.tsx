"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coins,
  PlusCircle,
  History,
  ArrowRight,
  CheckCircle,
  Clock,
  XCircle,
  Download
} from "lucide-react";

// Mock Data
const userCredits = {
  balance: 1250,
};

const creditPackages = [
  {
    id: "pkg1",
    name: "Starter Pack",
    credits: 500,
    price: 5.00,
    bonus: 50,
    color: "bg-green-500",
  },
  {
    id: "pkg2",
    name: "Student Bundle",
    credits: 1200,
    price: 10.00,
    bonus: 150,
    color: "bg-blue-500",
  },
  {
    id: "pkg3",
    name: "Researcher Pack",
    credits: 3000,
    price: 20.00,
    bonus: 400,
    color: "bg-purple-500",
  },
  {
    id: "pkg4",
    name: "Department License",
    credits: 10000,
    price: 50.00,
    bonus: 1500,
    color: "bg-orange-500",
  },
];

const transactionHistory = [
  {
    id: "txn1",
    type: "purchase",
    description: "Purchased 'Introduction to Algorithms'",
    amount: -300,
    date: "2024-07-20",
    status: "Completed",
  },
  {
    id: "txn2",
    type: "top-up",
    description: "Topped up Student Bundle",
    amount: 1200,
    date: "2024-07-18",
    status: "Completed",
  },
  {
    id: "txn3",
    type: "purchase",
    description: "Purchased 'Clean Code'",
    amount: -250,
    date: "2024-07-15",
    status: "Completed",
  },
  {
    id: "txn4",
    type: "refund",
    description: "Refund for 'System Design Interview'",
    amount: 450,
    date: "2024-07-12",
    status: "Completed",
  },
  {
    id: "txn5",
    type: "purchase",
    description: "Failed purchase attempt",
    amount: -500,
    date: "2024-07-11",
    status: "Failed",
  },
];

export default function CreditsPage() {
  const [selectedTab, setSelectedTab] = useState("packages");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Your Credits</h1>
          <p className="text-lg text-gray-600 mt-1">
            Top up your balance to purchase books and access premium content.
          </p>
        </div>
        <Card className="w-full sm:w-auto sm:min-w-[280px] bg-gradient-to-r from-school-blue to-blue-700 text-white shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white/90 flex items-center">
              <Coins className="w-5 h-5 mr-2" />
              Your Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{userCredits.balance.toLocaleString()} credits</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setSelectedTab("packages")}
          className={`px-4 py-2 text-lg font-medium transition-colors ${
            selectedTab === "packages"
              ? "border-b-2 border-school-blue text-school-blue"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Credit Packages
        </button>
        <button
          onClick={() => setSelectedTab("history")}
          className={`px-4 py-2 text-lg font-medium transition-colors ${
            selectedTab === "history"
              ? "border-b-2 border-school-blue text-school-blue"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Transaction History
        </button>
      </div>

      {/* Content based on tab */}
      <div>
        {selectedTab === "packages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col group hover:shadow-xl transition-all duration-300">
                <CardHeader className={`${pkg.color} text-white rounded-t-lg p-4 text-center`}>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="text-center mb-6 flex-grow">
                    <p className="text-5xl font-extrabold text-gray-900 mb-2">
                      {pkg.credits.toLocaleString()}
                    </p>
                    <p className="text-lg text-gray-600">Credits</p>
                    {pkg.bonus > 0 && (
                      <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">
                        + {pkg.bonus} bonus credits!
                      </Badge>
                    )}
                  </div>
                  <Button className="w-full mt-auto bg-school-blue hover:bg-blue-700 group-hover:scale-105 transition-transform">
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Buy for ${pkg.price.toFixed(2)}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === "history" && (
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="flex items-center">
                <History className="w-5 h-5 mr-2" />
                Your Transactions
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export History
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactionHistory.map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {getStatusIcon(txn.status)}
                      </div>
                      <div>
                        <p className="font-semibold">{txn.description}</p>
                        <p className="text-sm text-gray-500">{txn.date}</p>
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${txn.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {txn.amount > 0 ? '+' : ''}{txn.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="ghost" className="text-school-blue hover:text-blue-700">
                  Load More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 