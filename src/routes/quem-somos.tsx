import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Target,
  Eye,
  HeartHandshake,
  Headset,
  ShieldCheck,
  Zap,
  Building
} from 'lucide-react';
import datacenter from '@/assets/dualcon-datacenter.jpg';
import { ContactBand } from '@/components/site-shell';
import { PartnerLogosBar } from '@/components/solutions-content';

export const Route = createFileRoute('/quem-somos')({
  head: () => ({
    meta: [
      { title: 'A Dualcon | Há 20 Anos Conectando o Agora ao Futuro' },
      { name: 'description', content: 'História, Missão, Visão, Valores e o modelo de atendimento descomplicado da Dualcon Conectividade no RS.' },
      { property: 'og:title', content: 'A Dualcon | Conectividade e Inovação em TI' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* =========================================================================
          1. BANNER COM FRASE DESTACANDO INOVAÇÃO (A DUALCON)
         ========================================================================= */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Glow de ambientação */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#094AEB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#EE4C1B]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-slate-300">
              <span className="text-[#094AEB]">&lt;</span>
              <span className="font-display tracking-widest uppercase">CONECTIVIDADE & INOVAÇÃO</span>
              <span className="text-[#EE4C1B]">&gt;</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-display">
              Inovação contínua para conectar o <span className="italic text-[#EE4C1B]">agora ao futuro.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-body">
              Acreditamos que a tecnologia só atinge seu verdadeiro potencial quando combinada com a proximidade e sensibilidade das relações humanas.
            </p>
          </div>
        </div>
      </section>

      {/* Marcas Parceiras Homologadas */}
      <PartnerLogosBar />

      {/* =========================================================================
          2. HISTÓRIA EM ITENS (Linha do Tempo e Marcos de 20 Anos)
          Seção Clara Intercalada com Glassmorphism Claro
         ========================================================================= */}
      <section className="bg-[#F8FAFC] py-24 px-5 lg:px-8 border-b border-slate-200/80 relative overflow-hidden bg-wave-lines-light">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> NOSSA TRAJETÓRIA <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[#042148] font-display">
              20 anos construindo pontes tecnológicas sólidas
            </h2>
            <p className="mt-4 text-base text-slate-600 font-body">
              Conheça em itens como evoluímos ao lado dos maiores polos empresariais do Rio Grande do Sul.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl glass-panel-light glass-panel-light-hover p-7 border-t-4 border-t-[#EE4C1B] shadow-sm">
              <span className="text-3xl font-extrabold text-[#EE4C1B] font-display">2005</span>
              <h3 className="mt-3 text-lg font-bold text-[#042148] font-display">Fundação & Cabeamento</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-body">
                Início das operações em Campo Bom – RS, com foco em estruturação física de redes, servidores locais e suporte a empresas do Vale dos Sinos.
              </p>
            </div>

            <div className="rounded-2xl glass-panel-light glass-panel-light-hover p-7 border-t-4 border-t-[#094AEB] shadow-sm">
              <span className="text-3xl font-extrabold text-[#094AEB] font-display">2012</span>
              <h3 className="mt-3 text-lg font-bold text-[#042148] font-display">Parceria Dell & Servidores</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-body">
                Homologação técnica oficial com a Dell Technologies, levando servidores de alta densidade e storages para indústrias e empresas de comércio exterior.
              </p>
            </div>

            <div className="rounded-2xl glass-panel-light glass-panel-light-hover p-7 border-t-4 border-t-slate-400 shadow-sm">
              <span className="text-3xl font-extrabold text-slate-700 font-display">2018</span>
              <h3 className="mt-3 text-lg font-bold text-[#042148] font-display">Segurança & Nuvem</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-body">
                Expansão para cibersegurança avançada com Fortinet, Bitdefender e rotinas de backup Veeam em nuvem, garantindo tolerância zero a ransomware.
              </p>
            </div>

            <div className="rounded-2xl glass-panel-light glass-panel-light-hover p-7 border-t-4 border-t-[#EE4C1B] shadow-sm">
              <span className="text-3xl font-extrabold text-[#EE4C1B] font-display">Hoje</span>
              <h3 className="mt-3 text-lg font-bold text-[#042148] font-display">Conectando o Futuro</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-body">
                Mais de duas décadas de credibilidade técnica, integrando inteligência artificial, computação corporativa e suporte presencial humanizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MISSÃO, VISÃO E VALORES
         ========================================================================= */}
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> PILARES FUNDAMENTAIS <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Missão */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 border-t-2 border-t-[#EE4C1B]">
              <div className="size-12 rounded-xl bg-[#EE4C1B]/10 border border-[#EE4C1B]/30 text-[#EE4C1B] flex items-center justify-center mb-6">
                <Target className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Missão
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fornecer conhecimento tecnológico para gerar resultados, eliminar paradas não programadas e reduzir custos operacionais, garantindo que nossos clientes cresçam com estabilidade e tranquilidade.
              </p>
            </div>

            {/* Visão */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 border-t-2 border-t-[#094AEB]">
              <div className="size-12 rounded-xl bg-[#094AEB]/10 border border-[#094AEB]/30 text-[#094AEB] flex items-center justify-center mb-6">
                <Eye className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Visão
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ser o parceiro estratégico de infraestrutura de TI e conectividade mais confiável e próximo das empresas no Sul do Brasil, reconhecido pela excelência técnica e relações humanas duradouras.
              </p>
            </div>

            {/* Valores */}
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 border-t-2 border-t-slate-300">
              <div className="size-12 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6">
                <HeartHandshake className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Valores
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong className="text-white">Proximidade Humana:</strong> atendimento de pessoa para pessoa.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong className="text-white">Transparência e Ética:</strong> soluções reais sem burocracia.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong className="text-white">Agilidade:</strong> compromisso estrito com SLA e resposta.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong className="text-white">Inovação Segura:</strong> tecnologia homologada e testada.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMO FUNCIONA O ATENDIMENTO DUALCON
         ========================================================================= */}
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display flex items-center justify-center gap-2">
              <span className="text-[#094AEB]">&lt;</span> METODOLOGIA DE TRABALHO <span className="text-[#EE4C1B]">&gt;</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
              Como funciona o atendimento DUALCON
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Um fluxo claro, consultivo e focado na solução definitiva de problemas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl glass-panel glass-panel-hover p-7 border-t-2 border-t-[#EE4C1B]">
              <span className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">Etapa 01</span>
              <h3 className="mt-2 text-lg font-bold text-white font-display">Diagnóstico Gratuito</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Mapeamos a estrutura atual de servidores, rede, segurança e rotinas de backup para identificar gargalos e riscos.
              </p>
            </div>

            <div className="rounded-2xl glass-panel glass-panel-hover p-7 border-t-2 border-t-[#094AEB]">
              <span className="text-xs font-bold text-[#094AEB] uppercase tracking-wider font-display">Etapa 02</span>
              <h3 className="mt-2 text-lg font-bold text-white font-display">Planejamento Técnico</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Desenvolvemos uma proposta sob medida com equipamentos homologados Dell e licenças necessárias sem desperdício.
              </p>
            </div>

            <div className="rounded-2xl glass-panel glass-panel-hover p-7 border-t-2 border-t-slate-300">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-display">Etapa 03</span>
              <h3 className="mt-2 text-lg font-bold text-white font-display">Implantação Segura</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Execução limpa e transparente sem interromper o expediente de trabalho ou o fluxo comercial da sua empresa.
              </p>
            </div>

            <div className="rounded-2xl glass-panel glass-panel-hover p-7 border-t-2 border-t-[#EE4C1B]">
              <span className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">Etapa 04</span>
              <h3 className="mt-2 text-lg font-bold text-white font-display">Monitoramento Contínuo</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Acompanhamento proativo diário, suporte presencial e remoto com chamados atendidos rapidamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BANNER PARA CONVERSÃO E CONTATO
         ========================================================================= */}
      <ContactBand
        title="Pronto para descomplicar a TI da sua empresa?"
        subtitle="Agende uma conversa com nossos especialistas e receba um diagnóstico detalhado da sua infraestrutura."
      />
    </>
  );
}
