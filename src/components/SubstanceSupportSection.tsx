import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export const SubstanceSupportSection: React.FC = () => {
  return (
    <section
      aria-label="Apoio em uso de substâncias e familiares"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Main Container */}
      <div className="space-y-8">
        {/* Upper Editorial Box: Substance Use */}
        <div className="bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[26px] p-8 sm:p-10 md:p-14 shadow-[0_8px_30px_rgba(50,35,20,0.03)]">
          <div className="max-w-[780px]">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F7F5F1] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
              Cuidado & Acolhimento
            </span>

            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-5 [text-wrap:balance]">
              Quando o sofrimento também envolve o uso de substâncias
            </h2>

            <p className="text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#55514D] font-normal mb-5">
              O acompanhamento psicológico é um recurso relevante tanto para quem vivencia
              dificuldades associadas ao uso de substâncias quanto para pessoas de seu convívio.
              Trata-se de um olhar cuidadoso e humano, afastado de julgamentos morais e focado
              na compreensão das experiências e do sofrimento envolvido.
            </p>

            <p className="text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#55514D] font-normal">
              Reconhecemos que esse contexto pode impactar profundamente a dinâmica familiar, os
              vínculos afetivos, a rotina e a saúde emocional de todos ao redor, exigindo um espaço
              seguro e sigiloso de escuta.
            </p>
          </div>
        </div>

        {/* Lower Dedicated Visual Block: Family & Co-dependency Support */}
        <div className="relative bg-[#FAF7F2] border border-[rgba(168,97,13,0.18)] rounded-[26px] p-8 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(50,35,20,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#A8610D]" />
                <span className="text-[12.5px] font-medium uppercase tracking-wider text-[#A8610D]">
                  Apoio aos que estão por perto
                </span>
              </div>

              <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-normal tracking-[-0.035em] text-[#11100F] mb-4 [text-wrap:balance]">
                Você também pode precisar de cuidado
              </h3>

              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#55514D] font-normal mb-4">
                Pessoas que convivem de perto com alguém que enfrenta desafios pelo uso de substâncias
                frequentemente vivenciam sobrecarga emocional, sensação de desamparo, culpa, medo ou
                dificuldade em estabelecer limites protetivos.
              </p>

              <p className="text-[14.5px] sm:text-[15px] leading-[1.58] text-[#55514D] font-normal">
                Na psicoterapia, oferecemos acolhimento a essas pessoas afetadas pelo uso de substâncias
                de alguém próximo e a questões relacionadas à codependência, criando um espaço para
                olhar para si mesmas e reencontrar o próprio bem-estar.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-[48px] sm:h-[50px] bg-[#A8610D] hover:bg-[#92530A] text-[#FCFBF9] rounded-full transition-all duration-220 cursor-pointer shadow-[0_4px_16px_rgba(168,97,13,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D] focus-visible:ring-offset-2 hover:-translate-y-[1px]"
              >
                <span className="text-[14.5px] font-medium tracking-tight">
                  Agendar conversa
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center transition-transform duration-220 group-hover:translate-x-[2.5px]">
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </span>
              </a>
              <span className="text-[12.5px] text-[#716C66] mt-3 font-normal">
                Atendimento confidencial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
