import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { serviceCard, buttonLight, textCard } from "../../assets/style-confing";

export default function Card_1Components({ item, onOpenModal }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={serviceCard}
    >
      {/* Decorative Circles (mejorados) */}
      <div className="absolute w-[140px] h-[140px] bg-white/70 backdrop-blur-md rounded-full top-[-50px] left-1/2 -translate-x-1/2 shadow-xl"></div>

      <div className="absolute w-[90px] h-[90px] bg-white/60 backdrop-blur-md rounded-full bottom-[140px] left-[-30px] shadow-lg"></div>

      <div className="absolute w-[70px] h-[70px] bg-white/60 backdrop-blur-md rounded-full top-[120px] right-[-20px] shadow-lg"></div>

      <div className="absolute w-[260px] h-[260px] bg-white/30 backdrop-blur-md rounded-full bottom-[160px] right-[60px] shadow-xl"></div>

      {/* CONTENT */}
      <div className="absolute h-full z-10 px-6 pt-10 pb-0 flex flex-col gap-4 ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={textCard.titleDark}
        >
          {item.title}
        </motion.h2>

        {/* Accent line */}
        <div className="h-[4px] w-[100px] bg-purple rounded-full"></div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={textCard.description + " max-w-[65%]"}
        >
          {item.description}
        </motion.p>

        {/* Bullets */}
        <div className=" flex flex-col gap-1 md:gap-2 w-[60%] md:w-[55%]">
          {item.bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2 align-center"
            >
              <Check className={textCard.icon} />
              <p className={textCard.bullet}>{bullet}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute hidden md:block  md:bottom-20 left-2 w-[75px] h-[75px] justify-center items-center`">
          <img
            src={
              "https://smartpro.cl/wp-content/uploads/2025/06/Recurso-14@3x-8.png"
            }
            alt="service"
            className="w-[75px] h-[75px] p-4 object-contain opacity-50"
          />
        </div>
        {/* IMAGE (mejor integrada) */}
        <div className="absolute w-full bottom-0 flex justify-end">
          <motion.img
            src={item.image}
            alt="service"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={` w-[75%] object-cover relative z-0 ${item.category === "Negocio Completo" ? "w-[95%]" : "w-[75%]"} mb-[84px]`}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute h-[84px]  bottom-0 w-full bg-gradient-to-r from-[#b33ab4]  via-[#b33ab4] to-[#2b16d1] py-6 flex justify-center items-center">
        <motion.button
          onClick={() => {
            console.log(item.category);
            onOpenModal(item.category);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={buttonLight.button}
        >
          Ver planes{" "}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.article>
  );
}
