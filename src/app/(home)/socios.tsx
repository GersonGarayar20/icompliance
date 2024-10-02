import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/container";

const data = [
  {
    image: "worldsys.png",
    title: "worldsys",
  },
  {
    image: "laforsehg.png",
    title: "laforsehg",
  },
  {
    image: "datariesgos.png",
    title: "datariesgos",
  },
  {
    image: "risk.png",
    title: "risk",
  },
  {
    image: "valderrama.png",
    title: "valderrama",
  },
  {
    image: "cosapi.png",
    title: "cosapi",
  },
  {
    image: "gesintel.png",
    title: "gesintel",
  },
  {
    image: "flexius.png",
    title: "flexius",
  },
];

export default function Socios() {
  return (
    <Container className="py-32">
      <Carousel
        className=""
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map(({ image, title }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-0">
              <div className="aspect-square p-12">
                <img
                  src={image}
                  className="w-full h-full object-contain"
                  alt={title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
