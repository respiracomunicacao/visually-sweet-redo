import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* =========================================================================
          1. BANNER PRINCIPAL (HOME)
          Imagem com Parallax e Movimento Dinâmico
          Luzes suaves de contraste inspiradas nas capas do Instagram
         ========================================================================= */}
      <section className="relative bg-[#070E22] text-white py-24 lg:py-36 px-5 lg:px-8 border-b border-white/10 overflow-hidden min-h-[700px] flex items-center justify-center">
        {/* Camada Parallax da Imagem de Fundo (Move-se suavemente ao rolar a página) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.28}px) scale(${1 + scrollY * 0.0003})`,
            transition: 'transform 0.08s ease-out',
          }}
        >
          <img
            src="/CDR-Technology.png"
            alt="Infraestrutura de tecnologia e nuvem corporativa"
            className="w-full h-[120%] object-cover object-center animate-hero-bg opacity-75"
          />
        </div>

        {/* Gradiente Leve e Translúcido apenas para garantir a leitura do texto, mantendo a foto visível */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040D24]/90 via-[#040D24]/60 to-[#040D24]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040D24]/30 to-[#070E22] pointer-events-none" />
        
        {/* Feixes e Reflexos de luz azul e laranja com Parallax e Pulsação suave */}
        <div
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#094AEB]/25 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-[#EE4C1B]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          {/* Badge Oficial sem tags (< >) no estilo clean do Instagram */}
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2 text-xs font-bold text-slate-200 shadow-xl border border-white/20">
            <span className="size-2 rounded-full bg-[#EE4C1B] animate-ping" />
            <span className="font-display tracking-widest text-[#F8FAFC]">
              CONECTANDO O AGORA AO <em className="text-[#EE4C1B] not-italic">FUTURO</em>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight font-display drop-shadow-md">
            Mais do que suporte. <br />
            <span>Somos seu braço</span>{" "}
            <span className="text-gradient-shimmer italic font-black">direito digital.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-200 leading-relaxed font-body drop-shadow-sm font-medium">
            Garantimos a continuidade da sua operação com consultoria proativa em TI, servidores corporativos Dell, backup imutável Veeam e segurança multicamadas contra ameaças virtuais.
          </p>

          {/* Botões Fale Conosco + Conhecer Soluções */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-sm h-14 px-8 inline-flex items-center transition-all shadow-xl shadow-[#EE4C1B]/35 hover:scale-105 font-display"
            >
              <MessageSquare className="size-4 mr-2" />
              Fale Conosco no WhatsApp
            </a>

            <Link
              to="/solucoes"
              className="rounded-full glass-panel hover:bg-white/20 text-white font-bold text-sm h-14 px-8 inline-flex items-center transition-all font-display border border-white/25 hover:border-white"
            >
              Conhecer Nossas Soluções
              <ArrowRight className="size-4 ml-2 text-[#094AEB]" />
            </Link>
          </div>

          {/* Credenciais em Linha com visual Glass */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-200 font-medium">
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/15">
              <span className="size-2 rounded-full bg-[#094AEB]" />
              <span>Vale dos Sinos & RS</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/15">
              <span className="size-2 rounded-full bg-[#EE4C1B]" />
              <span>Parceiro Homologado Dell</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/15">
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
          Seção Intercalada com Tom Cinza Grafite (#2B2B2B / #F4F6F9) e Paleta Oficial
         ========================================================================= */}
      <section className="bg-[#F4F6F9] py-24 px-5 lg:px-8 border-b border-slate-200/90 relative overflow-hidden bg-wave-lines-light">
        {/* Luzes de ambientação sutis */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EE4C1B]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#094AEB]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge section-badge-graphite mb-3">
              DIAGNÓSTICO ESTRATÉGICO
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#042148] font-display">
              Entendemos a realidade da sua empresa
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-body">
              Transformamos dores operacionais e riscos de segurança em previsibilidade, redução de custos e alta disponibilidade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Dores */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-lg shadow-black/5 hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-red-500 group">
              <div>
                <div className="size-14 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="size-7" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase font-display">Riscos Atuais</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">Atenção</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#042148] font-display mb-4">
                  Dores Críticas do Mercado
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 font-body">
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    <span><strong>Quedas de Servidor:</strong> Paradas não programadas travando faturamento, expedição e ERP.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    <span><strong>Sequestro de Dados:</strong> Ataques de ransomware que paralisam a empresa e cobram resgate milionário.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    <span><strong>Suporte Ineficiente:</strong> Chamados lentos com atendimento impessoal e robôs sem resolução ágil.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-red-600 font-bold flex items-center gap-1.5">
                <span>Prejuízo médio por hora parada: R$ 15.000+</span>
              </div>
            </div>

            {/* Nossas Soluções */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-lg shadow-black/5 hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#094AEB] group">
              <div>
                <div className="size-14 rounded-2xl bg-[#094AEB]/10 border border-[#094AEB]/20 text-[#094AEB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="size-7" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-wider text-[#094AEB] uppercase font-display">Ação Prática</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#094AEB]">Segurança Ativa</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#042148] font-display mb-4">
                  Como a Dualcon Resolve
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 font-body">
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#094AEB] shrink-0 mt-1.5" />
                    <span><strong>Monitoramento Ativo 24/7:</strong> Ação preventiva corrigindo alertas antes de causarem qualquer parada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#094AEB] shrink-0 mt-1.5" />
                    <span><strong>Infraestrutura Dell & Veeam:</strong> Servidores PowerEdge de alta tolerância e backup imutável na nuvem.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#094AEB] shrink-0 mt-1.5" />
                    <span><strong>Fortinet & Bitdefender:</strong> Firewalls de borda e proteção de computadores contra ameaças modernas.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-[#094AEB] font-bold flex items-center gap-1.5">
                <span>Disponibilidade garantida contratual (SLA)</span>
              </div>
            </div>

            {/* Diferenciais Estratégicos */}
            <div className="rounded-3xl bg-[#2B2B2B] text-white p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#EE4C1B] group">
              <div>
                <div className="size-14 rounded-2xl bg-white/10 border border-white/20 text-[#EE4C1B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="size-7" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-wider text-[#EE4C1B] uppercase font-display">Vantagem Competitiva</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EE4C1B]/20 text-[#EE4C1B] border border-[#EE4C1B]/30">Exclusivo</span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-display mb-4">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-300 font-body">
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#EE4C1B] shrink-0 mt-1.5" />
                    <span><strong className="text-white">Proximidade Humana:</strong> Você fala diretamente com seu técnico pelo nome, presencialmente ou por WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#EE4C1B] shrink-0 mt-1.5" />
                    <span><strong className="text-white">20 Anos de Mercado:</strong> Sólida credibilidade técnica atendendo indústrias, comércio e serviços no RS desde 2005.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-[#EE4C1B] shrink-0 mt-1.5" />
                    <span><strong className="text-white">Parcerias Diretas:</strong> Homologação direta com Dell, Veeam, Bitdefender, Fortinet e Microsoft.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs text-[#EE4C1B] font-bold flex items-center gap-1.5">
                <span>Atendimento presencial no Vale dos Sinos e RS</span>
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
          <div className="flex justify-center">
            <span className="section-badge section-badge-dark">
              APRESENTAÇÃO INSTITUCIONAL
            </span>
          </div>
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
          Seção Clara Intercalada com Glassmorphism Claro
         ========================================================================= */}
      <section className="bg-[#F8FAFC] py-24 px-5 lg:px-8 border-b border-slate-200/80 relative overflow-hidden bg-wave-lines-light">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge section-badge-light mb-3">
              CREDIBILIDADE & CONFIANÇA
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#042148] font-display">
              O que dizem os clientes da Dualcon
            </h2>
            <p className="mt-4 text-base text-slate-600 font-body">
              Relações duradouras construídas com transparência, agilidade técnica e compromisso real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel-light glass-panel-light-hover p-7 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <Quote className="size-8 text-[#094AEB] mb-4 opacity-80" />
                  <p className="text-xs text-slate-700 leading-relaxed italic font-body">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-[#042148] font-display">{item.author}</p>
                  <p className="text-[11px] text-slate-500 font-body">{item.role}</p>
                  <span className="inline-block mt-2 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-[10px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
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
      <section className="bg-[#070D1E] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden bg-wave-lines">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-white/10">
            <div>
              <span className="section-badge section-badge-dark mb-2">
                CONTEÚDO & ATUALIZAÇÕES
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
                  <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed font-body">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-white group-hover:text-[#094AEB] inline-flex items-center gap-1 font-display"
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
