import React from "react";
import CountdownTimer from "./countdown-timer";
import Link from "next/link";
import Container from "@/components/container";

export default function Countdown() {
  return (
    <Container className="bg-gradient-to-r from-[#52adeb] to-[#014DBE]">
      <article className="flex md:flex-row flex-col items-center gap-6">
        <div className="flex-1 flex flex-col md:items-start items-center gap-6">
          <h3 className="text-white md:text-4xl text-2xl md:text-start text-center">
            El evento único que reúne a las principales lideresas de Compliance
            en el Perú y LATAM
          </h3>
          <p className="md:text-lg text-sm text-white md:text-start text-center">
            La primera edición del Women in Compliance se llevará a cabo el
            viernes 4 octubre, desde las 8:30 am en el auditorio principal de
            PwC: Av. Santo Toribio 143, San Isidro
          </p>
          <Link
            className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
            href={""}
          >
            Inscríbete ahora
          </Link>
        </div>
        <CountdownTimer />
      </article>
    </Container>
  );
}
