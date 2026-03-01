import type { PortableTextBlock } from "@portabletext/types";

export type LocalizedString = {
  am?: string;
  en?: string;
  fr?: string;
};

export type LocalizedBody = {
  am?: PortableTextBlock[];
  en?: PortableTextBlock[];
  fr?: PortableTextBlock[];
};

export type Event = {
  _id: string;
  title: LocalizedString;
  description: LocalizedBody;
  date: string;
  time?: string;
  location?: string;
  image?: unknown;
  media?: Array<
    | {
        _type: "image";
        _key?: string;
        alt?: string;
      }
    | {
        _type: "youtube";
        _key?: string;
        url?: string;
        title?: string;
      }
  >;
  recurring?: boolean;
  slug?: { current?: string };
  isPublished?: boolean;
};

export type EventLocalized = {
  _id: string;
  title?: string;
  description?: PortableTextBlock[];
  date: string;
  time?: string;
  location?: string;
  image?: unknown;
  media?: Array<
    | {
        _type: "image";
        _key?: string;
        alt?: string;
      }
    | {
        _type: "youtube";
        _key?: string;
        url?: string;
        title?: string;
      }
  >;
  recurring?: boolean;
  slug?: string;
};

export const eventsByLocaleQuery = `*[_type == "event" && isPublished == true]
  | order(date desc, _createdAt desc) {
    _id,
    "title": coalesce(title[$lang], title.en, title.am, title.fr),
    "description": coalesce(description[$lang], description.en, description.am, description.fr),
    date,
    time,
    location,
    image,
    media,
    recurring,
    "slug": slug.current
  }`;
