import Hero from "@/components/hero";
import React from "react";
import Auspiciadores from "./auspiciadores";
import Countdown from "./countdown";
import Notificaciones from "../notificaciones";
import FormularioInscripcion from "./formulario-inscripcion";
import EventDescription from "./event-description";
import SobreElPrograma from "./sobre-el-programa";
import VideoEvent from "./video-event";
import Galeria from "./galeria";
import { Metadata } from "next";
import { events } from "../data";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const event = events.find((el) => el.slug === params.slug);
  if (!event) return { title: "" };

  return {
    title: "Eventos - Instituto Peruano de Compliance",
    description: event.meta.description,
    openGraph: {
      title: event.meta.title,
      description: event.meta.description,
      images: event.meta.image,
    },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((el) => el.slug === params.slug);

  if (!event) return <div>No se encontro el evento</div>;

  const formattedDate = new Date(event.date)
    .toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();

  return (
    <div className="bg-neutral-50">
      <Hero
        image="/inicio-1.jpg"
        className="bg-gradient-to-tr from-pink-500/60 to-red-500/60"
      >
        <div className="h-full pt-32 2xl:pb-32 pb-24 flex flex-col justify-end gap-6 text-white">
          {/* <img className="md:w-60 w-40" src="/logo-white.png" alt="logo" /> */}
          <p className="2xl:text-4xl md:text-3xl text-2xl font-light">
            {event.subtitle}
          </p>
          <h1 className="2xl:text-9xl md:text-7xl text-4xl font-bold">
            {event.title}
          </h1>
          <p className="md:text-2xl">&quot;{event.description}&quot;</p>
          <div className="flex gap-6">
            <p className="md:text-4xl text-xl font-bold">
              {/* 4 <span className="text-pink-300">OCT</span> 2024 */}
              {formattedDate}
            </p>
            <p className="md:text-4xl text-xl font-bold">{event.location}</p>
          </div>
        </div>
      </Hero>
      <EventDescription
        images={event.images}
        address={event.address}
        date={event.date}
        details={event.details}
        priceTiers={event.priceTiers}
        time={event.time}
        registrationLink={event.registrationLink}
      />
      <VideoEvent videoUrl={event.video.url} bgUrl={event.video.image} />
      <SobreElPrograma
        session={event.session}
        date={event.date}
        priceTiers={event.priceTiers}
        time={event.time}
        registrationLink={event.registrationLink}
      />
      <Countdown
        banner={event.banner}
        date={event.date}
        registrationLink={event.registrationLink}
      />
      <Auspiciadores
        sponsors={event.sponsors}
        registrationLink={event.registrationLink}
      />
      <Galeria images={event.images} />
      {/* <ProximosEventos /> */}
      <Notificaciones />
      {/* <ProcesoAdmision /> */}
      <FormularioInscripcion />
    </div>
  );
}
