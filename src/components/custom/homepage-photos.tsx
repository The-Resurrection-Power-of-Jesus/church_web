"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HomepageCarousel() {
  // Autoplay plugin
  const plugin = useRef(
    Autoplay({
      delay: 3000,           // 3 seconds per slide
      stopOnInteraction: false, // never stop if user interacts
      stopOnMouseEnter: false,  // never stop on hover
    })
  );

  const images = [
    "/stat1.jpg",
    "/home2.jpg",
    "/home3.jpg",
    "/home4.jpg",
    "/home5.jpg",
    "/kids.jpg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full max-w-[90vw] mx-auto"
    >
      <CarouselContent className="-ml-1">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={768}
                height={1280}
                className="aspect-video w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
