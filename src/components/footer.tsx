import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-school-blue" />
              <span className="font-bold text-xl text-school-blue">
                UNIPORT E-Library
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Faculty of Computing's digital library providing access to thousands of 
              academic resources, textbooks, and research papers for students and faculty.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>University of Port Harcourt, Rivers State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>library@uniport.edu.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 (84) 817-000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/books" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Browse Books
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  href="/search" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Students</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/signup" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link 
                  href="/login" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Student Login
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  My Library
                </Link>
              </li>
              <li>
                <Link 
                  href="/credits" 
                  className="text-muted-foreground hover:text-school-blue transition-colors"
                >
                  Credit System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 University of Port Harcourt Faculty of Computing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-school-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-school-blue transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-school-blue transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 