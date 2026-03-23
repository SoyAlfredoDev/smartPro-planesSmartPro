import { useState, useMemo, useRef, useCallback } from "react";
import PlanCard from "./PlanCard";
import "./PlansContenedor.css";
import {
  chatBotPlansData,
  serviciosWebPlansData,
  contenidoDigitalPlansData,
  leadsPlansData,
} from "../assets/plans";

const CARD_WIDTH = 340;
const GAP = 32;
const STEP = CARD_WIDTH + GAP; // 372px per card slot
const VISIBLE_CARDS = 3;

export default function PlansContenedor() {
  const [selectedCategory, setSelectedCategory] = useState("Servicios Web");
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);

  const categories = [
    "Todos",
    "Mas vendidos",
    "Servicios Web",
    "Contenido Digital",
    "Chatbots Automatizados",
    "Leads + Plataforma de Ventas",
  ];

  const allPlans = useMemo(
    () => [
      ...chatBotPlansData,
      ...serviciosWebPlansData,
      ...contenidoDigitalPlansData,
      ...leadsPlansData,
    ],
    [],
  );

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
  }, [selectedCategory, allPlans]);

  const useCarousel = filteredPlans.length > VISIBLE_CARDS;
  const maxIndex = useCarousel
    ? Math.max(0, filteredPlans.length - VISIBLE_CARDS)
    : 0;

  /* Reset position when category changes */
  const handleCategoryChange = useCallback((e) => {
    setSelectedCategory(e.target.value);
    setCurrentIndex(0);
  }, []);

  /* Navigate carousel */
  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - VISIBLE_CARDS));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + VISIBLE_CARDS));
  };

  const translateX = -(currentIndex * STEP);

  return (
    <section className="plansContent">
      <div className="plansContent__topbar">
        <div className="plansContent__topbarInner">
          <div className="plansContent__filter">
            <label htmlFor="plans-filter" className="plansContent__label">
              Filtrar por categoría
            </label>
            <select
              id="plans-filter"
              className="plansContent__select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div
        className={`plansContent__carousel ${useCarousel ? "is-carousel" : ""}`}
      >
        {useCarousel && (
          <button
            type="button"
            className="plansContent__arrow plansContent__arrow--left"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            aria-label="Mostrar planes anteriores"
          >
            ‹
          </button>
        )}

        <div className="plansContent__viewport" ref={gridRef}>
          <div
            className={`plansContent__grid ${useCarousel ? "plansContent__grid--carousel" : ""}`}
            style={
              useCarousel
                ? { transform: `translateX(${translateX}px)` }
                : undefined
            }
          >
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan, index) => (
                <div
                  className="plansContent__item"
                  key={`${plan.name}-${index}`}
                >
                  <PlanCard {...plan} index={index} />
                </div>
              ))
            ) : (
              <div className="plansContent__empty">
                <p>No se encontraron planes en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
        <p className="plansContent__deslizar">Deslizar para ver mas planes</p>

        {useCarousel && (
          <button
            type="button"
            className="plansContent__arrow plansContent__arrow--right"
            onClick={scrollRight}
            disabled={currentIndex >= maxIndex}
            aria-label="Mostrar más planes"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
