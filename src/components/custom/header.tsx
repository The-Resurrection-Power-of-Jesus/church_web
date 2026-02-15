import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Statement of Faith", href: "/statement-of-faith" },
    { name: "About Us", href: "/about" },
    { name: "Daily Devotions", href: "/daily-devotions" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Power of Resurrection Church Logo"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <div className="flex min-w-0 flex-col items-start">
              <span className="font-serif text-base font-semibold leading-tight text-foreground sm:text-lg md:text-3xl">
                የትንሳኤው ሃይል ቤተ ክርስቲያን
              </span>
              <span className="font-serif text-xs font-normal leading-tight text-primary sm:text-sm md:text-xl">
                The Church of the Resurrection Power of Jesus in Paris
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-serif text-xl font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
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
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
