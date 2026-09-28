import React from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Network,
  Server,
  FileCheck,
  Headset,
  CheckCircle2,
} from 'lucide-react';
import { solutions, SolutionItem } from '@/lib/site-content';

// Mapeamento de ícones específicos
const solutionIcons: Record<string, React.ElementType> = {
  consultoria: Headset,
  seguranca: ShieldCheck,
  backup: HardDrive,
  dell: Server,
  redes: Network,
  licenciamento: FileCheck,
};

// Logos oficiais baixados
export const partnerLogosData = [
  { name: 'Dell Technologies', logo: '/partner-dell.svg', alt: 'Dell Technologies Logo' },
  { name: 'Veeam', logo: '/partner-veeam.svg', alt: 'Veeam Logo' },
  { name: 'Fortinet', logo: '/partner-fortinet.svg', alt: 'Fortinet Logo' },
  { name: 'Bitdefender', logo: '/partner-bitdefender.svg', alt: 'Bitdefender Logo' },
  { name: 'Microsoft', logo: '/partner-microsoft.svg', alt: 'Microsoft Logo' },
  { name: 'Adobe', logo: '/partner-adobe.png', alt: 'Adobe Logo' },
];

export function PartnerLogosBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex justify-center mb-8">
          <span className="section-badge section-badge-light">
            PARCEIROS TECNOLÓGICOS HOMOLOGADOS
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partnerLogosData.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 rounded-2xl glass-panel-light glass-panel-light-hover h-20 group shadow-xs hover:border-[#094AEB]"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-h-8 max-w-[120px] object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section id="portfolio" className="bg-[#060B18] py-24 px-5 lg:px-8 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#094AEB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#EE4C1B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge section-badge-dark mb-3">
            ESPECIALIDADES & INFRAESTRUTURA
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white font-display">
            Soluções Completas em Conectividade e TI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Da segurança cibernética avançada com backup em nuvem à implantação de servidores de alta performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = solutionIcons[item.id] || Server;

            return (
              <article
                key={item.number}
                className="flex flex-col justify-between rounded-3xl bg-[#141A28] border border-white/10 p-8 relative group hover:border-[#094AEB]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid size-14 place-items-center rounded-2xl bg-[#042148]/60 border border-[#094AEB]/30 text-white group-hover:bg-[#094AEB] transition-all group-hover:scale-110 shadow-lg shadow-black/30">
                      <Icon className="size-6 text-[#094AEB] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#EE4C1B]/20 text-[#EE4C1B] border border-[#EE4C1B]/30 font-display">
                          {item.badge}
                        </span>
                      )}
                      <span className="font-bold text-xs tracking-wider text-slate-400 font-display px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block mt-6 text-[11px] font-bold uppercase tracking-wider text-[#EE4C1B] font-display">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold text-white font-display group-hover:text-[#094AEB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                    {item.short}
                  </p>

                  {/* Parceiros / Tecnologias */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.partners.map((partner) => (
                      <span
                        key={partner}
                        className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {item.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="size-3.5 text-[#EE4C1B] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/solucoes"
                    hash={item.id}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors group-hover:translate-x-1 font-display"
                  >
                    Ver detalhes
                    <ArrowRight className="size-3.5 text-[#094AEB]" />
                  </Link>

                  <a
                    href={`https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white text-xs font-bold px-4 py-2 transition-all shadow-md shadow-[#EE4C1B]/20 hover:scale-105 font-display"
                  >
                    Cotar Solução ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
