import React from 'react';
import { X, Shield } from 'lucide-react';
import { PROFESSIONAL_NAME, PROFESSIONAL_TITLE, CRP_NUMBER } from '../constants';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11100F]/40 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="relative w-full max-w-[560px] bg-[#FCFBF9] border border-[rgba(60,45,30,0.1)] rounded-[26px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(40,25,10,0.18)] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#716C66] hover:text-[#11100F] hover:bg-[#F7F5F1] transition-colors focus-visible:outline-none"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-[#A8610D]" />
            <span className="text-[12.5px] font-normal text-[#55514D] uppercase tracking-wider">
              Privacidade & Ética
            </span>
          </div>

          <h3
            id="privacy-title"
            className="text-[24px] sm:text-[26px] font-normal text-[#11100F] tracking-tight mb-4"
          >
            Compromisso com a sua privacidade
          </h3>

          <div className="space-y-4 text-[14.5px] text-[#55514D] leading-[1.6]">
            <p>
              O atendimento psicológico prestado por <strong>{PROFESSIONAL_NAME}</strong> ({PROFESSIONAL_TITLE}, {CRP_NUMBER})
              rege-se estritamente pelas diretrizes do <strong>Código de Ética Profissional do Psicólogo</strong> (CFP)
              e pelas determinações da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <p>
              Os dados de contato compartilhados para fins de agendamento são tratados com absoluta
              confidencialidade e utilizados única e exclusivamente para a comunicação sobre os
              atendimentos. Nenhuma informação é compartilhada com terceiros.
            </p>
            <p>
              O sigilo profissional abrange todo o conteúdo das conversas e atendimentos, assegurando
              um espaço protegido, ético e seguro para o seu cuidado emocional.
            </p>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#A8610D] hover:bg-[#92530A] text-white rounded-full text-[14px] font-medium transition-colors cursor-pointer"
            >
              Compreendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
