import { useState, useMemo } from "react";
import PlanCard from "./PlanCard";
import "./PlansContenedor.css";
import {
  chatBotPlansData,
  serviciosWebPlansData,
  contenidoDigitalPlansData,
} from "../assets/plans";

export default function PlansContenedor() {
  const [selectedCategory, setSelectedCategory] = useState("Servicios Web");

  const categories = [
    "Todos",
    "Mas vendidos",
    "Chatbots",
    "Servicios Web",
    "Contenido Digital",
  ];

  const allPlans = useMemo(
    () => [
      ...chatBotPlansData,
      ...serviciosWebPlansData,
      ...contenidoDigitalPlansData,
    ],
    [],
  );

  const filteredPlans = useMemo(() => {
    switch (selectedCategory) {
      case "Todos":
        return allPlans;
      case "Mas vendidos":
        return allPlans.filter((plan) => plan.highlighted === true);
      case "Chatbots":
        return chatBotPlansData;
      case "Servicios Web":
        return serviciosWebPlansData;
      case "Contenido Digital":
        return contenidoDigitalPlansData;
      default:
        return allPlans;
    }
  }, [selectedCategory, allPlans]);

  return (
    <section className="plansContent">
      <div className="plansContent__topbar">
        <div className="plansContent__topbarInner">
          <div className="plansContent__heading">
            <span className="plansContent__eyebrow">Nuestras Soluciones</span>
            <p className="plansContent__text">
              Selecciona la categoría que mejor se adapte a tus necesidades y
              encuentra el plan ideal.
            </p>
          </div>

          <div className="plansContent__filter">
            <label htmlFor="plans-filter" className="plansContent__label">
              Filtrar por categoría
            </label>
            <select
              id="plans-filter"
              className="plansContent__select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
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

      <div className="plansContent__grid">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, index) => (
            <div className="plansContent__item" key={`${plan.name}-${index}`}>
              <PlanCard {...plan} index={index} />
            </div>
          ))
        ) : (
          <div className="plansContent__empty">
            <p>No se encontraron planes en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
