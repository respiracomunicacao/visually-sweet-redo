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
          Sobreposição corporativa nobre com luzes em cyan/blue e orange dos posts oficiais
         ========================================================================= */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden min-h-[660px] flex items-center justify-center">
        {/* Imagem de Fundo com Movimento Suave e Contínuo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/CDR-Technology.png"
            alt="Infraestrutura de tecnologia e nuvem corporativa"
            className="w-full h-full object-cover object-center animate-hero-bg opacity-30"
          />
        </div>

        {/* Gradiente Dark Profundo com feixes de luz inspirados nas artes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/95 via-[#060B18]/80 to-[#060B18] pointer-events-none" />
        
        {/* Glows de luz azul e laranja idênticos às capas do Instagram */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#094AEB]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#EE4C1B]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Linhas sutis de grade tech */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          {/* Badge Oficial com a marca DCN e chevrons estilizados */}
          <div className="inline-flex items-center gap-3 rounded-full glass-panel px-5 py-2 text-xs font-bold text-slate-200 shadow-xl">
            <span className="text-[#094AEB] font-extrabold text-sm">&lt;</span>
            <span className="font-display tracking-widest text-[#F8FAFC]">CONECTANDO O AGORA AO <em className="text-[#EE4C1B] not-italic">FUTURO</em></span>
            <span className="text-[#EE4C1B] font-extrabold text-sm">&gt;</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight font-display">
            Mais do que suporte. <br />
            <span>Somos seu braço</span>{" "}
            <span className="italic text-[#EE4C1B]">direito digital.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-body">
            Garantimos a continuidade da sua operação com consultoria proativa em TI, servidores corporativos Dell, backup imutável Veeam e segurança multicamadas contra ameaças virtuais.
          </p>

          {/* Botões Fale Conosco + Conhecer Soluções */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-sm h-14 px-8 inline-flex items-center transition-all shadow-xl shadow-[#EE4C1B]/30 hover:scale-105 font-display"
            >
              <MessageSquare className="size-4 mr-2" />
              Fale Conosco no WhatsApp
            </a>

            <Link
              to="/solucoes"
              className="rounded-full glass-panel hover:bg-white/10 text-white font-bold text-sm h-14 px-8 inline-flex items-center transition-all font-display hover:border-white/30"
            >
              Conhecer Nossas Soluções
              <ArrowRight className="size-4 ml-2 text-[#094AEB]" />
            </Link>
          </div>

          {/* Credenciais em Linha com visual Glass */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-300 font-medium">
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#094AEB]" />
              <span>Vale dos Sinos & RS</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#EE4C1B]" />
              <span>Parceiro Homologado Dell</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#094AEB]" />
              <span>20 Anos de Mercado</span>
            </div>
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
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        {/* Luzes de ambientação */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EE4C1B]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#094AEB]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> DIAGNÓSTICO ESTRATÉGICO <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Entendemos a realidade da sua empresa
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Transformamos dores operacionais e riscos de segurança em previsibilidade e alta disponibilidade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Dores */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between border-t-2 border-t-red-500/60">
              <div>
                <div className="size-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-6 shadow-inner">
                  <AlertTriangle className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-4">
                  Dores Críticas do Mercado
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0">•</span>
                    <span>Quedas inesperadas de servidores parando faturamento e chão de fábrica.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0">•</span>
                    <span>Ameaças constantes de sequestro de dados (ransomware) e roubo de senhas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0">•</span>
                    <span>Lentidão na rede e suporte técnico robótico que demora dias para atender.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nossas Soluções */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between border-t-2 border-t-[#094AEB]">
              <div>
                <div className="size-12 rounded-xl bg-[#094AEB]/10 border border-[#094AEB]/30 text-[#094AEB] flex items-center justify-center mb-6 shadow-inner">
                  <Lightbulb className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-4">
                  Como a Dualcon Resolve
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Monitoramento ativo 24/7 para corrigir falhas antes que você perceba.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Infraestrutura robusta com servidores Dell e backup imutável Veeam em nuvem.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#094AEB] font-bold shrink-0">•</span>
                    <span>Firewalls corporativos Fortinet e proteção de endpoints Bitdefender de ponta a ponta.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between border-t-2 border-t-[#EE4C1B]">
              <div>
                <div className="size-12 rounded-xl bg-[#EE4C1B]/10 border border-[#EE4C1B]/30 text-[#EE4C1B] flex items-center justify-center mb-6 shadow-inner">
                  <Sparkles className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-4">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong className="text-white">Proximidade Humana:</strong> você conhece nossos técnicos pelo nome, sem robôs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong className="text-white">20 Anos de Mercado:</strong> sólida reputação no Vale dos Sinos e RS desde 2005.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#EE4C1B] font-bold shrink-0">•</span>
                    <span><strong className="text-white">SLA Rigoroso:</strong> atendimento presencial e remoto veloz com metas contratuais.</span>
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
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
            <span className="text-[#094AEB]">&lt;</span> APRESENTAÇÃO INSTITUCIONAL <span className="text-[#EE4C1B]">&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Conheça a estrutura da Dualcon Conectividade
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo institucional que apresenta nossa missão, equipe e compromisso com o crescimento do seu negócio:
          </p>

          <div className="rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl aspect-video bg-black mx-auto max-w-3xl">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/mTUQ1d1oXi4"
              title="Somos a Dualcon Conectividade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="pt-4">
            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#094AEB] font-display transition-colors"
            >
              Conhecer a história completa da empresa
              <ArrowRight className="size-4 text-[#EE4C1B]" />
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
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> CREDIBILIDADE & CONFIANÇA <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              O que dizem os clientes da Dualcon
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Relações duradouras construídas com transparência, agilidade técnica e compromisso real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel glass-panel-hover p-7 flex flex-col justify-between"
              >
                <div>
                  <Quote className="size-8 text-[#094AEB] mb-4 opacity-75" />
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-white font-display">{item.author}</p>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                  <span className="inline-block mt-2 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
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
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE4C1B] font-display flex items-center gap-2">
                <span className="text-[#094AEB]">&lt;</span> CONTEÚDO & ATUALIZAÇÕES <span className="text-[#EE4C1B]">&gt;</span>
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
                Blog da Dualcon
              </h2>
            </div>
            <Link
              to="/novidades"
              className="text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 font-display transition-colors"
            >
              Ver todas as postagens <span className="text-[#EE4C1B]">↗</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-7"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#094AEB] transition-colors leading-snug font-display">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-white group-hover:text-[#094AEB] inline-flex items-center gap-1"
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
