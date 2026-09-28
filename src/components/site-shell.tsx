import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { to: '/', label: 'Início' },
  { to: '/quem-somos', label: 'Quem Somos' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/novidades', label: 'Novidades' },
  { to: '/contato', label: 'Contato' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <header className="relative z-30 border-b border-border bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
      <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Dualcon, início">
        <span className="action-gradient grid size-10 place-items-center rounded-lg font-display text-xl font-extrabold">D</span>
        <span className="font-display text-xl font-bold">Dualcon<span className="text-brand">.</span></span>
      </Link>
      <nav aria-label="Navegação principal" className="hidden items-center gap-1 rounded-full border border-border bg-card/50 p-1.5 backdrop-blur-xl md:flex">
        {links.map(link => <Link key={link.to} to={link.to} className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${pathname === link.to ? 'bg-brand text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{link.label}</Link>)}
      </nav>
      <Button variant="hero" size="pill" asChild className="hidden lg:inline-flex"><Link to="/contato">Fale com um especialista <ArrowRight /></Link></Button>
      <Button variant="glass" size="icon" className="md:hidden" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Navegação móvel" className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-5 py-5 shadow-xl md:hidden">{links.map(link => <Link onClick={() => setOpen(false)} key={link.to} to={link.to} className={`rounded-md px-4 py-3 text-sm ${pathname === link.to ? 'bg-brand text-primary-foreground' : 'text-foreground'}`}>{link.label}</Link>)}</nav>}
  </header>;
}

export function ContactBand({ title = 'Vamos conversar sobre a sua infraestrutura?' }: { title?: string }) {
  return <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><div className="panel-gradient flex flex-col items-start justify-between gap-7 rounded-lg border border-brand/20 p-8 md:p-12 lg:flex-row lg:items-center"><div><h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2><p className="mt-4 max-w-xl text-muted-foreground">Conte com nossa equipe para encontrar as soluções certas para sua operação.</p></div><Button variant="light" size="pill" asChild className="shrink-0"><Link to="/contato">Iniciar conversa <ArrowRight /></Link></Button></div></section>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-steel"><div className="mx-auto grid max-w-7xl gap-9 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8"><div><Link to="/" className="font-display text-xl font-bold">Dualcon<span className="text-brand">.</span></Link><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">Conectividade e infraestrutura de TI para empresas que precisam seguir em frente.</p></div><div><p className="mb-4 text-sm font-semibold">Navegação</p><div className="grid gap-2">{links.map(link => <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-brand">{link.label}</Link>)}</div></div><div><p className="mb-4 text-sm font-semibold">Contato</p><a href="tel:+555135935437" className="block text-sm text-muted-foreground hover:text-brand">(51) 3593-5437</a><a href="https://wa.me/5551993321591" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-muted-foreground hover:text-brand">(51) 99332-1591</a><p className="mt-2 text-sm text-muted-foreground">Campo Bom, RS</p></div></div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Dualcon Conectividade</div></footer>;
}
