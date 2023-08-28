"use client";

import { useRef } from "react";
import ModalUpload from "../ModalUpload/ModalUpload";
import "./ModalUploadBtn.scss";
export default function ModalUploadBtn() {
  const modalRef = useRef(null);

  const onClickUpload = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("opened");
    }
  };

  return (
    <>
      <button
        onClick={onClickUpload}
        type="button"
        className="upload__btn"
      >
        <svg width="20" height="18" className="upload__btn--icon">
          <use href="./symbol-defs.svg#icon-upload-16"></use>
        </svg>
        upload
      </button>
      <ModalUpload ref={modalRef} />
    </>
  );
}