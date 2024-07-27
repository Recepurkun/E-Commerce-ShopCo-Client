"use client";
import userImg from "@/assets/userProfileImage.webp";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { GoToCartBtn, GoToHomepageBtn } from "../Hero/Styled";
import Link from "next/link";
import Logout from "@/app/[locale]/(auth)/LogOut";
import Image from "next/image";

const UserDetail = ({ girenUser, aktifKullaniciBilgileri, hasActiveUser }) => {
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  const t = useTranslations("SignUp");
  return (
    <div className="col-12 col-lg-3 mx-auto">
      {girenUser ? (
        <>
          <h2 className="text-center mb-4">{t("Welcome")}</h2>

          <>
            <div className="card  bg-secondary-subtle rounded-3 border-2 text-center">
              <div className="text-center p-3">
                <Image src={userImg} width={128} alt="UserImage" />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {hasActiveUser
                    ? `${aktifKullaniciBilgileri[0].user_name} ${aktifKullaniciBilgileri[0].user_surname}`
                    : girenUser}
                </h5>
              </div>
              {hasActiveUser && (
                <ul className="list-group list-group-flush p-3">
                  <li className="list-group-item border-0">
                    {t("Age")}: &nbsp;
                    {aktifKullaniciBilgileri[0].user_age}
                  </li>
                  <li className="list-group-item border-0">
                    {t("Gender")}: &nbsp;
                    {aktifKullaniciBilgileri[0].user_gender}
                  </li>
                  <li className="list-group-item border-0">
                    {t("City")}: &nbsp;
                    {aktifKullaniciBilgileri[0].user_city}
                  </li>
                </ul>
              )}
              <div className="card-body d-flex flex-md-row flex-column justify-content-between align-items-center gap-2 p-4">
                <GoToHomepageBtn style={{ fontSize: 12 }}>
                  <Link href={`/${activeLang}`} className="card-link">
                    {t("GoToHome")}
                  </Link>
                </GoToHomepageBtn>
                <GoToCartBtn style={{ fontSize: 12 }}>
                  <Link href={`/${activeLang}/cart`} className="card-link">
                    {t("GoToCart")}
                  </Link>
                </GoToCartBtn>
                <div className="text-center">
                  <Logout />
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserDetail;
