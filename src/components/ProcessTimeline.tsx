import React, { useState, useEffect, useRef } from 'react';
import { TimelineStep } from '../types';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [lineProgress, setLineProgress] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: TimelineStep[] = [
    {
      number: '1',
      title: 'Primeiro contato',
      description:
        'Uma primeira conversa para acolher o motivo da sua busca, esclarecer dúvidas e alinhar os aspectos práticos do atendimento.',
      align: 'right',
    },
    {
      number: '2',
      title: 'Compreensão',
      description:
        'Momento dedicado a compreender suas experiências, emoções, padrões de resposta e o contexto em que você se encontra.',
      align: 'left',
    },
    {
      number: '3',
      title: 'Processo terapêutico',
      description:
        'Desenvolvimento do processo terapêutico de forma individualizada, respeitando suas necessidades e o seu próprio ritmo.',
      align: 'right',
    },
    {
      number: '4',
      title: 'Acompanhamento',
      description:
        'Continuidade, reflexão e suporte profissional contínuo para fortalecer recursos e cuidar da sua saúde emocional.',
      align: 'left',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerY = windowHeight * 0.6;

      const startOffset = rect.top;
      const totalHeight = rect.height;
      const scrollPosition = triggerY - startOffset;

      const progress = Math.max(0, Math.min(100, (scrollPosition / totalHeight) * 100));
      setLineProgress(progress);

      let highestReached = 1;
      stepRefs.current.forEach((el, index) => {
        if (el) {
          const stepRect = el.getBoundingClientRect();
          if (stepRect.top <= triggerY + 20) {
            highestReached = index + 1;
          }
        }
      });

      setActiveStep(highestReached);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="processo"
      aria-label="Processo de atendimento passo a passo"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 sm:mb-24">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
          Processo
        </span>
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-4 [text-wrap:balance]">
          Um processo construído com respeito à sua história
        </h2>
        <p className="text-[15.5px] sm:text-[16.5px] leading-[1.58] text-[#55514D] font-normal max-w-[640px]">
          Cada etapa é conduzida de forma humana, clara e sem imposições rígidas, garantindo um
          acompanhamento sensível às suas necessidades.
        </p>
      </div>

      {/* Desktop Centered Alternating Timeline */}
      <div ref={timelineRef} className="relative hidden lg:block max-w-[960px] mx-auto py-8">
        {/* Continuous Center Vertical Line */}
        <div
          className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-[#D9C4A8]"
          aria-hidden="true"
        />

        {/* Scroll-Driven Active Progress Line */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[2px] bg-[#A8610D] transition-[height] duration-200 ease-out"
          style={{
            height: `${Math.min(94, Math.max(0, lineProgress))}%`,
          }}
          aria-hidden="true"
        />

        {/* Steps List */}
        <div className="space-y-24 relative">
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isReached = activeStep >= stepNum;
            const isCurrent = activeStep === stepNum;

            return (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className="relative flex items-center justify-between"
              >
                {/* Left Slot */}
                <div className="w-[42%] flex justify-end">
                  {step.align === 'left' ? (
                    <div
                      className={`w-full max-w-[390px] bg-[#FCFBF9] border rounded-[20px] p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isReached
                          ? 'opacity-100 translate-y-0 shadow-[0_6px_24px_rgba(50,35,20,0.04)]'
                          : 'opacity-55 translate-y-5 shadow-none'
                      } ${
                        isCurrent
                          ? 'border-[rgba(168,97,13,0.35)] shadow-[0_10px_32px_rgba(168,97,13,0.08)] -translate-y-1'
                          : 'border-[rgba(60,45,30,0.07)]'
                      }`}
                    >
                      <span className="text-[12px] font-medium text-[#A8610D] uppercase tracking-wider block mb-1">
                        Etapa 0{step.number}
                      </span>
                      <h3 className="text-[21px] font-normal text-[#11100F] tracking-[-0.025em] mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-[1.6] text-[#55514D] font-normal">
                        {step.description}
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Center Number Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-normal text-[18px] tracking-tight transition-all duration-500 z-10 shadow-xs ${
                    isReached
                      ? 'bg-[#A8610D] text-[#FCFBF9] scale-105 shadow-[0_4px_16px_rgba(168,97,13,0.25)]'
                      : 'bg-[#D9C4A8] text-[#FCFBF9]'
                  }`}
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                >
                  {step.number}
                </div>

                {/* Right Slot */}
                <div className="w-[42%] flex justify-start">
                  {step.align === 'right' ? (
                    <div
                      className={`w-full max-w-[390px] bg-[#FCFBF9] border rounded-[20px] p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isReached
                          ? 'opacity-100 translate-y-0 shadow-[0_6px_24px_rgba(50,35,20,0.04)]'
                          : 'opacity-55 translate-y-5 shadow-none'
                      } ${
                        isCurrent
                          ? 'border-[rgba(168,97,13,0.35)] shadow-[0_10px_32px_rgba(168,97,13,0.08)] -translate-y-1'
                          : 'border-[rgba(60,45,30,0.07)]'
                      }`}
                    >
                      <span className="text-[12px] font-medium text-[#A8610D] uppercase tracking-wider block mb-1">
                        Etapa 0{step.number}
                      </span>
                      <h3 className="text-[21px] font-normal text-[#11100F] tracking-[-0.025em] mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-[1.6] text-[#55514D] font-normal">
                        {step.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative pl-8 sm:pl-10 space-y-8">
        <div
          className="absolute top-4 bottom-4 left-5 w-[1px] bg-[#D9C4A8]"
          aria-hidden="true"
        />

        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isReached = activeStep >= stepNum;

          return (
            <div key={step.number} className="relative flex items-start gap-4">
              <div
                className={`absolute -left-8 sm:-left-10 w-10 h-10 rounded-full flex items-center justify-center font-normal text-sm transition-all duration-500 shadow-xs ${
                  isReached
                    ? 'bg-[#A8610D] text-white scale-105 shadow-[0_2px_10px_rgba(168,97,13,0.2)]'
                    : 'bg-[#D9C4A8] text-white'
                }`}
              >
                {step.number}
              </div>

              <div
                className={`w-full bg-[#FCFBF9] border rounded-[20px] p-6 transition-all duration-500 ${
                  isReached
                    ? 'border-[rgba(168,97,13,0.25)] opacity-100 shadow-[0_4px_18px_rgba(50,35,20,0.04)]'
                    : 'border-[rgba(60,45,30,0.07)] opacity-60'
                }`}
              >
                <span className="text-[12px] font-medium text-[#A8610D] uppercase tracking-wider block mb-1">
                  Etapa 0{step.number}
                </span>
                <h3 className="text-[19px] font-normal text-[#11100F] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-[1.58] text-[#55514D] font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
