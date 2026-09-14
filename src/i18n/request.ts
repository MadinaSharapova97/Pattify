import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import en from "../../messages/en.json";
import ru from "../../messages/ru.json";
import uz from "../../messages/uz.json";

const messages = {
  en,
  ru,
  uz,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale = routing.locales.includes(
    requestedLocale as (typeof routing.locales)[number]
  )
    ? (requestedLocale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale],
  };
});