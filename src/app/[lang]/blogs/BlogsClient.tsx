"use client";

import { useState } from "react";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type BlogItem = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
};

export default function BlogsClient({
  title,
  subtitle,
  blogs,
}: {
  title: string;
  subtitle: string;
  blogs: BlogItem[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              {title}
            </h1>

            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => {
                const expanded = expandedIndex === index;

                return (
                  <Card
                    key={index.toString()}
                    className="bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                          {blog.category}
                        </span>

                        <button
                          type="button"
                          className="text-xs text-primary hover:underline"
                          onClick={() =>
                            setExpandedIndex(expanded ? null : index)
                          }
                        >
                          {expanded ? "Show less" : "Read more"}
                        </button>
                      </div>

                      <h2 className="font-serif text-xl font-semibold mb-3">
                        {blog.title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {expanded ? blog.excerpt : blog.excerpt.slice(0, 220) + "…"}
                      </p>

                      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{blog.author}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
