import React from 'react';
import { Calendar, Layers, Clock, Users } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '3+',
      label: 'Anos Criando Sites',
      description: 'Especializados no mercado de pequenas empresas brasileiras',
      icon: Calendar,
    },
    {
      value: '140+',
      label: 'Projetos Entregues',
      description: 'Páginas que geram vendas, ligações e contatos diários',
      icon: Layers,
    },
    {
      value: '24h',
      label: 'Tempo Médio Express',
      description: 'Do briefing aprovado ao seu site funcionando na internet',
      icon: Clock,
    },
    {
      value: '100%',
      label: 'Suporte Humanizado',
      description: 'Atendimento direto por e-mail e canal ágil, sem robôs',
      icon: Users,
    },
  ];

  return (
    <section className="border-y border-slate-800/80 bg-[#060c1c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col text-left space-y-1.5 p-4 rounded-xl border border-slate-800/50 bg-slate-900/20"
              >
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-slate-300">{stat.label}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400 leading-snug pt-1">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
