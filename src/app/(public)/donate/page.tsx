import { BookOpen, Church, HandHeart, Heart, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Yetinsaie Hayil Church through tithes, offerings, and community outreach giving.",
  alternates: {
    canonical: "/donate",
  },
  keywords: ["donate", "giving", "tithes", "offerings", "church"],
};

export default function DonatePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
              <HandHeart className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              Give Generously
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              &ldquo;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&rdquo;
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Why We Give
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Giving is an act of worship and obedience. Your generosity
              sustains the work of our church and enables us to fulfill the
              Great Commission in our community and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Church className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Church Operations
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Supporting our worship space, staff, and the day-to-day needs
                  of our congregation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Community Outreach
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Serving those in need through local and international missions
                  and charity programs
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Ministry Growth
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expanding our youth programs, Bible studies, and discipleship
                  initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Ways to Give
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer several convenient ways to support the work of our
              church.
            </p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  In-Person Giving
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tithes and offerings can be placed in the offering during our
                  Sunday worship service. Envelopes are available at the
                  entrance for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Bank Transfer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You can send your tithes and offerings directly via bank
                  transfer. Please contact the church office for the account
                  details.
                </p>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/contact">Contact for Details</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Online Giving
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are working on setting up online giving options. In the
                  meantime, please use in-person giving or bank transfer. Check
                  back here for updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to faithful stewardship of every gift. Our
              finances are managed with transparency and accountability, and
              regular reports are shared with the congregation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about giving or how your donations are
              used, please don&apos;t hesitate to reach out.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
