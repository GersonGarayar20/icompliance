import React from "react";
import { redes } from "./redes";
import Link from "next/link";
import { links } from "./links";
import { legalLinks } from "./legalLinks";

export default function Footer() {
  return (
    <div className="bg-[#414141] py-24">
      <div className="max-w-7xl px-6 mx-auto text-white">
        <div className="grid md:grid-cols-4 gap-6">
          <section className="flex flex-col gap-3">
            <img src="/logo-white.png" alt="logo" />
            <nav className="flex justify-evenly gap-3">
              {redes.map(({ icon, link, title }) => (
                <Link key={title} href={link}>
                  {icon}
                </Link>
              ))}
            </nav>
          </section>
          <section className="flex flex-col gap-3">
            <h4>Nosotros</h4>
            {links.map(({ link, title }) => (
              <Link key={title} href={link}>
                {title}
              </Link>
            ))}
          </section>
          <section className="flex flex-col gap-3">
            <h4>Contáctanos</h4>
            <p>+51 952 374 956 / +51 980 679 556</p>
            <p>
              Alameda Manuel Lorenzo Vidaurre 261 Urb. Los Próceres, Santiago de
              Surco
            </p>
            <p>informes@icompliancepe.com</p>
          </section>
          <section className="flex flex-col gap-3">
            <h4>Información Legal</h4>
            {legalLinks.map(({ link, title }) => (
              <Link key={title} href={link}>
                {title}
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
