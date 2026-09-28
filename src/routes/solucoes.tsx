import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
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
  const [selectedVertical, setSelectedVertical] = useState(verticalSectors[0].id);
  const currentSector = verticalSectors.find(v => v.id === selectedVertical) || verticalSectors[0];

  return (
    <>
      {/* =========================================================================
          1. BANNER IMAGEM + TÍTULO E FRASE DE APOIO
         ========================================================================= */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Glows de fundo */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#094AEB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#EE4C1B]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-slate-300">
              <span className="text-[#094AEB]">&lt;</span>
              <span className="font-display tracking-widest uppercase">PORTFÓLIO CORPORATIVO</span>
              <span className="text-[#EE4C1B]">&gt;</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-display">
              Soluções inteligentes para cada desafio do <span className="italic text-[#EE4C1B]">seu setor.</span>
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
      <section id="verticais" className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> ESPECIALIZAÇÃO SETORIAL <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Soluções Desenhadas para o Seu Mercado
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
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
                      : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`size-4 ${isSelected ? 'text-white' : 'text-[#094AEB]'}`} />
                  <span>{v.title}</span>
                </button>
              );
            })}
          </div>

          {/* Card Detalhado da Vertical Selecionada em Dark Glass */}
          <div className="glass-panel rounded-3xl p-8 lg:p-12 shadow-2xl relative border-t-2 border-t-[#EE4C1B]">
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE4C1B] font-display">
                Vertical de Atuação
              </span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white font-display">
                {currentSector.title}
              </h3>
              <p className="mt-2 text-base text-slate-300">
                {currentSector.subtitle}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Principais Dores & Problemas Críticos */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 font-display flex items-center gap-2 mb-3">
                    <AlertTriangle className="size-4" />
                    Principais Dores do Segmento
                  </h4>
                  <ul className="space-y-3">
                    {currentSector.dores.map((dor, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="text-red-400 font-bold shrink-0">•</span>
                        <span>{dor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/20">
                  <h5 className="text-xs font-bold text-red-400 uppercase font-display mb-1.5">
                    Problema Crítico Enfrentado:
                  </h5>
                  <p className="text-xs text-red-200/90 leading-relaxed">
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
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="size-3.5 text-[#094AEB] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl glass-panel space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-white uppercase font-display">Exemplo Prático de Atuação:</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentSector.exemploPratico}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase font-display">Diferencial Percebido:</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentSector.diferencial}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Dentro do Card */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium">
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
