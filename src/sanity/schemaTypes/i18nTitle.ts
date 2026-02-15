import { defineField, defineType } from "sanity";

const locales = ["am", "en", "fr"] as const;

const hasAnyLocale = (value: Record<string, unknown> | undefined) =>
  locales.some((locale) => Boolean(value?.[locale]));

export const i18nTitle = defineType({
  name: "i18nTitle",
  title: "Localized Title",
  type: "object",
  fields: [
    defineField({
      name: "am",
      title: "Amharic",
      type: "string",
    }),
    defineField({
      name: "en",
      title: "English",
      type: "string",
    }),
    defineField({
      name: "fr",
      title: "French",
      type: "string",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((value) =>
      hasAnyLocale(value)
        ? true
        : "Add at least one language title (Amharic, English, or French).",
    ),
});
