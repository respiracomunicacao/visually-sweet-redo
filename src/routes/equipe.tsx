import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';
import { PartnerLogosBar } from '@/components/solutions-content';
import { teamMembers } from '@/lib/site-content';

export const Route = createFileRoute('/equipe')({
  head: () => ({
    meta: [
      { title: 'Nossa Equipe | Dualcon Conectividade' },
      { name: 'description', content: 'Conheça o time de profissionais técnicos e consultores da Dualcon Conectividade.' },
      { property: 'og:title', content: 'Equipe de Especialistas | Dualcon Conectividade' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
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
          1. BANNER IMAGEM + TÍTULO E FRASE DE APOIO
         ========================================================================= */}
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
              NOSSO TIME
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-display">
              Gente cuidando de gente através da <span className="text-gradient-shimmer italic font-black">tecnologia.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-body">
              Conheça os profissionais que garantem a disponibilidade contínua dos seus servidores, suporte ágil aos seus colaboradores e segurança da informação.
            </p>

            {/* Banner CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold text-sm h-14 px-8 transition-all shadow-xl shadow-[#EE4C1B]/25 font-display hover:scale-105"
              >
                <a
                  href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20equipe%20Dualcon."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="size-4 mr-2" />
                  Falar com um Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Homologadas */}
      <PartnerLogosBar />

      {/* =========================================================================
          2. FOTO + SETOR + FUNÇÃO DESEMPENHADA NO ATENDIMENTO
         ========================================================================= */}
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge section-badge-dark mb-3">
              ESPECIALISTAS CERTIFICADOS
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Quem cuida da sua empresa
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Corpo técnico multidisciplinar preparado para atender chamados emergenciais e planejar projetos complexos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-[#141A28] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#094AEB]/60 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/40"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141A28] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider font-display px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                      {member.department}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-white font-display group-hover:text-[#EE4C1B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#094AEB] mt-1 font-display">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed font-body">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20setor%20de%20${encodeURIComponent(member.department)}%20(${encodeURIComponent(member.name)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-full bg-emerald-500/10 hover:bg-[#25d366] text-[#25d366] hover:text-white border border-emerald-500/30 text-xs font-bold py-3 px-4 flex items-center justify-center gap-2 transition-all font-display hover:scale-102"
                  >
                    <MessageSquare className="size-3.5 fill-current" />
                    <span>WhatsApp Direto ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. GALERIA DE FOTOS DA SEDE E EQUIPE
         ========================================================================= */}
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-badge section-badge-dark mb-3">
              ESTRUTURA FÍSICA
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Nossa Sede em Campo Bom – RS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Laboratório próprio para testes de homologação, bancadas de manutenção e centro de monitoramento.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/card-relacoes.png"
                  alt="Equipe reunida na sede"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-xs font-bold text-white font-display">
                Equipe Técnica e Gestão de TI
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/card-descomplicar.png"
                  alt="Atendimento presencial e suporte"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-xs font-bold text-white font-display">
                Bancada de Testes e Suporte
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/suporte-ti.png"
                  alt="Operação de suporte em TI"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-xs font-bold text-white font-display">
                Atendimento Remoto e NOC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BANNER COM CTA + BOTÃO COM UM ESPECIALISTA
         ========================================================================= */}
      <ContactBand
        title="Quer conversar com um de nossos técnicos?"
        subtitle="Nosso atendimento é consultivo e sem compromisso. Avaliamos a demanda da sua empresa e indicamos o melhor caminho."
      />
    </>
  );
}
