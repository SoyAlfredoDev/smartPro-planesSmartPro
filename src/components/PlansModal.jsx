import React, { useMemo } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PlanCard from "./PlanCard";
import {
  chatBotPlansData,
  serviciosWebPlansData,
  contenidoDigitalPlansData,
  leadsPlansData,
} from "../assets/plans";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 8,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const allPlans = [
  ...serviciosWebPlansData,
  ...contenidoDigitalPlansData,
  ...chatBotPlansData,
  ...leadsPlansData,
];

export default function PlansModal({ isOpen, onClose, category }) {
  const selectedCategory = category || "Todos";

  const filteredPlans = useMemo(() => {
    switch (selectedCategory) {
      case "Todos":
        return allPlans;
      case "Mas vendidos":
        return allPlans.filter((plan) => plan.highlighted === true);
      case "Servicios Web":
        return serviciosWebPlansData;
      case "Contenido Digital":
        return contenidoDigitalPlansData;
      case "Chatbots Automatizados":
        return chatBotPlansData;
      case "Leads + Plataforma de Ventas":
        return leadsPlansData;
      default:
        return allPlans;
    }
  }, [selectedCategory]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 text-gray-400 transition hover:text-black"
              aria-label="Cerrar modal"
            >
              <X />
            </button>

            <div className="shrink-0 border-b border-gray-200 px-6 py-6 pr-12">
              <h3 className="text-2xl font-bold text-[#161124]">
                Planes disponibles
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {selectedCategory === "Todos"
                  ? "Todos los planes"
                  : `Categoría: ${selectedCategory}`}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPlans.length > 0 ? (
                  filteredPlans.map((plan, index) => (
                    <PlanCard
                      key={plan.id ?? `${plan.name}-${index}`}
                      plan={plan}
                    />
                  ))
                ) : (
                  <p className="col-span-full text-sm text-gray-500">
                    No hay planes disponibles para esta categoría.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
