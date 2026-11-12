import React, { useState } from 'react';
import { Eye, ArrowUpRight, Clock, TrendingUp, Check, X, Mail } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

interface PortfolioProps {
  onOpenBudgetModal: (projectName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBudgetModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'gastronomia', label: 'Gastronomia & Delivery' },
    { id: 'saude', label: 'Saúde & Clínicas' },
    { id: 'servicos', label: 'Serviços & Negócios Locais' },
  ];

  const filteredProjects =
    selectedCategory === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
              Portfólio & Casos de Sucesso
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Sites reais criados para pequenas empresas que precisavam de resultados rápidos.
            </h2>
            <p className="text-base text-slate-300">
              Veja exemplos de projetos entregues com design moderno, carregamento imediato no celular
              e foco total na conversão do cliente.
            </p>
          </div>

          {/* Interactive filter tabs (allowed per frontend-design 0.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-[#070e22]/50 overflow-hidden hover:border-slate-700 hover:bg-[#09132e]/60 transition-all flex flex-col justify-between text-left group"
            >
              {/* Image Preview Container */}
              <div
                className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `/images/${project.id === 'la-bella-vita' ? 'portfolio_pizzaria.jpg' : project.id === 'cutting-edge-barbearia' ? 'portfolio_barbearia.jpg' : project.id === 'astra-odontologia' ? 'portfolio_odontologia.jpg' : 'hero_web_agency.jpg'}`;
                  }}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e22] via-transparent to-transparent opacity-80" />

                {/* Top overlay unboxed info */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-blue-300 border border-slate-700">
                    {project.categoryLabel}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-emerald-300 border border-slate-700 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.deliveryTime}
                  </span>
                </div>

                {/* Hover affordance */}
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Ver detalhes do projeto</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-medium">{project.impact}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mt-2">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mt-4">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        {tIdx > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Ver detalhes completos
                  </button>

                  <button
                    onClick={() => onOpenBudgetModal(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Quero um site similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#091024] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-left">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#060c1c]">
              <div>
                <span className="text-xs font-mono text-blue-400">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Image banner */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={activeModalProject.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `/images/${activeModalProject.id === 'la-bella-vita' ? 'portfolio_pizzaria.jpg' : activeModalProject.id === 'cutting-edge-barbearia' ? 'portfolio_barbearia.jpg' : activeModalProject.id === 'astra-odontologia' ? 'portfolio_odontologia.jpg' : 'hero_web_agency.jpg'}`;
                  }}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Impact Callout */}
              <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-emerald-300">
                    Resultado para o cliente:
                  </div>
                  <div className="text-sm font-medium text-white">
                    {activeModalProject.impact}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Sobre a solução desenvolvida
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* What was included */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Recursos entregues em até {activeModalProject.deliveryTime}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client quote if available */}
              {activeModalProject.clientQuote && (
                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs italic text-slate-300">
                  &ldquo;{activeModalProject.clientQuote}&rdquo;
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#060c1c] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Prazo recorde de entrega: <strong className="text-white">{activeModalProject.deliveryTime}</strong>
              </span>

              <button
                onClick={() => {
                  const proj = activeModalProject.title;
                  setActiveModalProject(null);
                  onOpenBudgetModal(proj);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Solicitar orçamento para este modelo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
