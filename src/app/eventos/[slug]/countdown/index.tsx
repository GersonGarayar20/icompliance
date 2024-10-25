import React from "react";
import CountdownTimer from "./countdown-timer";
import Link from "next/link";
import Container from "@/components/container";

interface Props {
  date: string;
  banner: {
    title: string;
    subtitle: string;
  };
  registrationLink: string;
}

export default function Countdown({ date, banner, registrationLink }: Props) {
  return (
    <Container className="bg-gradient-to-r from-[#52adeb] to-[#014DBE]">
      <article className="flex md:flex-row flex-col items-center gap-6">
        <div className="flex-1 flex flex-col md:items-start items-center gap-6">
          <h3 className="text-white md:text-4xl text-2xl md:text-start text-center">
            {banner.title}
          </h3>
          <p className="md:text-lg text-sm text-white md:text-start text-center">
            {banner.subtitle}
          </p>
          <Link
            className="py-4 px-12 rounded-full text-white bg-gradient-to-r from-[#16BFD0] to-[#5271D3] hover:from-[#5271D3] hover:to-[#16BFD0]"
            href={registrationLink}
          >
            Inscríbete ahora
          </Link>
        </div>
        <CountdownTimer date={date} />
      </article>
    </Container>
  );
}
