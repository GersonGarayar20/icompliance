"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-04T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="">
      {timeLeft.days !== undefined ? (
        <div className="flex gap-3 px-3">
          <Contador title="Días" value={timeLeft.days} />
          <Contador title="Horas" value={timeLeft.hours} />
          <Contador title="Minutos" value={timeLeft.minutes} />
          <Contador title="Segundos" value={timeLeft.seconds} />
        </div>
      ) : (
        <span>¡Evento Comenzado!</span>
      )}
    </div>
  );
};

export default CountdownTimer;

const Contador = ({
  title,
  value,
}: {
  value: number | undefined;
  title: string;
}) => (
  <div className="flex flex-col items-center gap-3">
    <div className="aspect-square md:w-32 w-16 md:text-6xl text-4xl font-bold rounded-xl bg-white flex justify-center items-center">
      <span className="mt-2">{value ? value : 0}</span>
    </div>
    <p className="text-center text-white md:text-xl">{title}</p>
  </div>
);
