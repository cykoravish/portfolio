import Link from "next/link";
import type { BlogPost } from "@/lib/getBlogs";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="p-6 rounded-lg border border-border bg-card transition-colors hover:border-muted-foreground/50 hover:bg-secondary/50">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span className="text-border">•</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
          {post.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
