import Container from "@/components/container";
import Link from "next/link";
import React from "react";

export default function SerParte() {
  return (
    <Container className="py-32 bg-[#f3f5f9]">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-start justify-center gap-6">
          <h2 className="md:text-4xl text-2xl">
            ¿Tú también quieres ser parte del cambio?
          </h2>
          <div className="h-1 w-20 bg-[#52ADEB]"></div>
          <p>
            Afíliate a nuestra exclusiva comunidad de miembros y socios
            corporativos para vivir la experiencia única de nuestra comunidad de
            Compliance y fomentemos juntos la Cultura ética y la prevención de
            riesgos en las Empresas.
          </p>
          <Link
            className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
            href={"/contacto"}
          >
            Únete
          </Link>
        </div>
        <img className="rounded-2xl" src="ser-parte.jpg" alt="compliance" />
      </div>
    </Container>
  );
}
