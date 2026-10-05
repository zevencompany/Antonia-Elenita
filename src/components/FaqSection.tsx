import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona a primeira conversa?',
      answer:
        'A primeira conversa é um momento de acolhimento mútuo para compreender o motivo da sua busca, falar sobre suas expectativas e tirar dúvidas sobre o funcionamento do atendimento. Não é preciso ter tudo formulado previamente.',
    },
    {
      question: 'Preciso saber exatamente o que estou sentindo para começar?',
      answer:
        'Não. É bastante comum buscar a psicoterapia exatamente quando as emoções parecem confusas, desordenadas ou difíceis de nomear. O processo terapêutico é construído aos poucos para organizar e compreender essas vivências.',
    },
    {
      question: 'Psicoterapia pode ajudar em sintomas de ansiedade e depressão?',
      answer:
        'O acompanhamento psicológico proporciona um espaço dedicado para compreender como a ansiedade e a depressão se manifestam no cotidiano, identificar seus gatilhos e desenvolver formas mais conscientes de lidar com o sofrimento emocional. Quando necessário, o cuidado pode se dar de forma integrada com outros profissionais de saúde.',
    },
    {
      question: 'Como funciona o acompanhamento relacionado ao uso de substâncias?',
      answer:
        'O atendimento é pautado pela escuta empática e pelo acolhimento livre de estigmas e preconceitos. Buscamos compreender a história da pessoa, os fatores associados ao uso e os caminhos possíveis para a construção de uma rotina com mais saúde e equilíbrio.',
    },
    {
      question: 'Familiares também podem buscar acompanhamento?',
      answer:
        'Sim. A convivência próxima com alguém que vivencia dificuldades pelo uso de substâncias pode gerar sentimentos de impotência, culpa, cansaço e sobrecarga. A psicoterapia oferece suporte para essas pessoas cuidarem de sua própria saúde emocional e estabelecerem limites saudáveis.',
    },
    {
      question: 'Como saber se preciso procurar ajuda psicológica?',
      answer:
        'Se você tem vivenciado sofrimento emocional frequente, instabilidade no humor, angústia persistente ou dificuldades que parecem difíceis de elaborar sozinho(a), a psicoterapia pode ser um suporte valioso para esse momento.',
    },
    {
      question: 'O atendimento é online ou presencial?',
      answer:
        'Entre em contato para confirmar as modalidades de atendimento disponíveis e verificar os horários correspondentes.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes sobre o acompanhamento psicológico"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] text-[13px] font-normal text-[#55514D] tracking-tight mb-4">
          FAQ
        </span>
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.038em] text-[#11100F] mb-4 [text-wrap:balance]">
          Dúvidas frequentes
        </h2>
        <p className="text-[15.5px] sm:text-[16.5px] leading-[1.58] text-[#55514D] font-normal max-w-[620px]">
          Esclarecimentos sobre o atendimento psicológico, formatos e como iniciar o seu acompanhamento.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-[780px] mx-auto flex flex-col gap-3.5 sm:gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-[#FCFBF9] border border-[rgba(60,45,30,0.07)] rounded-[18px] transition-all duration-300 overflow-hidden shadow-[0_4px_18px_rgba(50,35,20,0.02)] ${
                isOpen ? 'border-[rgba(168,97,13,0.25)]' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="w-full min-h-[70px] sm:min-h-[74px] px-6 sm:px-7 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D]"
              >
                <span className="text-[16.5px] sm:text-[17.5px] font-normal text-[#11100F] tracking-tight pr-4">
                  {faq.question}
                </span>

                {/* Plus icon inside small circle rotating 45deg to X */}
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#A8610D] text-white rotate-45'
                      : 'bg-[#F7F5F1] text-[#A8610D] border border-[rgba(60,45,30,0.08)]'
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="w-4 h-4 stroke-[2.2]" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 sm:px-7 pb-6 pt-1 text-[15px] sm:text-[15.5px] leading-[1.62] text-[#55514D] font-normal animate-in fade-in duration-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
