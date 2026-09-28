import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';
import { ScrollReveal } from '@/components/scroll-reveal';

export const Route = createFileRoute('/contato')({
  head: () => ({
    meta: [
      { title: 'Contato & Localização | Dualcon Conectividade' },
      { name: 'description', content: 'Fale com a equipe técnica e comercial da Dualcon por WhatsApp, telefone ou formulário.' },
      { property: 'og:title', content: 'Contato | Dualcon Conectividade' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Suporte & Infraestrutura',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}.\nEmail: ${form.email}\nTelefone: ${form.telefone}\nAssunto: ${form.assunto}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5551993321591?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* =========================================================================
          1. BANNER COM MOVIMENTO DINÂMICO
         ========================================================================= */}
      <section className="relative bg-[#060B18] text-white py-28 lg:py-36 px-5 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Glows de ambientação com parallax */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#094AEB]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#EE4C1B]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-6">
              <span className="section-badge section-badge-dark">
                ATENDIMENTO PROATIVO
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-display">
                Fale com nossos especialistas em <span className="text-gradient-shimmer italic font-black">infraestrutura de TI.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-body">
                Estamos prontos para atender sua empresa de forma consultiva, ágil e sem complicações.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2. FORMULÁRIO DE CONTATO + INFORMAÇÕES DIRETAS (ALTO CONTRASTE)
         ========================================================================= */}
      <section className="bg-[#0F0F0F] py-24 px-5 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Formulário de Envio Direto */}
            <div className="lg:col-span-7 bg-[#1A1A1E] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <ScrollReveal direction="up">
                <div className="mb-8">
                  <span className="text-xs font-bold text-[#EE4C1B] uppercase tracking-wider font-display">
                    Envie sua mensagem
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white font-display">
                    Solicite um atendimento consultivo
                  </h2>
                  <p className="mt-2 text-sm text-slate-400 font-body">
                    Preencha o formulário abaixo para direcionarmos seu chamado ao setor técnico ou comercial correto.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center space-y-3">
                    <CheckCircle2 className="size-12 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-white font-display">Mensagem enviada com sucesso!</h3>
                    <p className="text-xs text-slate-300">
                      Nossa equipe responderá em minutos pelo WhatsApp ou canal indicado.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-bold text-[#094AEB] hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">Seu Nome / Empresa *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva – Metalúrgica XYZ"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="w-full rounded-xl bg-[#24242A] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#094AEB] focus:bg-[#282830] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">E-mail Corporativo *</label>
                        <input
                          type="email"
                          required
                          placeholder="carlos@empresa.com.br"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl bg-[#24242A] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#094AEB] focus:bg-[#282830] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">WhatsApp / Telefone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(51) 99999-9999"
                          value={form.telefone}
                          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                          className="w-full rounded-xl bg-[#24242A] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#094AEB] focus:bg-[#282830] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">Assunto Principal</label>
                      <select
                        value={form.assunto}
                        onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                        className="w-full rounded-xl bg-[#24242A] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#094AEB] focus:outline-none transition-all"
                      >
                        <option value="Consultoria e Suporte TI">Consultoria e Suporte TI</option>
                        <option value="Equipamentos e Servidores Dell">Equipamentos e Servidores Dell</option>
                        <option value="Segurança e Backup Veeam">Segurança e Backup Veeam</option>
                        <option value="Redes e Fibra Óptica">Redes e Fibra Óptica</option>
                        <option value="Licenciamento de Softwares">Licenciamento de Softwares</option>
                        <option value="Outros Assuntos">Outros Assuntos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">Como podemos ajudar? *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Descreva brevemente a infraestrutura atual ou demanda da sua empresa..."
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        className="w-full rounded-xl bg-[#24242A] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#094AEB] focus:bg-[#282830] focus:outline-none transition-all"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold h-14 text-sm transition-all cursor-pointer font-display shadow-xl shadow-[#EE4C1B]/25 hover:scale-102"
                    >
                      Enviar Mensagem no WhatsApp
                      <Send className="size-4 ml-2" />
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Dados Diretos de Atendimento em Cards de Alta Nitidez */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Card */}
              <ScrollReveal direction="up" delay={100}>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-3xl p-6 shadow-xl hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-emerald-500/20 text-[#25d366] border border-emerald-500/30">
                      <MessageSquare className="size-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">WhatsApp Corporativo</p>
                      <p className="text-xl font-extrabold text-white font-display">+55 (51) 99332-1591</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5551993321591"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 block w-full rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-center py-3 text-xs transition-transform font-display shadow-lg shadow-emerald-500/20 hover:scale-102"
                  >
                    Abrir conversa no WhatsApp ↗
                  </a>
                </div>
              </ScrollReveal>

              {/* Telefone Fixo */}
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-3xl p-6 shadow-xl hover:border-[#094AEB]/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-[#094AEB]/20 border border-[#094AEB]/30 text-[#094AEB]">
                      <Phone className="size-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">Central Telefônica</p>
                      <p className="text-xl font-extrabold text-white font-display">+55 (51) 3593-5437</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* E-mail */}
              <ScrollReveal direction="up" delay={300}>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-3xl p-6 shadow-xl hover:border-[#EE4C1B]/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white/10 border border-white/20 text-white">
                      <Mail className="size-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">E-mail de Contato</p>
                      <a href="mailto:comercial@d2c.net.br" className="text-base font-bold text-[#EE4C1B] hover:underline font-display">
                        comercial@d2c.net.br
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Localização da Empresa */}
              <ScrollReveal direction="up" delay={400}>
                <div className="bg-[#1A1A1E] border border-white/10 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-[#EE4C1B]/20 border border-[#EE4C1B]/30 text-[#EE4C1B] shrink-0">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">Localização</p>
                      <p className="text-sm font-semibold text-slate-200 leading-snug mt-1 font-body">
                        Av. Carlos Strassburger Filho, 5796 – Pavilhão H <br />
                        Campo Bom – RS • CEP 93700-000
                      </p>
                      <p className="text-xs text-slate-400 mt-2 font-body">Horário: Seg a Sex das 08h às 18h</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAPA INTEGRADO DE LOCALIZAÇÃO
         ========================================================================= */}
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mb-10">
              <span className="section-badge section-badge-dark mb-3">
                LOCALIZAÇÃO
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
                Localização no Vale dos Sinos – RS
              </h2>
              <p className="mt-2 text-sm text-slate-400 font-body">
                Situados no polo empresarial de Campo Bom, com fácil acesso a toda a região metropolitana de Porto Alegre e Serra Gaúcha.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.893817346857!2d-51.196969!3d-29.678431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519430154bc67c9%3A0xe4a1936e3cb2d2c1!2sAv.%20Carlos%20Strassburger%20Filho%2C%205796%20-%20Campo%20Bom%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização da Dualcon Conectividade"
                className="rounded-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Faixa Final */}
      <ContactBand />
    </>
  );
}
