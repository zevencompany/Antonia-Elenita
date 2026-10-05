import React from 'react';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: 'Escuta sem julgamentos',
      description:
        'Um espaço seguro e respeitoso para falar sobre o que você está vivenciando, com escuta atenta e cuidado profissional.',
      circleColor: '#D8A548',
    },
    {
      title: 'Cuidado emocional',
      description:
        'Um acompanhamento terapêutico focado em compreender as emoções e construir formas mais conscientes de se relacionar com o que você sente.',
      circleColor: '#C27A2A',
    },
    {
      title: 'Olhar individualizado',
      description:
        'A experiência de cada pessoa é singular e merece ser acolhida e compreendida dentro de seu próprio contexto e tempo.',
      circleColor: '#A8610D',
    },
  ];

  return (
    <section
      id="sobre"
      aria-label="Sobre a proposta de cuidado psicológico"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Header layout: label on left, headline anchored right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12 sm:mb-16">
        <div className="lg:col-span-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight">
            Sobre
          </span>
        </div>
        <div className="lg:col-span-9">
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] leading-[1.08] font-normal tracking-[-0.038em] text-[#11100F] max-w-[820px] [text-wrap:balance]">
            Cada história merece ser compreendida com cuidado
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.6] text-[#55514D] max-w-[700px]">
            O acompanhamento psicológico é um processo construído a partir do respeito à sua vivência.
            Um espaço protegido para você se escutar com profundidade, acolher momentos difíceis e
            fortalecer recursos para lidar com as próprias emoções.
          </p>
        </div>
      </div>

      {/* Three Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[22px] p-7 sm:p-8 min-h-[340px] sm:min-h-[360px] flex flex-col justify-between transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_8px_30px_rgba(50,35,20,0.03)]"
          >
            {/* Upper Right Decorative Circle Dot */}
            <div className="flex justify-end w-full">
              <span
                className="w-3.5 h-3.5 rounded-full transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.15]"
                style={{ backgroundColor: card.circleColor }}
                aria-hidden="true"
              />
            </div>

            {/* Content anchored toward lower portion of card */}
            <div className="pt-16">
              <h3 className="text-[22px] sm:text-[24px] font-normal text-[#11100F] tracking-[-0.025em] mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.58] text-[#55514D] font-normal">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
