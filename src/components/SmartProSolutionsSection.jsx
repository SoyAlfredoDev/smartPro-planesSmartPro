import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import PlansModal from "./PlansModal";
import NewServiceCardBussines from "./NewServiceCardBussines";
import Card_1Components from "./serviceCard/Card_1Components";
import Card_2Components from "./serviceCard/Card_2Components";
import Card_4Components from "./serviceCard/Card_4Components";

// Pantallas medianas y grandes (Desktop/Tablet)
const services = [
  {
    title: "Desarrollo Web Presencia Digital",
    subtitle: "Landing Pages y Sitios\nWeb de alto impacto",
    description:
      "Creamos páginas diseñadas para convertir: rápidas, estratégicas y enfocadas en generar contactos y ventas desde el primer día.",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/service-01.png",
    bullets: ["Páginas web optimizadas", "Tiendas online", "Landing pages"],
    category: "Desarrollo Web",
    modelCard: 1,
  },
  {
    title: "Campañas\nPublicitarias",
    subtitle: "Atracción de clientes reales",
    description:
      "Diseñamos y ejecutamos campañas en redes sociales orientadas a resultado, aumentando visibilidad, leads y oportunidades comerciales.",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/service-02.png",
    bullets: ["Leads", "Visibilidad", "Configuración estratégica"],
    category: "Campaña Publicitaria",
    modelCard: 4,
  },
  {
    title: "Redes Sociales\n& Contenido",
    subtitle: "Posicionamiento constante",
    description:
      "Gestionamos tus redes sociales con estrategia: contenido, diseño, planificación y crecimiento orgánico.",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/service-03.png",
    bullets: [
      "Gestión de contenido",
      "Optimización de perfiles",
      "Piezas graficas",
    ],
    category: "Redes Sociales",
    modelCard: 2,
  },
  {
    title: "Automatización\n& Conversión",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/services.png",
    description:
      "Creamos páginas diseñadas para convertir: rápidas, estratégicas y enfocadas en generar contactos y ventas desde el primer día.",
    bullets: [
      "Respuestas automáticas",
      "Filtrado de clientes",
      "Agendamiento automático",
    ],
    category: "Automatización Bots",
    modelCard: 4,
  },
  {
    title: "Producción \n Audiovisual",
    description:
      "Creamos contenido visual de alto impacto para potenciar tu marca y conectar con tu audiencia.",
    subtitle: "Piezas graficas y videos corporativos",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/service-04.png",
    bullets: [
      "Piezas comerciales",
      "Videos corporativos",
      "Producciones con  modelo",
    ],
    category: "Producción Visual",
    modelCard: 2,
  },
  {
    title: "Membrecías Y Negocios",
    description:
      "Creamos ecosistemas completos que combinan presencia digital, automatización y generación de ventas reales.",
    subtitle: "Modelo listo para vender",
    image: "https://smartpro.cl/wp-content/uploads/2026/04/service-06.png",
    bullets: [
      "Estructura comercial",
      "Servicios integrados",
      "Modelo validado",
    ],
    category: "Membresías",
    modelCard: 1,
  },
];

const membresias = {
  title: "Membresías Y Negocios",
  description:
    "Creamos ecosistemas completos que combinan presencia digital, automatización y generación de ventas reales.",
  subtitle: "Modelo listo para vender",
  image: "https://smartpro.cl/wp-content/uploads/2026/04/service-07.png",
  bullets: [
    "Estructura comercial",
    "Soporte estratégico",
    "Generación de oportunidades",
  ],
  category: "Membresías",
  modelCard: 4,
};
// Pantallas pequeñas (Móvil)
const services2 = [membresias, ...services];

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

  // Estados y referencias para el carrusel en móvil
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Función para detectar qué tarjeta está activa al hacer scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="Servicios"
      className="relative overflow-hidden pt-8 pb-6 sm:pt-16 sm:pb-0 lg:pt-14 lg:mb-10"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background elements */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] overflow-hidden sm:h-[420px] lg:h-[440px]">
        {/*<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#4c2682_0%,_#34175f_38%,_#220f43_72%,_#180b31_100%)]" />*/}
        {/*<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_24%,rgba(255,255,255,0)_48%)]" />*/}

        <motion.div
          animate={{ x: [0, 16, 0], y: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-10 h-[150px] w-[150px] rounded-full bg-white/12 blur-[42px] sm:-left-20 sm:top-12 sm:h-[200px] sm:w-[200px] sm:blur-[56px]"
        />

        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-16 h-[82px] w-[82px] rounded-full border border-white/16 bg-white/10 blur-[8px] sm:top-20 sm:h-[110px] sm:w-[110px] sm:blur-[10px]"
        />

        <motion.div
          animate={{ x: [0, -14, 0], y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-40px] top-8 h-[160px] w-[160px] rounded-full bg-white/10 blur-[46px] sm:right-[-55px] sm:top-10 sm:h-[210px] sm:w-[210px] sm:blur-[60px]"
        />

        <motion.div
          animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-6 top-20 h-[92px] w-[92px] rounded-full border border-white/14 bg-white/9 blur-[10px] sm:right-10 sm:top-24 sm:h-[120px] sm:w-[120px]"
        />

        <motion.div
          animate={{ x: [0, 14, 0], y: [0, -6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-3 h-[110px] w-[110px] -translate-x-1/2 rounded-full bg-white/8 blur-[36px] sm:top-8 sm:h-[140px] sm:w-[140px] sm:blur-[44px]"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/0" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-3 sm:px-4 lg:px-6">
        <motion.header
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[860px] text-center text-white"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="relative w-[1200px] font-bold tracking-tight text-white"
            >
              {/* Parte superior: Blanco con ligera transparencia */}
              <span className="text-2xl sm:text-4xl md:text-5xl text-gray-900 font-medium   w-full">
                Creamos ecosistema que combinan{" "}
                <br className="hidden md:block" />
              </span>

              {/* Parte inferior: Degradado sutil de Blanco a Púrpura Oscuro */}
              <span className="text-2xl sm:text-4xl md:text-5xl bg-[#4c1d95] bg-clip-text text-transparent m-0 p-0">
                presencia digital, automatización y generación de ventas reales.
              </span>
            </motion.h1>
          </motion.div>
        </motion.header>

        {/* --- CONTENEDOR MÓVIL (Usa services2) --- */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          ref={carouselRef}
          onScroll={handleScroll}
          className="md:hidden hide-scrollbar mt-4 md:mt-8 flex w-full snap-x snap-mandatory overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services2.map((item, i) => (
            <div
              key={`mobile-${i}`}
              className="w-[99%] mx-auto justify-center shrink-0 snap-center px-2 sm:min-w-[30px]"
            >
              {item.modelCard === 1 ? (
                <Card_1Components
                  item={item}
                  onOpenModal={(category) => {
                    console.log(category);
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : item.modelCard === 2 ? (
                <Card_2Components
                  item={item}
                  onOpenModal={(category) => {
                    console.log(category);
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : item.modelCard === 3 ? (
                <Card_3Components
                  item={item}
                  onOpenModal={(category) => {
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : item.modelCard === 4 ? (
                <Card_4Components
                  item={item}
                  onOpenModal={(category) => {
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : null}
            </div>
          ))}
        </motion.div>

        {/* Barras de estado y texto (Solo visibles en móvil y asociadas a services2) */}
        <div className="mt-2 flex flex-col items-center md:hidden pb-6">
          <div className="flex space-x-1.5">
            {services2.map((_, i) => (
              <div
                key={`dot-${i}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-gray-500" : "w-2 bg-gray-500/70"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs font-medium text-gray-500">
            Desliza para ver todos nuestros servicios
          </p>
        </div>

        {/* --- CONTENEDOR DESKTOP / TABLET (Usa services) --- */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="hidden md:mt-10 md:grid md:grid-cols-2 md:justify-items-center md:gap-5 md:pb-0 xl:grid-cols-3 xl:gap-6"
        >
          {services.map((item, i) => (
            <div key={`desktop-${i}`} className="w-full">
              {item.modelCard === 4 ? (
                <Card_4Components
                  item={item}
                  onOpenModal={(category) => {
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : item.modelCard === 1 ? (
                <Card_1Components
                  item={item}
                  onOpenModal={(category) => {
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              ) : (
                <Card_2Components
                  item={item}
                  onOpenModal={(category) => {
                    setSelectedCategory(category || "Todos");
                    setOpen(true);
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        <div className="mt-4 md:mt-8">
          <NewServiceCardBussines
            item={services2[0]}
            onOpenModal={(category) => {
              setSelectedCategory(category || "Todos");
              setOpen(true);
            }}
          />
        </div>
      </div>

      <PlansModal
        isOpen={open}
        onClose={() => setOpen(false)}
        category={selectedCategory}
      />
    </section>
  );
}
