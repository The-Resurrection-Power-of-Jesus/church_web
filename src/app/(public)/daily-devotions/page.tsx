import type { Metadata } from "next";
import { DailyDevotionsList } from "@/components/custom/daily-devotions-list";
import {
  type DailyDevotionalLocalized,
  devotionalsByLocaleQuery,
} from "@/sanity/lib/devotionals";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Daily Devotions",
  description:
    "Read daily scripture, reflections, and teachings to strengthen your faith and walk with God.",
  alternates: {
    canonical: "/daily-devotions",
  },
  keywords: ["daily devotions", "scripture", "reflections", "faith"],
};

export default async function DailyDevotionsPage() {
  const lang = "en";
  const { data } = await sanityFetch({
    query: devotionalsByLocaleQuery,
    params: { lang },
  });
  const devotionals = (data as DailyDevotionalLocalized[]) ?? [];

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              Daily Devotions
            </h1>
            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              Daily scripture, reflections, and teachings to strengthen your
              faith.
            </p>

            {devotionals.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No devotionals yet. Please check back soon.
              </div>
            ) : (
              <DailyDevotionsList devotionals={devotionals} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
