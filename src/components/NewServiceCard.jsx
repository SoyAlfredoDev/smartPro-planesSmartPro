"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function NewServiceCard({ item, onOpenModal }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-[480px] min-h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08),0_20px_60px_rgba(0,0,0,0.06)] flex flex-col"
    >
      {/* Decorative Circles (mejorados) */}
      <div className="absolute w-[140px] h-[140px] bg-white/70 backdrop-blur-md rounded-full top-[-50px] left-1/2 -translate-x-1/2 shadow-xl"></div>

      <div className="absolute w-[90px] h-[90px] bg-white/60 backdrop-blur-md rounded-full bottom-[140px] left-[-30px] shadow-lg"></div>

      <div className="absolute w-[70px] h-[70px] bg-white/60 backdrop-blur-md rounded-full top-[120px] right-[-20px] shadow-lg"></div>

      <div className="absolute w-[260px] h-[260px] bg-white/30 backdrop-blur-md rounded-full bottom-[160px] right-[60px] shadow-xl"></div>

      {/* CONTENT */}
      <div className="relative h-[85%] min-h-[550px] z-10 px-6 pt-10 pb-0 flex flex-col gap-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[30px] sm:text-[34px] font-bold leading-tight text-gray-900 max-w-[90%] z-20"
        >
          {item.title}
        </motion.h2>

        {/* Accent line */}
        <div className="h-[4px] w-[100px] bg-pink-500 rounded-full"></div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-md  text-gray-600 leading-relaxed max-w-[65%] z-20"
        >
          {item.description}
        </motion.p>

        {/* Bullets */}
        <div className="my-2 space-y-2 z-20 w-[55%]">
          {item.bullets.map((bullet, index) => (
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
            src={item.image}
            alt="service"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`w-[75%] md:w-[65%] object-contain relative z-0 ${item.category === "Negocio Completo" ? "w-[95%]" : "w-[75%]"}`}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="h-[15%] bg-gradient-to-r from-purple-900 to-purple-600 py-6 flex justify-center items-center">
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
