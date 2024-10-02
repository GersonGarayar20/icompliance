import Container from "@/components/container";
import React from "react";
import HorarioDescripcion from "./horario-descripcion";
import Link from "next/link";
import GaleriaEvento from "./galeria-evento";

export default function EventDescription() {
  return (
    <Container>
      <article className="flex md:flex-row flex-col-reverse gap-6">
        <aside className="md:w-96">
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
            Desde el IPC, consideramos crucial fomentar un espacio de
            <strong>conexión</strong> entre todas las redes de{" "}
            <strong>networking</strong> y{" "}
            <strong>comunidades de mujeres</strong> que fomente el
            <strong>empoderamiento</strong>, la{" "}
            <strong>igualdad de oportunidades</strong> y el{" "}
            <strong>reconocimiento del liderazgo femenino</strong> en el
            <strong>Compliance</strong>.
          </p>
          <p>
            Por ello, este Foro único tiene como propósito facilitar el
            intercambio de <strong>experiencias</strong> y construir{" "}
            <strong>relaciones</strong> entre todas las{" "}
            <strong>mujeres líderes</strong> y <strong>aprendices</strong> en{" "}
            <strong>cumplimiento</strong>, así como abordar los nuevos{" "}
            <strong>desafíos organizativos</strong> que ellas enfrentan en las
            empresas, rompiendo <strong>estereotipos</strong>.
          </p>
          <p>
            El <strong>Cumplimiento Normativo</strong> se ha convertido en un
            pilar indispensable para el <strong>éxito organizacional</strong> y
            todas las mujeres que se dedican al <strong>Compliance</strong> en
            nuestra región son conscientes que su rol es clave no solo para
            asegurar el{" "}
            <strong>
              cumplimiento de regulaciones locales e internacionales
            </strong>
            , sino también para impulsar una cultura de{" "}
            <strong>integridad</strong> y <strong>equidad de género</strong>{" "}
            dentro de las empresas, en un entorno empresarial{" "}
            <strong>dinámico</strong> y <strong>diverso</strong>.
          </p>
          <p>
            En respuesta a esta necesidad, presentamos el{" "}
            <strong>I FORO INTERNACIONAL: WOMEN IN COMPLIANCE IPC 2024</strong>,
            con alta expectativa del público y con sede en{" "}
            <strong>Lima - Perú</strong>, en el{" "}
            <strong>auditorio principal de PwC</strong>.
          </p>
          <p>
            Este <strong>evento anual</strong>, el primero en el Perú, explorará
            las últimas <strong>tendencias</strong>, <strong>desafíos</strong> y
            mejores <strong>prácticas</strong> de <strong>Compliance</strong>,
            bajo una experiencia única de <strong>Network</strong>.
          </p>

          <div>
            <Link
              className="block md:max-w-60 py-3 px-6 rounded-2xl text-center text-white bg-blue-500"
              href={"#fomulario-inscripcion"}
            >
              Inscríbete ahora
            </Link>
          </div>
        </div>
      </article>
    </Container>
  );
}
