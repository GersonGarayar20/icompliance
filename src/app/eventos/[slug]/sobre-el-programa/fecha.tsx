import React from "react";
import { CalendarIcon, ClockIcon, BanknoteIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  date: string;
  time: string;
  priceTiers: {
    name: string;
    price: number;
    currency: string;
  }[];
}

export default function Fecha({ date, priceTiers, time }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="p-4 flex flex-col gap-3 bg-white rounded-2xl border shadow">
      <Card icon={<CalendarIcon />}>
        <p>
          <strong>Fecha: </strong>
          <span>{formattedDate}</span>
        </p>
      </Card>
      <Card icon={<ClockIcon />}>
        <p>
          <strong>Hora: </strong>
          <span>{time}</span>
        </p>
      </Card>
      <Card icon={<BanknoteIcon />}>
        {new Date(date).getTime() - new Date().getTime() > 0 ? (
          <>
            <p className="font-bold">Inversión</p>
            {priceTiers.map(({ name, price }) => (
              <p key={name}>
                <strong className="font-medium">{name}: </strong>
                <span>S/ {price}</span>
              </p>
            ))}
          </>
        ) : (
          <div className="flex gap-2">
            <p className="font-bold">Inversión</p>
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
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex gap-2">
    {icon}
    <div>{children}</div>
  </div>
);
