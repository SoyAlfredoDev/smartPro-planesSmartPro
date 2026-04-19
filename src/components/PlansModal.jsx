import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PlanCard from "./PlanCard";
import {
  desarrolloWeb,
  campanaPublicitaria,
  automatizacionBots,
  produccionVisual,
  membresias,
  redesSociales,
  negocioCompleto,
} from "../assets/plans";
import RedesSocialesSection from "./category/RedesSocialesSection";

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
  ...desarrolloWeb,
  ...campanaPublicitaria,
  ...automatizacionBots,
  ...produccionVisual,
  ...membresias,
  ...redesSociales,
  ...negocioCompleto,
];

export default function PlansModal({ isOpen, onClose, category }) {
  const selectedCategory = category || "Todos";
  const sliderRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isOpen]);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const filteredPlans = useMemo(() => {
    switch (selectedCategory) {
      case "Desarrollo Web":
        return desarrolloWeb;
      case "Campaña Publicitaria":
        return campanaPublicitaria;
      case "Automatización Bots":
        return automatizacionBots;
      case "Producción Visual":
        return produccionVisual;
      case "Membresías":
        return membresias;
      case "Redes Sociales":
        return redesSociales;
      case "Negocio Completo":
        return negocioCompleto;
      case "Todos":
      default:
        return allPlans;
    }
  }, [selectedCategory]);

  const isRedesSociales = selectedCategory === "Redes Sociales otra";
  const useCarousel =
    !isRedesSociales && (filteredPlans.length > 3 || isSmallScreen);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 8);
  };

  useEffect(() => {
    if (!isOpen || !useCarousel) return;

    const el = sliderRef.current;
    if (!el) return;

    updateScrollState();

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const timeout = setTimeout(updateScrollState, 80);

    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isOpen, useCarousel, filteredPlans.length, selectedCategory]);

  const scrollByAmount = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.querySelector("[data-plan-slide]");
    const gap = 16;

    if (card) {
      const amount = card.clientWidth + gap;
      el.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      return;
    }

    el.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

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
            className="relative m-0 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#F8F7FF] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full p-1 text-gray-400 transition hover:bg-black/5 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#01c676]"
              aria-label="Cerrar modal"
            >
              <X size={22} />
            </button>

            <div className="shrink-0 border-b border-gray-200 px-6 py-6 pr-12">
              <h3 className="text-2xl font-bold text-[#161124]">
                {selectedCategory}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] sm:text-base">
                🔥 Contenido estratégico + posicionamiento + crecimiento real
              </p>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              {isRedesSociales ? (
                <div className="px-6 py-6">
                  <RedesSocialesSection />
                </div>
              ) : filteredPlans.length > 0 ? (
                useCarousel ? (
                  <div className="relative px-3 py-6 sm:px-4">
                    {canScrollLeft && (
                      <button
                        type="button"
                        onClick={() => scrollByAmount("left")}
                        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-[#161124] shadow-md backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#01c676] sm:left-4 hover:border-[#01c676] hover:text-[#01c676]"
                        aria-label="Ver planes anteriores"
                      >
                        <ChevronLeft size={18} />
                      </button>
                    )}

                    {canScrollRight && (
                      <button
                        type="button"
                        onClick={() => scrollByAmount("right")}
                        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-[#161124] shadow-md backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#01c676] sm:right-4 hover:border-[#01c676] hover:text-[#01c676]"
                        aria-label="Ver más planes"
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}

                    <div
                      ref={sliderRef}
                      className="
                        no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden
                        px-10 pb-2 pt-1 sm:px-12 lg:px-14
                        [scrollbar-width:none] [-ms-overflow-style:none]
                      "
                    >
                      {filteredPlans.map((plan, index) => (
                        <div
                          key={plan.id ?? `${plan.name}-${index}`}
                          data-plan-slide
                          className="          
                            min-w-0 shrink-0 snap-start
                            basis-[120%]
                            sm:basis-[80%]
                            md:basis-[48%]
                            lg:basis-[32%]
                          "
                        >
                          <PlanCard plan={plan} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPlans.map((plan, index) => (
                      <PlanCard
                        key={plan.id ?? `${plan.name}-${index}`}
                        plan={plan}
                      />
                    ))}
                  </div>
                )
              ) : (
                <div className="px-6 py-8">
                  <p className="text-sm text-gray-500">
                    No hay planes disponibles para esta categoría.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
