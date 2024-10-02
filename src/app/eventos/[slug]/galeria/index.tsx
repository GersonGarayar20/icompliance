import Container from "@/components/container";
import React from "react";
import { images } from "./images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Galeria() {
  return (
    <Container>
      <h2 className="md:text-5xl text-3xl text-center mb-6">
        Galería de Eventos Pasados
      </h2>
      <div className="px-12">
        <Carousel
          className=""
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map(({ image, title }, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="aspect-square">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={title}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
}
