"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { patterns } from "@/data/patterns";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

type PatternFormat = "A4" | "A0";

export default function PatternPage() {
  const params = useParams();
  const t = useTranslations("PatternPage");

  const id = Number(params.id);

  const pattern = patterns.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("M");

  // Format
  const [selectedFormat, setSelectedFormat] =
    useState<PatternFormat>("A4");

  // Zoom
  const [zoom, setZoom] = useState(100);

  if (!pattern) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fcf9f7] px-5">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            {t("notFound.title")}
          </h1>

          <p className="mt-2 text-gray-500">
            {t("notFound.description")}
          </p>
        </div>
      </main>
    );
  }

  const isFree = pattern.price === 0;

  // =========================
  // ZOOM
  // =========================

  const decreaseZoom = () => {
    setZoom((prev) => Math.max(60, prev - 10));
  };

  const increaseZoom = () => {
    setZoom((prev) => Math.min(160, prev + 10));
  };

  const resetZoom = () => {
    setZoom(100);
  };

  // =========================
  // DOWNLOAD
  // =========================

  const handleDownload = () => {
    if (!isFree) return;

    const fileUrl = `/patterns/${pattern.id}/pattern-${selectedFormat}.pdf`;

    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = `${pattern.key}-${selectedFormat}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // =========================
  // BUY
  // =========================

  const handleBuy = () => {
    console.log({
      patternId: pattern.id,
      size: selectedSize,
      format: selectedFormat,
      price: pattern.price,
    });
  };

  return (
    <main className="min-h-screen bg-[#fcf9f7]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        {/* =========================
            MAIN LAYOUT
        ========================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12">

          {/* =====================================================
              LEFT — PATTERN PREVIEW
          ====================================================== */}

          <section>
            <div className="overflow-hidden rounded-xl border border-[#eadfda] bg-white shadow-sm">

              {/* =========================
                  PREVIEW AREA
              ========================== */}

              <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[#f7f1ee]">

                {/* =========================
                    SMALL GARMENT PREVIEW
                ========================== */}

                <div className="absolute left-1 top-1 z-20">
                  <div className="w-24 overflow-hidden">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#faf6f4]">
                      <Image
                        src={pattern.image}
                        alt={t(
                          `patterns.${pattern.key}.name`
                        )}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* =========================
                    PATTERN IMAGE
                ========================== */}

                <div className="flex h-full w-full items-center justify-center overflow-hidden">
                  <div
                    className="relative h-[400px] w-[90%] transition-transform duration-300 ease-out"
                    style={{
                      transform: `scale(${zoom / 100})`,
                    }}
                  >
                    <Image
                      src={pattern.patternImage}
                      alt={`${t(
                        `patterns.${pattern.key}.name`
                      )} ${t("preview.patternAlt")}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* =========================
                    ZOOM CONTROLS
                ========================== */}

                <div className="absolute bottom-1 left-1 z-20 flex items-center overflow-hidden rounded-full border border-[#e6dcd7] bg-white/95 shadow-lg backdrop-blur">

                  <button
                    type="button"
                    onClick={decreaseZoom}
                    disabled={zoom <= 60}
                    aria-label={t("zoom.zoomOut")}
                    className="flex h-11 w-11 items-center justify-center text-xl text-gray-700 transition hover:bg-[#f8eff2] hover:text-[#9d496b] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>

                  <button
                    type="button"
                    onClick={resetZoom}
                    className="h-11 min-w-[65px] border-x border-[#eee4df] px-3 text-xs font-medium text-gray-600 transition hover:bg-[#faf5f3] hover:text-[#9d496b]"
                  >
                    {zoom}%
                  </button>

                  <button
                    type="button"
                    onClick={increaseZoom}
                    disabled={zoom >= 160}
                    aria-label={t("zoom.zoomIn")}
                    className="flex h-11 w-11 items-center justify-center text-xl text-gray-700 transition hover:bg-[#f8eff2] hover:text-[#9d496b] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* =========================
                  SIZE OPTIONS
              ========================== */}

              <div className="px-5 py-3">

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    {t("size.title")}
                  </h3>

                  <button
                    type="button"
                    className="text-xs font-medium text-[#9d496b] hover:underline"
                  >
                    {t("size.guide")}
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4">

                  {sizes.map((size) => {
                    const active = selectedSize === size;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`h-8 rounded-xl border text-sm font-medium transition ${
                          active
                            ? "border-[#9d496b] bg-[#9d496b] text-white"
                            : "border-[#e5d9d4] bg-white text-gray-700 hover:border-[#9d496b] hover:text-[#9d496b]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}

                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT — OPTIONS
          ====================================================== */}

          <aside>
            <div className="lg:sticky lg:top-6">

              <div className="rounded-xl border border-[#eadfda] bg-white p-5 shadow-sm sm:p-7">

                {/* =========================
                    FORMAT
                ========================== */}

                <div className="pt-5">

                  <h3 className="mb-3 font-semibold text-gray-900">
                    Формат выкройки
                  </h3>

                  {/* FORMAT OPTIONS */}

                  <div className="grid grid-cols-2 gap-3">

                    {/* A4 */}

                    <button
                      type="button"
                      onClick={() => setSelectedFormat("A4")}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 transition ${
                        selectedFormat === "A4"
                          ? "border-[#9d496b] bg-[#fdf5f7]"
                          : "border-[#e5d9d4] bg-white hover:border-[#9d496b]"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selectedFormat === "A4"
                              ? "border-[#9d496b]"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedFormat === "A4" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-[#9d496b]" />
                          )}
                        </span>

                        <span className="font-medium text-gray-800">
                          A4
                        </span>

                      </div>

                      <span className="text-xs text-gray-500">
                        PDF
                      </span>
                    </button>

                    {/* A0 */}

                    <button
                      type="button"
                      onClick={() => setSelectedFormat("A0")}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 transition ${
                        selectedFormat === "A0"
                          ? "border-[#9d496b] bg-[#fdf5f7]"
                          : "border-[#e5d9d4] bg-white hover:border-[#9d496b]"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selectedFormat === "A0"
                              ? "border-[#9d496b]"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedFormat === "A0" && (
                            <span className="h-2.5 w-2.5 rounded-full bg-[#9d496b]" />
                          )}
                        </span>

                        <span className="font-medium text-gray-800">
                          A0
                        </span>

                      </div>

                      <span className="text-xs text-gray-500">
                        PDF
                      </span>
                    </button>

                  </div>
                </div>

                {/* =========================
                    SELECTED OPTIONS
                ========================== */}

                <div className="mt-6 flex items-center justify-between rounded-xl border border-dashed border-[#dccbc4] px-4 py-3 text-sm">

                  <div>
                    <span className="text-gray-500">
                      {t("selected.size")}:
                    </span>{" "}

                    <span className="font-semibold text-gray-800">
                      {selectedSize}
                    </span>
                  </div>

                  <span className="text-gray-300">
                    |
                  </span>

                  <div>
                    <span className="text-gray-500">
                      Формат:
                    </span>{" "}

                    <span className="font-semibold text-gray-800">
                      {selectedFormat}
                    </span>
                  </div>

                </div>

                {/* =========================
                    PRICE
                ========================== */}

                <div className="mt-6 border-t border-[#eee4df] pt-6">

                  <div className="mb-4 flex items-end justify-between">

                    <span className="text-sm text-gray-500">
                      {t("price")}
                    </span>

                    {isFree ? (
                      <span className="text-2xl font-bold text-[#9d496b]">
                        {t("free")}
                      </span>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900">
                        ${pattern.price.toFixed(2)}
                      </span>
                    )}

                  </div>

                  {/* =========================
                      ACTION
                  ========================== */}

                  {isFree ? (
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="w-full rounded-xl bg-[#9d496b] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#873d5d] active:scale-[0.99]"
                    >
                      {t("download")} {selectedFormat}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleBuy}
                      className="w-full rounded-xl bg-[#9d496b] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#873d5d] active:scale-[0.99]"
                    >
                      {t("buy")} — ${pattern.price.toFixed(2)}
                    </button>
                  )}

                  <p className="mt-3 text-center text-xs leading-5 text-gray-400">
                    {t("selectedNotice")}
                  </p>

                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}