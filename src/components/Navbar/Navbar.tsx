"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const navLinks = [
  { key: "home", href: "/" },
  { key: "patterns", href: "/patterns" },
  { key: "categories", href: "/categories" },
  { key: "aiPattern", href: "/ai-pattern" },
  { key: "help", href: "/help" },
];

const languages = [
  {
    code: "uz",
    name: "O‘zbekcha",
    flag: "/images/flags/uz.webp",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "/images/flags/ru.webp",
  },
  {
    code: "en",
    name: "English",
    flag: "/images/flags/en.webp",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const t = useTranslations("Navbar");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Tilni almashtirish
  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");

    // URL dagi eski locale ni almashtiramiz
    segments[1] = newLocale;

    const newPath = segments.join("/") || `/${newLocale}`;

    setIsLanguageOpen(false);

    router.push(newPath);
  };

  const currentLanguage =
    languages.find((language) => language.code === locale) ||
    languages[0];

  return (
    <header className=" sticky top-0 z-50 border-b border-[#eadfe1] bg-white">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          href={`/${locale}`}
          className="relative flex h-[50px] w-[150px] shrink-0 items-center"
          aria-label="Pattify Home"
        >
          <Image
            src="/images/logo/pattify-logo.webp"
            alt="Pattify"
            fill
            priority
            sizes="155px"
            className="object-contain object-left"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href === "/" ? "" : link.href}`}
              className="group relative whitespace-nowrap py-2 text-sm font-medium text-[#292525] transition-colors duration-200 hover:text-[#9d496b]"
            >
              {t(link.key)}

              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#9d496b] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ================= RIGHT ACTIONS ================= */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* Search */}

          <div className="relative">
            <input
              type="search"
              placeholder={t("search")}
              aria-label={t("search")}
              className="h-10 w-[175px] rounded-full border border-[#e5dadd] bg-white/80 py-2 pl-10 pr-4 text-sm text-[#292525] outline-none transition-all duration-200 placeholder:text-[#9b9294] focus:border-[#9d496b] focus:ring-2 focus:ring-[#9d496b]/10"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#777072]"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </div>

 {/* ================= LANGUAGE SWITCHER ================= */}
          <div className="relative ml-1">

            <button
              type="button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex h-10 items-center gap-2 rounded-full  text-sm font-medium text-[#292525]"
            >
              <Image
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                width={22}
                height={15}
                className="rounded-sm object-cover"
              />

              <span>{currentLanguage.code.toUpperCase()}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`h-4 w-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""
                  }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown */}

            {isLanguageOpen && (
              <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-xl border border-[#eadfe1] bg-white p-1 shadow-lg">

                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${locale === language.code
                        ? "bg-[#fff0f5] text-[#9d496b]"
                        : "text-[#292525] hover:bg-[#faf5f6]"
                      }`}
                  >
                    <Image
                      src={language.flag}
                      alt={language.name}
                      width={24}
                      height={16}
                      className="rounded-sm object-cover"
                    />

                    <span>{language.name}</span>

                    {locale === language.code && (
                      <span className="ml-auto">✓</span>
                    )}
                  </button>
                ))}

              </div>
            )}
          </div>



          {/* Favorites */}

          <Link
            href={`/${locale}/favorites`}
            aria-label="Favorites"
            className="flex h-10 w-10 items-center justify-center text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[21px] w-[21px]"
            >
              <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.6 4.6 0 0 1 8 4.2c1.3 0 2.5.6 4 2 1.5-1.4 2.7-2 4-2a4.6 4.6 0 0 1 4.8 4.6Z" />
            </svg>
          </Link>

          {/* Sign In */}

          <Link
            href={`/${locale}/sign-in`}
            className="whitespace-nowrap py-2 text-sm font-medium text-[#292525] hover:text-[#9d496b]"
          >
            {t("signIn")}
          </Link>

          {/* Sign Up */}

          <Link
            href={`/${locale}/sign-up`}
            className="whitespace-nowrap rounded-full bg-[#9d496b] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#833b59]"
          >
            {t("signUp")}
          </Link>

        
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#292525] transition-colors hover:bg-[#f2e7e9] hover:text-[#9d496b] lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      {isMenuOpen && (
        <div className="border-t border-[#eadfe1] bg-[#fcf9f7] lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">

            {/* Mobile Search */}

            <div className="relative mb-4">
              <input
                type="search"
                placeholder={t("search")}
                aria-label={t("search")}
                className="h-11 w-full rounded-full border border-[#e5dadd] bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-[#9d496b]"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#777072]"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </div>

            {/* Links */}

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href === "/" ? "" : link.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[#eadfe1] py-3.5 text-sm font-medium text-[#292525]"
                >
                  {t(link.key)}
                </Link>
              ))}

              {/* Favorites */}

              <Link
                href={`/${locale}/favorites`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 border-b border-[#eadfe1] py-3.5 text-sm font-medium text-[#292525]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.6 4.6 0 0 1 8 4.2c1.3 0 2.5.6 4 2 1.5-1.4 2.7-2 4-2a4.6 4.6 0 0 1 4.8 4.6Z" />
                </svg>

                {t("favorites")}
              </Link>

              {/* ================= MOBILE LANGUAGE ================= */}

              <div className="mt-4 border-t border-[#eadfe1] pt-4">

                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#776d70]">
                  Language
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center justify-center gap-2 rounded-lg border px-2 py-2.5 text-xs font-medium ${locale === language.code
                          ? "border-[#9d496b] bg-[#fff0f5] text-[#9d496b]"
                          : "border-[#e5dadd] bg-white text-[#292525]"
                        }`}
                    >
                      <Image
                        src={language.flag}
                        alt={language.name}
                        width={22}
                        height={15}
                        className="rounded-sm object-cover"
                      />

                      {language.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Auth buttons */}

              <div className="mt-5 flex gap-3">
                <Link
                  href={`/${locale}/sign-in`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 rounded-full border border-[#9d496b] px-5 py-2.5 text-center text-sm font-medium text-[#9d496b]"
                >
                  {t("signIn")}
                </Link>

                <Link
                  href={`/${locale}/sign-up`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 rounded-full bg-[#9d496b] px-5 py-2.5 text-center text-sm font-medium text-white"
                >
                  {t("signUp")}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}