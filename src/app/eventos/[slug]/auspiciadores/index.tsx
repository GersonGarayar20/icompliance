import Container from "@/components/container";
import Link from "next/link";
import React from "react";
import { data } from "./data";

export default function Auspiciadores() {
  return (
    <Container>
      <article className="flex flex-col items-center gap-6">
        <h2 className="md:text-6xl text-4xl mb-20">Auspiciadores</h2>
        {data.map(({ images, title }) => (
          <div key={title}>
            <h3 className="text-2xl text-center">{title}</h3>
            <div className="flex flex-wrap justify-center">
              {images.map(({ image, title }) => (
                <img
                  className="md:w-60 size-1/2 aspect-square object-contain p-3"
                  key={title}
                  src={image}
                  alt={title}
                />
              ))}
            </div>
          </div>
        ))}
        <Link
          className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
          href={"#fomulario-inscripcion"}
        >
          AUSPICIA AQUÍ
        </Link>
      </article>
    </Container>
  );
}
