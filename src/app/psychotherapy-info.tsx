"use client";

import React from "react";

export function PsychotherapyInfo() {
  return (
    <section className="px-8 pt-20">
      <div className="container mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          Acompanhamento Psicológico
        </h2>
        <p className="mx-auto text-gray-500 max-w-2xl text-lg">
          Entenda como funcionam as sessões e como o processo terapêutico pode ajudar no seu bem-estar emocional.
        </p>
      </div>

      <div className="container mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="text-gray-700 text-lg leading-relaxed">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Sessões com duração de 50 a 60 minutos</strong>, adaptadas à sua rotina.</li>
            <li><strong>Atendimentos semanais ou diários</strong>, conforme sua necessidade.</li>
            <li><strong>Presencial em local reservado</strong> ou <strong>online, com total privacidade</strong>.</li>
            <li><strong>Ética, sigilo e acolhimento</strong> em todas as sessões.</li>
            <li>Atendimento para <strong>adolescentes, adultos e idosos</strong>.</li>
            <li>Indicado para casos de <strong>ansiedade, depressão, luto, autoestima, relacionamentos</strong> e mais.</li>
            <li>Espaço seguro para expressão emocional e autoconhecimento.</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 text-center flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-[#5B9BD5] mb-4">
            Por que fazer terapia?
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            A psicoterapia promove equilíbrio emocional, melhora a qualidade de vida e fortalece sua autonomia diante dos desafios do dia a dia. Buscar ajuda é um passo essencial para cuidar de si.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PsychotherapyInfo;
