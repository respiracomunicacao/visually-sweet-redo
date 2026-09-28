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
      <section className="relative bg-[#042148] text-white py-20 px-5 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              A DUALCON
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-display">
              Inovação contínua para conectar o agora ao futuro.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Acreditamos que a tecnologia só atinge seu verdadeiro potencial quando combinada com a proximidade e sensibilidade das relações humanas.
            </p>
          </div>
        </div>
      </section>

      {/* Marcas Parceiras Homologadas */}
      <PartnerLogosBar />

      {/* =========================================================================
          2. HISTÓRIA EM ITENS (Linha do Tempo e Marcos de 20 Anos)
         ========================================================================= */}
      <section className="bg-white py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Nossa Trajetória
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              20 anos construindo pontes tecnológicas sólidas
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Conheça em itens como evoluímos ao lado dos maiores polos empresariais do Rio Grande do Sul.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <span className="text-2xl font-black text-[#EE4C1B] font-display">2005</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Fundação & Cabeamento</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Início das operações em Campo Bom – RS, com foco em estruturação física de redes, servidores locais e suporte a empresas do Vale dos Sinos.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <span className="text-2xl font-black text-[#094AEB] font-display">2012</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Parceria Dell & Servidores</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Homologação técnica oficial com a Dell Technologies, levando servidores de alta densidade e storages para indústrias e empresas de comércio exterior.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <span className="text-2xl font-black text-[#042148] font-display">2018</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Segurança & Nuvem</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Expansão para cibersegurança avançada com Fortinet, Bitdefender e rotinas de backup Veeam em nuvem, garantindo tolerância zero a ransomware.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <span className="text-2xl font-black text-[#EE4C1B] font-display">Hoje</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Conectando o Agora ao Futuro</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Mais de duas décadas de credibilidade técnica, integrando inteligência artificial, computação corporativa e suporte presencial humanizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MISSÃO, VISÃO E VALORES
         ========================================================================= */}
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Pilares Fundamentais
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Missão */}
            <div className="rounded-xl bg-white border border-slate-200 p-8 shadow-xs">
              <div className="size-12 rounded-lg bg-[#EE4C1B]/10 text-[#EE4C1B] flex items-center justify-center mb-6">
                <Target className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#042148] font-display mb-3">
                Missão
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fornecer conhecimento tecnológico para gerar resultados, eliminar paradas não programadas e reduzir custos operacionais, garantindo que nossos clientes cresçam com estabilidade e tranquilidade.
              </p>
            </div>

            {/* Visão */}
            <div className="rounded-xl bg-white border border-slate-200 p-8 shadow-xs">
              <div className="size-12 rounded-lg bg-[#094AEB]/10 text-[#094AEB] flex items-center justify-center mb-6">
                <Eye className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#042148] font-display mb-3">
                Visão
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ser o parceiro estratégico de infraestrutura de TI e conectividade mais confiável e próximo das empresas no Sul do Brasil, reconhecido pela excelência técnica e relações humanas duradouras.
              </p>
            </div>

            {/* Valores */}
            <div className="rounded-xl bg-white border border-slate-200 p-8 shadow-xs">
              <div className="size-12 rounded-lg bg-[#042148]/10 text-[#042148] flex items-center justify-center mb-6">
                <HeartHandshake className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#042148] font-display mb-3">
                Valores
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong>Proximidade Humana:</strong> atendimento de pessoa para pessoa.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong>Transparência e Ética:</strong> soluções reais sem burocracia.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong>Agilidade:</strong> compromisso estrito com SLA e resposta.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#EE4C1B] shrink-0" />
                  <span><strong>Inovação Segura:</strong> tecnologia homologada e testada.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMO FUNCIONA O ATENDIMENTO DUALCON
         ========================================================================= */}
      <section className="bg-white py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Metodologia de Trabalho
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
              Como funciona o atendimento DUALCON
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Um fluxo claro, consultivo e focado na solução definitiva de problemas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <span className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">Etapa 01</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Diagnóstico Gratuito</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Mapeamos a estrutura atual de servidores, rede, segurança e rotinas de backup para identificar gargalos e riscos.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <span className="text-xs font-bold text-[#094AEB] uppercase tracking-wider font-display">Etapa 02</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Planejamento & Dimensionamento</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Desenvolvemos uma proposta sob medida com equipamentos homologados Dell e licenças necessárias sem desperdício.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <span className="text-xs font-bold text-[#042148] uppercase tracking-wider font-display">Etapa 03</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Implantação Segura</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Execução limpa e transparente sem interromper o expediente de trabalho ou o fluxo comercial da sua empresa.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <span className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">Etapa 04</span>
              <h3 className="mt-2 text-base font-bold text-[#042148] font-display">Monitoramento Contínuo</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
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
