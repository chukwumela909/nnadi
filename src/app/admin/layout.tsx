import { Inter } from "next/font/google";
import Link from "next/link";
import { 
  Shield,
  Users,
  BookOpen,
  ShoppingCart,
  BarChart3,
  Tag,
  Home,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: Home
  },
  {
    label: "Users",
    href: "/admin/users", 
    icon: Users,
    badge: "24"
  },
  {
    label: "Books",
    href: "/admin/books",
    icon: BookOpen,
    badge: "156"
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    badge: "12"
  },
  {
    label: "Categories",
    href: "/admin/categories",
    icon: Tag
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3
  }
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">Admin Portal</span>
                <span className="text-xs text-gray-500">UNIPORT E-Library</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline ml-2">Settings</span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Admin Sidebar */}
        <nav className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto shadow-sm">
              {/* Admin Profile */}
              <div className="flex items-center flex-shrink-0 px-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">System Administrator</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                    >
                      <div className="flex items-center">
                        <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                        {item.label}
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </nav>
              
              {/* Quick Stats */}
              <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">System Status</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-100">Active Users:</span>
                      <span className="font-semibold">147</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">Total Books:</span>
                      <span className="font-semibold">2,854</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col flex-1 min-w-0">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 