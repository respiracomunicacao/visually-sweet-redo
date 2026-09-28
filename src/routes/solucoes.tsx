import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';
import { OperationPanel, SolutionsGrid, SolutionDetails } from '@/components/solutions-content';

export const Route = createFileRoute('/solucoes')({
  head: () => ({ meta: [
    { title: 'Soluções de TI | Dualcon' },
    { name: 'description', content: 'Consultoria e suporte, segurança da informação, backup gerenciado, equipamentos Dell, redes e licenciamento na Dualcon.' },
    { property: 'og:title', content: 'Soluções de TI | Dualcon' },
    { property: 'og:description', content: 'Conheça as seis frentes de atuação da Dualcon para empresas.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: SolutionsPage,
});

function SolutionsPage() {
  return <><section className="atmospheric mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:min-h-[620px] lg:grid-cols-12 lg:px-8"><div className="lg:col-span-7"><span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs font-semibold text-highlight"><span className="size-1.5 rounded-full bg-brand"/> CONECTIVIDADE & INFRAESTRUTURA DE TI</span><h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.1] md:text-6xl">Soluções que <span className="brand-gradient-text">mantêm sua operação no ar.</span></h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Consultoria, segurança, backup e infraestrutura para apoiar a continuidade do seu negócio. Conheça nossas seis frentes de atuação.</p><div className="mt-9 flex flex-wrap gap-3"><Button variant="hero" size="pill" asChild><a href="#portfolio">Explorar soluções <ArrowRight /></a></Button><Button variant="glass" size="pill" asChild><Link to="/contato">Falar com um especialista <ArrowRight /></Link></Button></div><div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"><span>Consultoria e suporte</span><span>Proteção de dados</span><span>Parceiros de tecnologia</span></div></div><div className="lg:col-span-5"><OperationPanel /></div></section><SolutionsGrid /><SolutionDetails /><ContactBand title="Pronto para fortalecer sua infraestrutura?" /></>;
}
