"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const newPathname = pathname.replace(/^\/(en|tr)/, `/${nextLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <div className="me-1">
      <select
        id="language-switcher"
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
        className="form-select form-select-sm "
      >
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
