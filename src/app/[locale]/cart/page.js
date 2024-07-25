'use client'

import { CartImageContainer, CartTitle, GoToCheckOut, ProductName, ProductPrice, SizeColor } from "./Styled";
import { FaMinus, FaPlus, FaRegTrashAlt, FaArrowRight } from "react-icons/fa";
import { DetailsCounter } from "@/styles/Product";
import { DetailsDivider } from "@/styles/GlobalStyled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/CustomBreadcrumb/Breadcrumb";
import toast from "react-hot-toast";
import Image from "next/image";
import { clearCart, removeFromCart, updateCartItem } from "@/redux/slice/cartSlice";
import { updateUserBasket } from "@/services/api";
import { decreaseQuantity, increaseQuantity } from "@/utils/quantityHelpers";

const CartPage = () => {

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const t = useTranslations("CartPage");
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.cartItems)
  const currentUserEmail = useSelector((state) => state.user.currentUserEmail)

  const currentUserCartItems = cartItems.filter((urun) => urun.userEmail === currentUserEmail);
  const deliveryFee = (currentUserEmail & currentUserCartItems) ? 15 : 0;

  useEffect(() => {
    const itemTotalPrices = currentUserCartItems.map((item) => {
      const price = item.discountPrice ? item.discountPrice : item.price;
      return price * item.total;
    });

    const currentCost = itemTotalPrices.reduce((acc, curr) => acc + curr, 0);
    setTotalCost(currentCost);
  }, [currentUserCartItems]);

  const checkPromoCode = () => {
    if (promoCode == "atmosware") {
      setDiscount(100)
      setPromoCode("")
      toast.success(t('DiscountApplied'));
    }
    else {
      toast.error(t('EnterValidCode'));
    }
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success(t('ProductRemoved'));
  }

  const submitCartToUser = async () => {
    try {
      await updateUserBasket(currentUserEmail, currentUserCartItems);
      toast.success(t('CartSubmitted'));

      // Sepeti temizle
      dispatch(clearCart());
      setDiscount(0)
    } catch (error) {
      toast.error(t('CartNotSubmitted'));
      console.error(error.message);
    }
  }

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateCartItem({ id, newQuantity }));
  };

  return <div className="container">
    <DetailsDivider />
    <Breadcrumb isCartPage={true} />
    <CartTitle>{t('YourCart')}</CartTitle>
    <div className="d-flex flex-column flex-md-row mt-3_5 mt-md-4">
      <div className="col-12 col-md-6 border">
        {
          currentUserCartItems.length > 0 ? (
            currentUserCartItems.map((urun) => (
              <div className="d-flex p-4" key={urun.name}>
                <CartImageContainer>
                  <Image className="rounded-3" src={urun.img} alt={urun.name} fill priority={false}
                    sizes="(max-width: 425px) 99px, 124px" />
                </CartImageContainer>
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex flex-column ms-3">
                    <ProductName>{urun.name}</ProductName>
                    <div>
                      <SizeColor>{t('Size')}: {urun.size}</SizeColor>
                      <SizeColor>{t('Color')}: {urun.color}</SizeColor>
                    </div>
                    <ProductPrice>${urun.discountPrice ? urun.discountPrice : urun.price}</ProductPrice>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <div>
                      <FaRegTrashAlt size={24} color="red" cursor="pointer" onClick={() => handleRemoveItem(urun.cartId)} />
                    </div>
                    <div className="mt-5_5">
                      <DetailsCounter>
                        <FaMinus
                          onClick={() => handleUpdateQuantity(urun.cartId, decreaseQuantity(urun.total))}
                          size={24}
                          style={{ cursor: "pointer" }}
                          id={`decrease-quantity`}
                        />
                        <span style={{ margin: "0 5px" }}>{urun.total}</span>
                        <FaPlus
                          onClick={() => handleUpdateQuantity(urun.cartId, increaseQuantity(urun.total))}
                          size={24}
                          style={{ cursor: "pointer" }}
                          id={`increase-quantity`}
                        />
                      </DetailsCounter>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
            :
            (<div className="d-flex align-items-center justify-content-center h-100">
              <h4>{t('NotAddedProduct')}</h4>
            </div>)
        }
      </div>
      <div className="col-12 col-md-6 ms-md-3_5 mt-3_5 mt-md-0 border h-100 p-4">
        <h4 className="fw-bold">{t('OrderSummary')}</h4>
        <div className="mt-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('Subtotal')}
              <span className="rounded-pill fw-bold">${totalCost}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('Discount')}
              <span className="text-danger rounded-pill fw-bold">-${discount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('DeliveryFee')}
              <span className="rounded-pill fw-bold">${totalCost > 200 ? 0 : deliveryFee}</span>
            </li>
            <hr className="my-2" />
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 ps-0 fw-semibold">
              {t('Total')}
              <span className="rounded-pill fw-bold">${totalCost > 200 ? totalCost - discount : totalCost + deliveryFee - discount}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <form className="w-100 position-relative">
            <input type="text"
              className="form-control bg-secondary-subtle"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t('AddPromoCode')}
              style={{
                borderRadius: 62,
                height: 48,
                paddingLeft: 40
              }} >
            </input>
            <svg
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
              }}
              width="22"
              height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0766 10.4857L11.7653 1.17444C11.5917 0.999696 11.3851 0.861152 11.1576 0.766846C10.93 0.672541 10.686 0.62435 10.4397 0.625069H1.75001C1.45164 0.625069 1.16549 0.743595 0.954513 0.954574C0.743534 1.16555 0.625008 1.4517 0.625008 1.75007V10.4398C0.624289 10.6861 0.67248 10.9301 0.766785 11.1576C0.861091 11.3852 0.999635 11.5918 1.17438 11.7654L10.4856 21.0766C10.8372 21.4281 11.3141 21.6256 11.8113 21.6256C12.3084 21.6256 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3085 21.6255 11.8113C21.6255 11.3141 21.4281 10.8373 21.0766 10.4857ZM11.8113 19.2204L2.87501 10.2813V2.87507H10.2813L19.2175 11.8113L11.8113 19.2204ZM7.37501 5.87507C7.37501 6.17174 7.28703 6.46175 7.12221 6.70842C6.95739 6.9551 6.72312 7.14736 6.44903 7.26089C6.17494 7.37442 5.87334 7.40412 5.58237 7.34625C5.2914 7.28837 5.02413 7.14551 4.81435 6.93573C4.60457 6.72595 4.46171 6.45868 4.40383 6.1677C4.34595 5.87673 4.37566 5.57513 4.48919 5.30104C4.60272 5.02695 4.79498 4.79269 5.04165 4.62786C5.28833 4.46304 5.57834 4.37507 5.87501 4.37507C6.27283 4.37507 6.65436 4.5331 6.93567 4.81441C7.21697 5.09571 7.37501 5.47724 7.37501 5.87507Z" fill="black" fillOpacity="0.4" />
            </svg>
          </form>
          <button onClick={checkPromoCode}
            className="btn ms-2"
            style={{ width: 119, height: 48, borderRadius: 62, backgroundColor: "#000", color: "#fff" }}>
            {t('Apply')}
          </button>
        </div>
        <GoToCheckOut onClick={submitCartToUser}>{t('GoToCheckOut')} <FaArrowRight /></GoToCheckOut>
      </div>
    </div>
  </div >;
};

export default CartPage;
