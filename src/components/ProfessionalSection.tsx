import React from 'react';
import { ArrowRight, HeartHandshake, Compass, ShieldCheck } from 'lucide-react';
import { CustomPhotoFrame } from './CustomPhotoFrame';
import { PROFESSIONAL_NAME, PROFESSIONAL_TITLE, CRP_NUMBER } from '../constants';

interface ProfessionalSectionProps {
  onOpenWorkModal: () => void;
}

export const ProfessionalSection: React.FC<ProfessionalSectionProps> = ({ onOpenWorkModal }) => {
  const miniBenefits = [
    {
      title: 'Acolhimento',
      text: 'Um ambiente seguro para expressar o que você sente sem receio de julgamentos.',
      icon: HeartHandshake,
    },
    {
      title: 'Consciência',
      text: 'Mais clareza para reconhecer emoções, padrões de resposta e necessidades.',
      icon: Compass,
    },
    {
      title: 'Apoio ético',
      text: 'Acompanhamento cuidadoso, com escuta atenta e respeito ao seu contexto.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="sobre-mim"
      aria-label={`Sobre a psicóloga ${PROFESSIONAL_NAME}`}
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Framed Photography with Interactive Custom Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] h-[480px] sm:h-[520px] rounded-[24px] overflow-hidden bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] shadow-[0_8px_30px_rgba(50,35,20,0.04)] group">
            <CustomPhotoFrame
              storageKey="antonia_photo_professional"
              label="Foto do Consultório ou Perfil"
              description="Clique para escolher a sua foto da galeria do celular ou computador (PNG, JPG ou WEBP)."
              containerClassName="w-full h-full rounded-[23px]"
            >
              {/* Floating Tag 1 — Lower Left */}
              <div className="absolute bottom-8 left-6 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#11100F]/75 backdrop-blur-[10px] border border-white/15 text-white text-[12.5px] font-normal tracking-tight shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B071]" />
                  <span>Espaço de escuta</span>
                </div>
              </div>

              {/* Floating Tag 2 — Lower Right */}
              <div className="absolute bottom-8 right-6 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#11100F]/75 backdrop-blur-[10px] border border-white/15 text-white text-[12.5px] font-normal tracking-tight shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A3D]" />
                  <span>Sigilo e respeito</span>
                </div>
              </div>
            </CustomPhotoFrame>
          </div>
        </div>

        {/* Right Column: Copy, CTA & 3 Mini Benefit Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Label */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight">
              Sobre mim
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] leading-[1.12] font-normal tracking-[-0.038em] text-[#11100F] mb-3 [text-wrap:balance]">
            Um olhar atento para aquilo que você está vivendo
          </h2>

          <div className="mb-5">
            <span className="text-[15px] font-medium text-[#A8610D] tracking-tight">
              {PROFESSIONAL_NAME} · {PROFESSIONAL_TITLE} ({CRP_NUMBER})
            </span>
          </div>

          {/* Paragraph mentioning her clinical focus areas naturally */}
          <p className="text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#55514D] font-normal mb-5 max-w-[580px]">
            Como psicóloga, ofereço um espaço de cuidado e acolhimento para pessoas que vivenciam
            quadros de depressão e sintomas ansiosos, dificuldades de regulação e autorregulação
            emocional, bem como instabilidade de humor.
          </p>

          <p className="text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#55514D] font-normal mb-8 max-w-[580px]">
            Minha prática também contempla o acompanhamento psicológico a questões relacionadas ao
            transtorno por uso de substâncias e o apoio a familiares e pessoas próximas que são
            impactadas por esse contexto. Cada pessoa é ouvida com sensibilidade e respeito à sua
            história.
          </p>

          {/* CTA */}
          <div className="mb-10">
            <button
              onClick={onOpenWorkModal}
              type="button"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-[48px] sm:h-[50px] bg-[#A8610D] hover:bg-[#92530A] text-[#FCFBF9] rounded-full transition-all duration-220 cursor-pointer shadow-[0_4px_16px_rgba(168,97,13,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D] focus-visible:ring-offset-2 hover:-translate-y-[1px]"
            >
              <span className="text-[14.5px] font-medium tracking-tight">
                Conheça meu trabalho
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center transition-transform duration-220 group-hover:translate-x-[2.5px]">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </span>
            </button>
          </div>

          {/* Three Mini Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {miniBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[18px] p-5 shadow-[0_4px_18px_rgba(50,35,20,0.02)] flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F7F5F1] border border-[rgba(60,45,30,0.07)] text-[#A8610D] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-[15.5px] font-medium text-[#11100F] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-[1.5] text-[#55514D] font-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
