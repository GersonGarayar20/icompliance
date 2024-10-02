import Container from "@/components/container";
import Link from "next/link";
import React from "react";

export default function Interesado() {
  return (
    <Container className="py-32 bg-gradient-to-r from-[#52adeb] to-[#014DBE]">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-white text-6xl">INTERESADO EN AUSPICIAR</h3>
        <Link
          className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
          href={"/contacto"}
        >
          CONOCE MÁS AQUÍ
        </Link>
      </div>
    </Container>
  );
}
