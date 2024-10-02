"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/send-mail";
import React, { useState } from "react";

export default function FormularioInscripcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    cargo: "",
    telefono: "",
    mensaje: "",
    politica_privacidad: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Manejo de cambios en los inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.politica_privacidad) {
      setResponseMessage("Debes aceptar la Política de Privacidad.");
      return;
    }

    setLoading(true);

    await sendMail({
      subject: "Formulario De Inscripción",
      body: `
      nombre: ${formData.nombre}
      correo: ${formData.correo}
      empresa: ${formData.empresa}
      cargo: ${formData.cargo}
      telefono: ${formData.telefono}
      mensaje: ${formData.mensaje}
      `,
    });
    setLoading(false);
    setFormData({
      nombre: "",
      correo: "",
      empresa: "",
      cargo: "",
      telefono: "",
      mensaje: "",
      politica_privacidad: false,
    });
    setResponseMessage("Formulario enviado correctamente.");
  };

  return (
    <Container>
      <h2 className="text-4xl mb-6">Formulario De Inscripción</h2>
      <article className="flex gap-6">
        <section className="w-[500px] bg-white p-6 rounded-2xl flex flex-col gap-6">
          <h3 className="text-2xl">Inscríbete ahora</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              placeholder="Nombre y apellidos"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Correo"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Teléfono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
            />
            <div className="flex gap-1">
              <Checkbox
                name="politica_privacidad"
                checked={formData.politica_privacidad}
                onCheckedChange={(checked) => {
                  if (typeof checked === "boolean") {
                    setFormData({ ...formData, politica_privacidad: checked });
                  }
                }}
                required
              />
              <Label className="mt-1">
                Acepto la Política de Privacidad del IPC
              </Label>
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </section>
        <section className="flex-1 relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/eventos/1/formulario-evento.jpg"
            alt="Imagen evento"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <p className="text-4xl text-white">
              Certificaciones, membresías y capacitaciones exclusivas a un click
              de distancia.
            </p>
          </div>
        </section>
      </article>
    </Container>
  );
}
