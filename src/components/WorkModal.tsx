import React from 'react';
import { X, ShieldCheck, HeartHandshake, BookOpen } from 'lucide-react';
import { WHATSAPP_URL, PROFESSIONAL_NAME, PROFESSIONAL_TITLE, CRP_NUMBER } from '../constants';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11100F]/40 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-title"
    >
      <div className="relative w-full max-w-[620px] bg-[#FCFBF9] border border-[rgba(60,45,30,0.1)] rounded-[26px] p-6 sm:p-9 shadow-[0_20px_50px_rgba(40,25,10,0.18)] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#716C66] hover:text-[#11100F] hover:bg-[#F7F5F1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D]"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#F7F5F1] border border-[rgba(60,45,30,0.08)] text-[12px] font-normal text-[#55514D] tracking-tight mb-3">
            Atendimento Psicológico
          </span>

          <h3
            id="work-title"
            className="text-[26px] sm:text-[30px] font-normal text-[#11100F] tracking-[-0.03em] leading-snug mb-3"
          >
            Como se desenvolve o trabalho terapêutico
          </h3>

          <p className="text-[15px] leading-[1.62] text-[#55514D] font-normal mb-6">
            A prática desenvolvida por {PROFESSIONAL_NAME} ({PROFESSIONAL_TITLE}, {CRP_NUMBER})
            está ancorada na escuta atenta, no respeito à história de cada pessoa e na construção
            de um ambiente seguro. Não se trata de aplicar soluções padronizadas, mas de oferecer
            um espaço protegido para você compreender suas emoções e construir novos caminhos.
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-[16px] bg-[#F7F5F1] border border-[rgba(60,45,30,0.06)] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center shrink-0 border border-[rgba(60,45,30,0.06)]">
                <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-[#11100F] mb-1">
                  Sigilo ético profissional
                </h4>
                <p className="text-[13.5px] leading-[1.5] text-[#55514D]">
                  Todas as conversas e conteúdos são estritamente resguardados pelas normas de sigilo
                  profissional do Código de Ética do Psicólogo.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[16px] bg-[#F7F5F1] border border-[rgba(60,45,30,0.06)] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center shrink-0 border border-[rgba(60,45,30,0.06)]">
                <HeartHandshake className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-[#11100F] mb-1">
                  Respeito ao seu próprio tempo
                </h4>
                <p className="text-[13.5px] leading-[1.5] text-[#55514D]">
                  Você não precisa ter clareza total sobre o que sente para iniciar. O tempo das elaborações
                  é individual e respeitado em cada sessão.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[16px] bg-[#F7F5F1] border border-[rgba(60,45,30,0.06)] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center shrink-0 border border-[rgba(60,45,30,0.06)]">
                <BookOpen className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-[#11100F] mb-1">
                  Acompanhamento individualizado
                </h4>
                <p className="text-[13.5px] leading-[1.5] text-[#55514D]">
                  Sessões individuais focadas nas suas necessidades, sejam elas ligadas a sintomas
                  ansiosos, depressão, instabilidade emocional, uso de substâncias ou apoio a familiares.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#A8610D] hover:bg-[#92530A] text-white rounded-full text-[14px] font-medium transition-colors text-center"
            >
              Agendar uma conversa no WhatsApp
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-[#55514D] hover:text-[#11100F] text-[14px] transition-colors"
            >
              Voltar ao site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
