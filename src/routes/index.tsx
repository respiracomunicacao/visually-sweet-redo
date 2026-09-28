import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  Building2,
  ShieldAlert,
  Clock,
  Sparkles,
  Quote
} from 'lucide-react';
import { ContactBand, InstagramFeedWidget } from '@/components/site-shell';
import { SolutionsGrid, PartnerLogosBar } from '@/components/solutions-content';
import { news, testimonials, solutions } from '@/lib/site-content';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Dualcon Conectividade | Conectando o agora ao futuro' },
      { name: 'description', content: 'Soluções corporativas em conectividade, consultoria e suporte em TI, segurança e equipamentos Dell no RS.' },
      { property: 'og:title', content: 'Dualcon Conectividade | Conectando o agora ao futuro' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: HomePage,
});

export function HomePage() {
  return (
    <>
      {/* =========================================================================
          1. BANNER PRINCIPAL (HOME)
          Com imagem CDR-Technology ao fundo e efeito de movimento suave (Ken Burns)
          Sobreposição corporativa nobre para legibilidade perfeita
         ========================================================================= */}
      <section className="relative bg-[#042148] text-white py-24 lg:py-32 px-5 lg:px-8 border-b border-slate-800 overflow-hidden min-h-[620px] flex items-center justify-center">
        {/* Imagem de Fundo com Movimento Suave e Contínuo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/CDR-Technology.png"
            alt="Infraestrutura de tecnologia e nuvem corporativa"
            className="w-full h-full object-cover object-center animate-hero-bg opacity-35"
          />
        </div>

        {/* Gradiente Corporativo Nobre para Garantir Leitura Impecável */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#042148]/90 via-[#042148]/75 to-[#042148]/95 pointer-events-none" />

        {/* Linhas sutis de grade tech */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-slate-200 border border-white/10">
            <span className="size-2 rounded-full bg-[#EE4C1B]" />
            <span className="font-display">HÁ 20 ANOS CONECTANDO O AGORA AO FUTURO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight font-display">
            Mais do que suporte. <br />
            <span className="text-[#EE4C1B]">Somos seu braço</span> direito digital.
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Garantimos a continuidade da sua operação com consultoria proativa em TI, servidores corporativos Dell, backup imutável Veeam e segurança multicamadas contra ataques cibernéticos.
          </p>

          {/* Botões Fale Conosco + Conhecer Soluções */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold text-sm h-13 px-8 inline-flex items-center transition-all shadow-lg hover:scale-105 font-display"
            >
              <MessageSquare className="size-4 mr-2" />
              Fale Conosco no WhatsApp
            </a>

            <Link
              to="/solucoes"
              className="rounded-full border border-white/30 text-white hover:bg-white hover:text-[#042148] font-bold text-sm h-13 px-8 inline-flex items-center bg-transparent transition-all font-display"
            >
              Conhecer Nossas Soluções
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>

          {/* Credenciais em Linha */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-8 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#EE4C1B]" /> Atendimento Vale dos Sinos e RS
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#EE4C1B]" /> Parceiro Homologado Dell
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#EE4C1B]" /> SLA de Resposta Garantido
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PARCEIROS HOMOLOGADOS COM LOGOS OFICIAIS (Dell, Veeam, Fortinet...)
         ========================================================================= */}
      <PartnerLogosBar />

      {/* =========================================================================
          3. VISÃO GERAL DA DUALCON: DORES, SOLUÇÕES E DIFERENCIAIS
         ========================================================================= */}
      <section className="bg-white py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Visão Geral
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Entendemos a realidade da sua empresa
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Transformamos dores operacionais e riscos de segurança em previsibilidade e alta disponibilidade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Dores */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <AlertTriangle className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[#042148] font-display mb-4">
                  Dores Críticas do Mercado
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Quedas inesperadas de servidores parando faturamento e chão de fábrica.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Ameaças constantes de sequestro de dados (ransomware) e roubo de senhas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Lentidão na rede e suporte técnico robótico que demora dias para atender.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nossas Soluções */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-lg bg-[#094AEB]/10 text-[#094AEB] flex items-center justify-center mb-6">
                  <Lightbulb className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[#042148] font-display mb-4">
                  Como a Dualcon Resolve
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Monitoramento ativo 24/7 para corrigir falhas antes que você perceba.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Infraestrutura robusta com servidores Dell e backup imutável Veeam em nuvem.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Firewalls corporativos Fortinet e proteção de endpoints Bitdefender de ponta a ponta.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-lg bg-[#EE4C1B]/10 text-[#EE4C1B] flex items-center justify-center mb-6">
                  <Sparkles className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-[#042148] font-display mb-4">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong>Proximidade Humana:</strong> você conhece nossos técnicos pelo nome, sem robôs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong>20 Anos de Mercado:</strong> sólida reputação no Vale dos Sinos e RS desde 2005.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong>SLA Rigoroso:</strong> atendimento presencial e remoto veloz com metas contratuais.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. VÍDEO OFICIAL DA DUALCON APRESENTANDO A EMPRESA
         ========================================================================= */}
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
            Apresentação Oficial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
            Conheça a estrutura da Dualcon Conectividade
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo institucional que apresenta nossa missão, equipe e compromisso com o crescimento do seu negócio:
          </p>

          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl aspect-video bg-black mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mTUQ1d1oXi4"
              title="Somos a Dualcon Conectividade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="pt-4">
            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#042148] hover:text-[#094AEB] font-display"
            >
              Conhecer a história completa da empresa
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SOLUÇÕES EM ITENS
         ========================================================================= */}
      <SolutionsGrid compact />

      {/* =========================================================================
          6. DEPOIMENTOS DE CLIENTES E EMPRESAS ATENDIDAS
         ========================================================================= */}
      <section className="bg-white py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Credibilidade & Confiança
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              O que dizem os clientes da Dualcon
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Relações duradouras construídas com transparência, agilidade técnica e compromisso real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <Quote className="size-8 text-[#EE4C1B]/30 mb-4" />
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-[#042148] font-display">{item.author}</p>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                  <span className="inline-block mt-2 rounded bg-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-[#042148] uppercase">
                    {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BLOG / NOVIDADES TÉCNICAS
         ========================================================================= */}
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE4C1B] font-display">
                Conteúdo & Atualizações
              </span>
              <h2 className="mt-1 text-3xl font-extrabold text-[#042148] font-display">
                Blog da Dualcon
              </h2>
            </div>
            <Link
              to="/novidades"
              className="text-xs font-bold text-[#042148] hover:text-[#094AEB] inline-flex items-center gap-1 font-display"
            >
              Ver todas as postagens ↗
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-6 hover:border-[#094AEB] hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-[#042148] group-hover:text-[#094AEB] transition-colors leading-snug font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#042148] group-hover:text-[#094AEB]"
                  >
                    Ler artigo ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PLUGIN / FEED DO INSTAGRAM
         ========================================================================= */}
      <InstagramFeedWidget />

      {/* =========================================================================
          9. BANNER PARA CONVERSÃO E CONTATO
         ========================================================================= */}
      <ContactBand />
    </>
  );
}
