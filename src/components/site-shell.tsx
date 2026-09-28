import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Menu de Navegação Oficial conforme Mapa de Site solicitado:
// 1. HOME (Início)
// 2. A DUALCON (Quem Somos / Institucional)
// 3. SOLUÇÕES (Vertical de Soluções)
// 4. EQUIPE (Nossa Equipe e Especialistas)
// 5. BLOG (Novidades e Artigos)
// 6. CONTATO (Fale Conosco)
const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/quem-somos', label: 'A DUALCON' },
  { to: '/solucoes', label: 'SOLUÇÕES' },
  { to: '/equipe', label: 'EQUIPE' },
  { to: '/novidades', label: 'BLOG' },
  { to: '/contato', label: 'CONTATO' },
] as const;

export function TopBar() {
  return (
    <div className="bg-[#042148] text-white py-2 px-5 lg:px-8 text-xs font-medium border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/5551993321591"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#EE4C1B] transition-colors"
          >
            <MessageSquare className="size-3.5 text-[#EE4C1B]" />
            <span>+55 (51) 99332-1591</span>
          </a>
          <a
            href="tel:+555135935437"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#EE4C1B] transition-colors"
          >
            <Phone className="size-3.5 text-[#094AEB]" />
            <span>+55 (51) 3593-5437</span>
          </a>
          <span className="hidden md:flex items-center gap-1 text-slate-300">
            <MapPin className="size-3.5 text-slate-400" />
            <span>Campo Bom – RS • Vale dos Sinos</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-slate-300">
            Há 20 anos conectando o agora ao futuro.
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/dualcon_conectividade/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-[#EE4C1B] transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://br.linkedin.com/in/dualcon-conectividade-4309b7127"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-[#094AEB] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 bg-[#060B18]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          
          {/* Logo Oficial Vetorial em SVG Horizontal Branca */}
          <Link to="/" className="flex items-center shrink-0 group" aria-label="Dualcon Conectividade">
            <img
              src="/logo-dualcon-horizontal-white.svg"
              alt="Dualcon Conectividade"
              width={220}
              height={48}
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Menu de Navegação Moderno */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-xs font-bold tracking-wider transition-all rounded-full font-display ${
                    isActive
                      ? 'bg-[#EE4C1B] text-white shadow-md shadow-[#EE4C1B]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Atendimento Direto */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold px-6 h-10 text-xs transition-all tracking-wide font-display shadow-lg shadow-[#EE4C1B]/25 hover:shadow-[#EE4C1B]/40 hover:scale-105"
            >
              <a
                href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI."
                target="_blank"
                rel="noreferrer"
              >
                Fale Conosco
                <ArrowRight className="size-3.5 ml-1.5" />
              </a>
            </Button>
          </div>

          {/* Botão Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <nav className="border-t border-white/10 bg-[#0A1226]/95 backdrop-blur-2xl px-6 py-5 lg:hidden flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold font-display ${
                  pathname === link.to
                    ? 'bg-[#EE4C1B] text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/5551993321591"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25d366] text-white py-3 font-bold text-xs"
              >
                <MessageSquare className="size-4" />
                WhatsApp (51) 99332-1591
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Estou%20no%20site%20da%20Dualcon%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center size-14 rounded-full bg-[#25d366] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg className="size-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.92-.477-1.528-.633-2.511-2.185-2.587-2.285-.077-.101-.617-.824-.617-1.57 0-.746.391-1.114.53-1.265.14-.15.305-.188.406-.188.102 0 .204.002.293.007.094.004.221-.035.345.263.128.307.436 1.066.474 1.144.038.077.063.168.012.268-.051.101-.077.164-.152.253-.076.088-.16.197-.229.265-.076.076-.156.159-.067.311.089.152.396.654.85 1.059.584.521 1.077.683 1.23.759.152.076.241.063.33-.038.089-.102.381-.444.483-.596.101-.152.203-.127.34-.076.14.051.889.418 1.041.494.153.076.254.114.292.177.038.064.038.368-.106.773z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.176L2 22l4.981-1.393A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.15-.466-4.437-1.272l-.318-.2-2.964.829.844-2.884-.219-.348A8.172 8.172 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
        </svg>
      </a>
    </aside>
  );
}

export function ContactBand({
  title = 'Conectando o agora ao futuro da sua empresa.',
  subtitle = 'Converse com nossos especialistas e descubra como uma infraestrutura de TI sólida, segura e gerenciada transforma sua operação.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative text-white py-20 px-5 lg:px-8 border-t border-white/10 overflow-hidden bg-[#0A1226]">
      {/* Imagem de Fundo em Parallax Suave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/CDR-Technology.png"
          alt="Tecnologia e conectividade Dualcon"
          className="w-full h-[140%] -translate-y-10 object-cover object-center opacity-30 animate-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#042148]/90 to-[#2B2B2B]/90" />
      </div>

      {/* Feixes de luz suaves */}
      <div className="absolute -top-20 right-10 w-96 h-96 bg-[#EE4C1B]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#094AEB]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="section-badge section-badge-dark mb-4">
            ATENDIMENTO CONSULTIVO
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
            {title}
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed font-body">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold h-14 px-8 text-sm transition-all shadow-xl shadow-[#EE4C1B]/30 hover:scale-105 font-display"
          >
            <a
              href="https://wa.me/5551993321591?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI."
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare className="size-4 mr-2" />
              Falar com um Especialista
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full glass-panel hover:bg-white/20 text-white font-bold h-14 px-8 text-sm transition-all font-display border border-white/25 hover:border-white"
          >
            <Link to="/contato">
              Enviar Mensagem
              <ArrowRight className="size-4 ml-2 text-[#094AEB]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function InstagramFeedWidget() {
  return (
    <section className="bg-[#060B18] py-20 px-5 lg:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Luz de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#094AEB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="section-badge section-badge-dark mb-2">
              COMUNICAÇÃO VISUAL & REDES
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
              Acompanhe a Dualcon no Instagram
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Conteúdos práticos, novidades do setor de TI e podcasts sobre segurança digital.
            </p>
          </div>
          <a
            href="https://www.instagram.com/dualcon_conectividade/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white px-5 py-2.5 transition-all inline-flex items-center gap-2 font-display hover:border-[#EE4C1B]"
          >
            <span>@dualcon_conectividade</span>
            <span className="text-[#EE4C1B]">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Post 1: Glass Segurança 3D */}
          <a
            href="https://www.instagram.com/dualcon_conectividade/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2 flex flex-col"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="/post-glass-seguranca.png"
                alt="Segurança e Gestão de TI com Vidro 3D"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white font-display">
                Segurança Corporativa & Gestão
              </div>
            </div>
          </a>

          {/* Post 2: Conectando o agora ao futuro */}
          <a
            href="https://www.instagram.com/dualcon_conectividade/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2 flex flex-col"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="/post-futuro.jpg"
                alt="Conectando o agora ao futuro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white font-display">
                Conectando o Agora ao Futuro
              </div>
            </div>
          </a>

          {/* Post 3: Conversas que Transformam Podcast */}
          <a
            href="https://www.instagram.com/dualcon_conectividade/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2 flex flex-col"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="/post-conversas.png"
                alt="Podcast Conversas que Transformam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white font-display">
                Podcast & Insights de Negócios
              </div>
            </div>
          </a>

          {/* Post 4: Principais Tendências de TI para 2026 (Nova Arte do Cliente) */}
          <a
            href="https://www.instagram.com/dualcon_conectividade/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover p-2 flex flex-col"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="/post-tendencias-2026.png"
                alt="Principais Tendências de TI para 2026"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white font-display">
                Tendências de TI para 2026
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0F0F0F] text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1 - Identidade Oficial */}
          <div className="space-y-4">
            <img
              src="/logo-dualcon-horizontal-white.svg"
              alt="Dualcon Conectividade"
              width={190}
              height={45}
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
              Conectando o agora ao futuro.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Soluções em conectividade, consultoria e infraestrutura de TI corporativa. Há 20 anos no Vale dos Sinos e RS.
            </p>
            
            {/* Ícones Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dualcon_conectividade/"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#EE4C1B] transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://br.linkedin.com/in/dualcon-conectividade-4309b7127"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#094AEB] transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.facebook.com/dualcond2c"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#094AEB] transition-colors"
                aria-label="Facebook"
              >
                fb
              </a>
            </div>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2 font-display">
              Soluções em TI
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/solucoes" hash="consultoria" className="hover:text-[#EE4C1B] transition-colors">Consultoria e Suporte</Link></li>
              <li><Link to="/solucoes" hash="seguranca" className="hover:text-[#EE4C1B] transition-colors">Segurança da Informação</Link></li>
              <li><Link to="/solucoes" hash="backup" className="hover:text-[#EE4C1B] transition-colors">Backup Gerenciado</Link></li>
              <li><Link to="/solucoes" hash="dell" className="hover:text-[#EE4C1B] transition-colors">Equipamentos Dell</Link></li>
              <li><Link to="/solucoes" hash="redes" className="hover:text-[#EE4C1B] transition-colors">Infraestrutura de Redes</Link></li>
              <li><Link to="/solucoes" hash="licenciamento" className="hover:text-[#EE4C1B] transition-colors">Licenciamento de Software</Link></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2 font-display">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-[#EE4C1B] transition-colors">1. HOME</Link></li>
              <li><Link to="/quem-somos" className="hover:text-[#EE4C1B] transition-colors">2. A DUALCON</Link></li>
              <li><Link to="/solucoes" className="hover:text-[#EE4C1B] transition-colors">3. SOLUÇÕES</Link></li>
              <li><Link to="/equipe" className="hover:text-[#EE4C1B] transition-colors">4. EQUIPE</Link></li>
              <li><Link to="/novidades" className="hover:text-[#EE4C1B] transition-colors">5. BLOG</Link></li>
              <li><Link to="/contato" className="hover:text-[#EE4C1B] transition-colors">6. CONTATO</Link></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2 font-display">
              Contato & Localização
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-[#094AEB]" />
                <a href="tel:+555135935437" className="hover:text-white">+55 (51) 3593-5437</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="size-4 text-[#EE4C1B]" />
                <a href="https://wa.me/5551993321591" target="_blank" rel="noreferrer" className="hover:text-white">+55 (51) 99332-1591</a>
              </p>
              <p className="flex items-start gap-2 pt-2 text-xs text-slate-400 leading-relaxed">
                <MapPin className="size-4 text-[#EE4C1B] shrink-0 mt-0.5" />
                <span>Av. Carlos Strassburger Filho, 5796 – Pavilhão H, Campo Bom – RS</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dualcon Conectividade. Todos os direitos reservados.</p>
          <p>Manual de Marca & Projeto desenvolvido por Respira Comunicação</p>
        </div>
      </div>
    </footer>
  );
}
