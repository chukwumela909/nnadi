import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="text-school-blue border-school-blue w-fit">
              Faculty of Computing • University of Port Harcourt
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Learning{" "}
                <span className="relative">
                  <span className="text-school-blue">is</span>
                  <div className="absolute -inset-2 bg-cyan-400/20 rounded-lg -rotate-1 -z-10"></div>
                </span>
                <br />
                fascinating
              </h1>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-coral-500" style={{color: '#FF6B6B'}}>
                  1000+
                </div>
                <div className="text-lg text-muted-foreground font-medium">
                  Books
                </div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-school-blue">
                  5
                </div>
                <div className="text-lg text-muted-foreground font-medium">
                  Study areas
                </div>
              </div>
            </div>

            {/* University Address */}
            <div className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              University of Port Harcourt, Rivers State, Nigeria
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-school-blue hover:bg-blue-700 text-lg px-8 py-3">
                <Link href="/signup">
                  Start Learning Now
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 border-school-blue text-school-blue hover:bg-blue-50">
                <Link href="#books">
                  Browse Collection
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Real Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform rotate-3"></div>
              
              {/* Main content area */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                {/* Real book/library image */}
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop&crop=center"
                    alt="Stack of programming and computing books"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse z-10"></div>
                </div>
                
                {/* Bottom tagline */}
                <div className="text-center mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Dive deep into the
                    <br />
                    <span className="text-school-blue">world of knowledge!</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 