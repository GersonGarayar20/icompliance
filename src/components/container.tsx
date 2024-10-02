import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;
}

export default function Container({ children, className }: Props) {
  return (
    <section className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
