"use client";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ImageModal = ({ imageSrc, handleClose, show, productName }) => {
  return (
    <Modal show={show} onHide={handleClose} className="mt-5 pt-5">
      <Modal.Header closeButton>
        <Modal.Title>{productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100">
        <Image
          src={imageSrc}
          layout="responsive"
          alt="Full-size view"
          width={1200}
          height={800}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
