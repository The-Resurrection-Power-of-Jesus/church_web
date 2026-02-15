import { Card, CardContent } from "@/components/ui/card";
import { randomUUID } from "node:crypto";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, type Locale } from "@/i18n/config";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {

  const { lang } = await params; // ✅ unwrap params
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  
  const events = [
     {
      title: "Christmas Celebration",
      date: "December 28, 2024",
      time: "15:00 AM - 19:00 PM",
      location: "Main church",
      description:
        "Join us for a special Christmas service celebrating the birth of our Savior, followed by fellowship.",
      recurring: false,
       image: "/christmas.jpg",
    },
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "15:00 PM - 18:00 PM",
      location: "Main church",
      description:
        "Join us for worship, prayer, and biblical teaching as we gather as a community of believers.",
      recurring: true,
       image: "/worship1.jpg",
    },
    {
      title: "Baptism",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Main church",
      description:
        "A time of corporate prayer, intercession, and seeking God's presence together.",
      recurring: true,
       image: "/stat1.jpg",
    },
    {
      title: "Recent Conference",
      date: "April 26&27, 2024",
      time: "15:00 PM - 18:00 PM",
      location: "Main church",
      description:
        "An evening of worship, teaching, and fellowship ",
      recurring: false,
       image: "/conf2.jpg",
    },
   
    {
      title: "Conference",
      date: "January 1-3, 2025",
      time: "15:00 PM - 18:00 PM",
      location: "Church",
      description:
        "worship, teaching, and fellowship",
      recurring: false,
       image: "/conf1.jpg",
    },
    
  ];

  return (<main className="flex-1 min-h-screen bg-linear-to-b">
  <section className="py-16 md:py-24 bg-transparent">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
          Upcoming Events
        </h1>

        <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
          Join us for worship, fellowship, and community gatherings throughout the year.
        </p>

        <div className="space-y-6">
          {events.map((event) => (
            <Card
              key={event.title}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* Event Image */}
              <div className="shrink-0 w-full md:w-80">
                <div className="relative w-full h-80 md:h-56 rounded-xl overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

                  {/* Event Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="font-serif text-2xl font-semibold">
                        {event.title}
                      </h2>

                      {event.recurring && (
                        <span className="px-2 py-1 text-xs rounded-md bg-accent/20 text-accent-foreground">
                         
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
</main>

           
  );
}
