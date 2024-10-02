import Hero from "@/components/hero";
import React from "react";
import Auspiciadores from "./auspiciadores";
import Countdown from "./countdown";
//import ProximosEventos from "./proximos-eventos";
//import ProcesoAdmision from "./proceso-admision";
import Notificaciones from "../notificaciones";
import FormularioInscripcion from "./formulario-inscripcion";
import EventDescription from "./event-description";
import SobreElPrograma from "./sobre-el-programa";
import VideoEvent from "./video-event";
import Galeria from "./galeria";

export default function EventPage() {
  return (
    <div className="bg-neutral-50">
      <Hero
        image="/inicio-1.jpg"
        className="bg-gradient-to-tr from-pink-500/60 to-red-500/60"
      >
        <div className="h-full py-32 flex flex-col justify-end gap-6 text-white">
          <img className="md:w-60 w-40" src="/logo-white.png" alt="logo" />
          <p className="md:text-4xl text-2xl font-light">
            I FORO INTERNACIONAL
          </p>
          <h1 className="md:text-9xl text-4xl font-bold">
            WOMEN IN COMPLIANCE
          </h1>
          <p className="md:text-2xl">
            &quot;La conferencia anual que reunirá a las mujees líderes en
            Compliance del Perú y LATAM&quot;
          </p>
          <div className="flex gap-6">
            <p className="md:text-4xl text-xl font-bold">
              4 <span className="text-pink-300">OCT</span> 2024
            </p>
            <p className="md:text-4xl text-xl font-bold">Lima, Perú</p>
          </div>
        </div>
      </Hero>
      <EventDescription />
      <VideoEvent
        videoUrl="https://icompliancepe.com/wp-content/uploads/2024/10/video.mp4"
        bgUrl="/eventos/1/video.jpg"
      />
      <SobreElPrograma />
      <Countdown />
      <Auspiciadores />
      <Galeria />
      {/* <ProximosEventos /> */}
      <Notificaciones />
      {/* <ProcesoAdmision /> */}
      <FormularioInscripcion />
    </div>
  );
}
