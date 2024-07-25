"use client";
import { useTranslations } from "next-intl";
import { BannerTitle, BannerSignUpNow } from "./Styled";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations("Banner");
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  if (!isVisible) return null;

  return (
    <div className="bg-black d-flex justify-content-center text-light p-2">
      <div className="col-10 mx-auto text-center">
        <BannerTitle>
          {t("Title")}
          <BannerSignUpNow href={`/${activeLang}/signup`}>
            {t("SignUp")}
          </BannerSignUpNow>
        </BannerTitle>
      </div>
      <div className="col-2 text-start d-none d-md-block">
        <h6 style={{ cursor: "pointer" }} onClick={() => setIsVisible(false)}>
          X
        </h6>
      </div>
    </div>
  );
};

export default Banner;
