"use client";
import "../ProductInfoSection/style.css";
import { useState } from "react";
import { ProductInfoTitle } from "./Styled";
import { useTranslations } from "next-intl";
import { postProductComment } from "@/services/api";
import { useSelector } from "react-redux";
import CommentModal from "./CommentModal";
import toast from "react-hot-toast";
import Faqs from "./ProductFAQs";
import ProductDetails from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const ProductComments = ({ product }) => {
  const t = useTranslations("ProductComment");
  const currentUser = useSelector((state) => state.user.currentUserEmail);
  const [showModal, setShowModal] = useState(false);

  const users =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("users")) || []
      : [];

  const getCurrentUserInfo = users.filter((n) => n.user_email === currentUser);

  const [newComment, setNewComment] = useState({
    user: getCurrentUserInfo.length
      ? getCurrentUserInfo[0].user_name
      : currentUser,
    comment: "",
    rating: 0,
    date: new Date().toISOString().slice(0, 10),
  });

  const [currentProduct, setCurrentProduct] = useState(product);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleRatingChange = (value) => {
    setNewComment((prevComment) => ({
      ...prevComment,
      rating: value,
    }));
  };

  const addComment = async () => {
    const updatedProduct = { ...currentProduct };
    updatedProduct.comments.push(newComment);
    setCurrentProduct(updatedProduct);
    try {
      const cevap = await postProductComment(currentProduct.id, newComment);
      setShowModal(false);
      toast.success("Yorum Eklendi!");
    } catch (error) {
      console.error("Failed to post comment:", error);
      toast.error("Failed to post comment!", error.message);
    }
  };

  const [activeComponent, setActiveComponent] = useState("rating-reviews");

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="container mt-8">
      <div className="row">
        <div className="d-flex flex-row justify-content-evenly mt-5_5 mt-md-7 text-center">
          <ProductInfoTitle
            className={`pb-4 w-100 activeLink opacity-50  ${
              activeComponent === "product-details" ? "active opacity-100" : ""
            }`}
            onClick={() => handleTabClick("product-details")}
            style={{ cursor: "pointer" }}
          >
            {t("ProductDetails")}
          </ProductInfoTitle>
          <ProductInfoTitle
            className={`pb-4 w-100 activeLink opacity-50  ${
              activeComponent === "rating-reviews" ? "active opacity-100" : ""
            }`}
            onClick={() => handleTabClick("rating-reviews")}
            style={{ cursor: "pointer" }}
          >
            {t("RatingReviews")}
          </ProductInfoTitle>
          <ProductInfoTitle
            className={`pb-4 w-100 activeLink opacity-50  ${
              activeComponent === "faqs" ? "active opacity-100" : ""
            }`}
            onClick={() => handleTabClick("faqs")}
            style={{ cursor: "pointer" }}
          >
            {t("FAQs")}
          </ProductInfoTitle>
        </div>

        <div className="my-3">
          {activeComponent === "product-details" && (
            <ProductDetails product={product} />
          )}
          {activeComponent === "rating-reviews" && (
            <ProductReviews product={product} setShowModal={setShowModal} />
          )}
          {activeComponent === "faqs" && <Faqs />}
        </div>
      </div>
      {showModal && (
        <CommentModal
          onClose={() => setShowModal(false)}
          onSave={addComment}
          newComment={newComment}
          handleInputChange={handleInputChange}
          handleRatingChange={handleRatingChange}
        />
      )}
    </div>
  );
};

export default ProductComments;
