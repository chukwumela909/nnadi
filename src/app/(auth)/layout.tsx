import Link from "next/link";
// import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-school-blue to-blue-700 text-white flex-col justify-center px-12">
        <div className="max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mb-8">
            <BookOpen className="h-10 w-10 text-white" />
            <span className="font-bold text-2xl">UNIPORT E-Library</span>
          </Link>
          
          {/* Hero Content */}
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Welcome to the Future of Learning
          </h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Access thousands of computing resources, research papers, and textbooks. 
            Your academic journey begins here.
          </p>
          
          {/* University Info */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
            <h3 className="font-semibold mb-2">University of Port Harcourt</h3>
            <p className="text-sm opacity-80">Faculty of Computing</p>
            <p className="text-sm opacity-80">Digital Library System</p>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex space-x-4 opacity-20">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-school-blue" />
              <span className="font-bold text-xl text-school-blue">
                UNIPORT E-Library
              </span>
            </Link>
          </div>
          
          {/* Auth Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {children}
          </div>
          
          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link 
                href="/contact" 
                className="text-school-blue hover:text-blue-700 font-medium"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 