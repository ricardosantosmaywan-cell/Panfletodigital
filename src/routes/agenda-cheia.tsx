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
} from "lucide-react";
import heroPhone from "@/assets/hero-phone-agenda.jpg";

const WHATSAPP = "351960225411";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/agenda-cheia")({
  head: () => ({
    meta: [
      { title: "Agenda Cheia — Panfletagem Digital para Salões · Maltadigital" },
      {
        name: "description",
        content:
          "Criamos o teu panfleto digital e activamos anúncios na tua zona. As clientes falam contigo directamente no WhatsApp. Agenda cheia em 7 dias, sem contratos.",
      },
      { property: "og:title", content: "Agenda Cheia — Panfletagem Digital · Maltadigital" },
      {
        property: "og:description",
        content:
          "Panfleto digital + anúncios locais + clientes no teu WhatsApp. Design incluído, sem contratos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agenda-cheia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agenda-cheia" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Agenda Cheia — Panfletagem Digital",
          provider: { "@type": "Organization", name: "Maltadigital" },
          areaServed: "PT",
          description:
            "Campanhas de anúncios digitais com panfleto criativo incluído, para salões de beleza, manicures, cabeleireiras e esteticistas em Portugal.",
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
      <How />
      <ForWho />
      <Distinctive />
      <Testimonial />
      <Plans />
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
          <a href="#planos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Planos
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <a
          href={waLink("Olá Maltadigital! Quero encher a minha agenda com o serviço Agenda Cheia.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105 hover:shadow-glow-accent"
        >
          WhatsApp
        </a>
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
              Criativo grátis · Sem contratos · Sem permanência
            </div>
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Para manicures · cabeleireiras · esteticistas
            </p>
            <h1 className="font-display text-5xl leading-[0.95] font-extrabold md:text-6xl">
              A tua agenda cheia
              <br />
              <span className="text-gradient">nos próximos 7 dias.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Criamos o teu panfleto digital e chegamos às clientes que ainda não te conhecem —
              na tua zona, no momento certo. Tu recebes as mensagens directamente no WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={waLink("Olá Maltadigital! Quero encher a minha agenda com o serviço Agenda Cheia.")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
              >
                Quero a minha agenda cheia
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary/5 px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-primary"
              >
                Ver planos
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Sem contratos · Criativo grátis · Resultados em 7 dias
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
    "As clientes que precisam de ti existem — só ainda não sabem que existes.",
    "O Instagram sozinho não chega — precisas de chegar a pessoas que não te seguem.",
    "O boca-a-boca é lento — e tu precisas de clientes agora.",
    "As agências cobram demasiado e pedem contratos longos.",
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
            Mas as clientes <span className="text-gradient">ainda não te encontraram.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Fazes um trabalho de qualidade. E ainda assim a agenda não está como querias.
            O problema não és tu — é a visibilidade.
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

/* ---------------------------------- How -------------------------------- */

function How() {
  const steps = [
    { n: "01", t: "Escolhes o teu plano", d: "7, 20 ou 30 dias. Sem contratos. Pagas uma vez e arrancamos.", tag: "Sem permanência" },
    { n: "02", t: "Criamos o teu panfleto digital", d: "2 peças visuais profissionais com o teu serviço, preço e estilo. Totalmente grátis.", tag: "🎨 Design incluído" },
    { n: "03", t: "Tu aprovas", d: "Só avançamos com o teu OK. Tens controlo total sobre o que é publicado.", tag: "O teu estilo" },
    { n: "04", t: "Activamos a campanha", d: "Ligamos os anúncios na Meta — chegamos a mulheres num raio de 10 km que ainda não te conhecem.", tag: "📣 Meta Ads" },
    { n: "05", t: "As clientes falam contigo", d: "Cada interessada clica e vai directa ao teu WhatsApp. Tu respondes e marcas.", tag: "💬 WhatsApp directo" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Como funciona"
          title={<>Simples como <span className="text-gradient">deve ser.</span></>}
          sub="Cinco passos. Sem burocracia. Do briefing ao WhatsApp cheio de mensagens."
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
    { icon: Hand, t: "Manicure" },
    { icon: Scissors, t: "Cabeleireira" },
    { icon: Sparkles, t: "Esteticista" },
    { icon: Heart, t: "Salão de beleza" },
  ];
  const fits = [
    "Trabalhas por conta própria ou tens o teu espaço.",
    "Queres mais clientes novas sem depender do boca-a-boca.",
    "Não tens tempo nem paciência para gerir publicidade.",
    "Queres resultados rápidos sem gastar uma fortuna.",
    "Estás em Portugal e serves uma zona específica.",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="✦ Para quem é"
          title={<>Feito para <span className="text-gradient">ti.</span></>}
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
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-primary/30 bg-surface/60 p-8 backdrop-blur-sm">
          <h3 className="font-display text-xl font-bold">✅ Este serviço é para ti se…</h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
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
      </div>
    </section>
  );
}

/* ------------------------------ Distinctive ---------------------------- */

function Distinctive() {
  const items = [
    { icon: Palette, t: "Design profissional grátis", d: "Criamos 2 panfletos visuais para a tua campanha sem custo adicional. Design incluído." },
    { icon: MapPin, t: "Chegamos à tua zona", d: "Mulheres num raio de 10–15 km que ainda não te conhecem mas precisam do teu serviço." },
    { icon: MessageCircle, t: "Clientes directo no WhatsApp", d: "Cada interessada clica no anúncio e fala contigo directamente. Sem intermediários." },
    { icon: Unlock, t: "Sem contratos nem amarras", d: "Escolhes a duração. Quando acabar, decides se queres continuar. Sem pressão." },
    { icon: FileBarChart, t: "Relatório no final", d: "Recebes um relatório claro com quantas pessoas viram, clicaram e enviaram mensagem." },
    { icon: Megaphone, t: "Gestão feita por nós", d: "Tratamos da conta, da segmentação e dos ajustes diários. Tu só respondes a quem chega." },
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
            "O que mudou tudo foi aparecer no telemóvel das pessoas certas, na zona certa,
            no momento certo. Em menos de uma semana a minha agenda encheu."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-mono text-sm font-bold text-primary-foreground">
              AS
            </div>
            <div>
              <p className="font-display text-base font-bold">Ana S.</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Manicure · Lisboa
              </p>
            </div>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ⭐ Testemunho ilustrativo — substituímos pelo teu primeiro caso real.
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
      note: "35 € budget de anúncios + 50 € serviço",
      feats: [
        "Campanha na Meta durante 7 dias",
        "2 panfletos digitais profissionais grátis",
        "Clientes directas no teu WhatsApp",
        "Raio de 10–15 km · 5 €/dia de budget",
        "1 relatório no final",
      ],
      highlight: false,
    },
    {
      dur: "20 dias",
      name: "Impulso",
      price: "195 €",
      note: "120 € budget de anúncios + 75 € serviço",
      feats: [
        "Campanha na Meta durante 20 dias",
        "2 panfletos digitais profissionais grátis",
        "Clientes directas no teu WhatsApp",
        "Raio de 10–15 km · 6 €/dia de budget",
        "2 relatórios — dia 10 e dia 20",
      ],
      highlight: true,
    },
    {
      dur: "30 dias",
      name: "Presença",
      price: "310 €",
      note: "210 € budget de anúncios + 100 € serviço",
      feats: [
        "Campanha na Meta durante 30 dias",
        "2 panfletos digitais profissionais grátis",
        "Clientes directas no teu WhatsApp",
        "Raio de 10–15 km · 7 €/dia de budget",
        "4 relatórios semanais",
      ],
      highlight: false,
    },
  ];
  return (
    <section id="planos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Investe no teu negócio"
          title={<>Escolhe o teu <span className="text-gradient">plano.</span></>}
          sub="Tudo incluído — design, gestão e relatório. Sem surpresas nem letras miúdas."
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
              <a
                href={waLink(`Olá Maltadigital! Quero o plano ${p.name} (${p.dur}) do Agenda Cheia.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  p.highlight
                    ? "bg-accent text-accent-foreground shadow-glow-accent hover:scale-105"
                    : "border-2 border-primary bg-primary/5 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Quero este plano <ArrowRight size={14} />
              </a>
            </article>
          ))}
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
    { name: "Arranque", dur: "7 dias", invest: 85, clients: 6 },
    { name: "Impulso", dur: "20 dias", invest: 195, clients: 16, highlight: true },
    { name: "Presença", dur: "30 dias", invest: 310, clients: 28 },
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
            Quanto <span className="text-gradient">vai render</span> no teu salão?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Arrasta para o teu ticket médio (o valor que uma cliente costuma gastar) e vê a estimativa realista de retorno em cada plano.
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
            ✦ Estimativa conservadora baseada em campanhas reais. Não é garantia de resultado.
          </p>
        </div>

        {/* Right: results */}
        <div className="grid gap-3">
          {rows.map((r) => {
            const revenue = r.clients * ticket;
            const profit = revenue - r.invest;
            const roi = Math.round((profit / r.invest) * 100);
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
                    ~{r.clients} clientes estimadas · investe {fmt(r.invest)}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                    <TrendingUp size={11} /> Retorno estimado
                  </div>
                  <p className="mt-1 font-display text-2xl font-extrabold text-gradient md:text-3xl">
                    {fmt(revenue)}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                    lucro {fmt(profit)} · ROI {roi}%
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
    ["Preciso de ter conta na Meta ou no Facebook?", "Não precisas de nada. Tratamos de tudo. Só precisas de nos dar informações sobre o teu serviço, aprovar o panfleto e efectuar o pagamento."],
    ["O design é mesmo gratuito?", "Sim. Criamos 2 panfletos visuais profissionais para a tua campanha sem custo adicional. Está incluído em todos os planos."],
    ["Como chegam as clientes até mim?", "As clientes vêem o teu panfleto na Meta, clicam e vão directamente para o teu WhatsApp. Tu recebes a mensagem e marcas."],
    ["Funciona para brasileiras em Portugal?", "Sim. Trabalhamos com profissionais em todo o território português. Chegamos a mulheres na tua zona, independentemente de seres portuguesa ou brasileira."],
    ["Posso cancelar quando quiser?", "Claro. Não há contratos nem permanência. Quando o plano terminar, decides livremente se queres continuar. Sem pressões."],
    ["O valor inclui o budget de anúncios?", "Sim. O valor que pagas inclui o serviço completo e o investimento em anúncios. Sem custos escondidos."],
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
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-surface/70 to-secondary/20 p-12 text-center backdrop-blur-sm md:p-16">
          <div className="pointer-events-none absolute -inset-10 opacity-60">
            <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <h2 className="relative font-display text-4xl font-extrabold md:text-5xl">
            Pronta para encher <span className="text-gradient">a tua agenda?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Fala connosco hoje. Em menos de 48h o teu panfleto está no ar e as clientes
            começam a chegar.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Olá Maltadigital! Quero começar já com o Agenda Cheia.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
            >
              Falar no WhatsApp agora <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary/5 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              ← Ver outros serviços
            </Link>
          </div>
          <p className="relative mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Sem contratos · Sem amarras · Criativo grátis
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
      href={waLink("Olá Maltadigital! Quero saber mais sobre o Agenda Cheia.")}
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
