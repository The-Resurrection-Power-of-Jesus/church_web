import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, type Locale } from "@/i18n/config";

import BlogsClient from "./BlogsClient";

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  // ✅ Keep your blogs data here for now (later you will fetch from Sanity)
  const blogs = [
    {
      title: "ገላትያ 2",
      excerpt:
        "ጳውሎስ በሐዋርያት ዘንድ ተቀባይነት ስለ ማግኘቱ ከዐሥራ አራት ዓመት በኋላም፣ ዳግመኛ ወደ ኢየሩሳሌም ወጣሁ፤ ...",
      author: "Ablavie KOMBATE",
      date: "December 10, 2025",
      category: "Teaching",
    },
    {
      title: "ሉቃስ 5፥18-26",
      excerpt:
        "18 እነሆም፥ አንድ ሽባ በአልጋ ተሸክመው አመጡ፤ ...",
      author: "Pastor Teddy Chernet",
      date: "December 19, 2025",
      category: "Teaching",
    },
    // ✅ paste the rest of your blogs here (same objects)
  ];

  return (
    <BlogsClient
      title={dict.nav.blogs}
      subtitle={
        dict.blogs?.subtitle ??
        "Reflections, teachings, and resources to encourage your faith journey."
      }
      blogs={blogs}
    />
  );
}
