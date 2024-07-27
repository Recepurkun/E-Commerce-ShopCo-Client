import Image from "next/image";
import { getUserData } from "@/services/api";
import { useEffect, useState } from "react";
import { dateFormatter } from "@/utils/dateFormatter";
import { MdVerifiedUser } from "react-icons/md";
import { OrderedProductImage, OrderedProductName } from "./Styled";
import { useTranslations } from "next-intl";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

const UserOrders = ({ userEmail }) => {
  const [orders, setOrders] = useState([]);
  const t = useTranslations("UserOrders");

  useEffect(() => {
    const fetchPastOrders = async () => {
      const data = await getUserData(userEmail);
      const user_basket = Array.isArray(data.user_basket)
        ? data.user_basket
        : [data.user_basket]; // Veriyi diziye dönüştür
      setOrders(user_basket);
    };

    fetchPastOrders();
  }, [userEmail]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      const itemTotal = item.discountPrice
        ? item.discountPrice * item.total
        : item.price * item.total;
      return acc + itemTotal;
    }, 0);
    return total;
  };

  return (
    <div className="col-12 col-lg-8 mt-4 mt-lg-0">
      <h3 className="text-center mb-4">{t("PastOrders")}</h3>
      {orders.length > 0 ? (
        <>
          {orders.map((order, index) => (
            <div key={index} className="mb-3 w-100">
              <div className="accordion  " id="accordionFlushPastOrders">
                <div className="accordion-item ">
                  <div className="accordion-header ">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${order.orderDate}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${order.orderDate}`}
                    >
                      <div className="d-flex flex-row align-items-center justify-content-between w-100">
                        <div
                          className="d-lg-flex d-none  flex-row flex-wrap gap-2 align-items-center"
                          style={{ width: "150px" }}
                        >
                          {order.items.map((item) => (
                            <div
                              key={item.cartId}
                              className="position-relative"
                              style={{
                                width: 30,
                                height: 30,
                              }}
                            >
                              <Image
                                src={item.img}
                                fill
                                alt="product"
                                className="rounded-3"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <div className="me-3">
                            <MdVerifiedUser
                              style={{
                                color: "#01AB31",
                                height: 20,
                                width: 20,
                              }}
                            />
                          </div>
                          <h6>{t("OrderCompleted")}</h6>
                        </div>
                        <div className="d-flex flex-column align-items-lg-end justify-content-center me-3">
                          <h6 className="opacity-75">
                            {dateFormatter(order.orderDate)}
                          </h6>
                          <h6 className="text-success">
                            ${calculateTotalPrice(order.items)}
                          </h6>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="d-flex flex-row flex-wrap">
                    {order.items.map((item) => (
                      <div
                        key={item.cartId}
                        id={`flush-collapse${order.orderDate}`}
                        className="accordion-collapse collapse w-50 p-1 border w-lg-100"
                        data-bs-parent="#accordionFlushPastOrders"
                      >
                        <div className="p-2 ">
                          <div className="d-flex flex-row h-100">
                            <OrderedProductImage>
                              <Image fill src={item.img} alt={item.name} />
                            </OrderedProductImage>
                            <div className="ms-2">
                              <ul className="list-group">
                                <li className="list-group-item">
                                  <OrderedProductName>
                                    <strong>{item.name}</strong>
                                  </OrderedProductName>
                                </li>
                                <li
                                  className={`list-group-item ${
                                    item.discountPrice
                                      ? "text-decoration-line-through opacity-50"
                                      : ""
                                  }`}
                                >
                                  <strong>{t("Price")}: &nbsp;</strong> $
                                  {item.price}
                                </li>
                                {item.discountPrice && (
                                  <li className="list-group-item d-none d-lg-flex">
                                    <strong>
                                      {t("DiscountPrice")}: &nbsp;
                                    </strong>
                                    <strong className="text-danger">
                                      ${item.discountPrice}
                                    </strong>
                                  </li>
                                )}

                                <li className="list-group-item d-none d-lg-flex">
                                  <strong>{t("Color")}: &nbsp; </strong>
                                  {capitalizeFirstLetter(item.color)}
                                </li>
                                <li className="list-group-item d-none d-lg-flex">
                                  <strong>{t("Size")}: &nbsp; </strong>
                                  {capitalizeFirstLetter(item.size)}
                                </li>
                                <li className="list-group-item">
                                  <strong>{t("Total")}: &nbsp; </strong>
                                  {item.total}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <h5>{t("NoShopped")}</h5>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
