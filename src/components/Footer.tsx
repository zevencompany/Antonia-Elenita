import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PROFESSIONAL_NAME,
  PROFESSIONAL_TITLE,
  CRP_NUMBER,
} from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer
      className="bg-[#DCC0A2] rounded-t-[32px] pt-14 pb-10 px-6 sm:px-10 text-[#11100F] mt-16 sm:mt-24 shadow-[0_-8px_30px_rgba(50,35,20,0.03)]"
      role="contentinfo"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Top Center: Minimal Logo / Monogram & Thin Horizontal Line */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <span className="h-[1px] flex-1 bg-[rgba(17,16,15,0.15)]" />

          <div className="flex flex-col items-center text-center px-2">
            <span className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] font-medium text-xs flex items-center justify-center mb-1.5 border border-[rgba(60,45,30,0.12)]">
              AE
            </span>
            <span className="text-[17px] font-medium tracking-tight text-[#11100F]">
              {PROFESSIONAL_NAME}
            </span>
            <span className="text-[12.5px] text-[rgba(17,16,15,0.65)] font-normal tracking-tight">
              {PROFESSIONAL_TITLE} · {CRP_NUMBER}
            </span>
          </div>

          <span className="h-[1px] flex-1 bg-[rgba(17,16,15,0.15)]" />
        </div>

        {/* Three Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[rgba(17,16,15,0.12)] items-start">
          {/* Left Column: Principal */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-medium uppercase tracking-wider text-[rgba(17,16,15,0.7)] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#inicio"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#atuacao"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors"
                >
                  Atuação
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors"
                >
                  Processo
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Center Column: Text & CTA */}
          <div className="md:col-span-6 flex flex-col items-center text-center">
            <p className="text-[16px] sm:text-[17px] font-normal leading-[1.55] text-[#11100F] max-w-[440px] mb-6">
              Um espaço de acolhimento e cuidado para compreender o que você sente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 h-[46px] bg-[#A8610D] hover:bg-[#92530A] text-[#FCFBF9] rounded-full transition-all duration-220 cursor-pointer shadow-[0_3px_12px_rgba(168,97,13,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D]"
            >
              <span className="text-[14px] font-medium tracking-tight">
                Agendar uma conversa
              </span>
              <span className="w-7 h-7 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center transition-transform duration-220 group-hover:translate-x-[2.5px]">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </span>
            </a>
          </div>

          {/* Right Column: Informações & Contato */}
          <div className="md:col-span-3 md:text-right">
            <h4 className="text-[13px] font-medium uppercase tracking-wider text-[rgba(17,16,15,0.7)] mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors inline-block"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors inline-block"
                >
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <span className="text-[14px] text-[rgba(17,16,15,0.7)] block">
                  {CRP_NUMBER}
                </span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-[14.5px] text-[#11100F] hover:text-[#A8610D] transition-colors cursor-pointer"
                >
                  Privacidade & Ética
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Footer Note */}
        <div className="pt-8 text-center">
          <p className="text-[12px] sm:text-[13px] text-[rgba(17,16,15,0.55)] leading-[1.6] max-w-[720px] mx-auto font-normal">
            Este site tem caráter informativo e apresenta a prática profissional de atendimento
            psicológico individual. Não substitui avaliações emergenciais ou serviços de pronto
            atendimento à saúde.
          </p>
          <p className="text-[11.5px] text-[rgba(17,16,15,0.45)] mt-2">
            © {new Date().getFullYear()} {PROFESSIONAL_NAME} — {PROFESSIONAL_TITLE} ({CRP_NUMBER}). Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
