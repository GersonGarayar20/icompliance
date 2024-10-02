import Caracteristicas from "./caracteristicas";
import { CarouselHome } from "./carouselHome";
import Estadisticas from "./estadisticas";
import MisionVision from "./mision-vision";
import QuienesSomos from "./quienes-somos";
import SerParte from "./ser-parte";
import Socios from "./socios";

export default function Home() {
  return (
    <div>
      <CarouselHome />
      <QuienesSomos />
      <Caracteristicas />
      <MisionVision />
      <Estadisticas />
      <Socios />
      <SerParte />
    </div>
  );
}
