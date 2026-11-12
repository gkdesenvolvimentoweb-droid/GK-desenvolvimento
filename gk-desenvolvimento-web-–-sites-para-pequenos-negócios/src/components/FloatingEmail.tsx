import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingEmail: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpenTooltip(false);
    }, 2500);
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent('Solicitação de Orçamento - Site para Pequena Empresa');
    const body = encodeURIComponent(
      'Olá! Encontrei o site da GK Desenvolvimento Web e gostaria de solicitar um orçamento para o meu negócio.'
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <aside aria-label="Contato rápido por e-mail" className="fixed bottom-4 right-4 z-40 max-h-[12vh]">
      <div className="relative">
        {/* Quick action card popup if hovered or clicked */}
        {openTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-72 p-3 bg-[#0a1228] border border-slate-700 rounded-xl shadow-2xl text-left animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="text-[11px] font-mono text-blue-400 mb-1">
              Contato Rápido
            </div>
            <div className="text-xs font-semibold text-white mb-2 font-mono break-all">
              {COMPANY_INFO.email}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
              <button
                onClick={handleOpenEmail}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir e-mail</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors cursor-pointer"
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
          </div>
        )}

        {/* Floating trigger button */}
        <button
          onClick={() => setOpenTooltip(!openTooltip)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#091126] hover:bg-[#0c1736] border border-blue-500/40 hover:border-blue-500 rounded-full shadow-lg shadow-black/60 transition-all text-xs font-medium text-white cursor-pointer active:scale-95 group"
          title="Fale conosco por e-mail"
          aria-expanded={openTooltip}
        >
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline font-mono text-[12px] text-slate-200 group-hover:text-blue-300 transition-colors">
            {COMPANY_INFO.email}
          </span>
          <span className="sm:hidden font-semibold text-xs">
            Orçamento
          </span>
        </button>
      </div>
    </aside>
  );
};
