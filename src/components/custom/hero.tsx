"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
const images = [
  "/home1.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home5.jpg",
  "/kids.jpg",
];
export function Hero() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        <CarouselItem>
          <div className="max-w-screen h-[50vh] bg-red-300">
            <Image
              src="/home1.png"
              alt="home page"
              width={768}
              className="flex aspect-video object-cover h-full w-full items-center justify-center"
              height={1280}
            />
          </div>
        </CarouselItem>
        {/* ))} */}
      </CarouselContent>
    </Carousel>
  );
}
