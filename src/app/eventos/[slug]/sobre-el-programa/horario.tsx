import React from "react";
import { data } from "./data";

export default function Horario() {
  return (
    <div className="bg-white flex flex-col p-6 rounded-2xl border shadow">
      <div>
        <button className="text-2xl py-2 px-4 border-b-8 border-blue-500 relative mb-4">
          04 OCTUBRE
          <div className="absolute left-0 -bottom-3 w-full flex justify-center">
            <div className="size-2 bg-blue-500 rotate-45"></div>
          </div>
        </button>
      </div>
      {data.map(({ description, id, speakers, time, title }) => (
        <div key={id} className="flex gap-6 border-b py-6">
          <div className="flex-none w-48">
            <div className="bg-gradient-to-r from-[#52adeb] to-[#014DBE] pt-3 pb-2 px-4 rounded-full text-white text-sm text-center">
              {time}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h4 className="text-xl font-bold">{title}</h4>
            {description ? <p className="text-sm mb-1">{description}</p> : null}
            {speakers.length > 0 ? (
              <div className="flex flex-col gap-3">
                {speakers.map(({ image, name, position }) => (
                  <div key={name} className="flex gap-3">
                    <div className="aspect-square bg-neutral-100 size-20">
                      {image ? (
                        <img className="rounded" src={image} alt={name} />
                      ) : null}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">{name}</h5>

                      <p className="text-sm">{position}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
