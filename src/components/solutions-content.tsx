import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ShieldCheck, DatabaseBackup, Network } from 'lucide-react';
import { solutions } from '@/lib/site-content';
import { Button } from '@/components/ui/button';

export function OperationPanel() {
  return <div className="rounded-lg border border-border bg-card/70 p-6 shadow-2xl backdrop-blur-2xl">
    <div className="flex items-center justify-between gap-4"><span className="font-display text-sm font-semibold">Sua operação, em boas mãos</span><span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">Dualcon</span></div>
    <div className="mt-5 space-y-3">{[
      { icon: ShieldCheck, title: 'Segurança da Informação', detail: 'Bitdefender e Fortinet', tag: 'Proteção' },
      { icon: DatabaseBackup, title: 'Backup Gerenciado', detail: 'Tecnologia Veeam', tag: 'Continuidade' },
      { icon: Network, title: 'Infraestrutura de Redes', detail: 'Camadas física e lógica', tag: 'Conexão' },
    ].map(item => <div key={item.title} className="flex min-h-20 items-center justify-between gap-4 rounded-md border border-border bg-steel/70 p-4"><div className="flex items-center gap-3"><item.icon className="size-5 shrink-0 text-highlight"/><div><p className="text-sm font-semibold">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.detail}</p></div></div><span className="hidden text-xs font-semibold text-highlight sm:block">{item.tag}</span></div>)}</div>
  </div>;
}

export function SolutionsGrid({ compact = false }: { compact?: boolean }) {
  return <section id="portfolio" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><div className="mb-10 flex items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase text-highlight">Portfólio</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Seis frentes, um padrão</h2></div><span className="hidden text-sm text-muted-foreground sm:block">06 soluções</span></div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{solutions.map(item => <article key={item.number} className="group flex min-h-64 flex-col rounded-lg border border-border bg-card/45 p-6 backdrop-blur-xl transition-colors hover:border-brand/40 hover:bg-card/80"><span className="grid size-12 place-items-center rounded-md bg-brand/15 font-display font-bold text-highlight">{item.number}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.short}</p><Link to="/solucoes" hash={`solucao-${item.number}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:text-brand">Conhecer solução <ArrowUpRight className="size-4" /></Link></article>)}</div>
    {compact && <div className="mt-8"><Button variant="glass" size="pill" asChild><Link to="/solucoes">Ver todas as soluções <ArrowUpRight /></Link></Button></div>}
  </section>;
}

export function SolutionDetails() {
  return <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="mb-10 border-t border-border pt-14"><p className="text-sm font-semibold uppercase text-highlight">Em detalhe</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Tecnologia para cada necessidade.</h2></div><div className="divide-y divide-border border-y border-border">{solutions.map(item => <article id={`solucao-${item.number}`} key={item.number} className="grid scroll-mt-24 gap-5 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-8 md:py-14"><span className="font-display text-xl font-bold text-brand">{item.number}</span><div><h3 className="text-2xl font-semibold">{item.title}</h3><p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{item.detail}</p></div><div className="md:pl-8"><p className="mb-4 text-xs font-bold uppercase text-highlight">O que está incluído</p><ul className="space-y-3">{item.points.map(point => <li key={point} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"/>{point}</li>)}</ul><Link to="/contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:text-brand">Conversar sobre esta solução <ArrowUpRight className="size-4"/></Link></div></article>)}</div></section>;
}
