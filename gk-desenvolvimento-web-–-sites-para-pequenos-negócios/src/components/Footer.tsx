import React from 'react';
import { Mail, Instagram, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#02050e] text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 text-left">
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-lg font-bold text-white tracking-tight">
              {COMPANY_INFO.name}
            </span>
            <p className="text-xs italic text-blue-400 font-serif">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em criação de sites para pequenas empresas e comércios locais em todo o Brasil. Sites de baixo custo e entrega recorde em 24 horas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Navegação
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">Projetos & Portfólio</a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">Preços & Planos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Canais Oficiais
            </div>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>@{COMPANY_INFO.instagram}</span>
              </a>

              <div className="text-slate-500 pt-1 text-[11px]">
                {COMPANY_INFO.location} · Atendimento digital para pequenas empresas de qualquer estado.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
