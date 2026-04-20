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
      <div className="absolute w-[180px] h-[180px] bg-white/70 backdrop-blur-md rounded-full top-[-90px]  -translate-x-1/2 shadow-xl z-0"></div>

      <div className="absolute w-[90px] h-[90px] bg-white/90 backdrop-blur-md rounded-full bottom-[-30px] left-[-30px] shadow-lg z-0"></div>

      <div className="absolute w-[70px] h-[70px] bg-white/90 backdrop-blur-md rounded-full top-[20px] right-[-20px] shadow-lg z-0"></div>

      <div className="absolute w-[290px] h-[290px] bg-white/80 backdrop-blur-md rounded-full bottom-[160px] right-[70px] shadow-xl z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-white/80 backdrop-blur-md rounded-full top-[300px] right-[-60px] shadow-[0_0_20px_rgba(0,0,0,0.2)] z-50"></div>

      {/*Logo*/}
      <div className="relative w-full h-[75px] p-4 flex items-center justify-center">
        <img
          src={
            "https://smartpro.cl/wp-content/uploads/2025/06/Recurso-14@3x-8.png"
          }
          alt="service"
          className="w-full h-full object-contain opacity-50"
        />
      </div>

      <div className="relative h-full min-h-[400px] w-full pl-8 flex items-end justify-end">
        {/* Agregamos /80 al final de los colores para darles un 80% de opacidad */}
        <div className="w-[95%] min-h-[440px] bg-gradient-to-r from-[#7b29ff] to-[#b33ab4] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] px-4 flex backdrop-blur-sm pl-8">
          <div className="pt-5">
            {/* titulo */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1,
              }}
              className={textCard.titleLight + " text-right mr-4 w-full"}
            >
              {item.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
              className={textCard.descriptionLight + " w-[95%] mt-4 pr-4"}
            >
              {item.description}
            </motion.div>
            {/* bullets */}
            <div className="flex flex-col gap-2 z-30 mt-4">
              {item.bullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 align-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <Check className={textCard.icon + " text-white"} />
                  <span className={textCard.bulletLight}>{bullet}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* boton */}
      <div className="absolute bottom-5  flex justify-center w-full ">
        <motion.button
          onClick={() => onOpenModal(item.category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={buttonDark.button + " shadow-lg border-2 border-white"}
        >
          Ver planes <ArrowRight className={buttonDark.arrow} />
        </motion.button>
      </div>
    </motion.article>
  );
}
