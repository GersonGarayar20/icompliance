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
  const currentDate = new Date();

  // Filtrar eventos futuros y pasados
  const upcomingEvents = events.filter(
    ({ date }) => new Date(date) > currentDate
  );
  const pastEvents = events.filter(({ date }) => new Date(date) <= currentDate);

  return (
    <div>
      <Hero image="/eventos.jpg">
        <div className="h-full py-32 flex flex-col justify-end gap-6">
          <p className="text-white text-2xl">Bienvenido a nuestros eventos</p>
          <h1 className="text-white text-7xl">Participa de nuestros eventos</h1>
        </div>
      </Hero>
      <div className="bg-[#F5F5F5]">
        <Container>
          <div className="flex flex-col gap-12">
            {/* <header>
                <Buscador />
                <p>Puedes encontrar más de 200 eventos</p>
              </header> */}

            {/* Próximos Eventos */}
            {upcomingEvents.length > 0 ? (
              <section className="flex flex-col gap-6">
                <h3 className="text-4xl">Próximos Eventos</h3>
                <article className="grid grid-cols-2 gap-6">
                  {upcomingEvents.map(
                    ({ slug, date, location, title, coverImage }) => (
                      <EventCard
                        key={slug}
                        slug={slug}
                        title={title}
                        location={location}
                        date={date}
                        image={coverImage}
                      />
                    )
                  )}
                </article>
              </section>
            ) : null}

            {/* Eventos Previos */}
            {pastEvents.length > 0 ? (
              <section className="flex flex-col gap-6">
                <h3 className="text-4xl">Eventos Previos</h3>
                <article className="grid grid-cols-3 gap-6">
                  {pastEvents.map(
                    ({ slug, date, title, coverImage, location }) => (
                      <EventCard2
                        key={slug}
                        slug={slug}
                        title={title}
                        location={location}
                        date={date}
                        image={coverImage}
                      />
                    )
                  )}
                </article>
              </section>
            ) : null}
          </div>
        </Container>
        <Interesado />
        <Notificaciones />
      </div>
    </div>
  );
}
