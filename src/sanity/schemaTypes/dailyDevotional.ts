import { defineField, defineType } from "sanity";

export const dailyDevotional = defineType({
  name: "dailyDevotional",
  title: "Daily Devotional",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "i18nTitle",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "i18nBody",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      titleEn: "title.en",
      titleAm: "title.am",
      titleFr: "title.fr",
      date: "date",
      media: "coverImage",
    },
    prepare: ({ titleEn, titleAm, titleFr, date, media }) => {
      const title = titleEn || titleAm || titleFr || "Untitled devotional";
      return {
        title,
        subtitle: date || "No date set",
        media,
      };
    },
  },
});
