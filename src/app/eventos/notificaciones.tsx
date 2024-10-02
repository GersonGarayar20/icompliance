"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/send-mail";
import { Label } from "@radix-ui/react-label";
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
      <div className="flex md:flex-row flex-col gap-6 shadow p-12 rounded-2xl bg-white">
        <h4 className="text-5xl">
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
          <div className="flex gap-1">
            <Checkbox required />
            <Label htmlFor="" className="text-sm">
              Acepto la Política de Privacidad del IPC
            </Label>
          </div>
          <Button className="bg-blue-500">Suscribete</Button>
        </form>
      </div>
    </Container>
  );
}
