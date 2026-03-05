"use client";

type CTAFloatProps = {
  bookHref: string;
  secondaryHref: string;
  bookLabel: string;
  secondaryLabel: string;
};

export function CTAFloat({
  bookHref,
  secondaryHref,
  bookLabel,
  secondaryLabel,
}: CTAFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      <a
        href={secondaryHref}
        target="_blank"
        rel="noreferrer"
        className="glass rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        {secondaryLabel}
      </a>
      <a
        href={bookHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-sky px-6 py-3 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5"
      >
        {bookLabel}
      </a>
    </div>
  );
}
