import { 
  Code, 
  Database, 
  Brain, 
  Shield, 
  Smartphone, 
  Cloud,
  LucideIcon
} from "lucide-react";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  categoryId: string;
  credits: number;
  rating: number;
  totalRatings: number;
  readers: number;
  downloads: number;
  pages: number;
  publishedYear: number;
  publisher: string;
  isbn: string;
  language: string;
  image: string;
  description: string;
  fullDescription: string;
  tableOfContents: string[];
  tags: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  bookCount: number;
  color: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Software Development",
    description: "Programming languages, frameworks, and development best practices",
    icon: Code,
    bookCount: 245,
    color: "bg-blue-500",
    slug: "software-development"
  },
  {
    id: "2",
    name: "Data Science",
    description: "Machine learning, statistics, and data analysis techniques",
    icon: Brain,
    bookCount: 189,
    color: "bg-green-500",
    slug: "data-science"
  },
  {
    id: "3",
    name: "Database Systems",
    description: "SQL, NoSQL, database design and management",
    icon: Database,
    bookCount: 156,
    color: "bg-purple-500",
    slug: "database-systems"
  },
  {
    id: "4",
    name: "Cybersecurity",
    description: "Information security, ethical hacking, and network protection",
    icon: Shield,
    bookCount: 134,
    color: "bg-red-500",
    slug: "cybersecurity"
  },
  {
    id: "5",
    name: "Mobile Development",
    description: "iOS, Android, and cross-platform mobile app development",
    icon: Smartphone,
    bookCount: 98,
    color: "bg-orange-500",
    slug: "mobile-development"
  },
  {
    id: "6",
    name: "Cloud Computing",
    description: "AWS, Azure, DevOps, and cloud architecture",
    icon: Cloud,
    bookCount: 112,
    color: "bg-cyan-500",
    slug: "cloud-computing"
  }
];

export const books: Book[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    category: "Computer Science",
    categoryId: "1",
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
    categoryId: "1",
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
    categoryId: "2",
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
    categoryId: "1",
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
  },
  {
    id: "5",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database Systems",
    categoryId: "3",
    credits: 480,
    rating: 4.5,
    totalRatings: 745,
    readers: 1234,
    downloads: 4560,
    pages: 1376,
    publishedYear: 2019,
    publisher: "McGraw-Hill Education",
    isbn: "978-0078022159",
    language: "English",
    image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=400&h=600&fit=crop&crop=center",
    description: "A comprehensive introduction to database systems and concepts.",
    fullDescription: `Database System Concepts presents the fundamental concepts of database management. The book is written for a first course in databases at the junior or senior undergraduate, or first-year graduate level.

The text covers the theoretical and practical aspects of database design, database languages, and database-system implementation. It provides balanced coverage of underlying theory and technology, and practical material for database application development.`,
    tableOfContents: [
      "Introduction",
      "Relational Model",
      "SQL",
      "Advanced SQL",
      "Formal Relational Query Languages",
      "Database Design",
      "Normalization"
    ],
    tags: ["database", "sql", "nosql", "data-modeling", "systems"],
    reviews: []
  },
  {
    id: "6",
    title: "Ethical Hacking and Penetration Testing",
    author: "Rafay Baloch",
    category: "Cybersecurity",
    categoryId: "4",
    credits: 420,
    rating: 4.4,
    totalRatings: 612,
    readers: 987,
    downloads: 3210,
    pages: 512,
    publishedYear: 2017,
    publisher: "CRC Press",
    isbn: "978-1482231618",
    language: "English",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop&crop=center",
    description: "A comprehensive guide to ethical hacking and penetration testing.",
    fullDescription: `This book covers the basic building blocks of ethical hacking and penetration testing while walking you through the detailed steps for conducting a penetration test. It also covers topics like social engineering, report writing, and web application penetration testing.

The book provides real-world examples and hands-on exercises to help you understand the concepts better.`,
    tableOfContents: [
      "Introduction to Ethical Hacking",
      "Reconnaissance",
      "Scanning",
      "Enumeration", 
      "System Hacking",
      "Web Application Testing",
      "Wireless Network Testing"
    ],
    tags: ["cybersecurity", "ethical-hacking", "penetration-testing", "security"],
    reviews: []
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getBooksByCategory(categoryId: string): Book[] {
  return books.filter(book => book.categoryId === categoryId);
}

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
} 