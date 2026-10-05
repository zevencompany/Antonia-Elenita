import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-8 pb-12 sm:pb-16 select-none"
      aria-hidden="true"
    >
      <a
        href="#sobre"
        className="group flex flex-col items-center gap-2 focus-visible:outline-none"
        aria-label="Rolar para a seção Sobre"
      >
        <div className="w-[22px] h-[34px] rounded-full border border-[rgba(60,45,30,0.22)] group-hover:border-[#A8610D] flex items-start justify-center p-1.5 transition-colors duration-300">
          <div className="w-1 h-2 rounded-full bg-[#A8610D] animate-[scrollDot_1.8s_ease-in-out_infinite]" />
        </div>
        <span className="text-[11.5px] tracking-wide text-[#716C66] group-hover:text-[#A8610D] transition-colors duration-200 uppercase font-normal">
          Role para explorar
        </span>
      </a>
      <style>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};
