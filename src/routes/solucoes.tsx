import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Globe2,
  Factory,
  Activity,
  Megaphone,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';
import { SolutionsGrid, PartnerLogosBar } from '@/components/solutions-content';
import { verticalSectors, solutions } from '@/lib/site-content';

export const Route = createFileRoute('/solucoes')({
  head: () => ({
    meta: [
      { title: 'Soluções & Verticais de Atuação | Dualcon Conectividade' },
      { name: 'description', content: 'Soluções especializadas para Comércio Exterior, Indústria, Saúde, Agências de Publicidade e Produtoras de Eventos.' },
      { property: 'og:title', content: 'Soluções em TI por Segmento | Dualcon Conectividade' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: SolutionsPage,
});

const sectorIcons: Record<string, React.ElementType> = {
  'comercio-exterior': Globe2,
  'industria': Factory,
  'saude': Activity,
  'agencias': Megaphone,
  'eventos': Sparkles,
};

function SolutionsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedVertical, setSelectedVertical] = useState(verticalSectors[0].id);
  const currentSector = verticalSectors.find(v => v.id === selectedVertical) || verticalSectors[0];

  return (
    <>
      {/* =========================================================================
          1. BANNER IMAGEM + TÍTULO E FRASE DE APOIO
         ========================================================================= */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Glows de fundo com parallax */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#094AEB]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#EE4C1B]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="section-badge section-badge-dark">
              PORTFÓLIO CORPORATIVO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-display">
              Soluções inteligentes para cada desafio do <span className="text-gradient-shimmer italic font-black">seu setor.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-body">
              Entendemos profundamente as particularidades, riscos críticos e exigências de cada vertical de negócio no mercado corporativo gaúcho.
            </p>

            {/* Banner CTA com botão especialista */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-sm h-14 px-8 transition-all shadow-xl shadow-[#EE4C1B]/25 font-display hover:scale-105"
              >
                <a
                  href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Dualcon."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="size-4 mr-2" />
                  Falar com um Especialista
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full glass-panel hover:bg-white/10 text-white font-bold text-sm h-14 px-8 transition-all font-display hover:border-white/30"
              >
                <a href="#verticais">
                  Ver Verticais de Atuação
                  <ArrowRight className="size-4 ml-2 text-[#094AEB]" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Homologadas */}
      <PartnerLogosBar />

      {/* =========================================================================
          2. SEGMENTOS DE ATUAÇÃO E SOLUÇÕES OFERECIDAS PELA DUALCON
             (Comércio Exterior, Indústria, Saúde, Agências, Produtoras)
             Com Dores, Soluções, Exemplos Práticos, Diferenciais e Problemas Críticos
         ========================================================================= */}
      <section id="verticais" className="bg-[#F8FAFC] py-24 px-5 lg:px-8 border-b border-slate-200/80 relative overflow-hidden bg-wave-lines-light">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge section-badge-light mb-3">
              ESPECIALIZAÇÃO SETORIAL
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#042148] font-display">
              Soluções Desenhadas para o Seu Mercado
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-body">
              Cada segmento possui exigências próprias. Veja como atendemos as dores reais da sua área:
            </p>
          </div>

          {/* Abas de Navegação das Verticais em Glassmorphism */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {verticalSectors.map((v) => {
              const Icon = sectorIcons[v.id] || Server;
              const isSelected = selectedVertical === v.id;

              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVertical(v.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold font-display transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#EE4C1B] text-white shadow-lg shadow-[#EE4C1B]/30'
                      : 'bg-white text-slate-700 hover:text-[#094AEB] hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                  }`}
                >
                  <Icon className={`size-4 ${isSelected ? 'text-white' : 'text-[#094AEB]'}`} />
                  <span>{v.title}</span>
                </button>
              );
            })}
          </div>

          {/* Card Detalhado da Vertical Selecionada em Light Glass Premium */}
          <div className="glass-panel-light rounded-3xl p-8 lg:p-12 shadow-xl relative border-t-4 border-t-[#EE4C1B]">
            <div className="border-b border-slate-200 pb-6 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE4C1B] font-display">
                Vertical de Atuação
              </span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#042148] font-display">
                {currentSector.title}
              </h3>
              <p className="mt-2 text-base text-slate-600 font-body">
                {currentSector.subtitle}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Principais Dores & Problemas Críticos */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 font-display flex items-center gap-2 mb-3">
                    <AlertTriangle className="size-4" />
                    Principais Dores do Segmento
                  </h4>
                  <ul className="space-y-3">
                    {currentSector.dores.map((dor, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-body">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span>{dor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200/80 shadow-xs">
                  <h5 className="text-xs font-bold text-red-700 uppercase font-display mb-1.5">
                    Problema Crítico Enfrentado:
                  </h5>
                  <p className="text-xs text-red-900 leading-relaxed font-body">
                    {currentSector.problemasCriticos}
                  </p>
                </div>
              </div>

              {/* Soluções Dualcon, Exemplo Prático & Diferencial */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#094AEB] font-display flex items-center gap-2 mb-3">
                    <CheckCircle2 className="size-4 text-[#EE4C1B]" />
                    O que a Dualcon Entrega
                  </h4>
                  <ul className="space-y-3">
                    {currentSector.solucoes.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-body">
                        <CheckCircle2 className="size-3.5 text-[#094AEB] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
                  <div>
                    <span className="text-[11px] font-bold text-[#042148] uppercase font-display">Exemplo Prático de Atuação:</span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-body">{currentSector.exemploPratico}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase font-display">Diferencial Percebido:</span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-body">{currentSector.diferencial}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Dentro do Card */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-medium font-body">
                Deseja um projeto adaptado para a realidade do seu setor?
              </span>
              <a
                href={`https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Dualcon%20para%20o%20setor%20de%20${encodeURIComponent(currentSector.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-xs px-6 py-3 transition-all font-display shadow-lg shadow-[#EE4C1B]/20 hover:scale-105"
              >
                Falar com Especialista deste Setor ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TODAS AS 6 SOLUÇÕES EM ITENS
         ========================================================================= */}
      <SolutionsGrid />

      {/* =========================================================================
          4. BANNER PARA CONVERSÃO E CONTATO
         ========================================================================= */}
      <ContactBand
        title="Modernize a infraestrutura de TI do seu setor."
        subtitle="Nossos especialistas realizam o dimensionamento correto para garantir estabilidade, conformidade e redução de custos."
      />
    </>
  );
}
