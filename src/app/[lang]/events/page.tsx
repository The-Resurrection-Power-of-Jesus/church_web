import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { format } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EventDescription } from "@/components/custom/event-description";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { isLocale, type Locale } from "@/i18n/config";
import { type EventLocalized, eventsByLocaleQuery } from "@/sanity/lib/events";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";

export const dynamic = "force-dynamic";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <span className="block text-muted-foreground leading-relaxed">
        {children}
      </span>
    ),
  },
};

const formatDate = (value?: string) => {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return format(parsed, "MMMM d, yyyy");
};

type EventMediaItem =
  | ({
      _type: "image";
      _key?: string;
      alt?: string;
    } & Record<string, unknown>)
  | {
      _type: "youtube";
      _key?: string;
      url?: string;
      title?: string;
    };

const getYoutubeId = (url?: string) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    if (parsed.hostname.includes("youtube.com")) {
      const idParam = parsed.searchParams.get("v");
      if (idParam) return idParam;
      const pathParts = parsed.pathname.split("/").filter(Boolean);
      const embedIndex = pathParts.indexOf("embed");
      if (embedIndex >= 0 && pathParts[embedIndex + 1]) {
        return pathParts[embedIndex + 1];
      }
    }
  } catch {
    return null;
  }
  return null;
};

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ✅ unwrap params
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const { data } = await sanityFetch({
    query: eventsByLocaleQuery,
    params: { lang: locale },
  });
  const events = (data as EventLocalized[]) ?? [];

  return (
    <main className="flex-1 min-h-screen bg-linear-to-b">
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              Upcoming Events
            </h1>

            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              Join us for worship, fellowship, and community gatherings
              throughout the year.
            </p>

            <div className="space-y-6">
              {events.length === 0 ? (
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center text-muted-foreground">
                    No events available yet. Please check back soon.
                  </CardContent>
                </Card>
              ) : (
                events.map((event) => (
                  <Card
                    key={event._id}
                    className="bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 w-full">
                        {/* Event Media */}
                        {(() => {
                          const mediaItems: EventMediaItem[] = event.media
                            ?.length
                            ? (event.media as EventMediaItem[])
                            : event.image
                              ? [
                                  {
                                    _type: "image",
                                    _key: `fallback-${event._id}`,
                                    ...(event.image as Record<string, unknown>),
                                  },
                                ]
                              : [];

                          if (mediaItems.length === 0) return null;

                          return (
                            <div className="shrink-0 w-full md:w-80">
                              <Carousel
                                opts={{ align: "start" }}
                                className="relative"
                              >
                                <CarouselContent>
                                  {mediaItems.map((item) => {
                                    if (item._type === "youtube") {
                                      const videoId = getYoutubeId(item.url);
                                      if (!videoId) return null;
                                      return (
                                        <CarouselItem
                                          key={
                                            item._key ||
                                            videoId ||
                                            `youtube-${event._id}`
                                          }
                                        >
                                          <div className="relative w-full h-80 md:h-56 rounded-xl overflow-hidden bg-black">
                                            <iframe
                                              className="absolute inset-0 h-full w-full"
                                              src={`https://www.youtube.com/embed/${videoId}`}
                                              title={
                                                item.title ||
                                                event.title ||
                                                "YouTube video"
                                              }
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                        </CarouselItem>
                                      );
                                    }

                                    const imageKey =
                                      item._key || `image-${event._id}`;
                                    return (
                                      <CarouselItem key={imageKey}>
                                        <div className="relative w-full h-80 md:h-56 rounded-xl overflow-hidden">
                                          <Image
                                            src={urlFor(item)
                                              .width(720)
                                              .height(540)
                                              .url()}
                                            alt={
                                              item.alt ||
                                              event.title ||
                                              "Event image"
                                            }
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                      </CarouselItem>
                                    );
                                  })}
                                </CarouselContent>
                                {mediaItems.length > 1 ? (
                                  <>
                                    <CarouselPrevious className="-left-4" />
                                    <CarouselNext className="-right-4" />
                                  </>
                                ) : null}
                              </Carousel>
                            </div>
                          );
                        })()}

                        {/* Event Content */}
                        <div className="min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h2 className="font-serif text-2xl font-semibold">
                              {event.title || "Untitled event"}
                            </h2>

                            {event.recurring && (
                              <span className="px-2 py-1 text-xs rounded-md bg-accent/20 text-accent-foreground">
                                Recurring
                              </span>
                            )}
                          </div>

                          <div className="mb-4 w-full">
                            <EventDescription>
                              {event.description?.length ? (
                                <PortableText
                                  value={event.description}
                                  components={portableTextComponents}
                                />
                              ) : (
                                <p className="text-muted-foreground leading-relaxed">
                                  No description available.
                                </p>
                              )}
                            </EventDescription>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(event.date)}</span>
                            </div>

                            {event.time ? (
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                            ) : null}

                            {event.location ? (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
