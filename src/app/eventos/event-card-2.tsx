import React from "react";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
interface Props {
  slug: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

export default function EventCard2({
  slug,
  date,
  image,
  location,
  title,
}: Props) {
  return (
    <Link className="group" href={`/eventos/${slug}`}>
      <div className="h-80 relative flex flex-col justify-end">
        <img
          className="absolute top-0 w-full object-cover rounded-2xl aspect-video group-hover:scale-105 transition-all"
          src={image}
          alt={title}
        />

        <div className="bg-white mx-6 h-52 rounded-2xl shadow-xl overflow-hidden z-10">
          <div className="border-t-[10px] p-6 border-neutral-600 group-hover:border-blue-500 flex flex-col gap-3 transition-all">
            <div className="flex gap-1">
              <MapPinIcon className="size-4" />
              <p className="text-sm">{location}</p>
            </div>
            <h4 className="text-2xl group-hover:text-sky-500">{title}</h4>
            <div className="flex gap-1">
              <CalendarIcon className="size-4" />
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
