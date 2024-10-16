import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Tags() {
  return (
    <div>
      <h3>Áreas</h3>
      <div className="flex flex-col">
        <Link className={cn("p-3")} href={"#"}>
          Todas
        </Link>
      </div>
    </div>
  );
}
