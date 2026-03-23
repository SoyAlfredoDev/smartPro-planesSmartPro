import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import PlansModal from "./PlansModal";

const services = [
  {
    title: "Desarrollo Web &\nPresencia Digital",
    subtitle: "Landing Pages y Sitios\nWeb de alto impacto",
    description:
      "Creamos páginas diseñadas para convertir: rápidas, estratégicas y enfocadas en generar contactos y ventas desde el primer día.",
    image: "/images/service-01.png",
    bullets: [],
    category: "Servicios Web",
  },
  {
    title: "Campañas\nPublicitarias",
    subtitle: "Atracción de clientes reales",
    description:
      "Diseñamos campañas enfocadas en generar leads y ventas reales.",
    image: "/images/service-02.png",
    bullets: [],
    category: "Leads + Plataforma de Ventas",
  },
  {
    title: "Redes Sociales\n& Contenido",
    subtitle: "Posicionamiento constante",
    description:
      "Gestión completa de redes sociales con estrategia de crecimiento.",
    image: "/images/service-03.png",
    bullets: [],
    category: "Contenido Digital",
  },
  {
    title: "Producción Visual",
    subtitle: "Contenido profesional",
    image: "/images/service-04.png",
    bullets: [
      "Piezas comerciales",
      "Videos corporativos",
      "Producciones con modelo",
    ],
    category: "Contenido Digital",
  },
  {
    title: "Automatización\n& Conversión",
    image: "/images/service-05.png",
    bullets: [
      "Respuestas automáticas",
      "Filtrado de clientes",
      "Agendamiento automático",
    ],
    category: "Chatbots Automatizados",
  },
  {
    title: "Ecosistema de Negocio",
    subtitle: "Modelo listo para vender",
    image: "/images/service-06.png",
    bullets: [
      "Estructura comercial",
      "Servicios integrados",
      "Modelo validado",
    ],
    category: "Leads + Plataforma de Ventas",
  },
];

const sectionStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SmartProSolutionsSection() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-[280px] overflow-hidden sm:h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#40206e_0%,_#2b124f_48%,_#210f42_100%)]" />

        <motion.div
          animate={{ x: [0, 22, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-0 h-[180px] w-[180px] rounded-full bg-purple-400/20 blur-[80px] sm:h-[220px] sm:w-[220px]"
        />

        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-60px] bottom-[-30px] h-[210px] w-[210px] rounded-full bg-purple-300/20 blur-[90px] sm:h-[260px] sm:w-[260px]"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-3 sm:px-4 lg:px-6">
        <motion.header
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[860px] text-center text-white"
        >
          <motion.h2
            variants={headerItem}
            className="mx-auto w-fit rounded-full border border-[#ff7b00] bg-[#ffe0cc] px-4 py-1.5 text-xs text-[#ff7b00] sm:text-sm"
          >
            Nuestros servicios
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="mt-4 text-sm leading-relaxed text-white/80 sm:text-lg md:text-xl lg:text-2xl"
          >
            Creamos ecosistemas completos que combinan{" "}
            <strong className="text-white">
              presencia digital, automatización y generación de ventas reales.
            </strong>
          </motion.p>
        </motion.header>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((item, i) => (
            <ServiceCard
              key={i}
              item={item}
              onOpenModal={(category) => {
                setSelectedCategory(category || "Todos");
                setOpen(true);
              }}
            />
          ))}
        </motion.div>
      </div>

      <PlansModal
        isOpen={open}
        onClose={() => setOpen(false)}
        category={selectedCategory}
      />
    </section>
  );
}
