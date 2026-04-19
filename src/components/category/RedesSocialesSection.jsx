import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SocialMediaPricingSection() {
  const topPlans = [
    {
      icon: (
        <FaInstagram style={{ filter: "drop-shadow(0 0 0.5px #E4405F)" }} />
      ),
      title: "Redes Sociales IG / Facebook",
      price: "$199.990",
      iva: "",
      features: [
        "Gestión de redes sociales",
        "3 piezas gráficas mensuales",
        "Estrategia básica de contenido",
        "Interacción (likes por publicación)",
        "Crecimiento inicial de seguidores",
        "Optimización de perfil",
      ],
      note: "🔥 Ideal para mantener presencia activa y crecer",
    },
    {
      icon: "in",
      title: "Redes Sociales LinkedIn / Otros",
      price: "$99.990",
      iva: "",
      linkedin: true,
      features: [
        "3 piezas gráficas",
        "Diseño adaptado a plataforma",
        "Optimización de perfil",
        "Contenido profesional",
      ],
      note: "🚀 Ideal para posicionamiento corporativo",
    },
    {
      icon: "🖌️",
      title: "3 Piezas Gráficas",
      price: "$99.990",
      iva: "+ IVA",
      features: [
        "Diseño gráfico personalizado",
        "Adaptado a Instagram / Facebook",
        "Formato optimizado para redes",
        "Entrega en alta calidad",
        "Publicación en la red social correspondiente",
        "Likes garantizados por publicación",
      ],
      note: "🚀 Ideal para comenzar tu presencia digital",
      highlighted: false,
      link: "https://smartpro.cl/?add-to-cart=1957",
    },
    {
      icon: "📱",
      title: "6 Piezas Gráficas",
      price: "$169.990",
      iva: "+ IVA",
      badge: "⭐ Recomendado",
      features: [
        "Mayor volumen de contenido",
        "Adaptado a Instagram / Facebook",
        "Formato optimizado para redes",
        "Entrega en alta calidad",
        "Publicación en la red social correspondiente",
        "Likes garantizados por publicación",
      ],
      note: "🔥 La opción más elegida",
      highlighted: true,
      link: "",
    },
    {
      icon: "🚀",
      title: "9 Piezas Gráficas",
      price: "$249.990",
      iva: "+ IVA",
      features: [
        "Alto volumen de contenido",
        "Adaptado a Instagram / Facebook",
        "Formato optimizado para redes",
        "Entrega en alta calidad",
        "Publicación en la red social correspondiente",
        "Likes garantizados por publicación",
      ],
      note: "🔥 Pensado para marcas que quieren destacar",
      highlighted: false,
    },
  ];

  const bottomPlans = [];

  const includes = [
    "Diseño personalizado alineado a tu marca",
    "Creación estratégica de contenido",
    "Adaptación a redes sociales",
    "Enfoque en posicionamiento y crecimiento",
  ];

  const sliderRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const useCarousel = useMemo(() => {
    return topPlans.length > 3 || isSmallScreen;
  }, [topPlans.length, isSmallScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 8);
  };

  useEffect(() => {
    if (!useCarousel) return;

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
  }, [useCarousel]);

  const scrollByAmount = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const slide = el.querySelector("[data-slide]");
    const gap = 24;

    if (slide) {
      const amount = slide.clientWidth + gap;
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

  const renderPlanCard = (plan, index) => (
    <article
      key={index}
      className={`relative flex h-full flex-col rounded-[24px] bg-white p-5 shadow-[0_10px_30px_rgba(22,22,40,0.08)] transition duration-300 hover:-translate-y-1 sm:rounded-[26px] sm:p-6 lg:rounded-[28px] ${
        plan.highlighted
          ? "border border-[#ff7eb6] shadow-[0_14px_40px_rgba(255,64,140,0.16)]"
          : "border border-[#ececf3]"
      }`}
    >
      {plan.badge && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ff9b26] to-[#ff6a3d] px-4 py-2 text-[10px] font-bold text-white shadow-md sm:px-5 sm:text-sm">
          {plan.badge}
        </div>
      )}

      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f1ebff] text-2xl shadow-inner sm:h-16 sm:w-16 sm:text-3xl">
          {plan.icon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-extrabold leading-tight text-[#12214d] sm:text-2xl">
            {plan.title}
          </h3>

          <div className="mt-2 flex flex-wrap items-end gap-x-2 gap-y-1">
            <span className="text-3xl font-extrabold leading-none text-[#ff4da0] sm:text-4xl">
              {plan.price}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#65657a] sm:text-sm">
              {plan.iva}
            </span>
          </div>
        </div>
      </div>

      <div className="my-5 h-px w-full bg-[#ececf3] sm:my-6" />

      <ul className="space-y-1">
        {plan.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-start gap-3 text-sm leading-relaxed text-[#34344a] sm:text-[15px] lg:text-base"
          >
            <span className="mt-0.5 shrink-0 text-[#a843ff]">✔</span>
            <span className="text-[#34344a]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="mt-5 text-sm font-medium leading-relaxed text-[#3d3d54] sm:mt-6 sm:text-[15px] lg:text-base">
          {plan.note}
        </p>

        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#ff2f7d] to-[#ff4fb2] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(255,64,140,0.28)] transition duration-300 hover:scale-[1.01] sm:mt-8 sm:py-4 sm:text-base">
          {plan.link ? (
            <a href={plan.link}>Elegir plan →</a>
          ) : (
            <span>Pendiente</span>
          )}
        </button>
      </div>
    </article>
  );

  return (
    <section className="relative w-full overflow-hidden py-0">
      <div className="mx-auto w-full max-w-7xl">
        {useCarousel ? (
          <div className="relative mt-2 px-2 md:mt-8">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-[#12214d] shadow-md backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff4da0]"
                aria-label="Ver planes anteriores"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-[#12214d] shadow-md backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff4da0]"
                aria-label="Ver más planes"
              >
                <ChevronRight size={18} />
              </button>
            )}

            <div
              ref={sliderRef}
              className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overflow-y-visible px-10 pb-2 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] sm:px-12 lg:px-14"
            >
              {topPlans.map((plan, index) => (
                <div
                  key={index}
                  data-slide
                  className="min-w-0 shrink-0 snap-start basis-[88%] sm:basis-[72%] md:basis-[48%] lg:basis-[32%] xl:basis-[31%]"
                >
                  {renderPlanCard(plan, index)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-2 grid w-full grid-cols-1 gap-8 px-2 md:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {topPlans.map((plan, index) => renderPlanCard(plan, index))}
          </div>
        )}
      </div>
    </section>
  );
}
