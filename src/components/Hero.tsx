import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { CustomPhotoFrame } from './CustomPhotoFrame';
import {
  WHATSAPP_URL,
  PROFESSIONAL_NAME,
  PROFESSIONAL_TITLE,
  CRP_NUMBER,
} from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      aria-label="Apresentação e consulta inicial"
      className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 pr-7 sm:px-8 md:px-12 max-w-[1140px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 md:gap-4 items-stretch">
        {/* Left Content Panel */}
        <div className="bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[26px] p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between min-h-[580px] lg:min-h-[650px] shadow-[0_8px_30px_rgba(50,35,20,0.03)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
          {/* Top Decorative Label */}
          <div className="flex items-center justify-center gap-3 w-full my-1 sm:my-2">
            <span className="h-[1px] flex-1 max-w-[60px] sm:max-w-[80px] bg-[#D8C8B5]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8610D]" />
            <span className="px-4 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.06)] text-[12.5px] sm:text-[13px] tracking-tight font-normal text-[#55514D]">
              Psicologia Clínica
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8610D]" />
            <span className="h-[1px] flex-1 max-w-[60px] sm:max-w-[80px] bg-[#D8C8B5]" />
          </div>

          {/* Center Copy Block */}
          <div className="my-auto py-6 sm:py-8">
            <div className="mb-4">
              <span className="text-[14px] font-medium tracking-tight text-[#A8610D]">
                {PROFESSIONAL_NAME} · {PROFESSIONAL_TITLE}
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] leading-[1.04] font-normal tracking-[-0.045em] text-[#11100F] mb-6 [text-wrap:balance]">
              Um espaço para compreender o que você sente e cuidar da sua saúde emocional.
            </h1>

            <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] leading-[1.58] text-[#55514D] font-normal max-w-[520px]">
              Atendimento psicológico individual voltado para o cuidado com a depressão,
              sintomas ansiosos, regulação emocional, instabilidade de humor e transtorno por
              uso de substâncias — além do apoio a familiares e pessoas próximas.
            </p>

            {/* Subtle clinical competency tags */}
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#716C66]">
              <span>Depressão e ansiedade</span>
              <span aria-hidden="true">·</span>
              <span>Regulação emocional</span>
              <span aria-hidden="true">·</span>
              <span>Uso de substâncias</span>
              <span aria-hidden="true">·</span>
              <span>Apoio a familiares</span>
            </div>
          </div>

          {/* Bottom Action Area -> Direct WhatsApp Link */}
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-[48px] sm:h-[52px] bg-[#A8610D] hover:bg-[#92530A] text-[#FCFBF9] rounded-full transition-all duration-220 cursor-pointer shadow-[0_4px_16px_rgba(168,97,13,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D] focus-visible:ring-offset-2 hover:-translate-y-[1px]"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-tight">
                Agendar uma conversa
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center transition-transform duration-220 group-hover:translate-x-[2.5px]">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Framed Image Panel with Interactive Custom Photo Frame */}
        <div className="relative bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[26px] min-h-[520px] lg:min-h-[650px] shadow-[0_8px_30px_rgba(50,35,20,0.03)] group">
          <CustomPhotoFrame
            storageKey="antonia_photo_hero"
            label="Foto Principal da Profissional"
            description="Clique para escolher a sua foto da galeria do celular ou computador (PNG, JPG ou WEBP)."
            containerClassName="w-full h-full min-h-[520px] lg:min-h-[650px] rounded-[25px]"
          >
            {/* Subtle floating card in lower left */}
            <div className="absolute bottom-6 left-6 right-20 sm:right-auto sm:max-w-[280px] p-4 rounded-[18px] bg-[#FCFBF9]/90 backdrop-blur-[12px] border border-white/60 shadow-[0_8px_24px_rgba(40,25,10,0.12)] pointer-events-none">
              <span className="text-[11.5px] font-medium text-[#A8610D] uppercase tracking-wider block mb-1">
                Um espaço de cuidado
              </span>
              <p className="text-[13px] leading-[1.45] text-[#11100F] font-normal">
                Para compreender o que você sente com acolhimento e sem julgamentos.
              </p>
            </div>
          </CustomPhotoFrame>

          {/* Animated Light Glass Verified Seal */}
          <div className="absolute bottom-0 right-0 translate-x-1/3 sm:translate-x-1/2 translate-y-1/2 z-30 select-none">
            <div
              className="relative w-[76px] h-[76px] sm:w-[98px] sm:h-[98px] rounded-full bg-[#FCFBF9]/85 backdrop-blur-[16px] border border-white/90 shadow-[0_8px_24px_rgba(40,25,10,0.13),0_2px_6px_rgba(255,255,255,0.85)_inset] flex items-center justify-center p-0.5 sm:p-1 group hover:border-[#D8B071] transition-all duration-300"
              title={`${PROFESSIONAL_NAME} — ${CRP_NUMBER}`}
            >
              {/* Outer Rotating Text SVG */}
              <svg
                className="w-full h-full animate-[spin_16s_linear_infinite] group-hover:[animation-duration:8s] transition-all"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="sealCirclePath"
                    d="M 50, 50 m -36.5, 0 a 36.5,36.5 0 1,1 73,0 a 36.5,36.5 0 1,1 -73,0"
                  />
                </defs>
                <text className="text-[6.8px] font-medium tracking-[0.2em] fill-[#11100F] uppercase">
                  <textPath href="#sealCirclePath" startOffset="0%">
                    • ANTONIA ELENITA • CRP 06/232506 • PSICÓLOGA •
                  </textPath>
                </text>
              </svg>

              {/* Upright Center Verified Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#A8610D] text-[#FCFBF9] flex items-center justify-center shadow-[0_2px_8px_rgba(168,97,13,0.3)] border border-white/40">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] text-[#FCFBF9]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
