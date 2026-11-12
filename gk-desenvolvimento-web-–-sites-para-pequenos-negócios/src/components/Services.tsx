import React from 'react';
import { Check, Mail, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#040816] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl text-left space-y-4 mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Serviços & Soluções Web
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Tudo o que sua pequena empresa precisa para vender e passar autoridade na internet.
          </h2>
          <p className="text-base text-slate-300">
            Chega de sites lentos ou complicados. Construímos páginas funcionais que geram contatos
            reais para o seu balcão, WhatsApp ou caixa de entrada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl border border-slate-800 bg-[#070e22]/50 hover:bg-[#09122c]/60 hover:border-blue-900/50 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400 px-2 py-1 rounded bg-blue-950/60 border border-blue-900/40">
                    {service.number}
                  </span>
                  <span className="text-xs text-slate-400">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Entrega expressa disponível
                </span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Pedir orçamento deste serviço</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
