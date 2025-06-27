"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/terapia.jpg", 
    title: "Autoconhecimento que Liberta",
    desc: "A terapia oferece as ferramentas para entender padrões emocionais, romper ciclos negativos e encontrar sua voz autêntica.",
  },
  {
    img: "/image/terapia.jpg",
    title: "Saúde Emocional em Equilíbrio",
    desc: "Aprenda a gerenciar ansiedade, estresse e traumas, construindo resiliência para os desafios da vida.",
  },
  {
    img: "/image/terapia.jpg",
    title: "Relações Mais Saudáveis",
    desc: "Compreenda dinâmicas familiares e afetivas, melhorando comunicação e estabelecendo limites com clareza.",
  },
  {
    img: "/image/terapia.jpg",
    title: "Crescimento Contínuo",
    desc: "Descubra potencialidades adormecidas e crie um plano de vida alinhado aos seus valores essenciais.",
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-10 px-8 bg-gray-50"> {/* Fundo suave para destacar */}
      <div className="container mx-auto mb-12 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          A Terapia que Transforma Vidas
        </h2>
        <p className="text-lg text-gray-600 text-center  mx-auto md:mx-0">
          Mais do que um processo clínico, a terapia é uma jornada de <span className="font-semibold text-gray-800">autodescoberta guiada</span>. 
          Através dela, você ganha clareza para tomar decisões, fortalece sua saúde mental e 
          reconecta-se com a melhor versão de si mesmo. 
        <span className="block mt-4 italic">
          &quot;O maior ato de coragem é olhar para dentro e transformar o que encontra.&quot;
        </span>

        </p>
      </div>
      <div className="container mx-auto overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {BLOG_POSTS.map((props, idx) => (
            <div key={idx} className="max-w-[280px] sm:max-w-[260px] lg:max-w-[380px]">
              <BlogPostCard {...props} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-12 text-center">
        <a
              href="https://wa.me/5592986022225?text=Ol%C3%A1%21+%F0%9F%98%8A+Gostaria+de+saber+mais+e+agendar+uma+sess%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
            >
      <button
        className="flex items-center justify-center gap-3 px-6 py-3 text-white bg-[#00A9FF] rounded-lg shadow-lg hover:bg-[#6ec4ec] transition duration-300 ease-in-out"
        type="button"
      >
        
              Agende sua sessão
            
         <ArrowRightIcon className="w-5 h-5" />
      </button>
      </a>
      </div>
    </section>
  );
}

export default LatestBlogPosts;