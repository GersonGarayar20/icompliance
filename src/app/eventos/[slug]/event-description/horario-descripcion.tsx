import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  BanknoteIcon,
} from "lucide-react";

interface Props {
  fecha: string;
  hora: string;
  ubicacion: string;
  inversion: {
    title: string;
    costo: string;
  }[];
}

export default function HorarioDescripcion({
  fecha,
  hora,
  inversion,
  ubicacion,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card
        icon={<CalendarIcon className="size-8" strokeWidth={1} />}
        title="¿Cuándo será?"
      >
        <span className="text-sm">{fecha}</span>
      </Card>
      <Card
        icon={<ClockIcon className="size-8" strokeWidth={1} />}
        title="¿Hora?"
      >
        <span className="text-sm">{hora}</span>
      </Card>
      <Card
        icon={<MapPinIcon className="size-8" strokeWidth={1} />}
        title="¿Dónde será?"
      >
        <span className="text-sm">{ubicacion}</span>
      </Card>
      <Card
        icon={<BanknoteIcon className="size-8" strokeWidth={1} />}
        title="Inversión"
      >
        <div className="flex flex-col gap">
          {inversion.map(({ costo, title }) => (
            <div key={title}>
              <p className="text-sm">
                <strong className="font-medium">{title}:</strong> {costo}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

const Card = ({
  children,
  icon,
  title,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="flex-none size-16 rounded-full bg-sky-100 flex justify-center items-center">
      {icon}
    </div>
    <div className="flex flex-col justify-center gap-1">
      <h5 className="font-bold">{title}</h5>
      {children}
    </div>
  </div>
);
