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

export type DailyDevotional = {
  _id: string;
  date: string;
  author?: string;
  slug?: { current?: string };
  coverImage?: unknown;
  title: LocalizedString;
  body: LocalizedBody;
  isPublished?: boolean;
};

export type DailyDevotionalLocalized = {
  _id: string;
  date: string;
  author?: string;
  slug?: string;
  coverImage?: unknown;
  title?: string;
  body?: PortableTextBlock[];
};

export const devotionalsQuery = `*[_type == "dailyDevotional" && isPublished == true]
  | order(date desc, _createdAt desc) {
    _id,
    date,
    author,
    slug,
    coverImage,
    title,
    body,
    isPublished
  }`;

export const devotionalsByLocaleQuery = `*[_type == "dailyDevotional" && isPublished == true]
  | order(date desc, _createdAt desc) {
    _id,
    date,
    author,
    "slug": slug.current,
    coverImage,
    "title": coalesce(title[$lang], title.en, title.am, title.fr),
    "body": coalesce(body[$lang], body.en, body.am, body.fr)
  }`;

export const devotionalForDateQuery = `*[_type == "dailyDevotional" && isPublished == true && date == $date]
  | order(_createdAt desc)[0] {
    _id,
    date,
    author,
    "slug": slug.current,
    coverImage,
    "title": coalesce(title[$lang], title.en, title.am, title.fr),
    "body": coalesce(body[$lang], body.en, body.am, body.fr)
  }`;

export const latestDevotionalQuery = `*[_type == "dailyDevotional" && isPublished == true]
  | order(date desc, _createdAt desc)[0] {
    _id,
    date,
    author,
    "slug": slug.current,
    coverImage,
    "title": coalesce(title[$lang], title.en, title.am, title.fr),
    "body": coalesce(body[$lang], body.en, body.am, body.fr)
  }`;
