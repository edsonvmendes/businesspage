"use client";

import { motion } from "framer-motion";
import { CTAFloat } from "@/components/CTAFloat";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StorySection } from "@/components/StorySection";

const CONFIG = {
  profile: {
    instagram: "@edsonvmendes",
    name: "Edson Vinícius",
    shortTitle: "BI Specialist • Aulas de Excel e Power BI",
    miniBio: "Ajudo você a sair do básico em BI e Excel com prática e método.",
  },
  hero: {
    title: "Aulas online de Excel e Power BI",
    subtitle: "Saia do básico com prática e método — em PT / ES / EN",
  },
  links: {
    booking: "https://ig.me/m/edsonvmendes",
    mentorship: "https://cal.com/SEU_USUARIO/aula",
    proposal: "https://ig.me/m/edsonvmendes",
    instagramDirect: "https://ig.me/m/edsonvmendes",
    linkedin: "https://www.linkedin.com/in/SEU_PERFIL",
    email: "mailto:SEU_EMAIL",
  },
  ctas: {
    book: "Agendar aula",
    instagram: "Falar no Instagram",
    mentor: "Quero mentoria",
    proposal: "Pedir proposta",
  },
  howItWorks: [
    "Você me diz seu objetivo (30s)",
    "Eu te proponho o caminho (aula/mentoria/projeto)",
    "Execução com validações curtas",
  ],
  faq: [
    {
      question: "É para iniciante?",
      answer: "Sim. Eu adapto o nível e monto uma rota clara.",
    },
    {
      question: "Atende Espanha e Brasil?",
      answer: "Sim, 100% online.",
    },
    {
      question: "Preciso ter Power BI instalado?",
      answer: "Recomendado. Se não tiver, eu te guio na instalação.",
    },
  ],
};

const STORY_CHAPTERS = [
  {
    id: "aulas",
    eyebrow: "Capitulo Aulas",
    title: "AULAS DE POWER BI",
    subtitle: "Como é a aula: 1h, online, idioma PT / ES / EN.",
    details: ["Online", "1h", "PT / ES / EN"],
    highlight: "Mais procurado",
    bullets: [
      "Aulas com quem vive disso (mercado real)",
      "Modelagem + DAX com boas práticas",
      "Exercícios guiados e aplicados",
    ],
    ctaLabel: "Agendar aula",
    ctaHref: CONFIG.links.booking,
  },
  {
    id: "mentoria",
    eyebrow: "Capitulo Mentoria",
    title: "MENTORIA GUIADA EM PROJETO",
    subtitle: "A gente constroi junto: do modelo ao dashboard",
    bullets: [
      "Diagnóstico do seu caso",
      "Plano por etapas (sem enrolação)",
      "Revisões orientadas a performance",
    ],
    ctaLabel: "Quero mentoria",
    ctaHref: CONFIG.links.mentorship,
  },
  {
    id: "projetos",
    eyebrow: "Capitulo Projetos",
    title: "PROJETOS POWER BI",
    subtitle: "Dashboard profissional pronto para sua operacao",
    bullets: [
      "Levantamento de requisitos",
      "Modelagem + governança",
      "Entrega + handover",
    ],
    ctaLabel: "Pedir proposta",
    ctaHref: CONFIG.links.proposal,
  },
];

function DataHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/25 p-3 shadow-glow">
      <svg
        viewBox="0 0 720 420"
        className="h-full w-full rounded-2xl bg-gradient-to-br from-[#0B2136] via-[#103654] to-[#144B58]"
        role="img"
        aria-label="Placeholder visual de BI e analytics"
      >
        <defs>
          <linearGradient id="lineA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8BE9FD" />
            <stop offset="100%" stopColor="#57F287" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="720" height="420" fill="url(#bg)" opacity="0" />
        <g opacity="0.8">
          <circle cx="90" cy="80" r="6" fill="#8BE9FD" />
          <circle cx="210" cy="124" r="5" fill="#57F287" />
          <circle cx="330" cy="100" r="6" fill="#8BE9FD" />
          <circle cx="450" cy="148" r="5" fill="#57F287" />
          <circle cx="560" cy="112" r="6" fill="#8BE9FD" />
          <circle cx="640" cy="152" r="5" fill="#57F287" />
          <path
            d="M90 80 L210 124 L330 100 L450 148 L560 112 L640 152"
            stroke="url(#lineA)"
            strokeWidth="4"
            fill="none"
          />
        </g>
        <g opacity="0.95">
          <rect x="100" y="250" width="40" height="90" rx="8" fill="#8BE9FD" />
          <rect x="160" y="218" width="40" height="122" rx="8" fill="#57F287" />
          <rect x="220" y="280" width="40" height="60" rx="8" fill="#FFCB6B" />
          <rect x="280" y="192" width="40" height="148" rx="8" fill="#8BE9FD" />
          <rect x="340" y="228" width="40" height="112" rx="8" fill="#57F287" />
          <rect x="400" y="262" width="40" height="78" rx="8" fill="#FFCB6B" />
        </g>
        <text
          x="470"
          y="285"
          fontSize="42"
          fontWeight="700"
          fill="#F3FAFF"
          fontFamily="Poppins, Manrope, sans-serif"
        >
          BI / DATA
        </text>
        <text
          x="470"
          y="325"
          fontSize="20"
          fill="#CFEAFF"
          fontFamily="Poppins, Manrope, sans-serif"
        >
          Placeholder visual
        </text>
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CTAFloat
        bookHref={CONFIG.links.booking}
        secondaryHref={CONFIG.links.instagramDirect}
        bookLabel={CONFIG.ctas.book}
        secondaryLabel={CONFIG.ctas.instagram}
      />

      <main className="relative min-h-screen overflow-x-clip bg-mesh-data">
        <section className="relative flex min-h-screen items-center px-4 pb-10 pt-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                {CONFIG.profile.instagram}
              </p>
              <div>
                <p className="text-lg font-semibold text-white/80">
                  {CONFIG.profile.name}
                </p>
                <p className="text-sm uppercase tracking-[0.16em] text-white/65">
                  {CONFIG.profile.shortTitle}
                </p>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
                {CONFIG.hero.title}
              </h1>
              <p className="max-w-xl text-lg text-white/85">{CONFIG.hero.subtitle}</p>
              <p className="max-w-xl text-base text-white/75">{CONFIG.profile.miniBio}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CONFIG.links.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  {CONFIG.ctas.book}
                </a>
                <a
                  href={CONFIG.links.instagramDirect}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Direct no Instagram
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-mint/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-mint">
                  PT / ES / EN
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <DataHeroVisual />
            </div>
          </motion.div>
        </section>

        <StorySection chapters={STORY_CHAPTERS} />

        <section className="flex min-h-screen items-center px-4 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">
                Como funciona
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
                Processo simples em 3 passos
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {CONFIG.howItWorks.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: idx * 0.09 }}
                    className="rounded-2xl border border-white/20 bg-white/5 p-4"
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-sky">
                      Passo {idx + 1}
                    </p>
                    <p className="text-sm text-white/90">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="flex min-h-screen items-center px-4 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">
                Mini FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
                Perguntas diretas
              </h2>
              <div className="mt-8 space-y-3">
                {CONFIG.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-white/20 bg-black/20 p-4"
                  >
                    <p className="text-sm font-bold text-white">{item.question}</p>
                    <p className="mt-1 text-sm text-white/80">{item.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="px-4 pb-24 pt-10 sm:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} @edsonvmendes — BI Specialist</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CONFIG.links.instagramDirect}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href={CONFIG.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a href={CONFIG.links.email} className="hover:text-white">
                E-mail
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
