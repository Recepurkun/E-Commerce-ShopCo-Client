import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import credit_cards from "@/assets/footer/credit_card.png";
import {
  AllRightsReserved,
  BgUp,
  EmailInput,
  FooterLinks,
  LatestOffer,
  ShopCoBody,
  ShopCoInformation,
  ShopCoTitle,
  SubscribeButton,
} from "./Styled";
import { useTranslations } from "next-intl";
import { Divider } from "@/styles/GlobalStyled";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <BgUp className="d-flex flex-column flex-md-row bg-black text-white rounded-4 w-100">
            <div className="col-12 col-md-6 mx-auto pt-4 ps-4 p-md-5">
              <LatestOffer>{t("Offer")}</LatestOffer>
            </div>
            <div className="col-12 col-md-3 mx-auto d-flex flex-column justify-content-center gap-3 p-3">
              <div className="position-relative">
                <EmailInput
                  type="text"
                  placeholder="Enter your email address"
                  className="w-100 text-start btn btn-light"
                  style={{ paddingLeft: 50 }}
                ></EmailInput>
                <svg
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 20,
                    transform: "translateY(-50%)",
                  }}
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <div>
                <SubscribeButton className="btn btn-light w-100" type="submit">
                  {t("Subscribe")}
                </SubscribeButton>
              </div>
            </div>
          </BgUp>
          <ShopCoBody className="d-flex flex-row flex-wrap w-100">
            <div className="col-12 col-md-4">
              <div className="me-3 me-md-5 ">
                <ShopCoTitle> {t("Title")}</ShopCoTitle>
                <ShopCoInformation>{t("Information")}</ShopCoInformation>
                <span className="d-flex mt-4 gap-3">
                  <FaTwitter
                    className="bg-white text-dark rounded-pill p-2"
                    size={28}
                  />
                  <FaFacebookF
                    className="bg-dark text-white p-2 rounded-pill"
                    size={28}
                  />
                  <FaInstagram
                    className="bg-white text-dark rounded-pill p-1"
                    size={28}
                  />
                  <FaGithub
                    className="bg-white text-dark rounded-pill p-1"
                    size={28}
                  />
                </span>
              </div>
            </div>
            <FooterLinks className="col-12 col-md-8 d-flex flex-row flex-wrap">
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("Company")}</h6>
                <ul>
                  <li>{t("About")}</li>
                  <li>{t("Features")}</li>
                  <li>{t("Works")}</li>
                  <li>{t("Career")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("HELP")}</h6>
                <ul>
                  <li>{t("CustomerSupport")}</li>
                  <li>{t("Delivery")}</li>
                  <li>{t("Terms")}</li>
                  <li>{t("Privacy")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("FAQ")}</h6>
                <ul>
                  <li>{t("Account")}</li>
                  <li>{t("ManageDeliveries")}</li>
                  <li>{t("Orders")}</li>
                  <li>{t("Payments")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("RESOURCES")}</h6>
                <ul>
                  <li>{t("FreeBooks")}</li>
                  <li>{t("DevTutorial")}</li>
                  <li>{t("HowToBlog")}</li>
                  <li>{t("YTPlaylist")}</li>
                </ul>
              </div>
            </FooterLinks>
          </ShopCoBody>
          <Divider />
          <div className="d-flex flex-md-row flex-column align-items-center justify-content-between w-100 pb-5">
            <AllRightsReserved>{t("AllRightReserved")}</AllRightsReserved>
            <Link href="https://github.com/Recepurkun" target="_blank">
              <h6 className="opacity-50">Coded By Recep 🚀 </h6>
            </Link>
            <Image src={credit_cards} alt="credit_cards" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
