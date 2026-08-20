import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fcf9f7]
        bg-[url('/images/hero/heroBackground.webp')]
        bg-no-repeat

        /* =====================================================
           320px
        ====================================================== */

        min-h-[700px]
        bg-[position:center_top]
        bg-[length:auto_470px]

        /* =====================================================
           375px
        ====================================================== */

        min-[375px]:min-h-[720px]
        min-[375px]:bg-[length:auto_500px]

        /* =====================================================
           425px
        ====================================================== */

        min-[425px]:min-h-[740px]
        min-[425px]:bg-[length:auto_530px]

        /* =====================================================
           768px
        ====================================================== */

        md:min-h-[560px]
        md:bg-[length:auto_650px]
        md:bg-[position:center_top]

        /* =====================================================
           DESKTOP
        ====================================================== */

        lg:h-[calc(100vh-60px)]
        lg:min-h-[500px]
       
        lg:bg-[length:100%_auto]
        lg:bg-[position:center_top]
      "
    >
      {/* =====================================================
          SOFT BACKGROUND OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#fcf9f7]/10
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[700px]
          w-full
          max-w-[1536px]
          flex-col
          items-center
          px-4
          pt-7
          pb-7

          min-[375px]:min-h-[720px]
          min-[375px]:px-5
          min-[375px]:pt-8

          min-[425px]:min-h-[740px]
          min-[425px]:px-6
          min-[425px]:pt-9

          md:min-h-[760px]
          md:px-8
          md:pt-12

          lg:min-h-full
          lg:px-10
          lg:pt-0
        "
      >
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            flex
            w-full
            flex-1
            flex-col
            items-center
            text-center

            /* 320 */
            pt-1

            /* 375 */
            min-[375px]:pt-2

            /* 425 */
            min-[425px]:pt-3

            /* 768 */
            md:pt-5

            /* Desktop */
            lg:max-w-[760px]
            lg:justify-start
            lg:pt-[40px]
          "
        >
          {/* =================================================
              BADGE
          ================================================== */}

          <div
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
          </div>

          {/* =================================================
              TITLE
          ================================================== */}

          <h1
            className="
              mt-4
              w-full
              font-serif
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#292525]

              /* 320 */
              max-w-[310px]
              text-[29px]

              /* 375 */
              min-[375px]:mt-5
              min-[375px]:max-w-[350px]
              min-[375px]:text-[32px]

              /* 425 */
              min-[425px]:max-w-[395px]
              min-[425px]:text-[35px]

              /* 768 */
              md:mt-6
              md:max-w-[650px]
              md:text-[45px]

              /* Desktop */
              lg:mt-7
              lg:max-w-[760px]
              lg:text-[48px]
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

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div
            className="
              mt-4
              w-full
              max-w-[300px]

              min-[375px]:mt-5
              min-[375px]:max-w-[350px]

              min-[425px]:max-w-[390px]

              md:mt-6
              md:max-w-[570px]

              lg:mt-7
              lg:max-w-[620px]
            "
          >
            <p
              className="
                text-[12px]
                leading-[1.65]
                text-[#74686a]

                min-[375px]:text-[13px]

                min-[425px]:text-[14px]

                md:text-[15px]
                md:leading-7

                lg:text-[15px]
              "
            >
              {t("description")}
            </p>


          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-2

              min-[375px]:mt-6
              min-[375px]:gap-2.5

              min-[425px]:mt-7
              min-[425px]:gap-3

              md:mt-8

              lg:mt-8
            "
          >
            {/* Browse Patterns */}

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

                /* 320 */
                px-3.5
                py-2.5
                text-[11px]

                /* 375 */
                min-[375px]:px-4
                min-[375px]:py-3
                min-[375px]:text-xs

                /* 425 */
                min-[425px]:gap-2
                min-[425px]:px-5
                min-[425px]:py-3.5
                min-[425px]:text-sm

                /* Desktop */
                lg:px-6
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

            {/* How It Works */}

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

                /* 320 */
                px-3.5
                py-2.5
                text-[11px]

                /* 375 */
                min-[375px]:gap-2
                min-[375px]:px-4
                min-[375px]:py-3
                min-[375px]:text-xs

                /* 425 */
                min-[425px]:gap-3
                min-[425px]:px-5
                min-[425px]:py-3.5
                min-[425px]:text-sm

                /* Desktop */
                lg:px-6
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

          {/* =================================================
              MOBILE / TABLET STATS
              
              IMPORTANT:
              Bu endi absolute emas.
              Shuning uchun content bilan ustma-ust chiqmaydi.
          ================================================== */}

          <div
            className="
    mt-7
    w-full
    max-w-[350px]
    pt-0

    min-[375px]:mt-8
    min-[375px]:max-w-[370px]

    min-[425px]:mt-9
    min-[425px]:max-w-[395px]

    md:mt-10
    md:max-w-[570px]

    lg:hidden
  "
          >
            <Stats t={t} />
          </div>
        </div>

        {/* =====================================================
            DESKTOP STATS

            Desktopda original kompozitsiyadagi kabi
            pastki chap tomonda turadi.
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[15px]
            left-[3%]
            hidden
            w-[570px]

            lg:block
          "
        >
          <Stats t={t} />
        </div>
      </div>

      {/* =====================================================
          MOBILE BOTTOM SOFT FADE

          Backgrounddagi ko'ylak/statlar bilan content
          orasini yumshatadi.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[180px]
          bg-gradient-to-t
          from-[#fcf9f7]
          via-[#fcf9f7]/50
          to-transparent

          md:h-[150px]

          lg:hidden
        "
      />
    </section>
  );
}

/* =========================================================
   STATS COMPONENT
========================================================= */

function Stats({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="flex items-stretch">
      {/* =====================================================
          STAT 1
      ====================================================== */}

      <div className="flex flex-1 flex-col items-center text-center">
        <div className="mb-1.5 text-[#a4486d] md:mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="
              h-5
              w-5

              min-[375px]:h-6
              min-[375px]:w-6

              min-[425px]:h-7
              min-[425px]:w-7

              md:h-8
              md:w-8

              lg:h-8
              lg:w-8
            "
          >
            <path d="M5 7h14" />
            <path d="M5 17h14" />
            <path d="M8 4h8v16H8z" />
            <path d="M16 8c3 0 3 8 0 8" />
          </svg>
        </div>

        <p
          className="
            font-serif
            font-semibold
            leading-none
            text-[#a4486d]

            text-[22px]

            min-[375px]:text-[24px]

            min-[425px]:text-[27px]

            md:text-[30px]

            lg:text-[30px]
          "
        >
          300+
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-medium
            text-[#292525]

            min-[375px]:text-[10px]

            min-[425px]:text-xs

            md:text-sm

            lg:mt-2
            lg:text-[15px]
          "
        >
          {t("stats.patterns")}
        </p>
      </div>

      {/* Separator */}

      <div className="my-1 w-px bg-[#e6d8dc]" />

      {/* =====================================================
          STAT 2
      ====================================================== */}

      <div className="flex flex-1 flex-col items-center text-center">
        <div className="mb-1.5 text-[#a4486d] md:mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="
              h-5
              w-5

              min-[375px]:h-6
              min-[375px]:w-6

              min-[425px]:h-7
              min-[425px]:w-7

              md:h-8
              md:w-8

              lg:h-8
              lg:w-8
            "
          >
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M8 4V2M16 4V2" />
            <path d="M8 10h8" />
            <path d="M8 14h5" />
          </svg>
        </div>

        <p
          className="
            font-serif
            font-semibold
            leading-none
            text-[#a4486d]

            text-[22px]

            min-[375px]:text-[24px]

            min-[425px]:text-[27px]

            md:text-[30px]

            lg:text-[30px]
          "
        >
          50+
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-medium
            text-[#292525]

            min-[375px]:text-[10px]

            min-[425px]:text-xs

            md:text-sm

            lg:mt-2
            lg:text-[15px]
          "
        >
          {t("stats.freePatterns")}
        </p>
      </div>

      {/* Separator */}

      <div className="my-1 w-px bg-[#e6d8dc]" />

      {/* =====================================================
          STAT 3
      ====================================================== */}

      <div className="flex flex-1 flex-col items-center text-center">
        <div className="mb-1.5 text-[#a4486d] md:mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="
              h-5
              w-5

              min-[375px]:h-6
              min-[375px]:w-6

              min-[425px]:h-7
              min-[425px]:w-7

              md:h-8
              md:w-8

              lg:h-8
              lg:w-8
            "
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c.8-3.4 3.2-5.2 7-5.2s6.2 1.8 7 5.2" />
            <path d="M18 6c1.5.5 2.5 1.6 2.8 3" />
            <path d="M18.8 14.5c1.2.7 2 1.8 2.2 3" />
          </svg>
        </div>

        <p
          className="
            font-serif
            font-semibold
            leading-none
            text-[#a4486d]

            text-[22px]

            min-[375px]:text-[24px]

            min-[425px]:text-[27px]

            md:text-[30px]

            lg:text-[30px]
          "
        >
          1,000+
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-medium
            text-[#292525]

            min-[375px]:text-[10px]

            min-[425px]:text-xs

            md:text-sm

            lg:mt-2
            lg:text-[15px]
          "
        >
          {t("stats.makers")}
        </p>
      </div>
    </div>
  );
}