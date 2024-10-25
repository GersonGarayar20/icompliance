import React from "react";

interface Props {
  images: string[];
}

export default function GaleriaEvento({ images }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-2">Galería del Evento</h3>
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 6).map((url) => (
          <div key={url} className="aspect-square">
            <img className="w-full h-full object-cover" src={url} alt={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
