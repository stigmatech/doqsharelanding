import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog DoqShare - Actualités et Conseils Sécurité Documentaire",
  description: "Découvrez les dernières actualités sur la sécurité documentaire, les bonnes pratiques, les conseils GDPR/HIPAA et les tendances du partage de documents sécurisé.",
  keywords: [
    "blog sécurité documentaire",
    "actualités DoqShare",
    "conseils GDPR",
    "bonnes pratiques HIPAA",
    "tendances sécurité",
    "partage documents sécurisé",
    "data room conseils",
    "conformité documents"
  ],
  canonical: "/blog",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog DoqShare",
    "description": "Blog sur la sécurité documentaire et le partage de documents sécurisé",
    "url": "https://doqshare.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "DoqShare"
    }
  }
});

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Document Security: Trends and Predictions for 2024",
      excerpt: "Explore the latest trends in document security and how they're shaping the future of secure document sharing.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Security",
      readTime: "5 min read",
      image: "/images/blog/security-trends.jpg"
    },
    {
      title: "How to Build a Successful Data Room for Your Startup",
      excerpt: "Learn the essential steps to create a professional data room that impresses investors and accelerates your fundraising.",
      author: "Mike Chen",
      date: "December 10, 2024",
      category: "Startups",
      readTime: "8 min read",
      image: "/images/blog/data-room-guide.jpg"
    },
    {
      title: "GDPR Compliance: A Complete Guide for Document Sharing",
      excerpt: "Everything you need to know about GDPR compliance when sharing documents with European clients and partners.",
      author: "Emma Wilson",
      date: "December 5, 2024",
      category: "Compliance",
      readTime: "12 min read",
      image: "/images/blog/gdpr-guide.jpg"
    },
    {
      title: "Analytics That Matter: Measuring Document Engagement",
      excerpt: "Discover which metrics actually matter when tracking document performance and how to use them effectively.",
      author: "David Rodriguez",
      date: "November 28, 2024",
      category: "Analytics",
      readTime: "6 min read",
      image: "/images/blog/analytics-metrics.jpg"
    },
    {
      title: "Enterprise Document Security: Best Practices and Case Studies",
      excerpt: "Real-world examples of how large organizations implement document security and the lessons learned.",
      author: "Lisa Thompson",
      date: "November 20, 2024",
      category: "Enterprise",
      readTime: "10 min read",
      image: "/images/blog/enterprise-security.jpg"
    },
    {
      title: "The Rise of AI in Document Management: Opportunities and Challenges",
      excerpt: "How artificial intelligence is transforming document management and what it means for your business.",
      author: "Alex Kumar",
      date: "November 15, 2024",
      category: "Technology",
      readTime: "7 min read",
      image: "/images/blog/ai-document-management.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, tips, and best practices for secure document sharing, 
          data rooms, and enterprise security.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Complete Guide to Secure Document Sharing in 2024
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Everything you need to know about secure document sharing, from basic principles 
                to advanced enterprise solutions. Learn how to protect your sensitive documents 
                while maintaining productivity and collaboration.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">John Smith</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">December 20, 2024</span>
                </div>
                <span className="text-sm text-muted-foreground">15 min read</span>
              </div>
              <Button>
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-100 flex items-center justify-center">
              <div className="text-6xl">📄</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 h-48 flex items-center justify-center">
              <div className="text-4xl">📰</div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Get the latest insights on document security, data rooms, and enterprise solutions 
          delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button>
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
