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
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-8 font-display">
          Parceiros Tecnológicos Homologados
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partnerLogosData.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#094AEB] hover:bg-white transition-all h-20"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
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
    <section id="portfolio" className="bg-[#f8fafc] py-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
            Nossas Especialidades
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#042148] font-display">
            Soluções Completas em Conectividade e TI
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Da infraestrutura física e servidores dedicados à proteção em nuvem e suporte diário.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = solutionIcons[item.id] || Server;

            return (
              <article
                key={item.number}
                className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-8 shadow-xs hover:shadow-md hover:border-[#094AEB] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid size-12 place-items-center rounded-lg bg-slate-100 text-[#042148] group-hover:bg-[#042148] group-hover:text-white transition-colors">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-bold text-sm text-slate-400 font-display">
                      {item.number}
                    </span>
                  </div>

                  <span className="inline-block mt-6 text-xs font-bold uppercase tracking-wider text-[#EE4C1B]">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-[#042148] font-display group-hover:text-[#094AEB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.short}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {item.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 className="size-4 text-[#094AEB] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/solucoes"
                    hash={item.id}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#042148] hover:text-[#094AEB] transition-colors"
                  >
                    Ver detalhes
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded bg-[#EE4C1B] hover:bg-[#d63d0f] text-white text-xs font-bold px-3.5 py-1.5 transition-colors"
                  >
                    Cotar Solução
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
