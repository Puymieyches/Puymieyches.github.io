
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch the post data based on the slug
  const post = {
    title: "Building Modern Web Applications with React and TypeScript",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    content: `
      <h2>Introduction</h2>
      <p>TypeScript has become an essential tool for modern React development. In this article, we'll explore the benefits of using TypeScript with React and learn best practices for type-safe development.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript provides several advantages when building React applications:</p>
      <ul>
        <li>Better IntelliSense and autocompletion</li>
        <li>Catch errors at compile time</li>
        <li>Improved refactoring capabilities</li>
        <li>Self-documenting code</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To create a new React project with TypeScript, you can use Create React App with the TypeScript template:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>

      <h2>Best Practices</h2>
      <p>Here are some best practices for using TypeScript with React:</p>
      <ol>
        <li>Define proper interfaces for your props</li>
        <li>Use type inference when possible</li>
        <li>Leverage union types for component variants</li>
        <li>Use generics for reusable components</li>
      </ol>

      <h2>Conclusion</h2>
      <p>TypeScript significantly improves the React development experience by providing type safety and better tooling. Start incorporating TypeScript into your React projects today!</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/#blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
