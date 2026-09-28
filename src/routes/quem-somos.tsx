import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import datacenter from '@/assets/dualcon-datacenter.jpg';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';

export const Route = createFileRoute('/quem-somos')({ head: () => ({ meta: [
  { title: 'Quem Somos | Dualcon Conectividade' },
  { name: 'description', content: 'Conheça a Dualcon, empresa de tecnologia do Vale dos Sinos com duas décadas de atuação em TI.' },
  { property: 'og:title', content: 'Quem Somos | Dualcon Conectividade' },
  { property: 'og:description', content: 'Conhecimento tecnológico para gerar resultados e simplificar a operação das empresas.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
] }), component: AboutPage });

function AboutPage() { return <><section className="atmospheric mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8"><p className="text-sm font-semibold uppercase text-highlight">Quem somos</p><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.12] md:text-6xl">Somos a <span className="brand-gradient-text">Dualcon Conectividade.</span></h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">Há duas décadas, aproximamos empresas da tecnologia que faz a diferença no dia a dia da operação.</p><Button variant="hero" size="pill" asChild className="mt-8"><Link to="/solucoes">Conheça nossas soluções <ArrowRight /></Link></Button></section><section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-2 md:items-center lg:px-8"><div className="overflow-hidden rounded-lg border border-border"><img src={datacenter} alt="Infraestrutura de servidores e conectividade" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full object-cover"/></div><div><p className="text-sm font-semibold uppercase text-highlight">Nossa trajetória</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Conhecimento técnico para resultados reais.</h2><p className="mt-6 leading-relaxed text-muted-foreground">Situada no Vale dos Sinos, no Rio Grande do Sul, a Dualcon atua há duas décadas na área de tecnologia. Nossa missão é fornecer conhecimento tecnológico para gerar resultados e reduzir custos operacionais.</p><p className="mt-4 leading-relaxed text-muted-foreground">Trabalhamos com agilidade, disponibilidade e flexibilidade para apoiar as necessidades de cada empresa.</p><div className="mt-8 border-t border-border pt-6"><span className="font-display text-4xl font-bold text-highlight">20 anos</span><p className="mt-1 text-sm text-muted-foreground">de experiência no mercado de TI</p></div></div></section><ContactBand title="Vamos encontrar o próximo passo para sua TI?" /></>; }
