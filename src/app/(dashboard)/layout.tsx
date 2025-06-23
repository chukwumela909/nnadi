import { Inter } from "next/font/google";
import Link from "next/link";
import { 
  BookOpen, 
  CreditCard, 
  User, 
  Home,
  Library,
  Star,
  Bell,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home
  },
  {
    label: "My Library",
    href: "/library", 
    icon: Library
  },
  {
    label: "Credits",
    href: "/credits",
    icon: CreditCard
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User
  },
  {
    label: "Browse Books",
    href: "/",
    icon: BookOpen
  }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-school-blue rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">UNIPORT E-Library</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="sm">
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-school-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Computer Science • 300L</p>
                  </div>
                </div>
              </div>
              
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              
              {/* Credits Display */}
              <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between p-3 bg-school-blue rounded-lg">
                  <div>
                    <p className="text-white text-sm font-medium">Available Credits</p>
                    <p className="text-white text-2xl font-bold">2,450</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-white/80" />
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