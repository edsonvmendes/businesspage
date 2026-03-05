"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type StoryChapter = {
  id: string;
  title: string;
  eyebrow: string;
  subtitle?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: string;
  details?: string[];
};

type StorySectionProps = {
  chapters: StoryChapter[];
};

export function StorySection({ chapters }: StorySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const yFloat = useTransform(scrollYProgress, [0, 1], [10, -30]);
  const xFloat = useTransform(scrollYProgress, [0, 1], [-10, 22]);

  useEffect(() => {
    const refs = chapterRefs.current.filter(
      (node): node is HTMLDivElement => Boolean(node),
    );
    if (!refs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = refs.findIndex((node) => node === entry.target);
          if (idx >= 0) setActiveIndex(idx);
        });
      },
      { threshold: 0.55 },
    );

    refs.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const active = useMemo(() => chapters[activeIndex], [chapters, activeIndex]);

  return (
    <section ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 py-16 sm:px-8">
        <motion.div
          style={{ y: yFloat, x: xFloat }}
          className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-sky/20 blur-3xl"
        />
        <motion.div
          style={{ y: xFloat }}
          className="pointer-events-none absolute bottom-12 right-0 h-72 w-72 rounded-full bg-mint/20 blur-3xl"
        />

        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[240px_1fr]">
          <div className="glass hidden h-fit rounded-2xl p-4 md:block">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky">
              Capitulo ativo
            </p>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => {
                    chapterRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                    index === activeIndex
                      ? "border-sky bg-sky/20 text-white"
                      : "border-white/20 bg-white/5 text-white/75 hover:border-white/40"
                  }`}
                >
                  {chapter.title}
                </button>
              ))}
            </div>
          </div>

          <div className="glass relative min-h-[70vh] rounded-3xl p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <p className="inline-block rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                  {active.eyebrow}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">
                    {active.title}
                  </h3>
                  {active.highlight ? (
                    <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-ink">
                      {active.highlight}
                    </span>
                  ) : null}
                </div>
                {active.subtitle ? (
                  <p className="max-w-3xl text-base text-white/85 sm:text-lg">
                    {active.subtitle}
                  </p>
                ) : null}

                {active.details?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {active.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="space-y-3">
                  {active.bullets.map((bullet, idx) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + 0.12 }}
                      className="rounded-xl border border-white/20 bg-black/20 p-3 text-white/90"
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                <a
                  href={active.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-sky px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  {active.ctaLabel}
                </a>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            ref={(node) => {
              chapterRefs.current[index] = node;
            }}
            className="h-[100vh]"
          />
        ))}
      </div>
    </section>
  );
}
