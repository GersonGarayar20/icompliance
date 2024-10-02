import Hero from "@/components/hero";
import React from "react";

export default function ContentsPage() {
  return (
    <div>
      <Hero image="https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=">
        <div className="h-full py-32 flex flex-col justify-end">
          <h1 className="text-white text-7xl">Hola mundo</h1>
        </div>
      </Hero>
      <div className="h-screen">asdf </div>
    </div>
  );
}
