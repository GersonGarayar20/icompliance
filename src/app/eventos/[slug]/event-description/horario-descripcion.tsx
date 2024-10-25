import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  BanknoteIcon,
} from "lucide-react";
import Link from "next/link";

interface Props {
  date: string;
  time: string;
  address: string;
  priceTiers: {
    name: string;
    price: number;
    currency: string;
  }[];
}

export default function HorarioDescripcion({
  date,
  address,
  priceTiers,
  time,
}: Props) {
  const formattedDate = new Date(date).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card
        icon={<CalendarIcon className="size-8" strokeWidth={1} />}
        title="¿Cuándo será?"
      >
        <span className="text-sm">{formattedDate}</span>
      </Card>
      <Card
        icon={<ClockIcon className="size-8" strokeWidth={1} />}
        title="¿Hora?"
      >
        <span className="text-sm">{time}</span>
      </Card>
      <Card
        icon={<MapPinIcon className="size-8" strokeWidth={1} />}
        title="¿Dónde será?"
      >
        <span className="text-sm">{address}</span>
      </Card>
      <Card
        icon={<BanknoteIcon className="size-8" strokeWidth={1} />}
        title="Inversión"
      >
        {new Date(date).getTime() - new Date().getTime() > 0 ? (
          <div className="flex flex-col gap">
            {priceTiers.map(({ name, price }) => (
              <div key={name}>
                <p className="text-sm">
                  <strong className="font-medium">{name}:</strong>S/ {price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap">
            <Link className="text-sky-500" href={"#fomulario-inscripcion"}>
              Contactanos
            </Link>
          </div>
        )}
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
