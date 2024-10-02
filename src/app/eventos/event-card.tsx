import React from "react";
import { MapPinIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  image: string;
  location: string;
  date: string;
}

export default function EventCard({ date, id, image, location, title }: Props) {
  return (
    <div
      key={id}
      className="grid md:grid-cols-2 gap-3 p-3 border shadow rounded-2xl"
    >
      <img
        className="rounded-lg h-full w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-center gap-3">
        <div className="flex gap-1">
          <MapPinIcon className="size-4" />
          <p className="text-sm">{location}</p>
        </div>
        <h4 className="text-xl">{title}</h4>
        <footer className="flex justify-between items-center">
          <div className="flex gap-1">
            <CalendarIcon className="size-4" />
            <time className="text-sm">{date}</time>
          </div>

          <Link
            className="py-1 px-4 border-2 rounded border-blue-500"
            href={`/eventos/${id}`}
          >
            Ver más
          </Link>
        </footer>
      </div>
    </div>
  );
}
