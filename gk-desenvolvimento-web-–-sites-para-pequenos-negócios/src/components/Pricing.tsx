import React from 'react';
import { Check, Mail, Clock, Database, MessageSquare, CreditCard, Calendar } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="precos" className="py-20 md:py-28 bg-[#040816] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4 mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Planos & Preços Especiais
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Escolha o plano ideal para alavancar sua empresa na internet.
          </h2>
          <p className="text-base text-slate-300">
            Valores acessíveis sem taxas mensais obrigatórias ou surpresas. Você investe uma única vez
            e tem um site profissional, interativo e gerando contatos.
          </p>
        </div>

        {/* Pricing Cards: 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between text-left transition-all ${
                  isPopular
                    ? 'border-2 border-blue-500 bg-[#08122d]/90 shadow-2xl shadow-blue-900/30'
                    : 'border border-slate-800 bg-[#070e22]/60 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-md ${
                        isPopular
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {plan.badge}
                    </span>

                    {plan.id === 'gk-simples' ? (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Direto</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                        <Database className="w-3.5 h-3.5" />
                        <span>Banco de Dados Próprio</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-6 min-h-[44px]">{plan.description}</p>

                  {/* Price display with tabular-nums */}
                  <div className="mb-6 pb-6 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / investimento único
                      </span>
                    </div>
                    {plan.priceInstallment && (
                      <div className="text-xs text-blue-400 font-mono mt-1.5">
                        {plan.priceInstallment}
                      </div>
                    )}
                  </div>

                  {/* Highlights Callout */}
                  {plan.id === 'gk-completo' ? (
                    <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-lg bg-blue-950/40 border border-blue-900/40 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Agendamentos</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-200">
                        <CreditCard className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Pagamentos Online</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-6 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-900/30">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{plan.deliveryTime}</span>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Vantagens do {plan.name}:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Ideal for note */}
                  <div className="text-xs text-slate-400 mb-6 pt-4 border-t border-slate-800/80">
                    <strong className="text-slate-300">Ideal para:</strong> {plan.idealFor}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Solicitar {plan.name} no E-mail</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom requirements callout */}
        <div className="mt-12 p-6 rounded-xl border border-slate-800 bg-[#070e22]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-left max-w-5xl mx-auto">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Dúvidas sobre qual o melhor plano para o seu segmento?
            </h4>
            <p className="text-xs text-slate-400">
              Entre em contato conosco por e-mail e analisaremos seu negócio para recomendar a opção mais vantajosa.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan('custom')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Tirar dúvidas no e-mail</span>
          </button>
        </div>
      </div>
    </section>
  );
};
