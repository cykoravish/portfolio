"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/getBlogs";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group col-span-full">
        <article className="card-border-glow relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 transition-colors duration-300 hover:bg-secondary/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-muted-foreground/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-foreground text-background">
                Featured
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full border border-border text-muted-foreground">
                {post.tags[0]}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300 text-balance leading-tight">
              {post.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-base md:text-lg">
              {post.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>

              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                Read article
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <article className="card-border-glow card-shimmer relative h-full flex flex-col rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:bg-secondary/50">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-md border border-border text-muted-foreground transition-colors duration-300 group-hover:border-muted-foreground/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-muted-foreground transition-colors duration-300 text-balance leading-snug line-clamp-2">
            {post.title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
          </div>
        </div>
      </article>
    </Link>
  );
}
