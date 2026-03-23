import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCard({ item, onOpenModal }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5dff0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* MOBILE */}
      <div className="flex flex-1 items-start gap-3 p-3 sm:hidden">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4f7fb] ring-1 ring-[#e7edf5]">
          <img
            src={item.image}
            alt={item.title.replace(/\n/g, " ")}
            className="h-9 w-9 object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            <h3 className="whitespace-pre-line text-[13px] font-bold leading-[1.15] text-[#161124]">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className="mt-1 text-[11px] font-semibold text-[#2b243f]">
                {item.subtitle}
              </p>
            )}

            {item.description && (
              <p className="mt-2 line-clamp-3 text-[10.5px] text-gray-600">
                {item.description}
              </p>
            )}

            {item.bullets?.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-1.5 text-[10.5px] text-[#2b243f]"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#35b7df]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-3">
            <button
              onClick={() => onOpenModal(item.category)}
              className="w-full rounded-full bg-[#35b7df] py-2 text-[11px] text-white transition hover:bg-[#2a9fd6]"
            >
              Ver planes
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex sm:h-full sm:flex-col">
        <img
          src={item.image}
          alt={item.title.replace(/\n/g, " ")}
          className="h-[180px] w-full object-cover md:h-[200px] lg:h-[220px]"
        />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex-1">
            <h3 className="whitespace-pre-line text-xl font-bold text-[#161124] md:text-2xl">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className="mt-2 text-sm font-semibold text-[#2b243f] lg:text-base">
                {item.subtitle}
              </p>
            )}

            {item.description && (
              <p className="mt-3 line-clamp-4 text-sm text-gray-600 lg:text-base">
                {item.description}
              </p>
            )}

            {item.bullets?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#2b243f]">
                    <Check className="h-4 w-4 shrink-0 text-[#35b7df]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-5">
            <button
              onClick={() => onOpenModal(item.category)}
              className="w-full rounded-full bg-[#35b7df] py-2.5 text-sm text-white transition hover:bg-[#2a9fd6] lg:text-base"
            >
              Ver planes
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
