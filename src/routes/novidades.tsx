import { createFileRoute } from '@tanstack/react-router';
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
  return (
    <>
      {/* Banner Principal do Blog */}
      <section className="bg-[#042148] text-white py-20 px-5 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Conteúdo & Artigos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display leading-tight">
              Blog Dualcon: Conhecimento que Impulsiona Negócios
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Informações técnicas, boas práticas de segurança e tendências de tecnologia da informação explicadas de forma clara e descomplicada.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold text-xs h-11 px-6 font-display"
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
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-7 hover:border-[#094AEB] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs mb-4">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-bold font-display">0{index + 1}</span>
                  </div>

                  <h2 className="text-lg font-bold text-[#042148] font-display group-hover:text-[#094AEB] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#042148] group-hover:text-[#094AEB] transition-colors font-display"
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
