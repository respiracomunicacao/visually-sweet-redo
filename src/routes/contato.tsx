import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
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
      <section className="bg-[#042148] text-white py-20 px-5 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Canais de Contato
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display leading-tight">
              Fale com a nossa equipe
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Atendimento ágil, presencial e remoto no Rio Grande do Sul. Estamos prontos para entender e solucionar as necessidades da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FORMULÁRIO DE CONTATO (GERAL) + DADOS (E-MAIL, TELEFONE, WHATSAPP)
         ========================================================================= */}
      <section className="bg-slate-50 py-20 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Formulário Geral */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-8 md:p-10 shadow-xs">
              <h2 className="text-2xl font-bold text-[#042148] font-display">
                Envie sua Mensagem
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Preencha os campos para falar diretamente com nosso time consultivo e técnico.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-300 p-6 text-center">
                  <CheckCircle2 className="size-10 text-emerald-600 mx-auto mb-2" />
                  <p className="font-bold text-slate-800 font-display">Mensagem Enviada!</p>
                  <p className="text-xs text-slate-600 mt-1">Sua solicitação foi direcionada diretamente para o WhatsApp da Dualcon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-display">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#094AEB] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-display">E-mail Corporativo *</label>
                      <input
                        type="email"
                        required
                        placeholder="seu@empresa.com.br"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#094AEB] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-display">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(51) 99999-9999"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#094AEB] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-display">Assunto Principal *</label>
                    <select
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#094AEB] focus:outline-none transition-colors bg-white"
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
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1 font-display">Como podemos ajudar? *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Descreva brevemente a infraestrutura atual ou demanda da sua empresa..."
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#094AEB] focus:outline-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-[#EE4C1B] hover:bg-[#d63d0f] text-white font-bold h-12 text-sm transition-colors cursor-pointer font-display"
                  >
                    Enviar Mensagem no WhatsApp
                    <Send className="size-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Dados Diretos de Atendimento */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
                    <MessageSquare className="size-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase">WhatsApp Corporativo</p>
                    <p className="text-lg font-bold text-[#042148] font-display">+55 (51) 99332-1591</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5551993321591"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block w-full rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-center py-2.5 text-xs transition-colors font-display"
                >
                  Abrir conversa no WhatsApp ↗
                </a>
              </div>

              {/* Telefone Fixo */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-slate-100 text-[#042148]">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase">Central Telefônica</p>
                    <p className="text-lg font-bold text-[#042148] font-display">+55 (51) 3593-5437</p>
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-slate-100 text-[#094AEB]">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase">E-mail de Contato</p>
                    <a href="mailto:comercial@d2c.net.br" className="text-sm font-bold text-[#042148] hover:text-[#094AEB] font-display">
                      comercial@d2c.net.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-slate-100 text-[#EE4C1B] shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase">Sede Dualcon</p>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-1">
                      Av. Carlos Strassburger Filho, 5796 – Pavilhão H <br />
                      Campo Bom – RS • CEP 93700-000
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Horário: Seg a Sex das 08h às 18h</p>
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
      <section className="bg-white py-16 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE4C1B] font-display">
              Localização
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#042148] font-display">
              Venha tomar um café em nossa sede
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Estamos situados no polo empresarial de Campo Bom, com fácil acesso a toda a região metropolitana e Serra Gaúcha.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs aspect-[21/9] w-full bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.893817346857!2d-51.196969!3d-29.678431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519430154bc67c9%3A0xe4a1936e3cb2d2c1!2sAv.%20Carlos%20Strassburger%20Filho%2C%205796%20-%20Campo%20Bom%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização da Dualcon Conectividade"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BANNER TRABALHE CONOSCO
         ========================================================================= */}
      <section className="bg-slate-100 py-16 px-5 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#094AEB] font-display mb-2">
              <Briefcase className="size-4" />
              Carreiras & Oportunidades
            </div>
            <h3 className="text-2xl font-extrabold text-[#042148] font-display">
              Trabalhe Conosco na Dualcon
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Você é apaixonado por tecnologia, redes e atendimento humano de excelência? Envie seu currículo para nosso banco de talentos e faça parte da nossa história.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-[#042148] hover:bg-[#094AEB] text-white font-bold px-8 h-12 text-xs transition-colors shrink-0 font-display"
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
