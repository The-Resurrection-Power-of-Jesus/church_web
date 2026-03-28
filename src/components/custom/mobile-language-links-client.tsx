"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { defaultLocale, isLocale, type Locale, locales } from "@/i18n/config";

export default function MobileLanguageLinksClient({
  nameByLocale,
}: {
  nameByLocale: Record<Locale, string>;
}) {
  const pathname = usePathname();

  const segments = (pathname ?? "/").split("/").filter(Boolean);
  const currentLocale =
    segments[0] && isLocale(segments[0])
      ? (segments[0] as Locale)
      : defaultLocale;
  const restSegments =
    segments[0] && isLocale(segments[0]) ? segments.slice(1) : segments;

  return (
    <div className="flex flex-col gap-2">
      {locales.map((l) => {
        const href = `/${[l, ...restSegments].join("/")}`;
        const active = l === currentLocale;

        return (
          <SheetClose key={l} asChild>
            <Link
              href={href}
              className={`rounded px-3 py-2 text-sm font-medium transition-colors
                ${
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              {nameByLocale[l]}
            </Link>
          </SheetClose>
        );
      })}
    </div>
  );
}
