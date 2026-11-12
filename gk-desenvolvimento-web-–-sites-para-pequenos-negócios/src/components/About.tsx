import React from 'react';
import { ShieldCheck, Zap, TrendingUp, CheckCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutProps {
  onOpenBudgetModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBudgetModal }) => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Baixo Custo Sem Pegadinhas',
      description:
        'Sabemos como cada centavo conta para um pequeno negócio. Por isso, oferecemos pagamento único e justo, sem contratos de fidelidade ou taxas ocultas.',
    },
    {
      icon: Zap,
      title: 'Velocidade Recorde de Entrega (24h)',
      description:
        'Não faz sentido esperar semanas ou meses por uma página. Com nosso método estruturado, seu site pode estar recebendo clientes já no dia seguinte.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em Gerar Clientes Reais',
      description:
        'Não criamos sites apenas bonitos: criamos ferramentas de venda com botões estratégicos de WhatsApp, ligação direta e formulário por e-mail.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story and About */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
              Sobre a GK Desenvolvimento Web
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
              Criados para colocar pequenos negócios no topo sem gastar uma fortuna.
            </h2>

            {/* Official About Text provided by user */}
            <div className="p-6 rounded-xl border border-slate-800 bg-[#091024]/70 space-y-4">
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {COMPANY_INFO.aboutText}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Design Limpo & Moderno:</strong> Hierarquia visual pensada para transmitir autoridade e confiança imediata.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Atendimento Direto & Sem Burocracia:</strong> Você fala diretamente com quem desenvolve seu site.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Presença Local no Brasil:</strong> Sites construídos de acordo com os hábitos do consumidor brasileiro.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBudgetModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Conversar e Solicitar Orçamento</span>
              </button>
            </div>
          </div>

          {/* Right Column: Pillars of Excellence */}
          <div className="lg:col-span-6 space-y-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60 transition-all text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pl-13">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
