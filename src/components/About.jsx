import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Oi, prazer em conhecê-lo(a). Fique à vontade!</p>
          </div>
          <div>
            <p>
              Morador do Rio de Janeiro, sempre fui apaixonado por tecnologia,
              informática e Desenvolvimento Web. Atualmente estou cursando
              Bacharelado em Engenharia de Software pelo Centro Universitário
              Anhanguera Pitágoras Ampli para continuar ampliando meus
              conhecimentos, além disso, recentemente concluí o bootcamp
              Desenvolvedor Web Fullstack pela Gama Academy.
            </p>
            <br />
            <p>
              Tenho a leitura e a caminhada como Hobbies, um para melhorar e
              aprimorar meu conhecimento de mundo e outro para saúde, pois não
              só de códigos vive o desenvolvedor, não é mesmo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
