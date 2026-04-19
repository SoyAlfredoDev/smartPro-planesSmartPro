"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function NewServiceCard({ item, onOpenModal }) {
  const bullets = [
    "Estructura comercial",
    "Soporte estratégico",
    "Generación de oportunidades",
    "Automatización",
    "Soporte estratégico",
  ];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative hidden md:block mx-auto w-full max-w-[1200px] mt-8 min-h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08),0_20px_60px_rgba(0,0,0,0.06)] flex flex-col"
    >
      {/* Decorative Circles (mejorados) */}
      <div className="absolute w-[140px] h-[140px] bg-white/20 backdrop-blur-md rounded-full top-[-50px] left-1/3 -translate-x-1/2 shadow-xl"></div>

      <div className="absolute  transparent w-[90px] h-[90px] bg-white/30 backdrop-blur-md rounded-full bottom-[140px] left-[300px] shadow-lg"></div>

      <div className="absolute w-[70px] h-[70px] bg-white/60 backdrop-blur-md rounded-full top-[120px] right-[-20px] shadow-lg"></div>

      <div className="absolute w-[260px] h-[260px] bg-white/30 backdrop-blur-md rounded-full bottom-[100px] right-[300px] shadow-xl"></div>

      {/* CONTENT */}
      <div className="relative  z-10 px-6 pt-10 pb-0 flex flex-col gap-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[30px] sm:text-[34px] font-bold leading-tight text-gray-900 max-w-[90%] z-20"
        >
          Negocio funcionando desde el día 1
        </motion.h2>

        {/* Accent line */}
        <div className="h-[4px] w-[300px] bg-pink rounded-full">
          <span className="">
            <br />
          </span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-md  text-gray-600 leading-relaxed max-w-[65%] z-20"
        >
          En SmartPro® puedes acceder no solo a servicios, sino a un modelo
          completo que incluye:
        </motion.p>

        {/* Bullets */}
        <div className="my-2 space-y-2 z-20 w-[55%] mb-10">
          {bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-2"
            >
              <Check className="h-4 w-4 shrink-0 text-pink font-bold mt-[4px]" />
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>
        {/* IMAGE (mejor integrada) */}
        <div className="absolute w-full bottom-0 flex justify-end mt-6 pr-6">
          <motion.img
            src="/images/service-07.png"
            alt="service"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className=" w-[80%] md:w-[45%]  object-contain relative z-0"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className=" h-full  bg-gradient-to-r from-purple-900 to-purple-600 py-6 flex justify-center items-center bg-red-500">
        <motion.button
          onClick={() => onOpenModal(item.category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-white text-purple-900 font-semibold px-8 py-3 rounded-2xl shadow-md transition"
        >
          Ver planes{" "}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.article>
  );
}
