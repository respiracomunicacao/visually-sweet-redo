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
      <section className="relative bg-[#042148] text-white py-20 px-5 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Portfólio Corporativo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-display">
              Soluções inteligentes para cada desafio do seu setor.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Entendemos profundamente as particularidades, riscos críticos e exigências de cada vertical de negócio no mercado gaúcho.
            </p>

            {/* Banner CTA com botão especialista */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold text-sm h-12 px-7 transition-colors font-display"
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
                className="rounded-full border-white/30 text-white hover:bg-white hover:text-[#042148] font-bold text-sm h-12 px-7 bg-transparent transition-colors font-display"
              >
                <a href="#verticais">
                  Ver Verticais de Atuação
                  <ArrowRight className="size-4 ml-2" />
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
      <section id="verticais" className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Especialização Setorial
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Soluções Desenhadas para o Seu Mercado
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Cada segmento possui exigências próprias. Veja como atendemos as dores reais da sua área:
            </p>
          </div>

          {/* Abas de Navegação das Verticais */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {verticalSectors.map((v) => {
              const Icon = sectorIcons[v.id] || Server;
              const isSelected = selectedVertical === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVertical(v.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold font-display transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#042148] text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-[#094AEB]'
                  }`}
                >
                  <Icon className={`size-4 ${isSelected ? 'text-[#EE4C1B]' : 'text-slate-400'}`} />
                  <span>{v.title}</span>
                </button>
              );
            })}
          </div>

          {/* Card Detalhado da Vertical Selecionada */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm">
            <div className="border-b border-slate-100 pb-6 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE4C1B] font-display">
                Vertical de Atuação
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#042148] font-display">
                {currentSector.title}
              </h3>
              <p className="mt-2 text-base text-slate-600">
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
                  <ul className="space-y-2.5">
                    {currentSector.dores.map((dor, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span>{dor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
                  <h5 className="text-xs font-bold text-red-800 uppercase font-display mb-1">
                    Problema Crítico Enfrentado:
                  </h5>
                  <p className="text-xs text-red-700 leading-relaxed">
                    {currentSector.problemasCriticos}
                  </p>
                </div>
              </div>

              {/* Soluções Dualcon, Exemplo Prático & Diferencial */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#094AEB] font-display flex items-center gap-2 mb-3">
                    <CheckCircle2 className="size-4" />
                    O que a Dualcon Entrega
                  </h4>
                  <ul className="space-y-2.5">
                    {currentSector.solucoes.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="size-3.5 text-[#094AEB] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#042148] uppercase font-display">Exemplo Prático de Atuação:</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{currentSector.exemploPratico}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase font-display">Diferencial Percebido:</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{currentSector.diferencial}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Dentro do Card */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Deseja um projeto adaptado para a realidade do seu setor?
              </span>
              <a
                href={`https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Dualcon%20para%20o%20setor%20de%20${encodeURIComponent(currentSector.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold text-xs px-6 py-2.5 transition-colors font-display"
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
