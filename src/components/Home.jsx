import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Olá, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hudson Menezes
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Sou Desenvolvedor Fullstack.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          Sou um desenvolvedor fullstack e sou especialista em construir,
          desenvolver (e algumas vezes prototipar) sistemas web excepcionais que
          vão alavancar negócios. Atualmente estou focado em desenvolver
          aplicações web fullstack responsivas.
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Ver trabalhos{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};
