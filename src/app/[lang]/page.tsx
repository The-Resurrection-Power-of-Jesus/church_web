import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Users, Calendar } from "lucide-react";
import { Hero } from "@/components/custom/hero";
import { HomepageCarousel } from "@/components/custom/homepage-photos";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, type Locale } from "@/i18n/config";


export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ✅ unwrap params
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  return (
    <main className="flex-1 min-h-screen bg-linear-to-b from-blue-80 via-blue-50 to-blue-40">
      {/* Hero Section */}
      <Hero />
      <section className="relative py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 text-balance">
              Welcome to Our Church
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              A community devoted to worship, fellowship, and growing in faith
              together. Join us as we seek to honor God and serve one another.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/events">View Upcoming Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Join Us for Worship
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We gather together to worship, pray, and study God&apos;s Word.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Sunday Service
                </h3>
                <p className="text-muted-foreground mb-1">
                  15:00 PM - 18:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Main sanctuary worship and teaching
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Thursday Prayer
                </h3>
                <p className="text-muted-foreground mb-1">20:00 PM - 22:30 PM</p>
                <p className="text-sm text-muted-foreground">
                  Community prayer 
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Friday Bible Study
                </h3>
                <p className="text-muted-foreground mb-1">20:00 PM - 22:30 PM</p>
                <p className="text-sm text-muted-foreground">
                   Bible study Time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                Biblical Teaching
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Grounded in Scripture and committed to sound doctrine
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                Community
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building authentic relationships and supporting one another
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving our community and sharing God&apos;s love
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Events</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regular gatherings for worship, fellowship, and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomepageCarousel />

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Visit Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We&apos;d love to meet you! Join us for worship this Sunday or
              reach out if you have any questions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
