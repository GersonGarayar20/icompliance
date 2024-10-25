import Container from "@/components/container";
import React from "react";
import HorarioDescripcion from "./horario-descripcion";
import Link from "next/link";
import GaleriaEvento from "./galeria-evento";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  details: string;
  date: string;
  time: string;
  priceTiers: {
    name: string;
    price: number;
    currency: string;
  }[];
  address: string;
  images: {
    title: string;
    image: string;
  }[];
  registrationLink: string;
}

export default function EventDescription({
  date,
  details,
  priceTiers,
  time,
  address,
  images,
  registrationLink,
}: Props) {
  return (
    <Container>
      <article className="flex md:flex-row flex-col-reverse gap-6">
        <aside className="md:w-96">
          <GaleriaEvento images={images} />
        </aside>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">DESCRIPCIÓN DEL EVENTO</h2>
          <HorarioDescripcion
            address={address}
            date={date}
            priceTiers={priceTiers}
            time={time}
          />
          <MDXRemote source={details} />

          <div>
            <Link
              className="block md:max-w-60 py-3 px-6 rounded-2xl text-center text-white bg-blue-500"
              href={registrationLink}
            >
              Inscríbete ahora
            </Link>
          </div>
        </div>
      </article>
    </Container>
  );
}
