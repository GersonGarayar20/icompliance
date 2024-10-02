import Container from "@/components/container";
import React from "react";

const data = [
  {
    title: "Misión",
    description:
      "Promover la cultura del cumplimiento y brindar herramientas eficaces para la implementación de programas de cumplimiento.",
  },
  {
    title: "Visión",
    description:
      "Ser reconocidos como líderes en la promoción y difusión del Compliance Empresarial en el Perú y Latinoamérica.",
  },
];

export default function MisionVision() {
  return (
    <Container className="py-32 bg-gradient-to-r from-[#52adeb] to-[#014DBE]">
      <div className="grid grid-cols-2 gap-6">
        {data.map(({ description, title }) => (
          <div
            key={title}
            className="text-center text-white hover:scale-110 transition-all flex flex-col justify-center items-center gap-6"
          >
            <h3 className="text-4xl border-b-4">{title}</h3>
            <p className="max-w-96 text-xl">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
