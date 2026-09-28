import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { ArrowUpRight, MessageSquare, BookOpen } from 'lucide-react';
import { news } from '@/lib/site-content';
import { ContactBand } from '@/components/site-shell';
import { PartnerLogosBar } from '@/components/solutions-content';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/novidades')({
  head: () => ({
    meta: [
      { title: 'Blog & Artigos de TI | Dualcon Conectividade' },
      { name: 'description', content: 'Artigos técnicos e novidades da Dualcon sobre cibersegurança, consultoria em TI, servidores corporativos e produtividade.' },
      { property: 'og:title', content: 'Blog & Artigos de TI | Dualcon Conectividade' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
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
      {/* Banner Principal do Blog */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Glows de ambientação com parallax */}
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
              CONTEÚDO & ARTIGOS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display leading-tight">
              Blog Dualcon: Conhecimento que <span className="text-gradient-shimmer italic font-black">impulsiona negócios.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              Informações técnicas, boas práticas de cibersegurança e tendências corporativas de TI explicadas de forma clara e descomplicada.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-xs h-12 px-7 font-display shadow-lg shadow-[#EE4C1B]/20 transition-all hover:scale-105"
              >
                <a
                  href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20blog%20da%20Dualcon%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="size-3.5 mr-2" />
                  Falar com um Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Homologadas */}
      <PartnerLogosBar />

      {/* Grid de Artigos */}
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs mb-4">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-bold font-display px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">0{index + 1}</span>
                  </div>

                  <h2 className="text-lg font-bold text-white font-display group-hover:text-[#094AEB] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed font-body">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#094AEB] transition-colors font-display"
                  >
                    Ler artigo
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa Final */}
      <ContactBand />
    </>
  );
}
