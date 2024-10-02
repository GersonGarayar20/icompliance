import React from "react";
import { SearchIcon, FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Buscador() {
  return (
    <div>
      <form className="p-3 rounded-2xl flex border shadow" action="">
        <div className="flex items-center gap-3 flex-1">
          <SearchIcon />
          <input placeholder="Busca tu evento" />
        </div>
        <div className="flex items-center gap-3 flex-1">
          <FilterIcon />
          <input placeholder="Filtro" />
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600">Buscar Ahora</Button>
      </form>
    </div>
  );
}
