"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { patterns } from "@/data/patterns";

const categories = ["All", "Dresses", "Tops", "Skirts"];
const priceFilters = ["All", "Free", "Paid"];

export default function PatternsPage() {
    const t = useTranslations("PatternLibrary");

    const [category, setCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredPatterns = useMemo(() => {
        return patterns.filter((pattern) => {
            const name = t(`patterns.${pattern.key}.name`).toLowerCase();
            const searchValue = search.toLowerCase();

            const matchesCategory =
                category === "All" || pattern.category === category;

            const matchesPrice =
                priceFilter === "All" ||
                (priceFilter === "Free" && pattern.price === 0) ||
                (priceFilter === "Paid" && pattern.price > 0);

            const matchesSearch = name.includes(searchValue);

            return matchesCategory && matchesPrice && matchesSearch;
        });
    }, [category, priceFilter, search, t]);

    return (
        <main className="min-h-screen bg-[#fcf9f7]">
            {/* =====================================================
          HEADER
      ====================================================== */}

            <section className="border-b border-[#eadfda] bg-white">
                <div className="mx-auto max-w-7xl px-5 py-5 ">
                    <div >

                        <h1 className="text-4xl font-semibold text-center text-[#9d496b] sm:text-5xl">
                            {t("eyebrow")}
                        </h1>

                    </div>
                </div>
            </section>

            {/* =====================================================
          CONTENT
      ====================================================== */}

            <section className="mx-auto max-w-7xl p-5">

                {/* =====================================================
            FILTER BAR
        ====================================================== */}

                <div className="mb-3 rounded-2xl border border-[#eadfda] bg-white p-4 shadow-sm sm:p-5">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        {/* CATEGORY */}

                        <div className="flex flex-wrap gap-2">
                            {categories.map((item) => {
                                const active = category === item;

                                return (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setCategory(item)}
                                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${active
                                                ? "bg-[#9d496b] text-white"
                                                : "bg-[#faf6f4] text-gray-600 hover:bg-[#f5e9ed] hover:text-[#9d496b]"
                                            }`}
                                    >
                                        {item === "All"
                                            ? t("filters.all")
                                            : t(`categories.${item}`)}
                                    </button>
                                );
                            })}
                        </div>

                        {/* SEARCH */}

                        <div className="relative w-full lg:max-w-xs">
                            <svg
                                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="m20 20-3.5-3.5" />
                            </svg>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t("search")}
                                className="h-10 w-full rounded-full border border-[#e5d9d4] bg-[#fcf9f7] pl-9 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#9d496b] focus:ring-2 focus:ring-[#9d496b]/10"
                            />
                        </div>
                    </div>

                    {/* PRICE FILTER */}

                    <div className="mt-5 flex items-center gap-2 border-t border-[#eee4df] pt-4">
                        <span className="mr-1 text-xs font-medium text-gray-400">
                            {t("filters.price")}:
                        </span>

                        {priceFilters.map((item) => {
                            const active = priceFilter === item;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setPriceFilter(item)}
                                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${active
                                            ? "bg-[#f5e9ed] text-[#9d496b]"
                                            : "text-gray-500 hover:bg-[#faf6f4] hover:text-gray-800"
                                        }`}
                                >
                                    {item === "All"
                                        ? t("filters.all")
                                        : t(`filters.${item.toLowerCase()}`)}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
            RESULTS INFO
        ====================================================== */}

                <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        {t("results", {
                            count: filteredPatterns.length,
                        })}
                    </p>
                </div>

                {/* =====================================================
            PATTERN GRID
        ====================================================== */}

                {filteredPatterns.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {filteredPatterns.map((pattern) => {
                            const isFree = pattern.price === 0;

                            return (
                                <article
                                    key={pattern.id}
                                    className="group overflow-hidden rounded-2xl border border-[#eadfda] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {/* IMAGE */}

                                    <Link
                                        href={`/patterns/${pattern.id}`}
                                        className="block"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f1ee]">
                                            <Image
                                                src={pattern.image}
                                                alt={t(`patterns.${pattern.key}.name`)}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                            />

                                            <div className="absolute left-3 top-3">
                                                <span
                                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${pattern.price === 0
                                                            ? "bg-white text-[#9d496b]"
                                                            : "bg-white text-gray-800"
                                                        }`}
                                                >
                                                    {pattern.price === 0
                                                        ? t("free")
                                                        : `$${pattern.price.toFixed(2)}`}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* CONTENT */}

                                    <div className="p-4">

                                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[#9d496b]">
                                            {t(`categories.${pattern.category}`)}
                                        </p>

                                        <h2 className="line-clamp-1 text-base font-semibold text-gray-900">
                                            {t(`patterns.${pattern.key}.name`)}
                                        </h2>

                                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                                            {t(
                                                `patterns.${pattern.key}.description`
                                            )}
                                        </p>

                                        <Link
                                            href={`/patterns/${pattern.id}`}
                                            className="mt-4 flex h-10 w-full items-center justify-center rounded-xl border border-[#dfcbd3] text-sm font-semibold text-[#9d496b] transition hover:border-[#9d496b] hover:bg-[#fdf5f7]"
                                        >
                                            {t("viewPattern")}
                                        </Link>

                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    /* =====================================================
                       EMPTY STATE
                    ====================================================== */

                    <div className="rounded-2xl border border-dashed border-[#dccbc4] bg-white px-5 py-16 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8eff2]">
                            <svg
                                className="h-6 w-6 text-[#9d496b]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="m20 20-3.5-3.5" />
                            </svg>
                        </div>

                        <h2 className="mt-4 text-lg font-semibold text-gray-900">
                            {t("empty.title")}
                        </h2>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                            {t("empty.description")}
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setCategory("All");
                                setPriceFilter("All");
                                setSearch("");
                            }}
                            className="mt-5 rounded-xl bg-[#9d496b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#873d5d]"
                        >
                            {t("empty.reset")}
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}