import React, { useState } from "react";
import { dateFormatter } from "@/utils/dateFormatter";
import { CustomerComment, CustomerCommentName } from "../HappyCustomers/Styled";
import { Rating } from "../Rating/Rating";
import { MdVerifiedUser } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import { FilterButton, LoadMore, ReviewButton, WriteAReview } from "./Styled";
import { useTranslations } from "next-intl";
import CommentSort from "./CommentSort";

const ProductReviews = ({ product, setShowModal }) => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [sortOption, setSortOption] = useState("latest");
  const t = useTranslations("ProductComment");

  const loadMoreReviews = () => {
    setVisibleReviews(
      visibleReviews + (product.comments.length - visibleReviews)
    );
  };

  const sortedComments = [...product.comments].sort((a, b) => {
    if (sortOption === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "highest") {
      return b.rating - a.rating;
    } else if (sortOption === "lowest") {
      return a.rating - b.rating;
    }
    return 0;
  });

  return (
    <>
      <div className="d-flex flex-row justify-content-between my-3_5">
        <div className="d-flex align-items-center">
          <h4 className="fw-bold">{t("AllReviews")}</h4>
          <span
            className="ms-2"
            style={{ fontSize: 16, fontWeight: 400, fontFamily: "satoshi" }}
          >
            ({product.comments.length})
          </span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <FilterButton className="me-2">
            <button>
              <IoFilter />
            </button>
          </FilterButton>
          <CommentSort sortOption={sortOption} setSortOption={setSortOption} />
          <ReviewButton onClick={() => setShowModal(true)}>
            <WriteAReview>{t("WriteAReview")}</WriteAReview>
          </ReviewButton>
        </div>
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-md-center">
        {sortedComments.slice(0, visibleReviews).map((comment, index) => (
          <div
            className="col-12 col-md-6 border border-1 rounded-4 me-3_5 mb-3_5"
            style={{ maxWidth: 628 }}
            key={index}
          >
            <div className="px-4 py-4">
              <div className="d-flex justify-content-between align-items-center">
                <Rating value={comment.rating} />
                <BsThreeDots size={24} style={{ cursor: "pointer" }} />
              </div>
              <div className="d-flex align-items-center mt-3">
                <CustomerCommentName>{comment.user}</CustomerCommentName>
                <MdVerifiedUser
                  className="ms-1"
                  style={{ color: "#01AB31", height: 24, width: 24 }}
                />
              </div>
              <CustomerComment className="mt-3">
                {comment.comment}
              </CustomerComment>
              <p className="mt-4">
                {dateFormatter(comment.date)} {t("Posted")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        {visibleReviews < product.comments.length && (
          <LoadMore onClick={loadMoreReviews}>{t("LoadMore")}</LoadMore>
        )}
      </div>
    </>
  );
};

export default ProductReviews;
