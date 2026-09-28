import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/site-shell';

export const Route = createFileRoute('/contato')({
  head: () => ({
    meta: [
      { title: 'Contato & Localização | Dualcon Conectividade' },
      { name: 'description', content: 'Fale com a equipe técnica e comercial da Dualcon por WhatsApp, telefone, formulário ou conheça nossa sede em Campo Bom – RS.' },
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
          1. BANNER IMAGEM + TÍTULO E TEXTO DE APOIO
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
          <div className="max-w-3xl space-y-6">
            <span className="section-badge section-badge-dark">
              CANAIS DE CONTATO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display leading-tight">
              Fale com a nossa <span className="text-gradient-shimmer italic font-black">equipe</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-body">
              Atendimento ágil, presencial e remoto no Rio Grande do Sul. Estamos prontos para entender e solucionar as necessidades da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FORMULÁRIO DE CONTATO (GERAL) + DADOS (E-MAIL, TELEFONE, WHATSAPP)
         ========================================================================= */}
      <section className="bg-[#060B18] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Formulário Geral em Glassmorphism */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 shadow-2xl border-t-2 border-t-[#EE4C1B]">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Envie sua Mensagem
              </h2>
              <p className="mt-2 text-xs text-slate-300 font-body">
                Preencha os campos para falar diretamente com nosso time consultivo e técnico.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl glass-panel p-8 text-center border-emerald-500/40">
                  <CheckCircle2 className="size-12 text-emerald-400 mx-auto mb-3" />
                  <p className="font-bold text-lg text-white font-display">Mensagem Enviada!</p>
                  <p className="text-xs text-slate-300 mt-1">Sua solicitação foi direcionada diretamente para o WhatsApp da Dualcon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#094AEB] focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">E-mail Corporativo *</label>
                      <input
                        type="email"
                        required
                        placeholder="seu@empresa.com.br"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#094AEB] focus:bg-white/10 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(51) 99999-9999"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#094AEB] focus:bg-white/10 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">Assunto Principal *</label>
                    <select
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="w-full rounded-xl bg-[#0A1226] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#094AEB] focus:outline-none transition-all"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">Como podemos ajudar? *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Descreva brevemente a infraestrutura atual ou demanda da sua empresa..."
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#094AEB] focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#EE4C1B] to-[#ff5e30] hover:from-[#ff5e30] hover:to-[#EE4C1B] text-white font-bold h-14 text-sm transition-all cursor-pointer font-display shadow-xl shadow-[#EE4C1B]/25 hover:scale-105"
                  >
                    Enviar Mensagem no WhatsApp
                    <Send className="size-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Dados Diretos de Atendimento em Glassmorphism */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Card */}
              <div className="glass-panel rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-emerald-500/20 text-[#25d366] border border-emerald-500/30">
                    <MessageSquare className="size-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Corporativo</p>
                    <p className="text-xl font-extrabold text-white font-display">+55 (51) 99332-1591</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5551993321591"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block w-full rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-center py-3 text-xs transition-transform font-display shadow-lg shadow-emerald-500/20 hover:scale-105"
                >
                  Abrir conversa no WhatsApp ↗
                </a>
              </div>

              {/* Telefone Fixo */}
              <div className="glass-panel rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#094AEB]/20 border border-[#094AEB]/30 text-[#094AEB]">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Central Telefônica</p>
                    <p className="text-xl font-extrabold text-white font-display">+55 (51) 3593-5437</p>
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="glass-panel rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-white/10 border border-white/20 text-white">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">E-mail de Contato</p>
                    <a href="mailto:comercial@d2c.net.br" className="text-sm font-bold text-[#EE4C1B] hover:underline font-display">
                      comercial@d2c.net.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="glass-panel rounded-2xl p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#EE4C1B]/20 border border-[#EE4C1B]/30 text-[#EE4C1B] shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sede Dualcon</p>
                    <p className="text-sm font-semibold text-slate-200 leading-snug mt-1 font-body">
                      Av. Carlos Strassburger Filho, 5796 – Pavilhão H <br />
                      Campo Bom – RS • CEP 93700-000
                    </p>
                    <p className="text-xs text-slate-400 mt-2">Horário: Seg a Sex das 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LOCALIZAÇÃO (MAPA INTEGRADO)
         ========================================================================= */}
      <section className="bg-[#040916] py-24 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-2xl mb-10">
            <span className="section-badge section-badge-dark mb-3">
              LOCALIZAÇÃO
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
              Venha tomar um café em nossa sede
            </h2>
            <p className="mt-2 text-sm text-slate-400 font-body">
              Estamos situados no polo empresarial de Campo Bom, com fácil acesso a toda a região metropolitana e Serra Gaúcha.
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
        </div>
      </section>

      {/* =========================================================================
          4. BANNER TRABALHE CONOSCO
         ========================================================================= */}
      <section className="bg-[#060B18] py-20 px-5 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 glass-panel rounded-3xl p-8 lg:p-12 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#094AEB] font-display mb-2">
              <Briefcase className="size-4 text-[#EE4C1B]" />
              Carreiras & Oportunidades
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Trabalhe Conosco na Dualcon
            </h3>
            <p className="mt-2 text-sm text-slate-300 font-body">
              Você é apaixonado por tecnologia, redes e atendimento humano de excelência? Envie seu currículo para nosso banco de talentos e faça parte da nossa história.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#094AEB] to-[#1e5df7] hover:from-[#1e5df7] hover:to-[#094AEB] text-white font-bold px-8 h-12 text-xs transition-all shrink-0 font-display shadow-lg shadow-[#094AEB]/25 hover:scale-105"
          >
            <a href="mailto:rh@d2c.net.br?subject=Curriculo%20-%20Trabalhe%20Conosco%20Dualcon">
              Enviar Currículo por E-mail
              <ArrowRight className="size-3.5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Faixa Final */}
      <ContactBand />
    </>
  );
}
