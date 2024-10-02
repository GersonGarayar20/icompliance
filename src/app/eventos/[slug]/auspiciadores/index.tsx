import Container from "@/components/container";
import Link from "next/link";
import React from "react";
import { data } from "./data";

export default function Auspiciadores() {
  return (
    <Container>
      <article className="flex flex-col items-center gap-6">
        <h2 className="text-6xl mb-20">Auspiciadores</h2>
        {data.map(({ images, title }) => (
          <div key={title}>
            <h3 className="text-2xl text-center">{title}</h3>
            <div className="flex">
              {images.map(({ image, title }) => (
                <img
                  className="size-60 object-contain"
                  key={title}
                  src={image}
                  alt={title}
                />
              ))}
            </div>
          </div>
        ))}
        <Link href={""}>AUSPICIA AQUÍ</Link>
      </article>
    </Container>
  );
}
