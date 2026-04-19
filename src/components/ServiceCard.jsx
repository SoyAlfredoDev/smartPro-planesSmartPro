import React from "react";
import { Check, ArrowRight } from "lucide-react";
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
      <div className="sm:hidden flex h-full flex-col">
        <div className="flex items-center gap-2">
          <div className="flex h-14 w-10 shrink-0 items-center justify-center">
            <img
              src={item.image}
              alt={item.title.replace(/\n/g, " ")}
              className="h-[100%] ms-3 w-[100%] object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="whitespace-pre-line text-[13px] font-bold leading-[1.15] text-[#161124]">
              {item.title}
            </h3>
          </div>
        </div>

        <div className="flex-1 px-3 pb-3">
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

        <div className="px-4 pb-3">
          <button
            onClick={() => onOpenModal(item.category)}
            className="outline-none focus:outline-none focus:ring-2 focus:ring-[#01c676] focus:ring-offset-2 group inline-flex items-center gap-2 text-[16px] font-semibold text-[#40206e] transition-all duration-300 hover:text-[#2b124f]"
          >
            <span>Ver planes</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex sm:h-full sm:flex-col">
        <img
          src={item.image}
          alt={item.title.replace(/\n/g, " ")}
          className="mt-3  h-[150px]px-5 w-[35%] object-cover center mb-0 pb-0"
        />

        <div className="flex flex-1 flex-col px-5 pb-4">
          <div className="flex-1">
            <h3 className="whitespace-pre-line text-[18px] font-bold text-[#161124] md:text-[20px]">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className="mt-1.5 text-[13px] font-semibold text-[#2b243f] lg:text-[14px]">
                {item.subtitle}
              </p>
            )}

            {item.description && (
              <p className="mt-2 text-[13px] text-gray-600 lg:text-[14px] line-clamp-4">
                {item.description}
              </p>
            )}

            {item.bullets?.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-[#2b243f]">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#35b7df]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={() => onOpenModal(item.category)}
              className="outline-none focus:outline-none focus:ring-2 focus:ring-[#01c676] focus:ring-offset-2 group inline-flex items-center gap-2 text-[16px] font-semibold text-[#40206e] transition-all duration-300 hover:text-[#2b124f]"
            >
              <span>Ver planes</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
