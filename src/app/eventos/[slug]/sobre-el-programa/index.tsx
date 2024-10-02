import React from "react";
import Container from "@/components/container";
import Horario from "./horario";
import Fecha from "./fecha";

export default function SobreElPrograma() {
  return (
    <Container>
      <h2 className="text-4xl mb-4">Sobre el Programa</h2>
      <section className="flex md:flex-row flex-col gap-6">
        <article className="flex-1">
          <Horario />
        </article>
        <aside className="md:w-96">
          <div className="sticky top-[120px]">
            <Fecha />
          </div>
        </aside>
      </section>
    </Container>
  );
}
