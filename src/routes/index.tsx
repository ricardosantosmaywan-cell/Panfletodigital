import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Sparkles,
  MapPin,
  Palette,
  FileBarChart,
  Unlock,
  Megaphone,
  Star,
  X as XIcon,
  Scissors,
  Heart,
  Hand,
  TrendingUp,
  Calculator,
  Zap,
} from "lucide-react";
import heroPhone from "@/assets/hero-phone-agenda.jpg";

const WHATSAPP = "351960225411";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panfletagem Digital para Beleza — Agenda Cheia · Maltadigital" },
      {
        name: "description",
        content:
          "Enche a tua agenda sem gastar uma fortuna em publicidade. Panfletagem digital segmentada por zona, idade e interesse. Sem contratos. Sem amarras. Resultados visíveis.",
      },
      { property: "og:title", content: "Panfletagem Digital para Beleza · Maltadigital" },
      {
        property: "og:description",
        content:
          "Segmentado por zona, idade e interesse. Clientes directas no teu WhatsApp. Design grátis, sem contratos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Panfletagem Digital para Beleza",
          provider: { "@type": "Organization", name: "Maltadigital" },
          areaServed: "PT",
          description:
            "Campanhas de anúncios digitais segmentados por zona, idade e interesse para cabeleireiras, manicures, esteticistas e salões em Portugal.",
        }),
      },
    ],
  }),
  component: AgendaCheia,
});

function AgendaCheia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Comparison />
      <How />
      <ForWho />
      <Distinctive />
      <Testimonial />
      <FAQ />
      <FooterCTA />
      <FloatingWA />
    </div>
  );
}

/* --------------------------------- Nav --------------------------------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/25 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-neon">
            M
          </span>
          <span className="text-gradient">MALTADIGITAL</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            ← Voltar ao início
          </Link>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------------- Hero -------------------------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-secondary/30 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
              <Sparkles size={14} className="animate-pulse-neon" />
              Cabeleireira · Manicure · Esteticista · Salão
            </div>
            <h1 className="font-display text-5xl leading-[0.95] font-extrabold md:text-6xl">
              Enche a tua agenda
              <br />
              <span className="text-gradient">sem gastar uma fortuna em publicidade.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Panfletagem digital: a forma mais inteligente de conseguir clientes novas.
              Segmentado por zona, idade e interesse. Sem contratos. Sem amarras. Resultados visíveis.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                disabled
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform opacity-60 cursor-not-allowed"
              >
                Quero testar 7 dias
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary/5 px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-primary"
              >
                Ver como funciona
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Sem contratos · Criativo grátis · Vês cada resultado
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/20 blur-[80px]" />
            <img
              src={heroPhone}
              alt="Mockup de smartphone mostrando três anúncios de panfletagem digital para salão de beleza: manicure, cabelo e estética"
              width={1536}
              height={1024}
              className="relative z-10 w-full rounded-2xl shadow-neon-lg"
              loading="eager"
            />
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Exemplo de anúncios que criamos para o teu salão
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["7", "Dias mínimo"],
            ["10 km", "Raio de alcance"],
            ["2", "Criativos grátis"],
            ["0 €", "Custo do design"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl border border-primary/25 bg-surface/60 p-4 backdrop-blur-sm">
              <div className="font-display text-3xl font-extrabold text-gradient">{v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Problem ------------------------------ */

function Problem() {
  const pains = [
    "As clientes que precisam de ti existem — só ainda não te encontram.",
    "O Instagram só chega a quem te segue — e isso não é suficiente.",
    "Boca-a-boca é lento — e tu precisas de clientes agora.",
    "Panfletagem em papel? Caro, lento, zero feedback. Não sabes se funciona.",
    "Outras agências cobram demasiado e pedem contratos longos.",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            ✦ O verdadeiro problema
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Tens talento.
            <br />
            A agenda <span className="text-gradient">não está como querias.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Sabes porquê? O problema não é a qualidade do teu trabalho.
            É visibilidade.
          </p>
        </div>
        <ul className="space-y-3">
          {pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-primary/25 bg-surface/60 p-4 backdrop-blur-sm"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                <XIcon size={14} />
              </span>
              <span className="text-sm text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ Comparison ----------------------------- */

function Comparison() {
  const rows: Array<[string, string, string]> = [
    ["Custo/mês", "300–500 €", "85–310 €"],
    ["Público alvo", "Quem encontra", "Segmentado (zona/idade)"],
    ["Sabes quem viu?", "Não", "Sim, exacto"],
    ["Sabes quem clicou?", "Impossível", "Sim, incluído"],
    ["Feedback real?", "Achismo", "Exacto (cliques, msg)"],
    ["Mudar promoção?", "Imprimir de novo", "Um clique"],
    ["Adaptável por hora?", "Não", "Sim, fácil"],
    ["Desperdício", "70% (lixo)", "Nenhum"],
    ["Segmentação", "Nenhuma", "Zona + idade + interesse"],
    ["Contratos?", "Depende", "Nenhum"],
    ["Sabes o ROI exacto?", "Não", "Sim, total"],
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="✦ Por que a panfletagem digital é melhor"
          title={<>Deixa de gastar em <span className="text-gradient">formas antigas.</span></>}
          sub="Papel vs panfletagem digital. Sem rodeios."
        />
        <div className="overflow-x-auto rounded-2xl border border-primary/30 bg-surface/60 backdrop-blur-sm">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-primary/25 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <th className="p-4"> </th>
                <th className="p-4">Papel</th>
                <th className="p-4 bg-primary/10 text-primary-glow">Panfletagem digital</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, c], i) => (
                <tr
                  key={label}
                  className={i % 2 ? "bg-background/30" : ""}
                >
                  <td className="p-4 font-display text-sm font-bold">{label}</td>
                  <td className="p-4 text-muted-foreground">{a}</td>
                  <td className="p-4 bg-primary/5 font-medium text-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- How -------------------------------- */

function How() {
  const steps = [
    { n: "01", t: "Escolhes o plano", d: "7, 15 ou 30 dias. Sem contratos. Pagas uma vez e arrancamos. Sem permanência. Sem amarras.", tag: "Sem permanência" },
    { n: "02", t: "Criamos o panfleto digital", d: "2 peças visuais profissionais com o teu serviço, preço e estilo. Design de graça. Tu só aprovas.", tag: "🎨 Design incluído" },
    { n: "03", t: "Tu aprovas", d: "Só avançamos com o teu OK. Controlo total. Não gostas? Ajustamos.", tag: "O teu estilo" },
    { n: "04", t: "Activamos na Meta", d: "Ligamos os anúncios. Chegamos a mulheres na tua zona que ainda não te conhecem mas precisam do teu serviço.", tag: "📣 Zona · idade · interesse" },
    { n: "05", t: "Clientes falam contigo", d: "Cada interessada clica e vai directa ao teu WhatsApp. Tu respondes. Tu marcas. Simples.", tag: "💬 WhatsApp directo" },
  ];
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Como funciona"
          title={<>5 passos <span className="text-gradient">simples.</span></>}
          sub="Zero complicações. Do briefing até clientes no teu WhatsApp."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ n, t, d, tag }) => (
            <article
              key={n}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-surface/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-neon"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary-glow">{n}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
              <span className="mt-4 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-glow">
                {tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- For Who ------------------------------ */

function ForWho() {
  const who = [
    { icon: Scissors, t: "Cabeleireira" },
    { icon: Hand, t: "Manicure" },
    { icon: Sparkles, t: "Esteticista" },
    { icon: Heart, t: "Salão (vários serviços)" },
  ];
  const fits = [
    "Trabalhas por conta própria ou tens o teu espaço.",
    "Queres mais clientes novas sem depender do boca-a-boca.",
    "Não tens tempo nem paciência para gerir publicidade.",
    "Queres resultados visíveis (não adivinhar se funciona).",
    "Estás em Portugal e serves uma zona específica.",
    "Queres testar antes de investir grandes quantidades.",
  ];
  const notFits = [
    "Esperas resultados garantidos (ninguém pode prometer isso).",
    "Queres 100 clientes em 1 semana (sê realista).",
    "A tua agenda está cheia e não queres crescer.",
    "Não sabes responder rápido no WhatsApp.",
    "Não tens qualidade mínima no atendimento.",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="✦ Para quem é"
          title={<>Feito para profissionais de beleza <span className="text-gradient">que querem crescer.</span></>}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {who.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-surface/60 p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-neon"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/50 bg-background/70 text-primary-glow">
                <Icon size={22} />
              </div>
              <span className="font-display text-base font-bold">{t}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">✓ é para ti</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-surface/60 p-8 backdrop-blur-sm">
            <h3 className="font-display text-xl font-bold">✅ Este serviço é para ti se…</h3>
            <ul className="mt-5 space-y-3">
              {fits.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-surface/40 p-8 backdrop-blur-sm">
            <h3 className="font-display text-xl font-bold">❌ Não é para ti se…</h3>
            <ul className="mt-5 space-y-3">
              {notFits.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                    <XIcon size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Distinctive ---------------------------- */

function Distinctive() {
  const items = [
    { icon: Palette, t: "Design profissional grátis", d: "Criamos 2 panfletos visuais para a tua campanha sem custo. Ex: “Manicure + Pedicure 15 €” ou “Corte Cabelo 25 €”. Tu só dizes o que queres, nós criamos." },
    { icon: MapPin, t: "Segmentação que funciona", d: "Chegamos a mulheres num raio de 5–15 km com interesse em beleza e na faixa etária certa. Não é toda a gente — é quem pode ir." },
    { icon: MessageCircle, t: "Clientes direto no WhatsApp", d: "Cada interessada clica no anúncio e fala contigo. Sem intermediários. Já vêm com interesse — maior probabilidade de marcar." },
    { icon: Unlock, t: "Sem contratos nem amarras", d: "Escolhes a duração. Quando acaba, decides. Sem pressão. Sem letras miúdas." },
    { icon: FileBarChart, t: "Relatório claro", d: "Vês exactamente quantas pessoas viram, quantas clicaram, quantas mandaram mensagem, a que hora e de que zonas." },
    { icon: Megaphone, t: "Gestão feita por nós", d: "Tratamos das contas, segmentação e ajustes. Tu só respondes a quem chega interessado." },
    { icon: Zap, t: "Flexibilidade em tempo real", d: "Mudou a promoção? Um clique. Queres testar outro horário? Ajustamos em 5 minutos. Papel = imprimir de novo. Nós = um clique." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Porquê nós"
          title={<>O que nos <span className="text-gradient">distingue.</span></>}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="flex flex-col rounded-2xl border border-primary/30 bg-surface/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-neon"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/50 bg-background/70 text-primary-glow">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonial ---------------------------- */

function Testimonial() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface/70 p-10 backdrop-blur-sm md:p-14">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
            "O que mudou tudo foi ser encontrada por quem realmente precisava.
            Não era mais esperar cliente chegar por acaso. Eram mulheres que iam procurar
            manicure, encontravam-me no telemóvel, clicavam no anúncio e já vinham preparadas
            para marcar. Em 1 semana a agenda encheu — e ainda continuo a usar."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-mono text-sm font-bold text-primary-foreground">
              SC
            </div>
            <div>
              <p className="font-display text-base font-bold">Sofia C.</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Manicure · Lisboa
              </p>
            </div>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ⭐ Quando tivermos mais casos reais, actualizamos com nomes e resultados concretos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Plans ------------------------------- */

function Plans() {
  const plans = [
    {
      dur: "7 dias",
      name: "Arranque",
      price: "85 €",
      desc: "Para testar a ideia. Sem compromisso.",
      note: "35 € budget de anúncios + 50 € gestão",
      feats: [
        "Panfleto digital com design profissional (grátis)",
        "Segmentação na tua zona (5–15 km)",
        "Anúncio activo 7 dias",
        "Clientes direto no teu WhatsApp",
        "1 relatório no final (viram, clicaram, mensagens)",
      ],
      footNote: "Depois de 7 dias: vês os números e decides continuar ou não. Sem contrato. Zero amarras.",
      highlight: false,
      cta: "Começar teste",
    },
    {
      dur: "15 dias",
      name: "Impulso",
      price: "165 €",
      desc: "Para quem viu potencial e quer mais tráfego.",
      note: "90 € budget de anúncios + 75 € gestão",
      feats: [
        "Panfleto digital (até 2 variações)",
        "Segmentação ajustável (zona, idade, hora do dia)",
        "Anúncio activo 15 dias",
        "Clientes direto no teu WhatsApp",
        "2 relatórios (dia 7 e dia 15 — ajustamos se preciso)",
      ],
      footNote: "Melhor custo-benefício. Tempo suficiente para validar.",
      highlight: true,
      cta: "Começar impulso",
    },
    {
      dur: "30 dias",
      name: "Presença",
      price: "310 €",
      desc: "Para crescimento consistente. Máxima eficiência.",
      note: "210 € budget de anúncios + 100 € gestão",
      feats: [
        "Panfleto digital (múltiplas variações por serviço)",
        "Segmentação por serviço (manicure, cabelo, estética…)",
        "Anúncio activo 30 dias",
        "Ajustes em tempo real (mudou promoção? alteramos)",
        "Clientes direto no teu WhatsApp",
        "4 relatórios semanais + recomendações",
      ],
      footNote: "Melhor para consolidar e crescer. Suporte contínuo.",
      highlight: false,
      cta: "Começar presença",
    },
  ];
  return (
    <section id="planos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Investe no teu negócio"
          title={<>Escolhe o teu <span className="text-gradient">plano.</span></>}
          sub="Tudo incluído — design, gestão e relatório. Sem surpresas."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm transition-all hover:-translate-y-2 ${
                p.highlight
                  ? "border-primary bg-gradient-to-b from-primary/15 to-surface/70 shadow-neon-lg"
                  : "border-primary/30 bg-surface/60 hover:border-primary hover:shadow-neon"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                  ⚡ Mais escolhido
                </span>
              )}
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary-glow">
                {p.dur}
              </p>
              <h3 className="mt-2 font-display text-3xl font-extrabold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold text-gradient">{p.price}</span>
                <span className="text-sm text-muted-foreground">tudo incluído</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                      <Check size={12} />
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg border border-primary/25 bg-background/50 p-3 font-mono text-[11px] text-muted-foreground">
                💡 {p.note}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{p.footNote}</p>
              <a
                href={waLink(`Olá Maltadigital! Quero o plano ${p.name} (${p.dur}) da Panfletagem Digital.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  p.highlight
                    ? "bg-accent text-accent-foreground shadow-glow-accent hover:scale-105"
                    : "border-2 border-primary bg-primary/5 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {p.cta} <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        {/* Recomendação */}
        <div className="mt-10 rounded-2xl border border-primary/30 bg-surface/60 p-6 backdrop-blur-sm md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            Não sabes por onde começar?
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-base font-bold text-foreground">→ Começa pelo Arranque (7 dias).</span>
              <br />Testa a ideia, vês como funciona, depois decides escalar.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-base font-bold text-foreground">→ Já sabes que queres crescer?</span>
              <br />O Impulso (15 dias) é o sweet spot: tempo + custo.
            </p>
          </div>
        </div>

        <RoiCalculator />
      </div>
    </section>
  );
}

/* ------------------------------ ROI Calculator ------------------------- */

function RoiCalculator() {
  const [ticket, setTicket] = useState(35);
  const rows = [
    { name: "Arranque", dur: "7 dias", invest: 85, clientsMin: 3, clientsMax: 6 },
    { name: "Impulso", dur: "15 dias", invest: 165, clientsMin: 8, clientsMax: 15, highlight: true },
    { name: "Presença", dur: "30 dias", invest: 310, clientsMin: 18, clientsMax: 35 },
  ];
  const fmt = (n: number) =>
    new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 backdrop-blur-sm">
      <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
        {/* Left: input */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-glow">
            <Calculator size={12} /> Simulador de retorno
          </div>
          <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
            Quanto pode <span className="text-gradient">render</span> no teu negócio?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Arrasta para o teu ticket médio (o valor que uma cliente gasta em média)
            e vê uma estimativa realista em cada plano.
          </p>

          <label className="mt-6 block">
            <div className="mb-2 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>Ticket médio</span>
              <span className="text-2xl font-extrabold text-gradient">{fmt(ticket)}</span>
            </div>
            <input
              type="range"
              min={15}
              max={150}
              step={5}
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>15 €</span>
              <span>150 €</span>
            </div>
          </label>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ⚠️ Estimativa baseada em campanhas reais. Não é garantia. Depende de qualidade,
            preços, resposta rápida no WhatsApp, localização e tipo de serviço.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Resposta em 5 min = alta conversão · Resposta em 2 horas = conversão cai 50%.
          </p>
        </div>

        {/* Right: results */}
        <div className="grid gap-3">
          {rows.map((r) => {
            const revMin = r.clientsMin * ticket;
            const revMax = r.clientsMax * ticket;
            const profitMin = revMin - r.invest;
            const profitMax = revMax - r.invest;
            return (
              <div
                key={r.name}
                className={`flex items-center justify-between gap-4 rounded-2xl border p-5 transition-all ${
                  r.highlight
                    ? "border-primary bg-gradient-to-r from-primary/15 to-transparent shadow-neon"
                    : "border-primary/25 bg-background/40 hover:border-primary/60"
                }`}
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary-glow">
                    {r.dur}
                  </p>
                  <p className="font-display text-lg font-bold">{r.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {r.clientsMin}–{r.clientsMax} clientes · investe {fmt(r.invest)}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                    <TrendingUp size={11} /> Retorno estimado
                  </div>
                  <p className="mt-1 font-display text-xl font-extrabold text-gradient md:text-2xl">
                    {fmt(revMin)}–{fmt(revMax)}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                    lucro {fmt(profitMin)}–{fmt(profitMax)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- FAQ -------------------------------- */

function FAQ() {
  const items: [string, string][] = [
    ["Preciso de ter conta na Meta ou Facebook?", "Não. Nós criamos e gerimos tudo. Tu só recebes clientes no WhatsApp."],
    ["O design é mesmo grátis?", "Sim. 2 panfletos profissionais incluídos em qualquer plano. Se queres mais variações, podemos conversar."],
    ["Como chegam as clientes até mim?", "Vêem o anúncio → clicam → vão directas para o teu WhatsApp. Já vêm com interesse em marcar, não é contacto frio."],
    ["E se não gerar nenhuma cliente?", "Não oferecemos reembolso (o trabalho de design e setup foi feito). Mas se realmente não gerar nada, conversamos para ajustar (horário, segmentação…) sem custo extra."],
    ["Posso cancelar quando quiser?", "Sim. Sem contrato. Se quiseres parar no dia 3 de 7, não tens problema (mas perdes o que pagaste)."],
    ["O valor inclui o budget de anúncios?", "Sim. Está tudo incluído. Exemplo: 85 € = 35 € em anúncios + 50 € do nosso trabalho."],
    ["Funciona para brasileiras em Portugal?", "Sim. Desde que estejas registada/licenciada em Portugal e a tua zona tenha público."],
    ["Quanto custa para continuar depois dos 7 / 15 / 30 dias?", "Depende. Podemos fazer mais um ciclo (85 € para 7 dias, por exemplo) ou passar para um plano mensal de gestão contínua — falamos os detalhes."],
    ["Eu respondo lentamente no WhatsApp. Vale a pena?", "Não. As clientes chegam interessadas, mas se responderes em 2 horas, já marcaram com outra. Resposta rápida = sucesso."],
    ["Posso usar para vários serviços (cabelo + manicure)?", "Sim. Criamos panfletos diferentes para cada serviço e segmentamos (ex: manicure para mulheres 20–40, cabelo para 30–60)."],
  ];
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="✦ Dúvidas"
          title={<>Perguntas <span className="text-gradient">frequentes.</span></>}
        />
        <div className="space-y-3">
          {items.map(([q, a]) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-primary/25 bg-surface/60 backdrop-blur-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-bold">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-primary-glow transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

/* ------------------------------ Footer CTA ----------------------------- */

function FooterCTA() {
  const buttons: Array<{ label: string; msg: string }> = [
    { label: "Quero o Arranque (7 dias)", msg: "Olá Maltadigital! Quero o plano Arranque (7 dias) da Panfletagem Digital." },
    { label: "Quero o Impulso (15 dias)", msg: "Olá Maltadigital! Quero o plano Impulso (15 dias) da Panfletagem Digital." },
    { label: "Quero a Presença (30 dias)", msg: "Olá Maltadigital! Quero o plano Presença (30 dias) da Panfletagem Digital." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-surface/70 to-secondary/20 p-12 text-center backdrop-blur-sm md:p-16">
          <div className="pointer-events-none absolute -inset-10 opacity-60">
            <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <p className="relative mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            ✦ Pronta para testar?
          </p>
          <h2 className="relative font-display text-4xl font-extrabold md:text-5xl">
            Não temos pressa. <span className="text-gradient">Mas a tua agenda sim.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Escolhe um plano. Sem contrato. Sem amarras. Se funcionar (e é provável que funcione),
            continuamos. Se não, acabou. 7 dias por 85 € é pouco risco para encher a agenda, certo?
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            {buttons.map((b) => (
              <button
                key={b.label}
                disabled
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary/10 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-all opacity-60 cursor-not-allowed"
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform opacity-60 cursor-not-allowed"
            >
              Falar no WhatsApp <ArrowRight size={16} />
            </button>
          </div>
          <p className="relative mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Sem contratos · Sem permanência · Criativo grátis
          </p>
        </div>

        {/* Footer text */}
        <div className="mt-16 border-t border-primary/20 pt-10 text-center">
          <p className="font-display text-lg font-bold">Panfletagem Digital para Beleza</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Cabeleireiras · Manicures · Esteticistas · Salões
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Trabalhas em Portugal e queres testar panfletagem digital? Fala connosco.
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Sem contratos · Sem amarras · Criativo grátis
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Maltadigital
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Floating ------------------------------ */

function FloatingWA() {
  return (
    <a
      href={waLink("Olá Maltadigital! Quero saber mais sobre a Panfletagem Digital.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-background shadow-neon-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={24} />
    </a>
  );
}

/* ------------------------------- Helpers ------------------------------- */

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-extrabold md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
