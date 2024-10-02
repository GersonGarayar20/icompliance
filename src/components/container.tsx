import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;
  id?: string;
}

export default function Container({ children, className, id }: Props) {
  return (
    <section id={id} className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
