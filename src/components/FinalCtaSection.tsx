import React from 'react';
import { ArrowRight } from 'lucide-react';
import leftImage from '../assets/images/therapy_detail_leaves_1791215695732.jpg';
import rightImage from '../assets/images/therapy_chair_corner_1791215709258.jpg';
import { WHATSAPP_URL } from '../constants';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      aria-label="Agendamento e contato final"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Large Rounded Container */}
      <div className="relative bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[26px] p-8 sm:p-10 md:p-12 min-h-[360px] md:h-[380px] shadow-[0_8px_30px_rgba(50,35,20,0.03)] overflow-hidden flex items-center justify-between">
        {/* Left Framed Image */}
        <div className="hidden lg:block w-[180px] xl:w-[210px] h-[260px] rounded-[20px] overflow-hidden border border-[rgba(60,45,30,0.08)] shadow-[0_6px_20px_rgba(50,35,20,0.04)] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]">
          <img
            src={leftImage}
            alt="Detalhe calmo de consultório com caderno e xícara"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Center Content */}
        <div className="w-full max-w-[540px] mx-auto text-center flex flex-col items-center justify-center z-10 py-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#F7F5F1] border border-[rgba(60,45,30,0.07)] text-[13px] font-normal text-[#55514D] tracking-tight mb-5">
            Vamos conversar
          </span>

          <h2 className="text-[30px] sm:text-[36px] md:text-[42px] leading-[1.12] font-normal tracking-[-0.038em] text-[#11100F] mb-4 [text-wrap:balance]">
            Você não precisa compreender tudo sozinho(a).
          </h2>

          <p className="text-[15px] sm:text-[16px] leading-[1.58] text-[#55514D] font-normal max-w-[460px] mb-8">
            Dar o primeiro passo em direção ao cuidado psicológico é uma decisão de respeito
            à sua trajetória. Entre em contato para conversarmos.
          </p>

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

        {/* Right Framed Image */}
        <div className="hidden lg:block w-[180px] xl:w-[210px] h-[260px] rounded-[20px] overflow-hidden border border-[rgba(60,45,30,0.08)] shadow-[0_6px_20px_rgba(50,35,20,0.04)] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]">
          <img
            src={rightImage}
            alt="Canto aconchegante com poltrona e luz natural"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
