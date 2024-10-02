import Container from "@/components/container";
import Link from "next/link";
import React from "react";

export default function QuienesSomos() {
  return (
    <Container className="bg-[#f3f5f9]">
      <div className="flex flex-col gap-12 justify-center items-center">
        <h2 className="md:text-4xl text-2xl">¿Quiénes somos?</h2>
        <p className="max-w-4xl text-center text-xl">
          Somos la institución privada líder que promueve y difunde la asesoría,
          capacitaciones y el estudio de las mejores prácticas del Compliance
          Empresarial como medio eficiente para la prevención de riesgos al
          interior de las empresas del Perú y LATAM. Contamos con más de +100
          miembros asociados y los mejores expertos en Capacitaciones Inhouse en
          temas de Compliance.
        </p>
        <Link
          className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
          href={"https://team.icompliancepe.com/team?page=1"}
        >
          Miembros
        </Link>
      </div>
    </Container>
  );
}
