//Estilo para la tarjeta de servicio
export const serviceCard =
  "relative w-full max-w-[490px] min-h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex flex-col m-2 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.4)] ";

export const buttonDark = {
  button:
    "relative flex items-center gap-2 bg-gradient-to-r from-[#b33ab4]  via-[#b33ab4] to-[#2b16d1] text-white font-semibold px-8 py-2 rounded-2xl shadow-md transition z-40",
  arrow: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
};

export const buttonLight = {
  button:
    "relative flex items-center gap-2 bg-white text-purple-900 font-semibold px-8 py-2 rounded-2xl shadow-md transition shadow-lg border-2 border-gray-400  z-50 cursor-pointer",
  arrow:
    "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1  z-50 cursor-pointer",
};

export const textCard = {
  titleDark: "text-4xl font-bold z-30 font-sans focus:text-white z-30 h2",
  titleLight:
    "text-4xl font-bold z-30 font-sans focus:text-white text-white z-30 h2",
  description: " text-gray-600 leading-relaxed z-30 text-md p",
  descriptionLight: " text-gray-600 leading-relaxed z-30 text-lg text-white p",
  bullet: "text-lg text-gray-600 leading-relaxed",
  bulletLight: "text-lg text-gray-600 leading-relaxed text-white ",
  icon: "h-4 w-4 shrink-0 text-pink font-bold mt-[4px]",
};
