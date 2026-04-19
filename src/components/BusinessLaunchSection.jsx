import React from "react";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PlansModal from "./PlansModal";
import { desarrolloWeb } from "../assets/plans";

const businessLaunchColumns = [
  ["Estructura comercial", "Soporte estratégico"],
  ["Generación de oportunidades", "Soporte estratégico"],
  ["Automatización", "Soporte estratégico"],
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BusinessLaunchSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto my-7 w-[70%] max-w-[1000px]"
      >
        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-2xl border border-[#cdbce5] bg-white shadow-[0_16px_40px_rgba(41,19,76,0.12)] sm:rounded-[30px]"
        >
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#5a2a8c_0%,_#451a74_46%,_#321054_100%)] px-4 py-6 text-white sm:px-6 sm:py-8 md:px-10">
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute -left-10 top-[-20px] h-[120px] w-[220px] rounded-full bg-white/5 sm:h-[180px] sm:w-[380px]"
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                className="absolute right-[-40px] top-0 h-[140px] w-[260px] rounded-full bg-white/5 sm:h-[220px] sm:w-[540px]"
              />
            </div>

            <motion.div
              variants={fadeUp}
              className="relative flex flex-col gap-4 md:flex-row md:items-center"
            >
              <div>
                <h3 className="text-[24px] font-extrabold leading-tight md:text-[32px]">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[20px] leading-none sm:text-[54px]"
                  >
                    💼
                  </motion.span>{" "}
                  Negocio funcionando desde el día 1
                </h3>

                <motion.p
                  variants={fadeUp}
                  className="mt-2 max-w-[760px] text-[15px] leading-[1.55] text-white/90 sm:mt-3 sm:text-[18px] md:text-[20px]"
                >
                  En SmartPro® puedes acceder no solo a servicios, sino a un
                  modelo completo que incluye:
                </motion.p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 bg-[#f7f5fa] px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-2 md:px-10 lg:grid-cols-3"
          >
            {businessLaunchColumns.map((column, columnIndex) => (
              <motion.ul
                key={columnIndex}
                variants={
                  columnIndex === 0
                    ? fadeLeft
                    : columnIndex === 2
                      ? fadeRight
                      : fadeUp
                }
                className="space-y-4"
              >
                {column.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-[16px] font-medium text-[#271f3d] md:text-[20px]"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: itemIndex * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#35b7df]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center bg-[#f7f5fa] pb-4"
          >
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="outline-none focus:outline-none focus:ring-2 focus:ring-[#01c676] focus:ring-offset-2 group inline-flex items-center gap-2 text-[16px] font-semibold text-[#40206e] transition-all duration-300 hover:text-[#2b124f]"
            >
              <span>Ver planes</span>

              <motion.span
                className="flex"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
      <PlansModal
        isOpen={open}
        onClose={() => setOpen(false)}
        category={"Negocio Completo"}
      />
    </>
  );
}
