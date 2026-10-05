import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Processo', href: '#processo' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] max-w-[800px] h-[58px] md:h-[62px] px-4 sm:px-6 rounded-full border flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFBF9]/85 backdrop-blur-[14px] border-[rgba(60,45,30,0.08)] shadow-[0_8px_30px_rgba(60,45,30,0.06)]'
            : 'bg-[#FCFBF9] border-[rgba(60,45,30,0.07)] shadow-[0_2px_12px_rgba(60,45,30,0.03)]'
        }`}
      >
        {/* Mobile: Left-aligned Agendar CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-xs font-medium px-4 py-2 bg-[#A8610D] hover:bg-[#93540A] text-[#FCFBF9] rounded-full transition-colors shadow-xs"
        >
          Agendar
        </a>

        {/* Desktop: Navigation Links (Aligned to the left) */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[#11100F] hover:text-[#A8610D] transition-colors duration-200 tracking-tight font-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8610D] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop: Primary CTA (Aligned to the right) -> Direct WhatsApp */}
        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-[13.5px] font-medium text-[#FCFBF9] bg-[#A8610D] hover:bg-[#93540A] rounded-full transition-all duration-220 cursor-pointer shadow-[0_2px_8px_rgba(168,97,13,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8610D] focus-visible:ring-offset-2"
          >
            <span>Agendar conversa</span>
            <span className="w-7 h-7 rounded-full bg-[#FCFBF9] text-[#A8610D] flex items-center justify-center transition-transform duration-220 group-hover:translate-x-[2.5px]">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </span>
          </a>
        </div>

        {/* Mobile: Right-aligned Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#11100F] hover:text-[#A8610D] focus-visible:outline-none rounded-full"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-4 top-[78px] z-40 p-5 rounded-[22px] bg-[#FCFBF9] border border-[rgba(60,45,30,0.08)] shadow-[0_12px_36px_rgba(60,45,30,0.12)] md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-3" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#11100F] hover:text-[#A8610D] py-1 border-b border-[rgba(60,45,30,0.05)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-[#A8610D] rounded-full cursor-pointer"
          >
            <span>Agendar conversa no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </>
  );
};
