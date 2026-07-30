import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Palette,
  Type,
  Image as ImageIcon,
  Globe,
  Search,
  ShieldCheck,
  Scissors,
  Hand,
  Heart,
  X as XIcon,
  Star,
} from "lucide-react";
import mockup from "@/assets/vitrine-mockup.jpg";
import ex1 from "@/assets/vitrine-example-1.jpg";
import ex2 from "@/assets/vitrine-example-2.jpg";
import ex3 from "@/assets/vitrine-example-3.jpg";

const WHATSAPP = "351960225411";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/vitrine-digital")({
  head: () => ({
    meta: [
      { title: "Vitrine Digital — Sites Profissionais para Salões · Maltadigital" },
      {
        name: "description",
        content:
          "Criamos o site do teu salão em 1 a 2 semanas. Design, textos, fotos, domínio .pt e publicação — tudo incluído. 12 meses de garantia e sem letras miúdas.",
      },
      { property: "og:title", content: "Vitrine Digital — Sites para Salões · Maltadigital" },
      {
        property: "og:description",
        content:
          "O site do teu salão pronto a vender. Tratamos de tudo — design, textos, fotos, domínio e publicação. Entrega em 1 a 2 semanas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vitrine-digital" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vitrine-digital" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vitrine Digital — Criação de Websites",
          provider: { "@type": "Organization", name: "Maltadigital" },
          areaServed: "PT",
          description:
            "Criação de websites profissionais para salões de beleza, cabeleireiras, manicures e clínicas de estética em Portugal. Design, textos, fotos, domínio e publicação incluídos.",
        }),
      },
    ],
  }),
  component: VitrineDigital,
});

function VitrineDigital() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Deliverables />
      <How />
      <Examples />
      <Plans />
      <Guarantee />
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
          href={waLink("Olá Maltadigital! Quero um site para o meu salão com a Vitrine Digital.")}
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
              Entrega em 1 a 2 semanas · Garantia 12 meses
            </div>
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Para salões · cabeleireiras · manicures · clínicas de estética
            </p>
            <h1 className="font-display text-5xl leading-[0.95] font-extrabold md:text-6xl">
              O site do teu salão,
              <br />
              <span className="text-gradient">pronto a vender.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Tratamos de tudo — design, textos, fotos, domínio e publicação. Não precisas
              de nos enviar nada. Recebes um site profissional que trabalha por ti 24 horas
              por dia.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={waLink("Olá Maltadigital! Quero o meu site com a Vitrine Digital.")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
              >
                Quero o meu site
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
              Sem débito directo · Fatura com IVA · Sem letras miúdas
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/20 blur-[80px]" />
            <img
              src={mockup}
              alt="Portátil e telemóvel a mostrar o website de um salão de beleza criado pela Maltadigital"
              width={1536}
              height={1024}
              className="relative z-10 w-full rounded-2xl shadow-neon-lg"
              loading="eager"
            />
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Exemplo demonstrativo — o teu site é único e feito à tua medida
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["1-2 sem.", "Entrega"],
            ["12", "Meses de garantia"],
            ["0 €", "Manutenção 1º ano"],
            ["100%", "pt-PT"],
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
    "Tens Instagram, mas quem procura no Google não te encontra.",
    "As clientes não vêem os teus preços nem o teu portfólio com clareza.",
    "A DM do Instagram é uma confusão — perdes mensagens todos os dias.",
    "Sem site pareces mais pequena do que realmente és — e cobras menos por isso.",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary-glow">
            ✦ O verdadeiro problema
          </p>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Tens Instagram.
            <br />
            Mas ainda não tens <span className="text-gradient">casa própria na internet.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Um perfil de Instagram é uma casa alugada — as regras mudam a qualquer momento.
            O teu site é património: aparece no Google, mostra o teu trabalho como merece
            e leva a cliente directa ao WhatsApp.
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

/* ----------------------------- Deliverables ---------------------------- */

function Deliverables() {
  const items = [
    { icon: Palette, t: "Design exclusivo", d: "Um visual único, feito à medida do teu salão. Nada de templates copiados." },
    { icon: Type, t: "Textos escritos por nós", d: "Escrevemos os textos com base no teu serviço. Não precisas de te preocupar com uma linha." },
    { icon: ImageIcon, t: "Fotos tratadas ou escolhidas", d: "Usamos as tuas fotos com tratamento profissional — ou escolhemos imagens de banco premium." },
    { icon: Globe, t: "Domínio .pt + certificado", d: "Registamos o teu domínio, configuramos o certificado de segurança e publicamos o site." },
    { icon: MessageCircle, t: "Marcação directa por WhatsApp", d: "Cada botão do site leva a cliente ao teu WhatsApp com uma mensagem já pré-preenchida." },
    { icon: Search, t: "Optimização para Google", d: "SEO base, títulos, descrições, mapa e ligação ao Google Meu Negócio — para apareceres nas pesquisas locais." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Tratamos de tudo"
          title={<>O que <span className="text-gradient">entregamos.</span></>}
          sub="Não precisas de nos enviar nada. Recolhemos tudo o que é preciso numa conversa de 15 minutos no WhatsApp."
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

/* ---------------------------------- How -------------------------------- */

function How() {
  const steps = [
    { n: "01", t: "Escolhes o teu plano", d: "Presença, Vitrine ou Autoridade. Preços claros. Sem débito directo.", tag: "Sem surpresas" },
    { n: "02", t: "Recolha em 15 minutos", d: "Uma conversa curta no WhatsApp para percebermos o teu salão, serviços e estilo.", tag: "💬 WhatsApp" },
    { n: "03", t: "Criamos o teu site", d: "Design, textos, fotos, domínio e publicação. Tratamos de absolutamente tudo.", tag: "🎨 Feito por nós" },
    { n: "04", t: "Tu aprovas", d: "Mostramos-te o site. Ajustamos o que quiseres até ficares satisfeita — sem custo extra.", tag: "O teu OK" },
    { n: "05", t: "Publicamos no ar", d: "Site online em 1 a 2 semanas. Com 12 meses de garantia e manutenção incluída no 1º ano.", tag: "🚀 No ar" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Como funciona"
          title={<>Simples como <span className="text-gradient">deve ser.</span></>}
          sub="Cinco passos. Sem burocracia. Do primeiro contacto ao site publicado em 1 a 2 semanas."
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

/* -------------------------------- Examples ----------------------------- */

function Examples() {
  const items = [
    { icon: Scissors, img: ex1, t: "Cabeleireira", tag: "Exemplo demonstrativo", d: "Site com hero de impacto, portfólio de trabalhos, lista de serviços e marcação directa por WhatsApp." },
    { icon: Hand, img: ex2, t: "Manicure", tag: "Exemplo demonstrativo", d: "Página única com galeria de nail art, tabela de preços transparente e botão WhatsApp em destaque." },
    { icon: Heart, img: ex3, t: "Clínica de estética", tag: "Exemplo demonstrativo", d: "Site com apresentação de tratamentos, galeria antes/depois e formulário de marcação." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Exemplos"
          title={<>Websites feitos <span className="text-gradient">para vender.</span></>}
          sub="Cada site é único. Estes são exemplos demonstrativos do tipo de resultado que entregamos."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, img, t, tag, d }) => (
            <article
              key={t}
              className="group overflow-hidden rounded-2xl border border-primary/30 bg-surface/60 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary hover:shadow-neon-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={`Exemplo de website para ${t}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-primary/50 bg-background/70 text-primary-glow">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold">{t}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Plans ------------------------------- */

function Plans() {
  const plans = [
    {
      dur: "One-page",
      name: "Presença",
      price: "390 €",
      note: "Domínio .pt + alojamento 1º ano incluídos",
      feats: [
        "Site de 1 página (one-page)",
        "Design exclusivo",
        "Textos e fotos incluídos",
        "Marcação directa por WhatsApp",
        "Optimização base para Google",
        "12 meses de garantia",
      ],
      highlight: false,
    },
    {
      dur: "Até 5 páginas",
      name: "Vitrine",
      price: "690 €",
      note: "Domínio .pt + alojamento 1º ano incluídos",
      feats: [
        "Até 5 páginas (Home, Serviços, Galeria, Sobre, Contactos)",
        "Design exclusivo",
        "Galeria de trabalhos ilimitada",
        "Textos e fotos incluídos",
        "Marcação directa por WhatsApp",
        "SEO base + ligação ao Google Meu Negócio",
        "12 meses de garantia",
      ],
      highlight: true,
    },
    {
      dur: "Até 10 páginas",
      name: "Autoridade",
      price: "1 190 €",
      note: "Domínio .pt + alojamento 1º ano incluídos",
      feats: [
        "Até 10 páginas com blog",
        "Design exclusivo premium",
        "Galeria e portefólio avançado",
        "Textos, fotos e artigos iniciais escritos por nós",
        "Marcação directa por WhatsApp",
        "SEO local avançado + Google Meu Negócio",
        "12 meses de garantia",
      ],
      highlight: false,
    },
  ];
  return (
    <section id="planos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="✦ Preços transparentes"
          title={<>Escolhe o teu <span className="text-gradient">plano.</span></>}
          sub="Preços claros, sem débito directo. Fatura com IVA. Tudo incluído: design, textos, fotos, domínio e publicação."
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
                <span className="text-sm text-muted-foreground">chave-na-mão</span>
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
                href={waLink(`Olá Maltadigital! Quero o plano ${p.name} da Vitrine Digital.`)}
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
        <p className="mx-auto mt-8 max-w-2xl text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Domínio .pt e alojamento 1º ano incluídos · Sem débito directo · Fatura com IVA
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ Guarantee ------------------------------ */

function Guarantee() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-surface/70 p-10 backdrop-blur-sm md:p-14">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-accent/50 bg-accent/10 text-accent">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                ✦ Garantia
              </p>
              <h3 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
                12 meses de garantia. <span className="text-gradient">Sem letras miúdas.</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Se algo partir no teu site durante o primeiro ano, arranjamos sem custo.
                Manutenção e actualizações incluídas — tu só tens de te preocupar com o
                que fazes bem: as tuas clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ -------------------------------- */

function FAQ() {
  const items: [string, string][] = [
    [
      "Em quanto tempo o meu site fica pronto?",
      "Entre 1 e 2 semanas a partir do momento em que temos a recolha feita. Damos-te uma data concreta logo no início.",
    ],
    [
      "O que é que eu preciso de enviar?",
      "Nada. Numa conversa curta de 15 minutos no WhatsApp recolhemos tudo o que precisamos: serviços, preços, horários e estilo. Se tiveres fotos tuas usamos, se não, escolhemos imagens profissionais por ti.",
    ],
    [
      "Posso alterar o site depois de publicado?",
      "Podes. Durante os primeiros 12 meses fazemos alterações de conteúdo (textos, fotos, preços) sem custo adicional. A partir do 2º ano os pedidos passam a ser cobrados por hora — mas sem qualquer contrato ou permanência.",
    ],
    [
      "E se já tenho um domínio ou um site antigo?",
      "Aproveitamos o teu domínio actual e fazemos a migração sem interrupções. Se preferires um domínio novo, tratamos do registo do .pt por ti.",
    ],
    [
      "O site funciona bem no telemóvel?",
      "Sim. Todos os sites são feitos primeiro para telemóvel — que é onde a maioria das tuas clientes te vai encontrar.",
    ],
    [
      "Quanto custa manter o site a partir do 2º ano?",
      "A partir do 2º ano existe uma renovação anual que cobre o domínio, alojamento e manutenção — valor comunicado com clareza no plano escolhido. Sem débito directo, sem surpresas.",
    ],
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
          <div className="relative mb-4 flex justify-center text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <h2 className="relative font-display text-4xl font-extrabold md:text-5xl">
            Pronta para ter <span className="text-gradient">o teu site?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Fala connosco hoje. Em 1 a 2 semanas o teu salão tem casa própria na internet —
            profissional, rápida e feita para vender.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Olá Maltadigital! Quero começar já o meu site com a Vitrine Digital.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-glow-accent transition-transform hover:scale-105"
            >
              Falar no WhatsApp agora <ArrowRight size={16} />
            </a>
          </div>
          <p className="relative mt-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Sem débito directo · Fatura com IVA · 12 meses de garantia
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
      href={waLink("Olá Maltadigital! Quero saber mais sobre a Vitrine Digital.")}
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
