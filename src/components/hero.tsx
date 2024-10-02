import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  image: string;
  className?: ClassValue;
}

export default function Hero({ children, image, className }: Props) {
  return (
    <header className="relative h-svh">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="imagen de fondo"
      />
      <div className={cn("absolute inset-0 z-10 bg-black/50", className)}>
        <div className="max-w-7xl mx-auto px-6 h-full">{children}</div>
      </div>
    </header>
  );
}
