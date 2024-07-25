import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Rating } from "../Rating/Rating";
import { useTranslations } from "next-intl";

const CommentModal = ({
  onClose,
  onSave,
  newComment,
  handleInputChange,
  handleRatingChange,
}) => {
  const t = useTranslations("CommentModal");
  return (
    <Modal show={true} onHide={onClose} id="commentModal">
      <Modal.Header closeButton>
        <Modal.Title>{t("WriteAReview")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="comment">
            <Form.Label>{t("YourComment")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={newComment.comment}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="rating" className="mt-2">
            <Form.Label>{t("Rating")}</Form.Label>
            <Rating
              value={newComment.rating}
              readOnly={false}
              onChange={handleRatingChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>
          {t("Exit")}
        </Button>
        <Button variant="success" onClick={onSave}>
          {t("MakeAComment")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentModal;
