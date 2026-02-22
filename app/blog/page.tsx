import type { Metadata } from 'next';
import { getAllBlogs } from '@/lib/getBlogs';
import { BlogCard } from '@/components/BlogCard';
import Link from 'next/link';
import { ArrowLeft, Newspaper } from 'lucide-react';
import Pager from '@/components/pager';

export const metadata: Metadata = {
  title: 'Development Blog – MERN, Next.js & DevOps Articles',
  description:
    'Technical articles on MERN stack, Next.js, DevOps, Docker, CI/CD, and real-world web development lessons by Ravish Bisht.',
  alternates: {
    canonical: 'https://cykoravish.cloud/blog',
  },
  openGraph: {
    title: 'Development Blog – MERN, Next.js & DevOps Articles',
    description:
      'Real-world lessons from building MERN stack and Next.js applications.',
    url: 'https://cykoravish.cloud/blog',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllBlogs();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <main className="min-h-screen bg-background">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-secondary/20 via-background to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back home
        </Link>

        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-secondary border border-border">
              <Newspaper className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {posts.length} articles
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Development Blog – MERN, Next.js & DevOps
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Technical insights, lessons, and real-world experiences building
            full-stack applications using Next.js, MERN stack, Docker, CI/CD
            pipelines, and AI integrations.
          </p>
        </header>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-12 lg:mb-16">
            <BlogCard post={featuredPost} featured />
          </section>
        )}

        {/* Posts Grid */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-semibold text-foreground">All Posts</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <Pager
          prevHref="/education"
          nextHref="/contact"
          prevTitle="Education"
          nextTitle="Contact"
        />

        {/* Footer decoration */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            More posts coming soon as I continue learning and building real
            products.
          </p>
        </div>
      </div>
    </main>
  );
}
