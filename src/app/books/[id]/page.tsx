import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { 
  ArrowLeft, 
  Star, 
  Coins,
  ShoppingCart,
  Heart,
  Share2
} from "lucide-react";

// Mock book data - in a real app, this would come from a database
const getBooksData = () => [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    category: "Computer Science",
    credits: 500,
    rating: 4.8,
    totalRatings: 1284,
    readers: 2340,
    downloads: 8920,
    pages: 1312,
    publishedYear: 2009,
    publisher: "MIT Press",
    isbn: "978-0262033848",
    language: "English",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=600&fit=crop&crop=center",
    description: "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness.",
    fullDescription: `This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study.

The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor.

This book is intended primarily for use in undergraduate or graduate courses in algorithms or data structures. Because it discusses engineering issues in algorithm design, as well as mathematical aspects, it is equally well suited for self-study by technical professionals.`,
    tableOfContents: [
      "Foundations",
      "Sorting and Order Statistics", 
      "Data Structures",
      "Advanced Design and Analysis Techniques",
      "Advanced Data Structures",
      "Graph Algorithms",
      "Selected Topics"
    ],
    tags: ["algorithms", "data-structures", "computer-science", "programming", "mathematics"],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Excellent comprehensive guide to algorithms. Perfect for both students and professionals.",
        date: "2024-01-15"
      },
      {
        id: 2, 
        user: "Sarah Smith",
        rating: 4,
        comment: "Very detailed and well-structured. Some concepts can be challenging but worth the effort.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Development",
    credits: 350,
    rating: 4.9,
    totalRatings: 2156,
    readers: 1890,
    downloads: 12450,
    pages: 464,
    publishedYear: 2008,
    publisher: "Prentice Hall",
    isbn: "978-0132350884",
    language: "English",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=center",
    description: "A handbook of agile software craftsmanship that will help you become a better programmer.",
    fullDescription: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.

Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code "on the fly" into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it.`,
    tableOfContents: [
      "Clean Code",
      "Meaningful Names",
      "Functions", 
      "Comments",
      "Formatting",
      "Objects and Data Structures",
      "Error Handling"
    ],
    tags: ["clean-code", "software-development", "programming", "best-practices"],
    reviews: [
      {
        id: 1,
        user: "Alex Johnson",
        rating: 5,
        comment: "This book completely changed how I write code. Essential reading for any developer.",
        date: "2024-01-12"
      }
    ]
  },
  {
    id: "3",
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    category: "Data Science",
    credits: 400,
    rating: 4.7,
    totalRatings: 856,
    readers: 1560,
    downloads: 5420,
    pages: 118,
    publishedYear: 2018,
    publisher: "Self-Published",
    isbn: "N/A",
    language: "English",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
    description: "Technical strategy for AI engineers in the era of deep learning.",
    fullDescription: `AI is transforming multiple industries. But building a machine learning system requires that you make practical decisions:

Should you collect more training data? Should you use end-to-end deep learning? Should you add more hand-designed features? Should you add more layers to your neural network? Sweeping changes in AI are making technical tactics obsolete almost as quickly as they are published. But the fundamentals of how to approach a machine learning project are more stable.

This book is structured to teach you how to make the decisions that lead to success. Although some of the material is fairly technical, you don't need a deep background in machine learning to understand it.`,
    tableOfContents: [
      "Why Machine Learning Strategy",
      "Setting up development and test sets",
      "Basic Error Analysis",
      "Bias and Variance",
      "Learning Curves",
      "Comparing to Human Performance",
      "Training and Testing on Different Distributions"
    ],
    tags: ["machine-learning", "ai", "deep-learning", "strategy", "data-science"],
    reviews: []
  },
  {
    id: "4",
    title: "System Design Interview",
    author: "Alex Xu",
    category: "System Design",
    credits: 450,
    rating: 4.6,
    totalRatings: 923,
    readers: 2030,
    downloads: 7230,
    pages: 322,
    publishedYear: 2020,
    publisher: "ByteByteGo",
    isbn: "979-8664653403",
    language: "English",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
    description: "An insider's guide to system design interviews.",
    fullDescription: `System design interviews are one of the most difficult interviews for software engineers. This book provides a step-by-step framework on how to tackle a system design question.

It goes through four real system design interview questions, from basic to advanced. You will learn how to approach each question, what questions to ask, how to structure your answer, and what you need to draw. The book also covers how to estimate and scale your system.

Whether you are preparing for a system design interview or want to learn more about how large-scale systems work, this book will give you a solid foundation.`,
    tableOfContents: [
      "Scale From Zero To Millions Of Users",
      "Back-of-the-envelope Estimation", 
      "A Framework For System Design Interviews",
      "Design A Rate Limiter",
      "Design Consistent Hashing",
      "Design A Key-value Store",
      "Design A Unique ID Generator"
    ],
    tags: ["system-design", "scalability", "distributed-systems", "interviews", "architecture"],
    reviews: [
      {
        id: 1,
        user: "Mike Chen",
        rating: 5,
        comment: "Perfect preparation for system design interviews. Clear explanations and practical examples.",
        date: "2024-01-08"
      }
    ]
  }
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailPage({ params }: PageProps) {
  const { id } = await params;
  const books = getBooksData();
  const book = books.find(b => b.id === id);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-school-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Library
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Book Cover and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={book.image}
                      alt={`${book.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>

                  {/* Price and Actions */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-school-blue mb-2">
                        <Coins className="w-6 h-6" />
                        <span>{book.credits} credits</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        One-time purchase • Lifetime access
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-school-blue hover:bg-blue-700" size="lg">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>

                    {/* Book Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-semibold">{book.readers.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Readers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{book.downloads.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Downloads</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Book Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Book Header */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="secondary" className="bg-school-blue text-white">
                  {book.category}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{book.rating}</span>
                  <span className="text-muted-foreground">({book.totalRatings.toLocaleString()} ratings)</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">by {book.author}</p>
              <p className="text-muted-foreground">{book.description}</p>
            </div>

            {/* Book Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Book Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Pages</span>
                    <p className="font-medium">{book.pages}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Published</span>
                    <p className="font-medium">{book.publishedYear}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Publisher</span>
                    <p className="font-medium">{book.publisher}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Language</span>
                    <p className="font-medium">{book.language}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-sm text-muted-foreground">ISBN</span>
                    <p className="font-medium">{book.isbn}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About This Book</h3>
                <div className="prose max-w-none">
                  {book.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {book.tableOfContents.map((chapter, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-8 text-sm">{index + 1}.</span>
                      <span>{chapter}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            {book.reviews.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
                  <div className="space-y-4">
                    {book.reviews.map((review) => (
                      <div key={review.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < review.rating 
                                    ? 'fill-yellow-400 text-yellow-400' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="font-medium">{review.user}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 