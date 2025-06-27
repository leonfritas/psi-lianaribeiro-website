"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <header className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-8 lg:px-48 flex flex-col items-center text-center">
        {/* Foto de perfil */}
        <Image
          width={160}
          height={160}
          alt="avatar"
          src="/image/perfil1.png"
          className="w-40 h-40 rounded-full border-4 border-[#A7C7E7] shadow-lg" // Ajustando a borda e sombra para destaque
        />

        {/* Nome */}
        <div className="mt-8">
          <h1 className="text-4xl font-semibold text-[#333] tracking-tight">
            Liana Ribeiro
          </h1>
          <p className="mt-2 text-lg text-[#00A9FF] font-medium">Psicóloga</p>
        </div>

        {/* Descrição */}
        <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
          Você chegou ao espaço certo para iniciar a sua jornada de autoconhecimento, bem-estar emocional e superação de desafios.
          Meu nome é Liana Ribeiro, sou psicóloga formada e minha missão é proporcionar um ambiente acolhedor e seguro para que você possa
          explorar suas emoções, entender suas necessidades e encontrar caminhos para viver de forma mais equilibrada.
          <span className="text-[#00A9FF] font-bold bg-[#f3f3f3] px-2 py-1 rounded-full">Vamos juntos?</span>
        </p>


        {/* Botão de contato */}
        <div className="mt-12">
          <a
              href="https://wa.me/5592986022225?text=Ol%C3%A1%21+%F0%9F%98%8A+Gostaria+de+saber+mais+e+agendar+uma+sess%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button
              className="flex items-center justify-center gap-3 px-6 py-3 text-white bg-[#00A9FF] rounded-lg shadow-lg hover:bg-[#6ec4ec] transition duration-300 ease-in-out"
              type="button"
            >
              
                Entrar em contato
              
            
              <ArrowRightIcon strokeWidth={3} className="h-4 w-4 text-white" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
