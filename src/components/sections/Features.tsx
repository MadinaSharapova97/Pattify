"use client";

import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");

  return (
    <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">

          {/* Badge */}
          <span className="mb-3 inline-flex items-center rounded-full border border-[#e7ccd7] bg-[#fff9fb] px-3.5 py-1.5 text-xs font-medium text-[#9d496b]">
            {t("badge")}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-semibold tracking-tight text-[#292525] sm:text-4xl">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-[#776d70] sm:text-base">
            {t("description")}
          </p>
        </div>



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


        {/* ================= FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">

          {/* ================= CARD 1 ================= */}
          <div className="rounded-2xl bg-white p-6 text-center sm:p-7">

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#292525] sm:text-xl">
              {t("perfectFit.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#776d70]">
              {t("perfectFit.description")}
            </p>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="rounded-2xl bg-white p-6 text-center sm:p-7">

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M14 3v4h4" />
                  <path d="M9 12h6M9 16h6" />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#292525] sm:text-xl">
              {t("a4a0.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#776d70]">
              {t("a4a0.description")}
            </p>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="rounded-2xl bg-white p-6 text-center sm:p-7">

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f5] text-[#a4486d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                >
                  <path d="M6 4h12" />
                  <path d="M8 4v5a4 4 0 0 0 8 0V4" />
                  <path d="M12 13v7" />
                  <path d="M8 20h8" />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#292525] sm:text-xl">
              {t("easyToSew.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#776d70]">
              {t("easyToSew.description")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}