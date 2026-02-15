"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { format } from "date-fns";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { DailyDevotionalLocalized } from "@/sanity/lib/devotionals";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 text-sm text-muted-foreground leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 text-sm text-muted-foreground leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-1">{children}</li>,
    number: ({ children }) => <li className="mt-1">{children}</li>,
  },
};

type DailyDevotionsListProps = {
  devotionals: DailyDevotionalLocalized[];
};

const formatDate = (value?: string) => {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return format(parsed, "MMMM d, yyyy");
};

export function DailyDevotionsList({ devotionals }: DailyDevotionsListProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {devotionals.map((devotional, index) => {
        const isExpanded = expandedIndex === index;
        const bodyBlocks = Array.isArray(devotional.body)
          ? devotional.body
          : [];
        const previewBlocks = bodyBlocks.slice(0, 1);
        const blocksToRender = isExpanded ? bodyBlocks : previewBlocks;

        return (
          <Card
            key={devotional._id}
            className="bg-card border-border hover:border-primary/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Devotional
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(devotional.date)}
                </span>
              </div>
              <h2 className="font-serif text-xl font-semibold mb-2">
                {devotional.title || "Untitled devotional"}
              </h2>
              <div
                className={`text-sm text-muted-foreground leading-relaxed mb-4 ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                <PortableText
                  value={blocksToRender}
                  components={portableTextComponents}
                />
              </div>
              <div className="flex items-center justify-between">
                {devotional.author ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{devotional.author}</span>
                  </div>
                ) : (
                  <div />
                )}
                {bodyBlocks.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-sm text-primary hover:underline"
                  >
                    {isExpanded ? "Show less ↑" : "Read more →"}
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
