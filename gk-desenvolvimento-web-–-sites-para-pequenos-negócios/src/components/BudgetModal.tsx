import React, { useState } from 'react';
import { X, Mail, Check, Copy, Send } from 'lucide-react';
import { COMPANY_INFO, PRICING_PLANS } from '../data/content';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetPlan?: string;
  presetSubject?: string;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  presetPlan,
  presetSubject,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [plan, setPlan] = useState(presetPlan || 'gk-simples');
  const [message, setMessage] = useState(
    presetSubject ? `Olá! Tenho interesse no projeto: ${presetSubject}.` : ''
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getPlanLabel = (id: string) => {
    const found = PRICING_PLANS.find((p) => p.id === id);
    if (found) return `${found.name} (${found.price})`;
    return id;
  };

  const formattedBody =
    `Olá, equipe GK Desenvolvimento Web!\n\n` +
    `Gostaria de solicitar um orçamento:\n` +
    `• Nome: ${name || 'Não informado'}\n` +
    `• Empresa: ${company || 'Não informada'}\n` +
    `• WhatsApp: ${whatsapp || 'Não informado'}\n` +
    `• E-mail: ${email || 'Não informado'}\n` +
    `• Plano Selecionado: ${getPlanLabel(plan)}\n` +
    `• Mensagem: ${message || 'Gostaria de saber mais informações sobre prazos e início.'}\n\n` +
    `Atenciosamente,\n` +
    `${name || 'Cliente'}`;

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `[Orçamento de Site] ${company || name || 'Solicitação'}`
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoUrl;
    setTimeout(() => onClose(), 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#091024] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-left">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#060c1c]">
          <div>
            <div className="text-xs font-mono text-blue-400">
              {COMPANY_INFO.tagline}
            </div>
            <h3 className="text-lg font-bold text-white">
              Solicitar Orçamento no E-mail
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Oliveira"
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nome da Empresa / Negócio *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ex: Oficina Mecânica Prime"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(11) 98765-4321"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Seu E-mail *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contato@suaempresa.com.br"
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Plano de Interesse
            </label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
            >
              {PRICING_PLANS.map((p) => (
                <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                  {p.name} ({p.price} - {p.deliveryTime})
                </option>
              ))}
              <option value="custom" className="bg-slate-900 text-white">
                Proposta Personalizada Sob Medida
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Mensagem ou Detalhes (Opcional)
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte rapidamente o que gostaria no seu site..."
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir no E-mail</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <div className="text-[11px] text-slate-500 text-center">
            Destino: <span className="text-slate-300 font-mono">{COMPANY_INFO.email}</span>
          </div>
        </form>
      </div>
    </div>
  );
};
