import { defineField, defineType } from "sanity";

const locales = ["am", "en", "fr"] as const;

const hasAnyLocale = (value: Record<string, unknown> | undefined) =>
  locales.some((locale) => {
    const content = value?.[locale];
    return Array.isArray(content) ? content.length > 0 : Boolean(content);
  });

export const i18nBody = defineType({
  name: "i18nBody",
  title: "Localized Body",
  type: "object",
  fields: [
    defineField({
      name: "am",
      title: "Amharic",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "fr",
      title: "French",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  validation: (Rule) =>
    Rule.custom((value) =>
      hasAnyLocale(value)
        ? true
        : "Add at least one language body (Amharic, English, or French).",
    ),
});
