import React from "react";
import { images } from "../galeria/images";

export default function GaleriaEvento() {
  return (
    <div>
      <h3 className="text-2xl">Galería del Evento</h3>
      <div className="grid grid-cols-2 gap-1">
        {images.slice(0, 6).map(({ image, title }) => (
          <div key={title} className="aspect-square">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
