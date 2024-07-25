import { useTranslations } from "next-intl";
import Link from "next/link";

const Breadcrumb = ({
  category,
  gender,
  activeCategory,
  isCartPage = false,
}) => {
  const t = useTranslations("Breadcrumb");
  return (
    <nav aria-label="breadcrumb" className="mb-md-4_75 mb-3_5 mt-3_5 mt-md-4">
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link href="/">{t("Home")}</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/">
            {activeCategory ? activeCategory : isCartPage ? "Cart" : t("Shop")}
          </Link>
        </li>
        {gender && (
          <li className="breadcrumb-item">
            <Link href="#">{gender}</Link>
          </li>
        )}
        {category && (
          <li className="breadcrumb-item active" aria-current="page">
            {category}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
