import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hero from "@/components/hero";
import Link from "next/link";

const data = [
  {
    image: "inicio-1.jpg",
    title: "Desde una visión 100% práctica.",
    subTitle: "Aprende Compliance Empresarial",
    links: [
      {
        title: "Educación Ejecutiva",
        link: "https://www.campuslexedu.com/",
      },
      {
        title: "Certificaciones",
        link: "/certificaciones",
      },
      {
        title: "Contenido",
        link: "/contenido",
      },
    ],
  },
  {
    image: "inicio-2.jpg",
    title:
      "Capacita a tu empresa con los mejores cursos y asesoría en Compliance",
    subTitle: null,
    links: [
      {
        title: "Uneté",
        link: "/contacto",
      },
    ],
  },
  {
    image: "inicio-3.jpg",
    title:
      "Empresas & profesionales certificados en Compliance del Perú y LATAM",
    subTitle: "La red más importante",
    links: [
      {
        title: "Miembros",
        link: "https://team.icompliancepe.com/team?page=1",
      },
    ],
  },
];

export function CarouselHome() {
  return (
    <Carousel
      className="relative"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {data.map(({ image, title, links, subTitle }, index) => (
          <CarouselItem key={index} className="p-0">
            <Hero image={image}>
              <div className="h-full flex flex-col justify-center items-center gap-3">
                {subTitle ? (
                  <h3 className="text-white text-2xl">{subTitle}</h3>
                ) : null}
                <h2 className="md:text-6xl text-4xl text-white max-w-5xl text-center">
                  {title}
                </h2>
                <nav className="flex md:flex-row flex-col gap-24 pt-12">
                  {links.map(({ link, title }) => (
                    <Link
                      className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
                      key={title}
                      href={link}
                    >
                      {title}
                    </Link>
                  ))}
                </nav>
              </div>
            </Hero>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-0 left-0 z-50 h-full flex items-center px-3">
        <CarouselPrevious className="static" />
      </div>
      <div className="absolute top-0 right-0 z-50 h-full flex items-center  px-3">
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
