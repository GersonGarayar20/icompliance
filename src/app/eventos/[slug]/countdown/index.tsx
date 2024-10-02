import React from "react";
import CountdownTimer from "./countdown-timer";
import Link from "next/link";
import Container from "@/components/container";

export default function Countdown() {
  return (
    <Container className="bg-gradient-to-r from-[#52adeb] to-[#014DBE]">
      <article className="flex md:flex-row flex-col items-center gap-4">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h3 className="text-white text-5xl">
            Loren ipsum Loren ipsum Loren ipsum
          </h3>
          <p className="text-xl text-white">
            Aquí podrás encontrar respuesta a consultas sobre el programa
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
