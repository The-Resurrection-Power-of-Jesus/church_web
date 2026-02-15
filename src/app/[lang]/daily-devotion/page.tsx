import { notFound } from "next/navigation";
import { DailyDevotionsList } from "@/components/custom/daily-devotions-list";
import { isLocale, type Locale } from "@/i18n/config";
import {
  type DailyDevotionalLocalized,
  devotionalsByLocaleQuery,
} from "@/sanity/lib/devotionals";
import { sanityFetch } from "@/sanity/lib/live";

export default async function DailyDevotionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const { data } = await sanityFetch({
    query: devotionalsByLocaleQuery,
    params: { lang: locale },
  });
  const devotionals = (data as DailyDevotionalLocalized[]) ?? [];

  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-6 text-center font-serif text-4xl font-semibold md:text-5xl">
              Daily Devotions
            </h1>
            <p className="mb-12 text-center text-lg leading-relaxed text-muted-foreground">
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
