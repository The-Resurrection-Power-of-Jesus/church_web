"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";

type HomepageImage = { _key?: string; asset?: unknown; alt?: string } | string;

type HomepageCarouselProps = {
  images: HomepageImage[];
};

const resolveImageSrc = (image: HomepageImage) => {
  if (typeof image === "string") return image;
  if (typeof image.asset === "string") return image.asset;
  return urlFor(image).width(768).height(1280).url();
};

const resolveImageAlt = (image: HomepageImage, fallback: string) => {
  if (typeof image === "string") return fallback;
  return image.alt || fallback;
};

export function HomepageCarousel({ images }: HomepageCarouselProps) {
  // Autoplay plugin
  const plugin = useRef(
    Autoplay({
      delay: 3000, // 3 seconds per slide
      stopOnInteraction: false, // never stop if user interacts
      stopOnMouseEnter: false, // never stop on hover
    }),
  );

  if (!images.length) return null;

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full max-w-[90vw] mx-auto"
    >
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem
            key={
              typeof image === "string"
                ? `${index}-${image}`
                : (image._key ?? `${index}-${image.alt ?? "image"}`)
            }
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Image
                src={resolveImageSrc(image)}
                alt={resolveImageAlt(image, `Carousel image ${index + 1}`)}
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
