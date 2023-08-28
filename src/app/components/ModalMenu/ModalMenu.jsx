"use client";
import { LinkComp } from "../LinksComp/LinkComp";
import "./ModalMenu.scss";
export const ModalMenu = ({ closeMenu }) => {
  return (
    <div className="modal__overlay">
      <span onClick={closeMenu} className="close__btn">
        <svg width="25" height="25" className="close__btn--icon">
          <use href="./symbol-defs.svg#icon-close-20"></use>
        </svg>
      </span>
      <LinkComp />
    </div>
  );
};
