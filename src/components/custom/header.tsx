import { Languages, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/custom/language-switcher";
import MobileLanguageLinksClient from "@/components/custom/mobile-language-links-client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale } from "@/i18n/config";

export default function Header({ lang, dict }: { lang: Locale; dict: any }) {
  const navigation = [
    { name: dict?.nav?.home ?? "Home", href: `/${lang}` },
    {
      name: dict?.nav?.statementOfFaith ?? "Statement of Faith",
      href: `/${lang}/statement-of-faith`,
    },
    { name: dict?.nav?.about ?? "About Us", href: `/${lang}/about` },
    {
      name: dict?.nav?.dailyDevotion ?? "Daily Devotions",
      href: `/${lang}/daily-devotion`,
    },
    {
      name: dict?.nav?.donation ?? "Donations",
      href: `/${lang}/donation`,
    },
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-full sm:px-1">
        <div className="flex h-16 max-w-full items-center justify-between md:h-20">
          <Link href={`/${lang}`} className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Power of Resurrection Church Logo"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <div className="flex min-w-0 flex-col items-start">
              <span className="font-serif text-base font-semibold leading-tight text-foreground sm:text-lg md:text-2xl">
                የትንሳኤው ሃይል ቤተ ክርስቲያን
              </span>
              <span className="font-serif text-xs font-normal leading-tight text-primary sm:text-sm md:text-lg">
                The Church of the Resurrection Power of Jesus in Paris
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-xl font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}

            <LanguageSwitcher lang={lang} dict={dict} />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-72">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <nav className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t pt-6">
                  <p className="mb-3 flex items-center gap-2 text-sm font-medium">
                    <Languages className="h-4 w-4" />
                    {languageLabel}
                  </p>
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
