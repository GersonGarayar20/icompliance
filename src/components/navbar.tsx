"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  GraduationCapIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { links } from "./links";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
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
    <>
      <div
        className={cn(
          "h-[100px] fixed top-0 inset-x-0 z-50 transition-colors",
          {
            "bg-white": isScrolled,
          }
        )}
      >
        <header className="h-full max-w-[1290px] mx-auto md:px-12 px-6 flex justify-between items-center gap-3">
          <div className="flex-none">
            <Link className="" href={links[0].link}>
              <img
                className="h-[80px]"
                src={isScrolled ? "/ipc.png" : "/ipc-blanco.png"}
                alt="logo"
              />
            </Link>
          </div>
          <section className="flex items-center gap-3">
            <nav className="2xl:flex gap-3 hidden ">
              {links.map(({ link, subLink, title }) => (
                <div key={title} className="relative group">
                  {subLink ? (
                    <div
                      className={cn(
                        "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                        {
                          "text-[#1f2325]": isScrolled,
                          "bg-gradient-to-r from-[#52adeb] to-[#014DBE] text-white":
                            pathname === link,
                        }
                      )}
                    >
                      {title}
                      <ChevronDownIcon className="size-4" />
                    </div>
                  ) : (
                    <Link
                      className={cn(
                        "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                        {
                          "text-[#1f2325]": isScrolled,
                        }
                      )}
                      href={link}
                    >
                      {title}
                    </Link>
                  )}

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
            <nav className="md:flex gap-3 hidden 2xl:hidden">
              {links.slice(0, 3).map(({ link, subLink, title }) => (
                <div key={title} className="relative group">
                  {subLink ? (
                    <div
                      className={cn(
                        "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                        {
                          "text-[#1f2325]": isScrolled,
                          "bg-gradient-to-r from-[#52adeb] to-[#014DBE] text-white":
                            pathname === link,
                        }
                      )}
                    >
                      {title}
                      <ChevronDownIcon className="size-4" />
                    </div>
                  ) : (
                    <Link
                      className={cn(
                        "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                        {
                          "text-[#1f2325]": isScrolled,
                        }
                      )}
                      href={link}
                    >
                      {title}
                    </Link>
                  )}

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

              <div className="relative group">
                <div
                  className={cn(
                    "peer flex items-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                    {
                      "text-[#1f2325]": isScrolled,
                    }
                  )}
                >
                  Más
                  <ChevronDownIcon className="size-4" />
                </div>

                <nav className="peer-hover:block hidden absolute z-50 top-full hover:block">
                  <div className="mt-3 bg-white w-40 p-2 shadow-xl rounded-2xl">
                    {links.slice(3).map(({ link, title }) => (
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
              </div>
            </nav>
            <Link
              className="hidden py-2 px-4 text-white md:flex items-center gap-3 bg-[#014DBE] hover:brightness-95 rounded-xl"
              href={"https://www.campuslexedu.com/"}
            >
              <GraduationCapIcon className="flex-none" />
              <span className="2xl:text-base text-sm">EDUCACION EJECUTIVA</span>
            </Link>
            <button
              className={cn("text-white md:hidden", {
                "text-black": isScrolled,
              })}
              onClick={() => setIsActive(true)}
            >
              <MenuIcon />
            </button>
          </section>
        </header>
      </div>
      <div
        className={cn("fixed bg-black/50 inset-0 z-[99] hidden", {
          "block md:hidden": isActive,
        })}
        onClick={() => setIsActive(false)}
      ></div>
      <div
        className={cn(
          "fixed bg-black/90 w-4/5 h-full right-0 top-0 z-[100] hidden",
          {
            "block md:hidden": isActive,
          }
        )}
      >
        <header className="p-6 flex justify-end">
          <button className="text-white" onClick={() => setIsActive(false)}>
            <XIcon />
          </button>
        </header>
        <div className="h-full flex justify-center items-center gap-3">
          <nav className="flex flex-col gap-3">
            {links.map(({ link, title }) => (
              <div key={title} className="relative group">
                <Link
                  className={cn(
                    "peer flex items-center justify-center gap-3 py-2 px-4 rounded-xl text-white group-hover:bg-gradient-to-r from-[#52adeb] to-[#014DBE] group-hover:text-white",
                    {
                      "bg-gradient-to-r from-[#52adeb] to-[#014DBE] text-white":
                        pathname === link,
                    }
                  )}
                  href={link}
                >
                  {title}
                </Link>
              </div>
            ))}
            <Link
              className="py-2 px-4 text-white flex items-center gap-3 bg-[#014DBE] hover:brightness-95 rounded-xl"
              href={"https://www.campuslexedu.com/"}
            >
              <GraduationCapIcon />
              EDUCACION EJECUTIVA
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
