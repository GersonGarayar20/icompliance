import Container from "@/components/container";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  images: string[];
}

export default function Galeria({ images }: Props) {
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
            {images.map((url, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="aspect-square">
                  <img
                    src={url}
                    className="w-full h-full object-cover"
                    alt={url}
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
