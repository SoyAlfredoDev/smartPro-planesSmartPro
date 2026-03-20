import { Check, Star, ArrowRight } from "lucide-react";
import "./PlanCard.css";

export default function PlanCard({
  name,
  oldPrice,
  price,
  tax = "Más IVA",
  features = [],
  buttonText = "Elegir plan",
  href = "#",
  highlighted = false,
  badge,
  index = 0,
  masVendido = false,
}) {
  // We can automatically highlight if it's masVendido
  const isHighlighted = highlighted || masVendido;

  return (
    <article
      className={`plan-card ${isHighlighted ? "plan-card--highlighted" : ""}`}
      style={{ "--animation-order": index }}
    >
      <div className="plan-card__glow" />

      {/* Floating Badges */}
      {(badge || masVendido) && (
        <div className="plan-card__badge-wrapper">
          {masVendido && (
            <span className="plan-card__badge plan-card__badge--popular">
              <Star size={14} className="inline mr-1" /> Más Vendido
            </span>
          )}
          {badge && badge.toLowerCase() !== "mas vendido" && (
            <span className="plan-card__badge plan-card__badge--discount">
              {badge}
            </span>
          )}
        </div>
      )}

      <header className="plan-card__header">
        <h3 className="plan-card__title">{name}</h3>

        <div className="plan-card__pricing">
          <div className="plan-card__old-price-wrapper">
            {oldPrice && oldPrice.trim() !== "" ? (
              <p className="plan-card__old-price">{oldPrice}</p>
            ) : (
              <p className="plan-card__old-price-spacer">&nbsp;</p>
            )}
          </div>
          <div className="plan-card__price-row">
            <span className="plan-card__price">{price}</span>
            <span className="plan-card__tax">{tax}</span>
          </div>
        </div>
      </header>
      <hr className="plan-card__divider" />

      <div className="plan-card__body">
        <ul className="plan-card__features">
          {features.map((feature, i) => (
            <li key={`${name}-feature-${i}`} className="plan-card__feature">
              <Check size={18} className="plan-card__check-icon" />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>

      <footer className="plan-card__footer">
        <a className="plan-card__button" href={href}>
          {buttonText}{" "}
          <ArrowRight size={18} className="plan-card__button-icon" />
        </a>
      </footer>
    </article>
  );
}
