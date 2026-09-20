
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#fcf9f7]
        bg-[url('/images/hero/heroBackground.webp')]
        bg-no-repeat

        min-h-[calc(100svh-60px)]
        bg-[position:center_center]
        bg-[length:auto_100%]

        md:bg-[length:auto_100%]

        lg:bg-[length:100%_auto]
        lg:bg-[position:center_center]
      "
    >
      {/* =========================
          SOFT OVERLAY
      ========================== */}

<div
  className="
    pointer-events-none
    absolute inset-0 -z-10

    bg-gradient-to-r
    from-[#ded5d1]/100
    via-[#e7dfdb]/85
    to-[#fcf9f7]/30

    md:from-[#ded5d1]/95
    md:via-[#e7dfdb]/70
    md:to-[#fcf9f7]/20
  "
/>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative z-10
          mx-auto flex w-full
          max-w-[1536px]

          min-h-[calc(100svh-60px)]

          flex-col
          items-center
          justify-center

          px-4 py-10

          min-[375px]:px-5
          min-[375px]:py-12

          min-[425px]:px-6
          min-[425px]:py-14

          md:px-8
          md:py-16

          lg:items-start
          lg:justify-center
          lg:px-16
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex w-full max-w-[900px]
            flex-col

            items-center
            text-center

            lg:items-start
            lg:text-left
          "
        >
          {/* =========================
              BADGE
          ========================== */}

          <Link
            href="/patterns"
            className="
              inline-flex items-center gap-2
              rounded-full border border-[#e5c4d0]
              bg-[#fffaf9]/90
              px-4 py-2
              backdrop-blur-[3px]
              transition-all duration-200
              hover:border-[#a4486d]
              hover:bg-white

              lg:px-5
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 shrink-0 text-[#a4486d] md:h-5 md:w-5"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16" />
              <path d="M8 7h8" />
              <path d="M8 11h6" />
            </svg>

            <span
              className="
                text-[10px] font-semibold
                tracking-[0.08em]
                text-[#984565]
                md:text-sm
              "
            >
              {t("badge")}
            </span>
          </Link>

          {/* =========================
              TITLE
          ========================== */}

          <h1
            className="
              mt-5 w-full
              max-w-[350px]
              font-serif
              text-[32px]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#292525]

              min-[425px]:max-w-[420px]
              min-[425px]:text-[36px]

              md:mt-7
              md:max-w-[700px]
              md:text-[46px]

              lg:mt-8
              lg:max-w-[650px]
              lg:text-[40px]

              xl:text-[45px]
            "
          >
            {t("title")}

            <span
              className="
                mt-1 block
                text-[#a4486d]

                min-[425px]:mt-2
              "
            >
              {t("highlight")}
            </span>
          </h1>

          {/* =========================
              DESCRIPTION
          ========================== */}

          <div
            className="
              mt-5 w-full max-w-[350px]

              min-[425px]:max-w-[410px]

              md:mt-7
              md:max-w-[600px]

              lg:mt-8
              lg:max-w-[560px]
          "
          >
            <p
              className="
                text-[13px]
                leading-[1.7]
                text-[#74686a]

                min-[425px]:text-[14px]

                md:text-[15px]
                md:leading-7

                lg:text-[16px]
              "
            >
              {t("description")}
            </p>
          </div>

          {/* =========================
              BUTTONS
          ========================== */}

          <div
            className="
              mt-6 flex flex-wrap
              items-center justify-center
              gap-3

              min-[425px]:mt-8

              md:mt-9

              lg:justify-start
            "
          >
            {/* BROWSE PATTERNS */}

            <Link
              href="/patterns"
              className="
                inline-flex items-center
                justify-center gap-2
                rounded-xl
                bg-[#a4486d]
                px-5 py-3
                text-xs font-semibold
                text-white
                shadow-[0_8px_25px_rgba(164,72,109,0.15)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-[#8f3d5d]

                min-[425px]:px-6
                min-[425px]:py-3.5
                min-[425px]:text-sm

                lg:px-7
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 md:h-5 md:w-5"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>

              <span>{t("browsePatterns")}</span>
            </Link>

            {/* HOW IT WORKS */}

            <Link
              href="/how-it-works"
              className="
                inline-flex items-center
                justify-center gap-2
                rounded-xl
                border border-[#cfaebc]
                bg-white/80
                px-5 py-3
                text-xs font-semibold
                text-[#a4486d]
                backdrop-blur-[2px]
                transition-all duration-200
                hover:border-[#a4486d]
                hover:bg-white

                min-[425px]:gap-3
                min-[425px]:px-6
                min-[425px]:py-3.5
                min-[425px]:text-sm

                lg:px-7
              "
            >
              <span>{t("howItWorks")}</span>

              <span
                className="
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  border border-[#cfaebc]

                  min-[425px]:h-6
                  min-[425px]:w-6
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-3 w-3 md:h-3.5 md:w-3.5"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}