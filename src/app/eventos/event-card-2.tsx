import React from "react";
import { CalendarIcon } from "lucide-react";
interface Props {
  id: number;
  title: string;
  image: string;
  date: string;
  price: number;
}

export default function EventCard2({ date, image, price, title }: Props) {
  return (
    <div className="h-96 relative flex flex-col justify-end">
      <img
        className="absolute top-0 h-60 w-full object-cover rounded-2xl"
        src={image}
        alt={title}
      />
      <div className="bg-white mx-6 h-52 rounded-2xl shadow-xl overflow-hidden z-10">
        <div className="border-t-[20px] p-6 border-blue-500">
          <div>{price}</div>
          <h4 className="text-2xl">{title}</h4>
          <div className="flex gap-1">
            <CalendarIcon className="size-4" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
