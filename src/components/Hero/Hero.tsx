"use client";

// import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#fcf9f7]
        bg-[url('/images/hero/heroImg.webp')]
        bg-no-repeat

        /* =========================
           MOBILE — 320px
        ========================== */

        min-h-[calc(100svh-60px)]
        bg-[position:center_center]
        bg-[length:auto_100%]

        /* =========================
           375px
        ========================== */

        min-[375px]:bg-[length:auto_100%]

        /* =========================
           425px
        ========================== */

        min-[425px]:bg-[length:auto_100%]

        /* =========================
           TABLET — 768px
        ========================== */

        md:min-h-[calc(100svh-60px)]
        md:bg-[length:auto_100%]
        md:bg-[position:center_center]

        /* =========================
           DESKTOP
        ========================== */

        lg:min-h-[calc(100svh-60px)]
        lg:bg-[length:100%_auto]
        lg:bg-[position:center_center]
      "
    >
      {/* =========================
          VERY SOFT OVERLAY
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#fcf9f7]/10
        "
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-60px)]
          w-full
          max-w-[1536px]
          flex-col
          items-center
          justify-center

          px-4
          py-10

          min-[375px]:px-5
          min-[375px]:py-12

          min-[425px]:px-6
          min-[425px]:py-14

          md:px-8
          md:py-16

          lg:px-10
          lg:py-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[900px]
            flex-col
            items-center
            text-center
          "
        >
          {/* =========================
              BADGE
          ========================== */}

          <Link href={"/patterns"}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#e5c4d0]
              bg-[#fffaf9]/90
              px-3
              py-1.5
              backdrop-blur-[2px]

              min-[375px]:gap-2
              min-[375px]:px-4

              min-[425px]:px-5
              min-[425px]:py-2

              md:px-5
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="
                h-4
                w-4
                shrink-0
                text-[#a4486d]

                min-[375px]:h-[18px]
                min-[375px]:w-[18px]

                min-[425px]:h-5
                min-[425px]:w-5
              "
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
              <path d="M4 5.5v16" />
              <path d="M8 7h8" />
              <path d="M8 11h6" />
            </svg>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.08em]
                text-[#984565]

                min-[375px]:text-[10px]

                min-[425px]:text-xs

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
              mt-5
              w-full
              max-w-[310px]
              font-serif
              text-[29px]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#292525]

              min-[375px]:mt-6
              min-[375px]:max-w-[350px]
              min-[375px]:text-[32px]

              min-[425px]:max-w-[400px]
              min-[425px]:text-[36px]

              md:mt-7
              md:max-w-[700px]
              md:text-[46px]

              lg:mt-8
              lg:max-w-[900px]
              lg:text-[52px]
          "
          >
            {t("title")}

            <span
              className="
                mt-1
                block
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
              mt-5
              w-full
              max-w-[300px]

              min-[375px]:mt-6
              min-[375px]:max-w-[350px]

              min-[425px]:max-w-[410px]

              md:mt-7
              md:max-w-[600px]

              lg:mt-8
              lg:max-w-[650px]
            "
          >
            <p
              className="
                text-[12px]
                leading-[1.7]
                text-[#74686a]

                min-[375px]:text-[13px]

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
              mt-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-2.5

              min-[375px]:mt-7
              min-[375px]:gap-3

              min-[425px]:mt-8

              md:mt-9

              lg:mt-9
            "
          >
            {/* =====================
                BROWSE PATTERNS
            ====================== */}

            <Link
              href="/patterns"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-[#a4486d]
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(164,72,109,0.15)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#8f3d5d]

                max-[374px]:w-full
                max-[374px]:max-w-[220px]

                px-4
                py-2.5
                text-[11px]

                min-[375px]:px-5
                min-[375px]:py-3
                min-[375px]:text-xs

                min-[425px]:gap-2
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
                className="
                  h-3.5
                  w-3.5

                  min-[375px]:h-4
                  min-[375px]:w-4

                  min-[425px]:h-5
                  min-[425px]:w-5
                "
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>

              <span>{t("browsePatterns")}</span>
            </Link>

            {/* =====================
                HOW IT WORKS
            ====================== */}

            <Link
              href="/how-it-works"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-[#cfaebc]
                bg-white/80
                font-semibold
                text-[#a4486d]
                backdrop-blur-[2px]
                transition-all
                duration-200
                hover:border-[#a4486d]
                hover:bg-white

                max-[374px]:w-full
                max-[374px]:max-w-[220px]

                px-4
                py-2.5
                text-[11px]

                min-[375px]:gap-2
                min-[375px]:px-5
                min-[375px]:py-3
                min-[375px]:text-xs

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
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#cfaebc]

                  min-[375px]:h-5
                  min-[375px]:w-5

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
                  className="
                    h-2.5
                    w-2.5

                    min-[375px]:h-3
                    min-[375px]:w-3

                    min-[425px]:h-3.5
                    min-[425px]:w-3.5
                  "
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