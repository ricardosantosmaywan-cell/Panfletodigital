import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Instagram,
  Megaphone,
  Globe,
  Star,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Check,
  Menu,
  X,
  Search,
  TrendingUp,
  Phone,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-beauty.jpg";
import caseHair from "@/assets/case-search-1.jpg";
import caseFace from "@/assets/case-search-2.jpg";
import caseBarber from "@/assets/case-search-3.jpg";
import caseNails from "@/assets/case-search-4.jpg";

const WHATSAPP = "351960225411";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/pesquisa-local")({
  head: () => ({
    meta: [
      { title: "Pesquisa Local — Google Meu Negócio para Salões | Maltadigital" },
      {
        name: "description",
        content:
          "Coloca o teu salão no topo do Google Meu Negócio, Maps e Waze. SEO local, palavras-chave e presença dominante para quem procura na tua zona.",
      },
      { property: "og:title", content: "Pesquisa Local — Maltadigital" },
      {
        property: "og:description",
        content: "Topo do Google Meu Negócio, Maps e Waze para o teu salão de beleza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pesquisa-local" },
    ],
    links: [{ rel: "canonical", href: "/pesquisa-local" }],

  }),
  component: Landing,
});

/* ---------------------------------- UI --------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Porquê", "#why"],
    ["Serviços", "#services"],
    ["Método", "#method"],
    ["Resultados", "#results"],
    ["Planos", "#pricing"],
    ["FAQ", "#faq"],
  ] as const;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-primary/25"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-neon">
            M
          </span>
          <span className="text-gradient">MALTADIGITAL</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={waLink("Olá Maltadigital! Quero um diagnóstico gratuito para o meu salão.")}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all hover:scale-105 hover:shadow-glow-accent md:inline-flex"
        >
          Diagnóstico Grátis
        </a>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-md border border-primary/40 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-primary/25 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {l}
              </a>
            ))}
            <a
              href={waLink("Olá Maltadigital! Quero um diagnóstico gratuito para o meu salão.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground"
            >
              Diagnóstico Grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-secondary/30 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            <Sparkles size={14} className="animate-pulse-neon" />
            Marketing para Salões de Beleza
          </div>
          <h1 className="font-display text-5xl leading-[0.95] font-extrabold md:text-7xl">
            <span className="block">O teu salão</span>
            <span className="text-gradient block">em 1º lugar</span>
            <span className="block italic font-light">no Google.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Colocamos o teu salão de beleza, barbearia ou clínica de estética no topo do
            Google Meu Negócio — para que novas clientes te encontrem antes da concorrência
            e falem contigo direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Olá Maltadigital! Quero um diagnóstico gratuito para o meu salão.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
            >
              Diagnóstico Gratuito
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Olá Maltadigital! Quero saber mais sobre o posicionamento do meu salão no Google.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary/5 px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-primary"
            >
              <TrendingUp size={18} /> Saber mais no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span><b className="text-foreground">+50 salões</b> posicionados em Portugal</span>
          </div>
        </div>
        <div className="relative animate-float-slow">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/50 via-secondary/40 to-accent/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 shadow-neon-lg">
            <img
              src={heroImg}
              alt="Salão de beleza posicionado no topo do Google"
              width={1280}
              height={1600}
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-primary/40 bg-background/60 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/20 text-primary-glow">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary-glow">Posição no Google Maps</p>
                  <p className="font-display text-lg font-bold">TOP 1 · Consolidado</p>
                </div>
              </div>
              <div className="font-mono text-xs font-bold text-accent">+340%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: Search,
      n: "01",
      tag: "Visibilidade",
      title: "Sê encontrada",
      desc: "Aparece no topo do Google no momento exacto em que uma cliente pesquisa \"salão de beleza perto de mim\".",
    },
    {
      icon: Star,
      n: "02",
      tag: "Reputação",
      title: "Cria confiança",
      desc: "Avaliações sólidas e perfil profissional transformam a primeira pesquisa em credibilidade imediata.",
    },
    {
      icon: MessageCircle,
      n: "03",
      tag: "Conversão",
      title: "Recebe agendamentos",
      desc: "Enviamos a visibilidade direto para o teu WhatsApp — sem intermediários, sem atrito.",
    },
  ];
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            ✦ Porquê investir no digital
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            A tua <span className="text-gradient">vitrine online</span> determina o valor real do teu salão.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quando uma potencial cliente procura um serviço de beleza na tua zona, a primeira
            reacção é pesquisar no Google. Se o teu salão não aparece em destaque no topo,
            simplesmente não existe para essa intenção de compra.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, n, tag, title, desc }) => (
            <div
              key={n}
              className="group relative rounded-2xl border border-primary/30 bg-surface/60 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-neon"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/40">
                  <Icon size={22} />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {n} / {tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
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

function Services() {
  const svc = [
    {
      icon: MapPin,
      n: "01",
      tag: "Encontrada",
      name: "Pesquisa local",
      desc: "Optimizamos o Google Meu Negócio para que o teu salão apareça no topo do Google e do Maps quando uma cliente pesquisa na zona.",
    },
    {
      icon: Megaphone,
      n: "02",
      tag: "Agenda cheia",
      name: "Panfletagem digital",
      desc: "Anúncios e campanhas direccionadas que colocam a tua oferta à frente de quem quer mesmo marcar — e enchem-te a agenda.",
      href: "/agenda-cheia" as const,
    },
    {
      icon: Globe,
      n: "03",
      tag: "Vitrine digital",
      name: "Criação de website",
      desc: "Sites modernos, rápidos e feitos para transformar visitas em mensagens de WhatsApp e agendamentos a sério.",
      href: "/vitrine-digital" as const,
    },
  ];
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ O que a Maltadigital faz"
          title={<>Três formas de levar <span className="text-gradient">clientes ao teu salão.</span></>}
          sub="Juntamos visibilidade local, tráfego qualificado e uma vitrine profissional para transformar cliques em agendamentos."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {svc.map((s) => {
            const { icon: Icon, n, tag, name, desc } = s;
            const href = "href" in s ? s.href : undefined;
            return (
              <article
                key={name}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/30 bg-surface/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary hover:shadow-neon-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/50 bg-background/70 text-primary-glow">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {n} / {tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
                {href ? (
                  <Link
                    to={href}
                    className="mt-5 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-primary-glow transition-colors hover:text-accent"
                  >
                    Ver página <ArrowRight size={14} />
                  </Link>
                ) : (
                  <a
                    href={waLink(`Olá! Quero saber mais sobre ${name} para o meu salão.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-primary-glow transition-colors hover:text-accent"
                  >
                    Ver entregas <ArrowRight size={14} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      title: "Diagnóstico aprofundado do teu momento digital",
      desc: "Analisamos a concorrência local, as palavras-chave com maior procura na tua zona e o estado actual do teu perfil no Google.",
    },
    {
      n: "02",
      title: "Estratégia cirúrgica para posicionar e destacar",
      desc: "Optimização completa dos canais — Google Meu Negócio, Maps, landing page e anúncios locais.",
    },
    {
      n: "03",
      title: "Execução, monitorização e acompanhamento próximo",
      desc: "Reuniões estratégicas regulares, relatórios objectivos e ajustes contínuos para manter o topo consolidado.",
    },
  ];
  return (
    <section id="method" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            ✦ O Método Maltadigital
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Menos promessas. <span className="text-gradient">Mais posicionamento.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não acreditamos em receitas prontas. Estudamos o teu nicho, analisamos as falhas dos
            concorrentes e estruturamos um funil completo para canalizar as pesquisas locais direto
            para o teu salão.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex gap-5 rounded-2xl border border-primary/25 bg-surface/60 p-6 backdrop-blur-sm transition-all hover:border-primary/60"
              >
                <div className="font-display text-4xl font-extrabold text-gradient">{s.n}</div>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-surface via-surface-2 to-surface p-8 shadow-neon">
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/40 blur-[100px]" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary-glow">
              Painel de Controlo · SEO Local
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-primary/30 bg-background/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Visibilidade Local</span>
                  <span className="font-mono text-xs font-bold text-accent">↑ TOP 3</span>
                </div>
                <p className="mt-2 font-display text-2xl font-extrabold">1º Lugar Consolidado</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-background/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cobertura Regional</span>
                  <span className="font-mono text-xs font-bold text-accent">94%</span>
                </div>
                <p className="mt-2 font-display text-2xl font-extrabold">Presença na Região</p>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-gradient">+26M</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Alcance</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-gradient">24/7</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Ativo</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-gradient">1:1</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    {
      img: caseHair,
      tag: "Estética & Cabelo · Google Maps",
      name: "Vintage Atelier Cabeleireiro",
      desc: "Forte posicionamento orgânico e SEO Local focado em termos comerciais de alto valor na zona.",
      metric: "+340% em Chamadas",
    },
    {
      img: caseFace,
      tag: "Clínica de Estética · Google Maps",
      name: "Centro de Estética Luzia Angelo",
      desc: "Atracção qualificada de novas clientes através de pesquisas activas por procedimentos estéticos específicos.",
      metric: "Top 3 Consolidado",
    },
    {
      img: caseBarber,
      tag: "Hair & Beauty · Google Maps",
      name: "T.A Cabeleireiros e Estética",
      desc: "Ampla visibilidade local e captação de novos agendamentos recorrentes de forma totalmente orgânica.",
      metric: "94% Cobertura de Pesquisas",
    },
    {
      img: caseNails,
      tag: "Beleza & Estilo · Google Maps",
      name: "Sueki Salão de Beleza",
      desc: "Atracção directa de novos agendamentos no Google sem depender apenas de anúncios pagos.",
      metric: "Fluxo Recorrente",
    },
  ];
  return (
    <section id="results" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Resultados de posicionamento"
          title={<>Métricas reais. <span className="text-gradient">Resultados sem rodeios.</span></>}
          sub="Deixamos de lado promessas sem fundamento. Aqui estão salões parceiros que multiplicaram os agendamentos com o Método Maltadigital."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-neon-lg"
            >
              <div className="relative h-64 overflow-hidden bg-background">
                <img
                  src={c.img}
                  alt={`Pesquisa Google — ${c.name}`}
                  loading="lazy"
                  width={1024}
                  height={832}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-glow backdrop-blur-md">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Métrica chave</span>
                  <span className="font-display text-lg font-extrabold text-accent">{c.metric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: Star, label: "Classificação Local", value: "4.9 / 5.0", sub: "Excelente reputação" },
            { icon: Phone, label: "Cliques de Chamada", value: "+340%", sub: "Pelo perfil de negócio" },
            { icon: Check, label: "Retorno de SEO", value: "Recorrente", sub: "Atracção orgânica constante" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="rounded-2xl border border-primary/30 bg-surface/60 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary-glow ring-1 ring-primary/40">
                  <Icon size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
              </div>
              <div className="mt-4 font-display text-3xl font-extrabold text-gradient">{value}</div>
              <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Rita Almeida", s: "Vintage Atelier · Lisboa", q: "Estamos em 1.º lugar do Google na nossa zona graças à Maltadigital. O fluxo de agendamentos cresceu de forma absurda nas últimas semanas." },
    { n: "João Pereira", s: "T.A Cabeleireiros · Setúbal", q: "Todas as semanas aparecem clientes novas a dizer que nos encontraram no Google Maps e adoraram as avaliações. Mudou completamente o salão." },
    { n: "Mariana Sousa", s: "Studio Sueki · Corroios", q: "Deixámos de depender só do boca a boca. Hoje a agenda enche-se sozinha com clientes que vêm da pesquisa no Google." },
  ];
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Feedback espontâneo"
          title={<>Salões que voltaram a ser <span className="text-gradient">encontrados.</span></>}
          sub="Não vivemos de discursos teóricos. Deixamos que as vozes dos parceiros mostrem o verdadeiro impacto do posicionamento digital."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.map((it) => (
            <div
              key={it.n}
              className="rounded-2xl border border-secondary/40 bg-secondary/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="mb-3 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-foreground/90">"{it.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-display font-bold text-primary-foreground shadow-neon">
                  {it.n[0]}
                </div>
                <div>
                  <div className="font-semibold">{it.n}</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {it.s}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plan = {
    name: "Pesquisa Local",
    desc: "Tudo o que o teu salão precisa para dominar o Google, o Maps e o Waze da tua zona.",
    feats: [
      "Primeira página do Google da tua zona no teu segmento",
      "SEO Local",
      "Estudo e optimização de palavras-chave",
      "Até 10 imagens profissionais do local",
      "Até 10 imagens profissionais dos serviços ou produtos",
      "Links para site, redes sociais ou WhatsApp",
      "10 frases prontas para resposta a comentários",
      "Dicas e estratégia para crescer no Google",
      "QR-Code de avaliação com arte personalizada",
      "Presença nos melhores GPS do mercado: Maps e Waze",
    ],
  };
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ O que está incluído"
          title={<>Tudo o que entregamos no <span className="text-gradient">Pesquisa Local</span>.</>}
          sub="Um serviço completo, pensado para colocar o teu salão à frente da concorrência no Google, no Maps e no Waze — sem letras miúdas. Para outros serviços, vê a secção Serviços acima."
        />
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-3xl border border-primary bg-gradient-to-br from-primary/15 via-surface to-secondary/10 p-8 shadow-neon-lg md:p-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-foreground shadow-glow-accent">
              Serviço principal
            </div>
            <h3 className="font-display text-3xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold text-gradient">Sob consulta</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.feats.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary-glow" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Olá Maltadigital! Quero saber mais sobre o Pesquisa Local para o meu salão.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-all hover:scale-[1.02]"
            >
              Saber mais no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ["Em quanto tempo o meu salão aparece na primeira página do Google?", "Os primeiros sinais de posicionamento aparecem entre 30 e 60 dias. Não prometemos o 1.º lugar — a concorrência da zona impõe variáveis — mas trabalhamos para que o teu salão dispute os 3 primeiros resultados da primeira página. Se o cliente pesquisar pelo nome do estabelecimento, apareces em 1.º lugar no Google e no Maps."],
    ["A Maltadigital trabalha apenas com salões locais?", "Sim. Somos especialistas em SEO Local e Google Meu Negócio para salões de beleza, barbearias, clínicas de estética e estúdios de manicure com atendimento presencial."],
    ["Como funciona o diagnóstico gratuito?", "Marcamos uma conversa de 30 minutos por WhatsApp ou vídeo. Analisamos o teu perfil no Google, a concorrência da zona e apresentamos-te um plano concreto — sem compromisso."],
    ["Posso falar com a equipa antes de avançar?", "Claro que sim. Todo o processo começa com uma conversa estratégica gratuita. Só avançamos se fizer sentido para o teu salão — sem qualquer contrato, amarras ou letras miúdas. Tu decides quando estiveres confortável."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="✦ Perguntas frequentes"
          title={<>O que precisas de saber <span className="text-gradient">antes de começarmos.</span></>}
          sub="Respondemos às dúvidas mais frequentes dos donos de salão de forma simples e pragmática."
        />
        <div className="space-y-3">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className="overflow-hidden rounded-xl border border-primary/25 bg-surface/60"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold">{q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-primary-glow transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/25 via-secondary/15 to-background p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]" />
          <h2 className="relative font-display text-4xl font-extrabold md:text-6xl">
            Chegou a hora do teu salão ser <span className="text-gradient">encontrado no Google.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Fala directamente com os consultores da Maltadigital para desenhar o plano de
            posicionamento certo para a tua zona comercial.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Olá Maltadigital! Quero o meu diagnóstico gratuito.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-105"
            >
              <MessageCircle size={18} /> Diagnóstico no WhatsApp
            </a>
            <a
              href={waLink("Olá Maltadigital! Quero saber mais sobre os planos para o meu salão.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
            >
              Saber mais no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/25 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            M
          </span>
          <span className="text-gradient">MALTADIGITAL</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Maltadigital — Marketing Digital para Salões
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary-glow transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram size={16} />
          </a>
          <a
            href={waLink("Olá Maltadigital!")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-whatsapp/50 text-whatsapp transition-all hover:bg-whatsapp hover:text-background"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Why />
        <Services />
        <Method />
        <Results />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
      {/* Floating WhatsApp */}
      <a
        href={waLink("Olá Maltadigital! Vim do site e quero o diagnóstico gratuito.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-background shadow-[0_10px_40px_oklch(0.72_0.17_150/0.45)] transition-transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
