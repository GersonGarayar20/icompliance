import Hero from "@/components/hero";
import React from "react";
import Tags from "./tags";
import Search from "./search";

export default function ContentsPage() {
  return (
    <div>
      <Hero image="https://icompliancepe.com/wp-content/uploads/2024/08/contenido.jpg">
        <div className="h-full py-32 flex flex-col justify-end">
          <h1 className="text-white text-7xl">
            Lee nuestras últimas publicaciones
          </h1>
        </div>
      </Hero>
      <section className="flex md:flex-row flex-col gap-6">
        <article className="flex-1">
          <Search />
        </article>
        <aside className="md:w-96">
          <Tags />
        </aside>
      </section>
    </div>
  );
}
