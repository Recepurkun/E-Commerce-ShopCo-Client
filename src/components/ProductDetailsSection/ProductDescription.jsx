import { useTranslations } from "next-intl";
import Image from "next/image";

const ProductDescription = ({ product }) => {
  const t = useTranslations("ProductDescription");
  return (
    <div className="card my-3 p-3 rounded-3" style={{ height: "100%" }}>
      <div className="row g-0 h-100">
        <div className="col-md-4 position-relative">
          <Image
            src={product.img}
            className="img-fluid rounded-3 productCard"
            alt={product.name}
            fill
          />
        </div>
        <div className="col-md-8">
          <div className="card-body ms-2">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text mt-3">{product.definition}</p>
            <div className="card-text mt-3">
              <ul className="list-group list-group-flush w-50">
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("Price")}: ${product.price}
                </li>
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("Category")}: {product.category}
                </li>
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("Style")}: {product.style}
                </li>
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("Gender")}: {product.gender}
                </li>
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("NumberofSales")}: {product.numberOfSales}
                </li>
                <li className="list-group-item ps-0 text-body-secondary">
                  {t("Stock")}: {product.stock}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
