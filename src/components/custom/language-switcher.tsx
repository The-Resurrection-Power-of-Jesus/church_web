"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Languages } from "lucide-react";

import { locales, type Locale, isLocale, defaultLocale } from "@/i18n/config";

export default function LanguageSwitcher({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const pathname = usePathname();

  // pathname examples:
  // "/en" , "/en/about" , "/en/events/123"
  // We want to swap only the first segment.
  const segments = (pathname ?? "/").split("/").filter(Boolean);

  const currentLocale = segments[0] && isLocale(segments[0]) ? (segments[0] as Locale) : defaultLocale;

  // everything after the locale
  const restSegments = segments[0] && isLocale(segments[0]) ? segments.slice(1) : segments;

  const languageLabel = dict?.language?.label ?? "Language";

  const languageNameByLocale: Record<Locale, string> = {
    en: dict?.language?.en ?? "English",
    fr: dict?.language?.fr ?? "Français",
    am: dict?.language?.am ?? "አማርኛ",
  };

  const links = locales.map((l) => {
    const href = "/" + [l, ...restSegments].join("/");
    return {
      locale: l,
      href,
      label: languageNameByLocale[l],
      active: l === currentLocale,
    };
  });

  return (
    <div className="relative group border-l pl-4">
      <button
        type="button"
        className="flex items-center gap-2 rounded px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        aria-label={languageLabel}
      >
        <Languages className="h-4 w-4" />
        <span className="hidden lg:inline">{languageLabel}</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </button>

      <div
        className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute right-0 mt-2 w-48 rounded-md border bg-background shadow-md"
        aria-haspopup="listbox"
        aria-label={languageLabel}
      >
        <div className="p-1">
          {links.map((item) => (
            <Link
              key={item.locale}
              href={item.href}
              className={`flex items-center justify-between rounded px-3 py-2 text-sm transition-colors
                ${
                  item.active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              role="menuitem"
            >
              <span>{item.label}</span>
              {item.active ? <span className="text-xs opacity-70">✓</span> : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
