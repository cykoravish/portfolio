import { getAllBlogs } from "@/lib/getBlogs";
import { BlogCard } from "@/components/BlogCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog | Dev Stories & Lessons",
  description:
    "Honest stories and lessons from building MERN stack applications. No tutorials, just real experience.",
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real stories from building apps. What worked, what failed, and what I
            learned along the way.
          </p>
        </header>

        <div className="space-y-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
