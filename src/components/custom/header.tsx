import Link from "next/link";
import Image from "next/image";
import { Menu, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import LanguageSwitcher from "@/components/custom/language-switcher";
import MobileLanguageLinksClient from "@/components/custom/mobile-language-links-client";


export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const navigation = [
    { name: dict?.nav?.home ?? "Home", href: `/${lang}` },
    {
      name: dict?.nav?.statementOfFaith ?? "Statement of Faith",
      href: `/${lang}/statement-of-faith`,
    },
    { name: dict?.nav?.about ?? "About Us", href: `/${lang}/about` },
    { name: dict?.nav?.blogs ?? "Blogs", href: `/${lang}/blogs` },
    { name: dict?.nav?.events ?? "Events", href: `/${lang}/events` },
    { name: dict?.nav?.contact ?? "Contact", href: `/${lang}/contact` },
  ];

  const languageLabel = dict?.language?.label ?? "Language";
  const languageNameByLocale: Record<Locale, string> = {
    en: dict?.language?.en ?? "English",
    fr: dict?.language?.fr ?? "Français",
    am: dict?.language?.am ?? "አማርኛ",
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-1">
        <div className="flex h-18 items-left justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="The Power of Resurrection Church Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />

            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                የትንሳኤው ሃይል ቤተ ክርስቲያን
              </span>
              <span className="font-serif text-lg md:text-xl font-normal text-primary">
                The Church of the Resurrection Power of Jesus in Paris
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ Language switcher keeps same page */}
            <LanguageSwitcher lang={lang} dict={dict} />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* ✅ Mobile language list (keeps same page too) */}
                <div className="pt-6 border-t">
                  <p className="text-sm font-medium mb-3 flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    {languageLabel}
                  </p>

                  {/* NOTE: We can reuse same component, but it’s hover-based.
                      So on mobile, we build plain links to keep UX simple. */}
                  <MobileLanguageLinks nameByLocale={languageNameByLocale} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/** Mobile: simple links that also keep current path */
function MobileLanguageLinks({
  nameByLocale,
}: {
  nameByLocale: Record<Locale, string>;
}) {
  // This component must be client to read pathname, so we delegate:
  return <MobileLanguageLinksClient nameByLocale={nameByLocale} />;
}
