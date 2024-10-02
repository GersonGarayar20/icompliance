import React from "react";
import { CalendarIcon, ClockIcon, BanknoteIcon } from "lucide-react";

export default function Fecha() {
  return (
    <div className="p-4 flex flex-col gap-3 bg-white rounded-2xl border shadow">
      <Card icon={<CalendarIcon />}>
        <p>
          <strong>Fecha: </strong>
          <span>03 de octubre</span>
        </p>
      </Card>
      <Card icon={<ClockIcon />}>
        <p>
          <strong>Hora: </strong>
          <span>8:30 am - 5:25 pm (UTC)</span>
        </p>
      </Card>
      <Card icon={<BanknoteIcon />}>
        <p className="font-bold">Inversión</p>
        <p>
          <strong className="font-medium">Publico General: </strong>
          <span>S/.250.00</span>
        </p>
        <p>
          <strong className="font-medium">Miembros Asociados IPC: </strong>
          <span>S/.200.00</span>
        </p>
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
