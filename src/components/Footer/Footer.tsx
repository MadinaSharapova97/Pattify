import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#eaded9] bg-[#fcf9f7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-[#9d496b]"
            >
              Pattify
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              {t("description")}
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eaded9] text-gray-600 transition hover:border-[#9d496b] hover:text-[#9d496b]"
              >
                <span className="text-sm font-semibold">ig</span>
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eaded9] text-gray-600 transition hover:border-[#9d496b] hover:text-[#9d496b]"
              >
                <span className="text-sm font-semibold">p</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eaded9] text-gray-600 transition hover:border-[#9d496b] hover:text-[#9d496b]"
              >
                <span className="text-sm font-semibold">f</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {t("explore")}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/patterns"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("allPatterns")}
                </Link>
              </li>

              <li>
                <Link
                  href="/free-patterns"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("freePatterns")}
                </Link>
              </li>

              <li>
                <Link
                  href="/new"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("newPatterns")}
                </Link>
              </li>

              <li>
                <Link
                  href="/collections"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("collections")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {t("help")}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("howItWorks")}
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("faq")}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("contactUs")}
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-600 transition hover:text-[#9d496b]"
                >
                  {t("support")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {t("stayInspired")}
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {t("newsletterDescription")}
            </p>

            <form className="mt-5 flex flex-col gap-2">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="h-11 w-full rounded-lg border border-[#eaded9] bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#9d496b]"
              />

              <button
                type="submit"
                className="h-11 rounded-lg bg-[#9d496b] px-5 text-sm font-medium text-white transition hover:bg-[#863d5c]"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[#eaded9] py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Pattify. {t("copyright")}
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition hover:text-[#9d496b]"
            >
              {t("privacyPolicy")}
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#9d496b]"
            >
              {t("termsOfUse")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}