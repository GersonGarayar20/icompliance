import React from "react";
import Container from "@/components/container";
import Horario from "./horario";
import Fecha from "./fecha";
import Link from "next/link";

interface Props {
  session: {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    speakers: {
      image: string;
      name: string;
      position: string;
    }[];
  }[];
  date: string;
  time: string;
  priceTiers: {
    name: string;
    price: number;
    currency: string;
  }[];
  registrationLink: string;
}

export default function SobreElPrograma({
  session,
  date,
  priceTiers,
  time,
  registrationLink,
}: Props) {
  return (
    <Container>
      <h2 className="md:text-5xl text-3xl mb-6">Sobre el Programa</h2>
      <section className="flex md:flex-row flex-col gap-6">
        <article className="flex-1">
          <Horario session={session} />
        </article>
        <aside className="md:w-96">
          <div className="sticky top-[120px] flex flex-col gap-6">
            <Fecha date={date} priceTiers={priceTiers} time={time} />
            <Link
              className="block py-3 px-6 rounded-2xl text-center text-white bg-blue-500"
              href={registrationLink}
            >
              Inscríbete ahora
            </Link>
          </div>
        </aside>
      </section>
    </Container>
  );
}
