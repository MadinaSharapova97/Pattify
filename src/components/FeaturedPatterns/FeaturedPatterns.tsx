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