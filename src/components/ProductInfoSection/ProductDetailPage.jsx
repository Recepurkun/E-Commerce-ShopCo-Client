"use client";
import Image from "next/image";
import "./style.css";
import {
  BigImageContainer,
  DetailsBody,
  DetailsDiscount,
  DetailsPerDisc,
  DetailsPerDiscButton,
  DetailsPrice,
  DetailsProductName,
  SmallImageContainer,
} from "./Styled";
import { Rating } from "../Rating/Rating";
import { Ranking } from "@/containers/Products/Styled";
import { DetailsDivider } from "@/styles/GlobalStyled";
import Breadcrumb from "../CustomBreadcrumb/Breadcrumb";
import ProductOptions from "./ProductOptions";
import { useState } from "react";
import ImageModal from "./ImageModal";

const ProductDetailPage = ({ product }) => {
  const {
    name,
    rating,
    img,
    price,
    discount,
    definition,
    category,
    gender,
    color,
    size,
  } = product;
  const altTexts = ["Front View", "Back View", "All Views"];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row">
        <DetailsDivider />
        <Breadcrumb category={category} gender={gender} />
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-row flex-md-column order-2 order-md-1 me-md-3 mt-2 mt-md-0">
            {altTexts.map((alt, index) => (
              <SmallImageContainer key={index}>
                <Image
                  src={img}
                  alt={alt}
                  fill
                  priority
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </SmallImageContainer>
            ))}
          </div>
          <div className="d-flex order-1 order-md-2">
            <BigImageContainer>
              <Image
                className="productCard"
                src={img}
                alt="image_front"
                fill
                priority
                style={{ borderRadius: "20px", objectFit: "cover" }}
                sizes="(max-width: 425px) 190px, 295px"
                onClick={handleShow}
              />
            </BigImageContainer>
            <ImageModal
              imageSrc={img}
              handleClose={handleClose}
              show={show}
              productName={product.name}
            />
          </div>
          <div className="d-flex flex-column flex-wrap ms-md-4_8 order-3">
            <DetailsProductName>{name}</DetailsProductName>
            <div className="d-flex mt-3">
              <Rating value={rating} readOnly={true} />
              <Ranking className="ms-3">{rating}/5</Ranking>
            </div>
            <div className="d-flex flex-row align-items-center mt-3">
              {discount && discount.available ? (
                <div className="d-flex flex-row align-items-center">
                  <DetailsPrice className="me-2">
                    ${discount.discount_price}
                  </DetailsPrice>
                  <DetailsDiscount className="me-2">${price}</DetailsDiscount>
                  <DetailsPerDiscButton>
                    <DetailsPerDisc>{discount.percentage}</DetailsPerDisc>
                  </DetailsPerDiscButton>
                </div>
              ) : (
                <DetailsPrice>${price}</DetailsPrice>
              )}
            </div>
            <DetailsBody className="mt-3">{definition}</DetailsBody>
            <DetailsDivider />
            <ProductOptions
              colors={color}
              sizes={size}
              productName={name}
              productPrice={price}
              productImg={img}
              productDiscount={discount}
            />
            <DetailsDivider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
