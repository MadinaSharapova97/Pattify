import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { patterns } from "@/data/patterns";

export default function FeaturedPatterns() {
  const t = useTranslations("FeaturedPatterns");
  const locale = useLocale();

  return (
    <section className="bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">


        {/* ================= STATS ================= */}
        <div className="mx-auto mb-5 w-full max-w-4xl">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#eadfe1] bg-white">

            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center px-3 py-5 text-center sm:py-6">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <rect
                    x="6"
                    y="3"
                    width="12"
                    height="18"
                    rx="1.5"
                  />
                  <path d="M9 7h6M9 11h6M9 15h4" />
                </svg>
              </div>

              <p className="text-2xl font-semibold leading-none text-[#a4486d] sm:text-3xl">
                300+
              </p>

              <p className="mt-1.5 text-xs text-[#776d70] sm:text-sm">
                {t("stats.patterns")}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center border-x border-[#eadfe1] px-3 py-5 text-center sm:py-6">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path d="M12 4v16M5 8h14M5 16h14" />
                </svg>
              </div>

              <p className="text-2xl font-semibold leading-none text-[#a4486d] sm:text-3xl">
                50+
              </p>

              <p className="mt-1.5 text-xs text-[#776d70] sm:text-sm">
                {t("stats.freePatterns")}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center px-3 py-5 text-center sm:py-6">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="8" r="3" />
                  <path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5" />
                </svg>
              </div>

              <p className="text-2xl font-semibold leading-none text-[#a4486d] sm:text-3xl">
                1,000+
              </p>

              <p className="mt-1.5 text-xs text-[#776d70] sm:text-sm">
                {t("stats.makers")}
              </p>
            </div>

          </div>
        </div>


        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#9d496b]">
              {t("label")}
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {t("title")}
            </h2>
          </div>

          <Link
            href="/patterns"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[#9d496b] transition hover:text-[#863d5c]"
          >
            {t("viewAll")}

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Pattern cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {patterns.map((pattern) => (
            <Link
              key={pattern.id}
              href={`/${locale}/patterns/${pattern.id}`}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f8f3f0]">
                <Image
                  src={pattern.image}
                  alt={t(`patterns.${pattern.key}.name`)}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Price badge */}
                <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm">
                  {t(`patterns.${pattern.key}.price`)}
                </div>

                {/* Hover button */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white/95 py-3 text-center text-sm font-medium text-[#9d496b] shadow-sm backdrop-blur-sm">
                    {t("viewPattern")}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {t(`patterns.${pattern.key}.category`)}
                </p>

                <h3 className="mt-1 text-base font-semibold text-gray-900 transition-colors group-hover:text-[#9d496b]">
                  {t(`patterns.${pattern.key}.name`)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}