import Container from "@/components/container";
import React from "react";
import HorarioDescripcion from "./horario-descripcion";
import Link from "next/link";
import GaleriaEvento from "./galeria-evento";

export default function EventDescription() {
  return (
    <Container>
      <article className="flex gap-6">
        <aside className="w-96">
          <GaleriaEvento />
        </aside>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">DESCRIPCIÓN DEL EVENTO</h2>
          <HorarioDescripcion
            fecha="04 octubre"
            hora="8:00 - 17:25 h"
            inversion={[
              {
                title: "Publico General",
                costo: "S/.250.00",
              },
              {
                title: "Miembros Asociados IPC",
                costo: "S/.200.00",
              },
            ]}
            ubicacion="Av. Santo Toribio 143 - San Isidro 15073"
          />
          <p>
            Desde el IPC, consideramos crucial fomentar un espacio de conexión
            entre todas las redes de networking y comunidades de mujeres que
            fomente el empoderamiento, la igualdad de oportunidades y el
            reconocimiento del liderazgo femenino en el Compliance. Por ello,
            este Foro único tiene como propósito facilitar el intercambio de
            experiencias y construir relaciones entre todas las mujeres líderes
            y aprendices en cumplimiento, así como abordar los nuevos desafíos
            organizativos que ellas enfrentan en las empresas, rompiendo
            estereotipos. El Cumplimiento Normativo se ha convertido en un pilar
            indispensable para el éxito organizacional y todas las mujeres que
            se dedican al Compliance en nuestra región son conscientes que su
            rol es clave no solo para asegurar el cumplimiento de regulaciones
            locales e internacionales, sino también para impulsar una cultura de
            integridad y equidad de género dentro de las empresas, en un entorno
            empresarial dinámico y diverso. En respuesta a esta necesidad,
            presentamos el I FORO INTERNACIONAL: WOMEN IN COMPLIANCE IPC 2024,
            con alta expectativa del público y con sede en Lima - Perú, en el
            auditorio principal de PwC. Este evento anual, el primero en el
            Perú, explorará las últimas tendencias, desafíos y mejores prácticas
            de Compliance, bajo una experiencia única de Network.
          </p>
          <div>
            <Link
              className="block max-w-60 py-3 px-6 rounded-2xl text-center text-white bg-blue-500"
              href={""}
            >
              Inscríbete ahora
            </Link>
          </div>
        </div>
      </article>
    </Container>
  );
}
