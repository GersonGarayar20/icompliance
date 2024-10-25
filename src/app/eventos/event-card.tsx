import React from "react";
import { MapPinIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  image: string;
  location: string;
  date: string;
}

export default function EventCard({
  date,
  slug,
  image,
  location,
  title,
}: Props) {
  return (
    <Link className="group" href={`/eventos/${slug}`}>
      <div className="bg-white grid md:grid-cols-2 gap-3 p-3 border shadow rounded-2xl hover:shadow-xl transition-all">
        <header className="overflow-hidden rounded-lg ">
          <img
            className="h-full w-full object-cover aspect-video group-hover:scale-105 transition-all"
            src={image}
            alt={title}
          />
        </header>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex gap-1">
            <MapPinIcon className="size-4" />
            <p className="text-sm">{location}</p>
          </div>
          <h4 className="text-xl group-hover:text-sky-500">{title}</h4>
          <footer className="flex justify-between items-center">
            <div className="flex gap-1">
              <CalendarIcon className="size-4" />
              <time className="text-sm">{date}</time>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
}
