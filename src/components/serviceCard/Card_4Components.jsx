import React from "react";
import { motion } from "framer-motion";
import { serviceCard, buttonDark, textCard } from "../../assets/style-confing";
import { ArrowRight, Check } from "lucide-react";
export default function Card_4Components({ item, onOpenModal }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={serviceCard}
    >
      <div className="absolute w-[140px] h-[140px] bg-white/70 backdrop-blur-md rounded-full top-[-50px] left-1/2 -translate-x-1/2 shadow-xl z-0"></div>

      <div className="absolute w-[90px] h-[90px] bg-white/60 backdrop-blur-md rounded-full bottom-[140px] left-[-30px] shadow-lg z-0"></div>

      <div className="absolute w-[70px] h-[70px] bg-white/60 backdrop-blur-md rounded-full top-[120px] right-[-20px] shadow-lg z-0"></div>

      <div className="absolute w-[260px] h-[260px] bg-white/30 backdrop-blur-md rounded-full bottom-[160px] right-[60px] shadow-xl z-0"></div>

      {/*Logo*/}
      <div className="relative w-[75px] h-[75px] ml-4 p-4">
        <img
          src={
            "https://smartpro.cl/wp-content/uploads/2025/06/Recurso-14@3x-8.png"
          }
          alt="service"
          className="w-[75px] h-[75px] object-contain opacity-50"
        />
      </div>

      {/* titulo */}
      <div className="relative w-full min-h-[150px]] flex justify-end z-10 right-[-40px]">
        <div className="w-[90%] h-full bg-gradient-to-r from-[#b33ab4] via-[#7b29ff] pr-[40px]  to-[#2b16d1] rounded-tl-3xl rounded-bl-3xl p-4 flex items-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.1,
            }}
            className={textCard.titleLight}
          >
            {item.title}
          </motion.h2>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.2,
        }}
        className={
          textCard.description + " w-[68%] md:w-[75%] p-4 md:px-8 z-30"
        }
      >
        {item.description}
      </motion.div>

      {/* bullets */}
      <div className="flex flex-col gap-1 md:gap-2 px-4 w-[60%] md:px-8 md:w-[70%] z-30">
        {item.bullets.map((bullet, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <Check className={textCard.icon} />
            <span className={textCard.bullet}>{bullet}</span>
          </motion.div>
        ))}
      </div>
      {/* boton */}
      <div className="absolute bottom-2 md:bottom-4  left-1/2 -translate-x-1/2 z-30 ">
        <motion.button
          onClick={() => onOpenModal(item.category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={buttonDark.button + " shadow-lg border-2 border-white"}
        >
          Ver planes <ArrowRight className={buttonDark.arrow} />
        </motion.button>
      </div>

      {/* imagen */}
      <div className=" absolute  w-full h-[65%] bottom-[-20px] mdgg:bottom- flex justify-end">
        <motion.img
          src={item.image}
          alt="service"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`h-full object-contain relative z-20 mr-[-35px]  `}
        />
      </div>
    </motion.article>
  );
}
