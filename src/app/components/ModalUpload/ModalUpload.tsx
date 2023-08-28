// "use client";
// import { LinkComp } from "../LinksComp/LinkComp";
// import "./ModalUpload.scss";
// export const ModalUpload = ({ closeMenu }) => {
//   return (
//     <div className="modal__overlay">
//       <span onClick={closeMenu} className="close__btn">
//         <svg width="25" height="25" className="close__btn--icon">
//           <use href="/symbol-defs.svg#icon-close-20"></use>
//         </svg>
//       </span>
//       <LinkComp />
//     </div>
//   );
// };
import React, { forwardRef } from "react";
import "./ModalUpload.scss";
import Link from "next/link";
import ModalDropZone from "../ModalDropZone/ModalDropZone";

const ModalUpload = forwardRef((_, ref) => {
  const onClickClose = () => {
    ref.current.classList.remove("opened");
  };

  return (
    <div className="overlay" ref={ref}>
      <div className="modal">
        <button onClick={onClickClose} className="close">
          <svg width="20" height="18" className="cat-item__btn--icon">
            <use href="/symbol-defs.svg#icon-fav-20"></use>
          </svg>
        </button>
        <h2 className="modal__header">Upload a .jpg or .png Cat Image</h2>
        <p className="modal__text">
          Any uploads must comply with the upload
          {
            <Link href="https://thecatapi.com/privacy" target="_blank">
              upload guidelines
            </Link>
          }
          or face deletion.
        </p>
        <ModalDropZone />
      </div>
    </div>
  );
});

ModalUpload.displayName = "Modal";

export default ModalUpload;