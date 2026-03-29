import { Mail, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import ContactForm from "@/components/custom/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  await getDictionary(locale);

  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center font-serif text-4xl font-semibold md:text-5xl">
              Contact Us
            </h1>
            <p className="mb-12 text-center text-lg leading-relaxed text-muted-foreground">
              We&apos;d love to hear from you. Reach out with any questions or
              to learn more about our church.
            </p>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="bg-card border-border">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Address</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      5 Rue de la Noue, 93170
                      <br />
                      Bagnolet, France
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +33643924927
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      eglisederessurection@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="mb-6 font-serif text-2xl font-semibold">
                  Send Us a Message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
