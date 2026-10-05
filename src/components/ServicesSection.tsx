import React from 'react';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'depressao',
      number: '01',
      title: 'Depressão',
      description:
        'Um espaço de escuta e acompanhamento psicológico para pessoas que vivenciam sofrimento relacionado à depressão.',
      tags: ['Escuta atenta', 'Cuidado individual', 'Acolhimento'],
    },
    {
      id: 'sintomas-ansiosos',
      number: '02',
      title: 'Sintomas ansiosos',
      description:
        'Para compreender melhor a ansiedade, seus impactos e a forma como ela se manifesta na vida cotidiana.',
      tags: ['Consciência corporal', 'Padrões de pensamento', 'Rotina'],
    },
    {
      id: 'regulacao-emocional',
      number: '03',
      title: 'Regulação emocional',
      description:
        'Um processo de compreensão das emoções e desenvolvimento de formas mais conscientes de lidar com aquilo que você sente.',
      tags: ['Autorregulação', 'Reconhecimento', 'Autocuidado'],
    },
    {
      id: 'instabilidade-humor',
      number: '04',
      title: 'Instabilidade de humor',
      description:
        'Espaço para compreender mudanças de humor, seus impactos e as experiências emocionais envolvidas no dia a dia.',
      tags: ['Oscilações', 'Compreensão', 'Equilíbrio'],
    },
    {
      id: 'uso-substancias',
      number: '05',
      title: 'Transtorno por uso de substâncias',
      description:
        'Acompanhamento psicológico para pessoas que vivenciam dificuldades relacionadas ao uso de substâncias.',
      tags: ['Apoio clínico', 'Redução de danos', 'Sem estigma'],
    },
    {
      id: 'familiares-codependentes',
      number: '06',
      title: 'Apoio a familiares e co-dependentes',
      description:
        'Espaço de acolhimento para pessoas afetadas pelo uso de substâncias de alguém próximo.',
      tags: ['Sobrecarga', 'Limites saudáveis', 'Cuidado mútuo'],
    },
  ];

  return (
    <section
      id="atuacao"
      aria-label="Áreas de acompanhamento psicológico"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Header Centered */}
      <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 sm:mb-16">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
          Atuação
        </span>
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-4 [text-wrap:balance]">
          Um espaço de cuidado para diferentes desafios emocionais
        </h2>
        <p className="text-[15.5px] sm:text-[16.5px] leading-[1.58] text-[#55514D] font-normal max-w-[640px]">
          O atendimento psicológico individual é construído com sensibilidade e respeito,
          proporcionando um ambiente confidencial e acolhedor para você falar sobre o que está vivenciando.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[20px] p-6 sm:p-7 min-h-[280px] flex flex-col justify-between transition-all duration-[350ms] ease-out hover:-translate-y-1 shadow-[0_4px_20px_rgba(50,35,20,0.02)] hover:border-[rgba(168,97,13,0.2)] hover:bg-[#FAF9F5]"
          >
            {/* Number badge overlapping top-right */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.06)] text-[12.5px] font-medium text-[#A8610D] tracking-tight shadow-xs transition-transform duration-[350ms] group-hover:-translate-y-0.5">
                {item.number}
              </span>
            </div>

            {/* Title & Description with Negative Space */}
            <div className="pr-8 pt-1">
              <h3 className="text-[20px] sm:text-[21px] font-normal text-[#11100F] tracking-[-0.025em] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14.5px] sm:text-[15px] leading-[1.58] text-[#55514D] font-normal">
                {item.description}
              </p>
            </div>

            {/* Bottom unboxed / subtle tags */}
            <div className="pt-8 flex flex-wrap gap-2">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-block px-3 py-1.5 rounded-full bg-[#F7F5F1] text-[12px] sm:text-[12.5px] text-[#716C66] font-normal tracking-tight border border-[rgba(60,45,30,0.04)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
