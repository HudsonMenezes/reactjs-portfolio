import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

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
          Sou um desenvolvedor fullstack, especialista em frontend, com o
          propósito de construir e desenvolver soluções web que tem o potencial
          de alavancar seu negócio. Dou vida a aplicações responsivas e
          otimizadas para o melhor desempenho em motores de busca.
          <div className="mt-8">
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                Ver trabalhos
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};
