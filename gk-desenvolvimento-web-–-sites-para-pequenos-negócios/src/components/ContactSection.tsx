import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Send, Copy, Check, Clock, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO, PRICING_PLANS } from '../data/content';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  initialPlan?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialPlan,
  initialService,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    whatsapp: '',
    companyName: '',
    segment: '',
    planId: initialPlan || 'gk-simples',
    message: initialService ? `Olá, gostaria de um orçamento para: ${initialService}` : '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, planId: initialPlan }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        message: `Olá! Tenho interesse no serviço: ${initialService}. Gostaria de solicitar um orçamento.`,
      }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getPlanName = (id: string) => {
    const found = PRICING_PLANS.find((p) => p.id === id);
    if (found) return found.name;
    if (id === 'custom') return 'Proposta Sob Medida';
    return id;
  };

  const generateMailtoBody = () => {
    return encodeURIComponent(
      `Olá, equipe GK Desenvolvimento Web!\n\n` +
      `Gostaria de solicitar um orçamento para o meu negócio.\n\n` +
      `DADOS DO SOLICITANTE:\n` +
      `• Nome: ${formData.name || 'Não informado'}\n` +
      `• Empresa: ${formData.companyName || 'Não informada'}\n` +
      `• Ramo de Atuação: ${formData.segment || 'Não informado'}\n` +
      `• WhatsApp: ${formData.whatsapp || 'Não informado'}\n` +
      `• E-mail: ${formData.email || 'Não informado'}\n` +
      `• Plano / Interesse: ${getPlanName(formData.planId)}\n\n` +
      `DETALHES DO PROJETO:\n` +
      `${formData.message || 'Gostaria de saber mais informações sobre prazos e como iniciar.'}\n\n` +
      `Aguardo o retorno de vocês!\n` +
      `Tagline: Quem não é visto não é lembrado.`
    );
  };

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `[Orçamento de Site] ${formData.companyName || formData.name || 'Nova Solicitação'}`
  )}&body=${generateMailtoBody()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger opening the default email client with pre-filled content
    window.location.href = mailtoLink;
  };

  const copyToClipboard = () => {
    const rawText =
      `SOLICITAÇÃO DE ORÇAMENTO - GK DESENVOLVIMENTO WEB\n` +
      `Para: ${COMPANY_INFO.email}\n\n` +
      `Nome: ${formData.name}\n` +
      `Empresa: ${formData.companyName}\n` +
      `Segmento: ${formData.segment}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `E-mail: ${formData.email}\n` +
      `Plano: ${getPlanName(formData.planId)}\n` +
      `Mensagem: ${formData.message}`;

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Confidence */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                Atendimento Direto no E-mail
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
                Solicite seu orçamento e coloque seu site no ar em 24h.
              </h2>
              <p className="text-base text-slate-300">
                Preencha o formulário ao lado ou envie um e-mail direto. Analisamos o seu segmento e
                enviamos uma proposta sob medida com o menor prazo e melhor custo.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email direct */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 rounded-xl border border-slate-800 bg-[#070e22]/60 hover:border-blue-800 hover:bg-[#0a1535] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Principal</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors font-mono">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </div>
                <Send className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-slate-800 bg-[#070e22]/60 hover:border-slate-700 hover:bg-[#0a1535] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Instagram Oficial</div>
                    <div className="text-sm font-semibold text-white group-hover:text-rose-300 transition-colors">
                      @{COMPANY_INFO.instagram}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                  Ver perfil
                </span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Resposta Rápida Garantida</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Respondemos solicitações de orçamento rapidamente em horário comercial.
                Você receberá detalhes de como funciona a criação e os passos para ter seu site pronto.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#070e22]/70 p-6 sm:p-8 text-left shadow-xl">
              <div className="mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">
                  Formulário de Orçamento por E-mail
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Os dados preenchidos serão enviados diretamente para nossa equipe técnica.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-800/50 bg-emerald-950/30 text-emerald-300 text-xs flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pronto!</strong> Seu aplicativo de e-mail foi acionado com todas as informações. Caso seu navegador não tenha aberto automaticamente, você pode usar o botão abaixo para copiar os dados.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Seu Melhor E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="joao@suaempresa.com.br"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Nome da Empresa */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nome do seu Negócio / Empresa *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Ex: Barbearia do João"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Segmento */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ramo de Atuação
                    </label>
                    <input
                      type="text"
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      placeholder="Ex: Restaurante, Mecânica, Estética..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Plano de interesse */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Plano de Interesse
                    </label>
                    <select
                      name="planId"
                      value={formData.planId}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      {PRICING_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.id} className="bg-slate-900 text-white">
                          {plan.name} ({plan.price})
                        </option>
                      ))}
                      <option value="custom" className="bg-slate-900 text-white">
                        Preciso de uma proposta personalizada
                      </option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Como podemos ajudar? (Opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre o que você precisa no site (ex: fotos de pratos, link de agendamento, etc.)..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-600/30 cursor-pointer active:scale-[0.99]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar Orçamento no E-mail</span>
                  </button>

                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    title="Copiar dados para enviar manualmente"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copiar Dados</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 text-center pt-2">
                  Destinatário: <span className="font-mono text-slate-300">{COMPANY_INFO.email}</span> · Resposta rápida garantida
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
