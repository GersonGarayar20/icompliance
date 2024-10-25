import { sponsors } from "./[slug]/auspiciadores/data";
import { ipcImagesEvent } from "./[slug]/galeria/new-images";
import { session } from "./[slug]/sobre-el-programa/data";

export const events = [
  {
    id: 1,
    slug: "women-in-compliance",
    meta: {
      title: "I Foro Internacional: Women in Compliance IPC 2024 - Lima, Perú",
      description:
        "I Foro Internacional: Women in Compliance IPC 2024 en Lima, Perú, reúne a mujeres líderes y aprendices en cumplimiento para fomentar el empoderamiento, la igualdad de oportunidades y el liderazgo femenino en el Compliance.",
      image: "https://icompliancepe.com/wp-content/uploads/2024/10/fondo.jpg",
    },
    coverImage: "./eventos/1/women-compliance.jpg",
    subtitle: "I FORO INTERNACIONAL",
    title: "WOMEN IN COMPLIANCE",
    description:
      "La conferencia anual que reunirá a las mujeres líderes en Compliance del Perú y LATAM",
    date: "2024-10-04",
    time: "8:30 AM - 5:25 PM",
    location: "Lima, Perú",
    address: "Av. Santo Toribio 143 - San Isidro 15073",
    priceTiers: [
      {
        name: "Publico General",
        price: 250,
        currency: "PEN",
      },
      {
        name: "Miembros Asociados IPC",
        price: 200,
        currency: "PEN",
      },
    ],
    details: `Desde el IPC, consideramos crucial fomentar un espacio de **conexión** entre todas las redes de **networking** y **comunidades de mujeres** que fomente el **empoderamiento**, la **igualdad de oportunidades** y el **reconocimiento del liderazgo femenino** en el **Compliance**.

Por ello, este Foro único tiene como propósito facilitar el intercambio de **experiencias** y construir **relaciones** entre todas las **mujeres líderes** y **aprendices** en **cumplimiento**, así como abordar los nuevos **desafíos organizativos** que ellas enfrentan en las empresas, rompiendo **estereotipos**.

El **Cumplimiento Normativo** se ha convertido en un pilar indispensable para el **éxito organizacional** y todas las mujeres que se dedican al **Compliance** en nuestra región son conscientes que su rol es clave no solo para asegurar el **cumplimiento de regulaciones locales e internacionales**, sino también para impulsar una cultura de **integridad** y **equidad de género** dentro de las empresas, en un entorno empresarial **dinámico** y **diverso**.

En respuesta a esta necesidad, presentamos el **I FORO INTERNACIONAL: WOMEN IN COMPLIANCE IPC 2024**, con alta expectativa del público y con sede en **Lima - Perú**, en el **auditorio principal de PwC**.

Este **evento anual**, el primero en el Perú, explorará las últimas **tendencias, desafíos** y mejores **prácticas** de Compliance, bajo una experiencia única de **Network**.`,
    organizer: "Instituto Peruano de Compliance",
    registrationLink: "#fomulario-inscripcion",
    images: ipcImagesEvent,
    video: {
      url: "https://icompliancepe.com/wp-content/uploads/2024/10/video.mp4",
      image: "/eventos/1/video.jpg",
    },

    sponsors,
    session,
    banner: {
      title:
        "El evento único que reúne a las principales lideresas de Compliance en el Perú y LATAM",
      subtitle:
        "La primera edición del Women in Compliance se llevará a cabo el viernes 4 octubre, desde las 8:30 am",
    },
  },
];
