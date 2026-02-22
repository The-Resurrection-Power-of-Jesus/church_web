"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";

type HeroImage = { _key?: string; asset?: unknown; alt?: string } | string;

type HeroProps = {
  images: HeroImage[];
};

const resolveImageSrc = (image: HeroImage) => {
  if (typeof image === "string") return image;
  if (typeof image.asset === "string") return image.asset;
  return urlFor(image).url();
};

const resolveImageAlt = (image: HeroImage, fallback: string) => {
  if (typeof image === "string") return fallback;
  return image.alt || fallback;
};

export function Hero({ images }: HeroProps) {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  if (!images.length) return null;

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={
              typeof image === "string"
                ? `${index}-${image}`
                : (image._key ?? `${index}-${image.alt ?? "image"}`)
            }
          >
            <div className="max-w-screen h-[50vh]">
              <Image
                src={resolveImageSrc(image)}
                alt={resolveImageAlt(image, "Hero image")}
                width={1280}
                className="flex aspect-video object-cover h-full w-full items-center justify-center"
                height={768}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
