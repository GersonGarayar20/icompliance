"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GraduationCapIcon, ChevronDownIcon } from "lucide-react";
import { links } from "./links";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregar evento scroll al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(" h-[100px] fixed top-0 w-full z-50 transition-colors", {
        "bg-white": isScrolled,
      })}
    >
      <header className="h-full max-w-7xl mx-auto flex items-center gap-3">
        <div className="flex-1">
          <Link href={"/"}>
            <img
              className="h-[80px]"
              src={isScrolled ? "/logo.png" : "/logo-white.png"}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex gap-3">
          {links.map(({ link, subLink, title }) => (
            <div key={title} className="relative group">
              <Link
                className={cn(
                  "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                  {
                    "text-[#154979]": isScrolled,
                    "bg-gradient-to-r from-[#52adeb] to-[#014DBE] text-white":
                      pathname === link,
                  }
                )}
                href={link}
              >
                {title}
                {subLink ? <ChevronDownIcon className="size-4" /> : null}
              </Link>

              {subLink ? (
                <nav className="peer-hover:block hidden absolute z-50 top-full hover:block">
                  <div className="mt-3 bg-white w-96 p-2 shadow-xl rounded-2xl">
                    {subLink.map(({ link, title }) => (
                      <Link
                        className="block py-2 px-4 rounded-xl hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] hover:text-white"
                        href={link}
                        key={title}
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </nav>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          className="py-2 px-4 text-white flex items-center gap-3 bg-[#014DBE] hover:brightness-95 rounded-xl"
          href={"https://www.campuslexedu.com/"}
        >
          <GraduationCapIcon />
          EDUCACION EJECUTIVA
        </Link>
      </header>
    </div>
  );
}
