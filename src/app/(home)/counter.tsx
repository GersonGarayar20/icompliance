"use client";

import React from "react";
import CountUp from "react-countup";

export default function Counter({ number }: { number: number }) {
  return <CountUp end={number} duration={2} separator="," />;
}
