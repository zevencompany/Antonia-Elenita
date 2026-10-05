import React from 'react';
import { BenefitItem } from '../types';

export const BenefitsSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 'compreensao',
      title: 'Mais compreensão',
      description:
        'Um momento dedicado para compreender aquilo que você está vivenciando, no seu tempo e com respeito ao seu ritmo.',
    },
    {
      id: 'consciencia',
      title: 'Mais consciência emocional',
      description:
        'Reconhecer emoções, reações e padrões com maior clareza, aprendendo a lidar com eles de forma mais consciente.',
    },
    {
      id: 'espaco-para-voce',
      title: 'Um espaço para você',
      description:
        'Contar com apoio profissional especializado para falar sobre experiências difíceis em um ambiente de escuta e segurança.',
    },
  ];

  return (
    <section
      id="beneficios"
      aria-label="Por que buscar acompanhamento psicológico"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 sm:mb-20">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
          Benefícios
        </span>
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-4 [text-wrap:balance]">
          Por que buscar acompanhamento psicológico?
        </h2>
        <p className="text-[15.5px] sm:text-[16.5px] leading-[1.58] text-[#55514D] font-normal max-w-[620px]">
          Buscar apoio psicológico é um passo de cuidado e respeito consigo mesmo, possibilitando
          olhar para seus desafios com clareza e apoio profissional.
        </p>
      </div>

      {/* 3 Horizontally Aligned Open Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 pt-4">
        {benefits.map((item) => (
          <div key={item.id} className="flex flex-col text-left group">
            {/* Subtle warm accent indicator dot */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8610D]" />
              <span className="h-[1px] w-8 bg-[#D8C8B5]/60" />
            </div>

            <h3 className="text-[20px] sm:text-[22px] font-normal text-[#11100F] tracking-[-0.025em] mb-2.5">
              {item.title}
            </h3>
            <p className="text-[15px] sm:text-[15.5px] leading-[1.62] text-[#55514D] font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
