import React from "react";
import Counter from "./counter";
import Container from "@/components/container";

const data = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6em"
        height="6em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.5"
          color="currentColor"
        >
          <path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846"></path>
          <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17"></path>
        </g>
      </svg>
    ),
    title: "Cursos desarrollados",
    value: 52,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6em"
        height="6em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.6"
          d="M20.774 18c.75 0 1.345-.471 1.88-1.13c1.096-1.35-.703-2.43-1.389-2.957c-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 18c-.75 0-1.345-.471-1.88-1.13c-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 0 1 0-5m2.584 9.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353c1.632-1.614-1.047-2.904-2.069-3.536a7.46 7.46 0 0 0-7.832 0M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
          color="currentColor"
        ></path>
      </svg>
    ),
    title: "Alumnos satisfechos",
    value: 8500,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6em"
        height="6em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.5"
          color="currentColor"
        >
          <path d="M4.5 9.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 0 0-15 0"></path>
          <path d="M9 10.167s.75 0 1.5 1.333c0 0 2.382-3.333 4.5-4m1.883 7.5l.67 3.21c.43 2.062.646 3.093.203 3.582c-.442.489-1.21.069-2.746-.772l-2.274-1.245c-.363-.198-.544-.298-.736-.298s-.373.1-.736.298L8.99 21.02c-1.536.84-2.304 1.261-2.746.772s-.227-1.52.203-3.582l.67-3.21"></path>
        </g>
      </svg>
    ),
    title: "Certificados emitidos",
    value: 10200,
  },
];

export default function Estadisticas() {
  return (
    <Container className="py-32 bg-[#f3f5f9]">
      <div className="grid grid-cols-3">
        {data.map(({ value, title, icon }) => (
          <div
            key={title}
            className="text-center flex flex-col justify-center items-center gap-6 border-r last:border-none"
          >
            {icon}
            <p className="text-6xl font-bold bg-gradient-to-r from-[#52ADEB] to-[#0045AE] bg-clip-text text-transparent">
              +<Counter number={value} />
            </p>
            <p className="text-2xl">{title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
