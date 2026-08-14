import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fcf9f7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Hero Content */}
        <div className="grid min-h-[490px] items-center lg:grid-cols-[1fr_1fr]">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative z-20 py-10 lg:py-1">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7ccd7] bg-[#fff9fb] px-3.5 py-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4 text-[#9d496b]"
              >
                <rect
                  x="5"
                  y="3"
                  width="14"
                  height="18"
                  rx="2"
                />
                <path d="M8 7h8M8 11h6M8 15h4" />
              </svg>

              <span className="text-xs font-medium text-[#8d4562]">
                Pattern Library
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#292525] sm:text-[46px] lg:text-[38px]">
              Choose your favorite style,
              <span className="mt-1 block text-[#a4486d]">
                get a pattern that fits you
              </span>
            </h1>

            {/* Description */}
            <div className="mt-5 max-w-[570px]">
              <p className="text-[14px] leading-7 text-[#665e60]">
                Discover a collection of free and premium sewing patterns
                designed to make your sewing journey easier.
              </p>

              <p className="mt-1 text-[14px] leading-7 text-[#665e60]">
                Enter your measurements and get a print-ready pattern.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              {/* Browse Patterns */}
              <Link
                href="/patterns"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#a4486d] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8f3d5d] hover:shadow-md"
              >
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

                <span>Browse Patterns</span>
              </Link>

              {/* How It Works */}
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-3 rounded-xl border border-[#d5c7cb] bg-white px-6 py-3 text-sm font-medium text-[#292525] transition-all duration-200 hover:border-[#a4486d] hover:text-[#a4486d]"
              >
                <span>How It Works?</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d5c7cb] transition-colors duration-200 group-hover:border-[#a4486d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3.5 w-3.5"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* =====================================================
                STATS
            ====================================================== */}
            <div className="mt-8 flex max-w-[600px] border-t border-[#eadfe1] pt-5">

              {/* Stat 1 */}
              <div className="flex flex-1 items-center gap-3 pr-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
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

                <div>
                  <p className="text-lg font-semibold leading-none text-[#292525]">
                    300+
                  </p>

                  <p className="mt-1 text-xs text-[#776d70]">
                    Patterns
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-[#eadfe1]" />

              {/* Stat 2 */}
              <div className="flex flex-1 items-center gap-3 px-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
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

                <div>
                  <p className="text-lg font-semibold leading-none text-[#292525]">
                    50+
                  </p>

                  <p className="mt-1 text-xs text-[#776d70]">
                    Free Patterns
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-[#eadfe1]" />

              {/* Stat 3 */}
              <div className="flex flex-1 items-center gap-3 pl-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
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

                <div>
                  <p className="text-lg font-semibold leading-none text-[#292525]">
                    1,000+
                  </p>

                  <p className="mt-1 text-xs text-[#776d70]">
                    Makers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="relative h-[500px] lg:h-[490px]">

            {/* Soft background glow */}
            <div className="absolute right-[-80px] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#f7e9ee] opacity-60 blur-3xl" />

            {/* Dress + Pattern Illustration */}
            <div className="absolute inset-0">

              <div className="relative mx-auto h-full w-full max-w-[560px]">

                <Image
                  src="/images/hero/hero.webp"
                  alt="Sewing dress and pattern illustration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                />

              </div>
            </div>

            {/* =================================================
                FEATURE CARD
            ================================================== */}
            <div className="absolute bottom-16 right-[-5px] z-30 hidden w-[285px] rounded-2xl border border-[#eadfe1] bg-white/95 p-5 shadow-[0_18px_45px_rgba(70,35,45,0.10)] backdrop-blur-md sm:block">

              {/* Feature 1 */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M9 12h6M12 9v6" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#292525]">
                    Enter your measurements
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-[#776d70]">
                    Adjust the pattern to your measurements.
                  </p>
                </div>
              </div>

              <div className="my-4 border-t border-[#eee4e6]" />

              {/* Feature 2 */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <rect
                      x="5"
                      y="4"
                      width="14"
                      height="16"
                      rx="1.5"
                    />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#292525]">
                    Pattern automatically adjusted
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-[#776d70]">
                    Get a pattern prepared for your size.
                  </p>
                </div>
              </div>

              <div className="my-4 border-t border-[#eee4e6]" />

              {/* Feature 3 */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#a4486d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M5 4h14v16H5z" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#292525]">
                    Print and start sewing
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-[#776d70]">
                    Download your pattern in A4 or A0 format.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}