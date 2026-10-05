import React from 'react';

export const EmotionalRegulationSection: React.FC = () => {
  const pillars = [
    {
      title: 'Reconhecer o que surge',
      description:
        'Aprender a nomear o que se passa internamente, sem pressa para classificar sentimentos como certos ou errados.',
    },
    {
      title: 'Compreender suas respostas',
      description:
        'Perceber de que forma o corpo e os pensamentos reagem aos gatilhos do dia a dia, acolhendo as próprias sensações.',
    },
    {
      title: 'Autorregulação consciente',
      description:
        'Construir recursos próprios para lidar com momentos de maior intensidade emocional, com mais paciência e gentileza consigo.',
    },
  ];

  return (
    <section
      aria-label="Regulação e autorregulação emocional"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      <div className="bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[26px] p-8 sm:p-10 md:p-14 shadow-[0_8px_30px_rgba(50,35,20,0.03)]">
        <div className="max-w-[780px] mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#F7F5F1] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
            Regulação Emocional
          </span>

          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-5 [text-wrap:balance]">
            Aprender a reconhecer o que você sente também é uma forma de cuidado.
          </h2>

          <p className="text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#55514D] font-normal">
            Regulação emocional não significa controlar ou reprimir o que se sente, mas sim criar
            espaço para compreender suas emoções, identificar suas necessidades e encontrar
            maneiras mais conscientes e graduais de lidar com aquilo que é desafiador.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-[rgba(60,45,30,0.08)]">
          {pillars.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] font-medium text-[#A8610D] uppercase tracking-wider">
                  0{idx + 1}
                </span>
                <span className="h-[1px] w-6 bg-[#D8C8B5]/60" />
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-normal text-[#11100F] tracking-tight mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14.5px] sm:text-[15px] leading-[1.58] text-[#55514D] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
