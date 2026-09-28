import { createFileRoute } from '@tanstack/react-router';
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
  return (
    <>
      {/* =========================================================================
          1. BANNER IMAGEM + TÍTULO E FRASE DE APOIO
         ========================================================================= */}
      <section className="relative bg-[#042148] text-white py-20 px-5 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Nosso Time
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-display">
              Gente cuidando de gente através da tecnologia.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Conheça os profissionais que garantem a disponibilidade contínua dos seus servidores, suporte ágil aos seus colaboradores e segurança da informação.
            </p>

            {/* Banner CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold text-sm h-12 px-7 transition-colors font-display"
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
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Especialistas Certificados
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Quem cuida da sua empresa
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Corpo técnico multidisciplinar preparado para atender chamados emergenciais e planejar projetos complexos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-[#094AEB] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                      {member.department}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-[#042148] font-display">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#094AEB] mt-0.5">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. GALERIA DE FOTOS DA SEDE E EQUIPE
         ========================================================================= */}
      <section className="bg-white py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Estrutura Física
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Nossa Sede em Campo Bom – RS
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Laboratório próprio para testes de homologação, bancadas de manutenção e centro de monitoramento.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="/card-relacoes.png"
                alt="Equipe reunida na sede"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-[#042148]">
                Equipe Técnica e Gestão de TI
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="/card-descomplicar.png"
                alt="Atendimento presencial e suporte"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-[#042148]">
                Bancada de Testes e Suporte
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="/suporte-ti.png"
                alt="Operação de suporte em TI"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-[#042148]">
                Atendimento Remoto e Monitoramento NOC
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
