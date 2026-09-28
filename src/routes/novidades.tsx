import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { news } from '@/lib/site-content';
import { ContactBand } from '@/components/site-shell';

export const Route = createFileRoute('/novidades')({ head: () => ({ meta: [
  { title: 'Novidades e conteúdos de TI | Dualcon' },
  { name: 'description', content: 'Artigos da Dualcon sobre consultoria em TI, segurança cibernética, licenciamento, inteligência artificial e tecnologia.' },
  { property: 'og:title', content: 'Novidades e conteúdos de TI | Dualcon' },
  { property: 'og:description', content: 'Acompanhe conteúdos sobre tecnologia e infraestrutura para empresas.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
] }), component: NewsPage });

function NewsPage() { return <><section className="atmospheric mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8"><p className="text-sm font-semibold uppercase text-highlight">Novidades</p><h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Ideias para um mundo <span className="brand-gradient-text">mais conectado.</span></h1><p className="mt-6 max-w-2xl text-lg text-muted-foreground">Conteúdos sobre tecnologia, segurança e os desafios de TI que fazem parte da rotina das empresas.</p></section><section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{news.map((item,i) => <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group flex min-h-72 flex-col rounded-lg border border-border bg-card/55 p-7 transition-colors hover:border-brand/50"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-highlight">{item.category}</span><span className="font-display text-sm text-muted-foreground">0{i+1}</span></div><h2 className="mt-8 text-xl font-semibold leading-snug">{item.title}</h2><p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p><div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground"><span>{item.date}</span><span className="inline-flex items-center gap-1 font-semibold text-highlight">Ler artigo <ArrowUpRight className="size-4"/></span></div></a>)}</div><p className="mt-8 text-sm text-muted-foreground">Os artigos completos abrem no site original da Dualcon.</p></section><ContactBand /></>; }
