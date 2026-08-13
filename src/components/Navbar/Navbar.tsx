"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfe1] bg-[#fcf9f7]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#9d496b]"
        >
          Pattify
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            Home
          </Link>

          <Link
            href="/patterns"
            className="text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            Patterns
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            Categories
          </Link>

          <Link
            href="/free-patterns"
            className="text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            Free Patterns
          </Link>

          <Link
            href="/ai-pattern"
            className="text-sm font-medium text-[#9d496b] transition-colors hover:text-[#7e3854]"
          >
            AI Pattern
          </Link>

          <Link
            href="/help"
            className="text-sm font-medium text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            Help
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-[#292525] transition-colors hover:text-[#9d496b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Favorites"
            className="text-[#292525] transition-colors hover:text-[#9d496b]"
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
          </button>

          <Link
            href="/sign-in"
            className="rounded-full bg-[#9d496b] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#833b59]"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-[#292525] lg:hidden"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#eadfe1] bg-[#fcf9f7] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#292525]"
            >
              Home
            </Link>

            <Link
              href="/patterns"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#292525]"
            >
              Patterns
            </Link>

            <Link
              href="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#292525]"
            >
              Categories
            </Link>

            <Link
              href="/free-patterns"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#292525]"
            >
              Free Patterns
            </Link>

            <Link
              href="/ai-pattern"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#9d496b]"
            >
              AI Pattern
            </Link>

            <Link
              href="/help"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#eadfe1] py-3 text-sm font-medium text-[#292525]"
            >
              Help
            </Link>

            <Link
              href="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 rounded-full bg-[#9d496b] px-5 py-3 text-center text-sm font-medium text-white"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}