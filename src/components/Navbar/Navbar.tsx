"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Patterns", href: "/patterns" },
  { name: "Categories", href: "/categories" },
  { name: "Free Patterns", href: "/free-patterns" },
  { name: "AI Pattern", href: "/ai-pattern" },
  { name: "Help", href: "/help" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfe1]  ">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
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
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-sm font-medium text-[#292525] transition-colors duration-200 hover:text-[#9d496b]"
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#9d496b] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search patterns"
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

          {/* Favorites */}
          <Link
            href="/favorites"
            aria-label="Favorites"
            className="group relative flex h-10 w-10 items-center justify-center text-[#292525] transition-colors duration-200 hover:text-[#9d496b]"
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
            href="/sign-in"
            className="group relative py-2 whitespace-nowrap text-sm font-medium text-[#292525] transition-colors duration-200 hover:text-[#9d496b]"
          >
            Sign In
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#9d496b] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Sign Up */}
          <Link
            href="/sign-up"
            className="whitespace-nowrap rounded-full bg-[#9d496b] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#833b59] hover:shadow-md"
          >
            Sign Up
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
                placeholder="Search patterns"
                aria-label="Search patterns"
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
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[#eadfe1] py-3.5 text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Favorites */}
              <Link
                href="/favorites"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 border-b border-[#eadfe1] py-3.5 text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
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
                Favorites
              </Link>

              {/* Auth buttons */}
              <div className="mt-5 flex gap-3">
                <Link
                  href="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 rounded-full border border-[#9d496b] px-5 py-2.5 text-center text-sm font-medium text-[#9d496b]"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 rounded-full bg-[#9d496b] px-5 py-2.5 text-center text-sm font-medium text-white"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}