import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import datacenter from '@/assets/dualcon-datacenter.jpg';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';
import { SolutionsGrid } from '@/components/solutions-content';
import { news } from '@/lib/site-content';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Dualcon | Conectividade e infraestrutura de TI' },
    { name: 'description', content: 'Conheça a Dualcon: consultoria, segurança, backup, equipamentos, redes e licenciamento para empresas.' },
    { property: 'og:title', content: 'Dualcon | Conectividade e infraestrutura de TI' },
    { property: 'og:description', content: 'Soluções de TI para apoiar a continuidade da sua operação.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: HomePage,
});

function HomePage() {
  return <><section className="atmospheric mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 lg:min-h-[600px] lg:grid-cols-12 lg:px-8"><div className="lg:col-span-7"><span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs font-semibold text-highlight"><span className="size-1.5 rounded-full bg-brand"/> CONECTIVIDADE & INFRAESTRUTURA DE TI</span><h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.12] md:text-6xl">Tecnologia que <span className="brand-gradient-text">mantém seu negócio em movimento.</span></h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Há duas décadas, a Dualcon ajuda empresas a simplificar a TI com consultoria, segurança, backup e infraestrutura.</p><div className="mt-9 flex flex-wrap gap-3"><Button variant="hero" size="pill" asChild><Link to="/solucoes">Explorar soluções <ArrowRight /></Link></Button><Button variant="glass" size="pill" asChild><Link to="/contato">Falar com a equipe <ArrowUpRight /></Link></Button></div><div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"><span>Consultoria e suporte</span><span>Segurança da informação</span><span>Infraestrutura de redes</span></div></div><div className="lg:col-span-5"><div className="overflow-hidden rounded-lg border border-border bg-card/60 p-2 backdrop-blur-xl"><img src={datacenter} alt="Corredor de centro de dados com servidores em operação" width={1200} height={912} className="aspect-[4/3] w-full rounded-md object-cover" /></div></div></section>
  <SolutionsGrid compact />
  <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase text-highlight">Novidades</p><h2 className="mt-2 text-3xl font-bold">Conteúdo para seguir em frente.</h2></div><Link to="/novidades" className="text-sm font-semibold text-highlight hover:text-brand">Ver novidades ↗</Link></div><div className="grid gap-5 md:grid-cols-3">{news.slice(0,3).map(item => <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group flex min-h-52 flex-col rounded-lg border border-border bg-card/50 p-6 hover:border-brand/40"><span className="text-xs text-highlight">{item.category}</span><h3 className="mt-4 flex-1 text-lg font-semibold leading-snug">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-highlight">Ler artigo <ArrowUpRight className="size-4"/></span></a>)}</div></section><ContactBand /></>;
}
