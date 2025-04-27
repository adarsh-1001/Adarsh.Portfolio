import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import NotFound from "./not-found";

const BlogPost = () => {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    if (post) {
      document.title = `${post.title} | Adarsh Kumar`;
    }
    
    return () => {
      // Reset title when unmounting
      document.title = "Adarsh Kumar - Portfolio";
    };
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-2 text-gray-600 dark:text-gray-300">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <Badge 
              className={
                post.category === "React" ? "bg-primary text-white" :
                post.category === "UX Design" ? "bg-accent text-white" :
                "bg-secondary text-white"
              }
            >
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{post.title}</h1>
            
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
            
            <img 
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-8"
            />
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div 
                className="prose dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" aria-label="Share on Twitter">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share on Facebook">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <Badge variant="outline">{relatedPost.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{relatedPost.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{relatedPost.readTime} min read</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
