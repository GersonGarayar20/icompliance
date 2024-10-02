import Hero from "@/components/hero";
import React from "react";
import Buscador from "./buscador";
import { events } from "./data";
import EventCard from "./event-card";
import EventCard2 from "./event-card-2";
import Notificaciones from "./notificaciones";
import Interesado from "./interesado";
import Container from "@/components/container";

export default function EventsPage() {
  return (
    <div>
      <Hero image="https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=">
        <div className="h-full py-32 flex flex-col justify-end gap-6">
          <p className="text-white text-2xl">Bienvenido a nuestros eventos</p>
          <h1 className="text-white text-7xl">Participa de nuestros eventos</h1>
        </div>
      </Hero>
      <div className="bg-[#F5F5F5]">
        <section className="py-12">
          <Container>
            <div className="flex flex-col gap-6">
              <Buscador />
              <p>Puedes encontrar más de 200 eventos</p>
              <h3 className="text-4xl">Próximos Eventos</h3>
              <article className="grid grid-cols-2 gap-6">
                {events.map(
                  ({
                    id,
                    attendees,
                    date,
                    description,
                    location,
                    organizer,
                    time,
                    title,
                    image,
                  }) => (
                    <EventCard
                      key={id}
                      id={id}
                      title={title}
                      location={location}
                      date={date}
                      image={image}
                    />
                  )
                )}
              </article>
              <h3 className="text-4xl">Eventos Previos</h3>
              <article className="grid grid-cols-3 gap-6">
                {events.map(
                  ({
                    id,
                    attendees,
                    date,
                    description,
                    location,
                    organizer,
                    time,
                    title,
                    image,
                  }) => (
                    <EventCard2
                      key={id}
                      id={id}
                      title={title}
                      price={1000}
                      date={date}
                      image={image}
                    />
                  )
                )}
              </article>
            </div>
          </Container>
          <Interesado />
          <Notificaciones />
        </section>
      </div>
    </div>
  );
}
