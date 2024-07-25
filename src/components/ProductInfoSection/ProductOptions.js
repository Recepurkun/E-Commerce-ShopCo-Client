"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { DetailsDivider } from "@/styles/GlobalStyled";
import { DetailsAddToBasketButton, DetailsCounter, DetailsSizeButton } from "./Styled";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { addToCart } from "@/redux/slice/cartSlice";

const ProductOptions = ({ colors, sizes, productName, productPrice, productImg, productDiscount }) => {

    const dispatch = useDispatch()

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const activeUser = useSelector((state) => state.user.currentUserEmail);
    const t = useTranslations("MainDetails");

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleAddToCart = () => {
        if (selectedColor && selectedSize && activeUser) {
            const cartItem = {
                cartId: crypto.randomUUID(),
                userEmail: activeUser,
                name: productName,
                price: productPrice, // Orijinal fiyat
                discountPrice: productDiscount ? productDiscount.discount_price : null, // İndirimli fiyat varsa
                color: selectedColor,
                size: selectedSize,
                total: quantity,
                img: productImg,
            };

            dispatch(addToCart(cartItem))
            toast.success(t('SuccessfullyAdded'), {
                icon: '🚀',
                style: {
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginRight: '30px',
                    background: '#333',
                    color: '#fff',
                },
            });
        } else {
            let errorMessage = "";
            if (!selectedColor) {
                errorMessage += t('PickColor') + " ";
            }
            if (!selectedSize) {
                errorMessage += t('PickSize') + " ";
            }
            if (!activeUser) {
                errorMessage += t('PleaseLogIn') + " ";
            }

            toast.error(errorMessage, {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginRight: '30px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <div>
            <h6 className="opacity-75">{t("Color")}</h6>
            <div className="d-flex flex-row mt-3">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`rounded-pill me-3 ${selectedColor === color ? "selected" : ""}`}
                        style={{
                            backgroundColor: color,
                            width: "37px",
                            height: "37px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => handleColorClick(color)}
                        id={`color-${index}`}
                    >
                        {selectedColor === color && <FaCheck color="#fff" />}
                    </div>
                ))}
            </div>
            <DetailsDivider />
            <h6 className="opacity-75">{t("Size")}</h6>
            <div className="d-flex flex-row mt-3 size-selection">
                {sizes.map((size, index) => (
                    <DetailsSizeButton
                        key={index}
                        className={`${selectedSize === size ? "bg-dark text-white border border-light" : ""}`}
                        onClick={() => handleSizeClick(size)}
                        id={`size-${index}`}
                    >
                        {capitalizeFirstLetter(size)}
                    </DetailsSizeButton>
                ))}
            </div>
            <DetailsDivider />
            <div className="d-flex align-items-center mt-3">
                <DetailsCounter>
                    <FaMinus onClick={handleDecreaseQuantity} size={24} style={{ cursor: 'pointer' }} id="decrease-quantity" />
                    <span style={{ margin: '0 5px' }} id="quantity">{quantity}</span>
                    <FaPlus onClick={handleIncreaseQuantity} size={24} style={{ cursor: 'pointer' }} id="increase-quantity" />
                </DetailsCounter>
                <DetailsAddToBasketButton className="ms-4" onClick={handleAddToCart} id="add-to-cart-button">
                    {t('AddToCart')}
                </DetailsAddToBasketButton>
            </div>
        </div>
    );
};

export default ProductOptions;
