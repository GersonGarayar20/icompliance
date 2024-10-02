"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendMail } from "@/lib/send-mail";

import Link from "next/link";
import React, { useState } from "react";

export default function Notificaciones() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMail({
      subject: "Notificaciones",
      body: `
      email: ${email}
  `,
    });
  };

  return (
    <Container className="">
      <div className="flex md:flex-row flex-col gap-6 shadow md:p-12 p-6 rounded-2xl bg-white">
        <h4 className="md:text-5xl text-2xl">
          Recibe notificaciones sobre{" "}
          <strong className="text-blue-500">nuestros eventos</strong>
        </h4>
        <form
          className="flex flex-col gap-6 w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <div className="flex gap-2">
            <Checkbox required />
            <Label className="">
              Acepto la
              <Link
                className="text-sky-500"
                href={
                  "https://icompliancepe.com/wp-content/uploads/2024/09/Politica-de-Privacidad-IPC.pdf"
                }
              >
                {" "}
                Política de Privacidad{" "}
              </Link>
              del IPC
            </Label>
          </div>
          <Button className="bg-blue-500">Suscribete</Button>
        </form>
      </div>
    </Container>
  );
}
