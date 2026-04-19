import { Check, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./PlanCard.css";

export default function PlanCard({ plan }) {
  console.log(plan);
  const {
    name,
    oldPrice,
    price,
    tax,
    features = [],
    buttonText = "Elegir plan",
    link,
    highlighted,
    badge,
    index = 0,
    masVendido,
    isIsapre = false,
    hasLogo = false,
    isCotizalo = false,
  } = plan;

  const isHighlighted = highlighted || masVendido;

  const hasCustomBadge = badge && badge.trim().toLowerCase() !== "mas vendido";

  return (
    <motion.article
      className={`plan-card ${isHighlighted ? "plan-card--highlighted" : ""} ${isIsapre ? "is-isapre" : ""} ${isCotizalo ? "is-cotizalo" : ""}`}
      style={{ "--animation-order": index }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { duration: 0.18, ease: "easeOut" },
      }}
    >
      {!hasLogo && (
        <>
          <div className="plan-card__glow" />

          {(masVendido || hasCustomBadge) && (
            <div className="plan-card__badge-wrapper">
              {masVendido && (
                <span className="plan-card__badge plan-card__badge--popular">
                  <Star size={13} className="plan-card__badge-icon" />
                  Más Vendido
                </span>
              )}

              {hasCustomBadge && (
                <span className="plan-card__badge plan-card__badge--discount">
                  {badge}
                </span>
              )}
            </div>
          )}
        </>
      )}
      {hasLogo && (
        <div className="w-full h-[60px] mb-2 mt-[-30px] flex items-center align-center justify-center">
          <img
            src={hasLogo}
            alt={`${name} logo`}
            className={`w-[75%] my-auto mx-auto ${isCotizalo ? "w-[85%] mt-[5px] is-cotizalo" : ""}`}
          />
        </div>
      )}

      <header className="plan-card__header">
        <h3 className="plan-card__title">{name}</h3>

        <div className="plan-card__pricing">
          <div className="plan-card__old-price-wrapper">
            {oldPrice && oldPrice.trim().toLowerCase() === "desde" ? (
              <p className="plan-card__old-price-label font-bold">Desde</p>
            ) : oldPrice && oldPrice.trim() !== "" ? (
              <p className="plan-card__old-price-label">
                Antes: <span className="plan-card__old-price">{oldPrice}</span>
              </p>
            ) : (
              <p className="plan-card__old-price-label font-bold">Precio</p>
            )}
          </div>

          <div className="plan-card__price-row">
            <span className="plan-card__price">{price}</span>
            {tax ? <span className="plan-card__tax">{tax}</span> : null}
          </div>
        </div>

        <hr className="plan-card__divider" />
      </header>

      <div className="plan-card__body">
        <ul className="plan-card__features">
          {features.map((feature, i) => (
            <li key={`${name}-feature-${i}`} className="plan-card__feature">
              <span className="plan-card__check-wrap" aria-hidden="true">
                <Check size={15} className="plan-card__check-icon" />
              </span>
              <span
                className="plan-card__feature-text"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </li>
          ))}
        </ul>
      </div>

      <footer className="plan-card__footer">
        {link ? (
          <a
            className="plan-card__button"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span>{buttonText}</span>
            <ArrowRight size={17} className="plan-card__button-icon" />
          </a>
        ) : (
          <button
            className="plan-card__button plan-card__button--disabled"
            disabled
          >
            <span>Pendiente</span>
          </button>
        )}
      </footer>
    </motion.article>
  );
}
