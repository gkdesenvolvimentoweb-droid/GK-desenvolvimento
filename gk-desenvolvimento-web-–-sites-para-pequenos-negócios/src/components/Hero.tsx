import React from 'react';
import { Mail, Clock, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, ASSET_IMAGES } from '../data/content';

interface HeroProps {
  onOpenBudgetModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Subtle deep navy ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline kicker - Clean unboxed text with separator */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-400">
              <span className="uppercase font-mono">GK Desenvolvimento Web</span>
              <span aria-hidden="true">·</span>
              <span className="italic font-serif font-normal text-slate-300">
                &ldquo;{COMPANY_INFO.tagline}&rdquo;
              </span>
            </div>

            {/* Display headline with balance to avoid orphans */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Seu pequeno negócio com site profissional, no ar em 24h e por um valor acessível.
            </h1>

            {/* Value Proposition text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Ajudamos pequenas empresas a se destacarem na internet sem gastar uma fortuna.
              Desenvolvemos sites modernos, velozes no celular e otimizados para o Google,
              com valores justos que cabem no seu bolso.
            </p>

            {/* Key trust bullets - Clean unboxed typography */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Entrega expressa em até 24 horas</span>
              </div>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Site de baixo custo e sem mensalidades</span>
              </div>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% pronto para celular e WhatsApp</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBudgetModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/25 whitespace-nowrap cursor-pointer active:scale-[0.99]"
              >
                <Mail className="w-4 h-4" />
                <span>Solicitar Orçamento no E-mail</span>
              </button>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Ver Projetos Criados</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick response note */}
            <p className="text-xs text-slate-400">
              Atendimento ágil em todo o Brasil. Envie seu pedido e receba o retorno hoje mesmo.
            </p>
          </div>

          {/* Right Column: High visual anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/80">
              {/* Browser/Window mockup header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-[#090f20]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                  gkdesenvolvimentoweb.com.br
                </span>
                <span className="text-[10px] font-mono text-blue-400">24h Express</span>
              </div>

              {/* Generated high-fidelity image */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src={ASSET_IMAGES.hero}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/hero_web_agency.jpg';
                  }}
                  alt="Espaço de desenvolvimento web da GK para pequenos negócios"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Overlay highlight badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#070d1d]/90 backdrop-blur-md border border-slate-800/80 text-left">
                  <div className="text-xs font-semibold text-white">
                    Soluções sob medida para pequenos empresários
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Sites rápidos, sem burocracia e com valores que cabem no seu orçamento.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
