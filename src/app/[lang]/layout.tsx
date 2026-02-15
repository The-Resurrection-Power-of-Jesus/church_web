import { notFound } from "next/navigation";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ✅ unwrap params

  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={locale} dict={dict} />
      <div className="flex-1">{children}</div>
      <Footer lang={locale} dict={dict} />
    </div>
  );
}
