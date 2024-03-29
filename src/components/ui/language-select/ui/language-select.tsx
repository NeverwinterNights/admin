import { memo, useMemo, useState } from "react";

import { useRouter } from "next/router";

import { Select } from "@/components";
import { GreatBritainComponent } from "./great-britain-component";
import { RussiaComponent } from "./russia-component";

type LocalType = "ru" | "en";

export const LanguageSelect = memo(() => {
  const { locale, push, pathname, query, asPath, locales } = useRouter();
  const typedLocale = locale as LocalType;
  const [value, setValue] = useState(typedLocale);

  const changeLangHandler = (value: string) => {
    const locale = value as LocalType;

    push({ pathname, query }, asPath, { locale });
    setValue(locale);
  };

  const countries = {
    en: <GreatBritainComponent />,
    ru: <RussiaComponent />,
  };

  const options = useMemo(() => {
    return Array.isArray(locales)
      ? locales.map((el) => ({
          value: el,
          label: el == "ru" ? <RussiaComponent /> : <GreatBritainComponent />,
        }))
      : [];
  }, [locales]);

  return (
    <div>
      <Select
        placeholder={locale ? countries[typedLocale] : countries.ru}
        options={options}
        value={countries[value]}
        onChange={changeLangHandler}
      />
    </div>
  );
});
