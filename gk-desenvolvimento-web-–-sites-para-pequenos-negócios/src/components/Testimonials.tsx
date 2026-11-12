import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4 mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Depoimentos de Pequenos Empresários
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            A opinião de quem já colocou o site no ar e está colhendo resultados.
          </h2>
          <p className="text-base text-slate-300">
            Veja a experiência real de comerciantes, prestadores de serviços e empresários em todo o Brasil.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl border border-slate-800 bg-[#070e22]/50 flex flex-col justify-between text-left space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Highlight line */}
                <div className="text-sm font-semibold text-blue-300">
                  &ldquo;{testimonial.highlight}&rdquo;
                </div>

                {/* Body Quote */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {testimonial.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-950 border border-blue-800/60 flex items-center justify-center text-xs font-bold text-blue-300 font-mono">
                  {testimonial.avatarText}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {testimonial.role} · {testimonial.company} ({testimonial.city})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
