import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Statement of Faith", href: "/statement-of-faith" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-1">
        <div className="flex h-18 items-left justify-between">
          <Link href="/" className="flex items-center space-x-3">
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
                key={item.name}
                href={item.href}
                className="font-serif text-xl font-semibold text-foreground text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
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
