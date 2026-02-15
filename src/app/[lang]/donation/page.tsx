import { BookOpen, Church, HandHeart, Heart, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { isLocale, type Locale } from "@/i18n/config";

export default async function DonatePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;

  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HandHeart className="h-7 w-7" />
            </div>
            <h1 className="mb-6 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Give Generously
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              &ldquo;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&rdquo;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Why We Give
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Giving is an act of worship and obedience. Your generosity
              sustains the work of our church and enables us to fulfill the
              Great Commission in our community and beyond.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Church className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  Church Operations
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Supporting our worship space, staff, and the day-to-day needs
                  of our congregation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  Community Outreach
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Serving those in need through local and international missions
                  and charity programs
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  Ministry Growth
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Expanding our youth programs, Bible studies, and discipleship
                  initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Ways to Give
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We offer several convenient ways to support the work of our
              church.
            </p>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold">
                  In-Person Giving
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Tithes and offerings can be placed in the offering during our
                  Sunday worship service. Envelopes are available at the
                  entrance for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold">
                  Bank Transfer
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  You can send your tithes and offerings directly via bank
                  transfer. Please contact the church office for the account
                  details.
                </p>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href={`/${locale}/contact`}>Contact for Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold">
                  Online Giving
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We are working on setting up online giving options. In the
                  meantime, please use in-person giving or bank transfer. Check
                  back here for updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Heart className="mx-auto mb-6 h-8 w-8 text-primary" />
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Our Commitment to You
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We are committed to faithful stewardship of every gift. Our
              finances are managed with transparency and accountability, and
              regular reports are shared with the congregation.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              If you have any questions about giving or how your donations are
              used, please don&apos;t hesitate to reach out.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={`/${locale}/contact`}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
