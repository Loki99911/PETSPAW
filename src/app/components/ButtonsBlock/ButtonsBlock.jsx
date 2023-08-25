"use client";

import "./ButtonsBlock.scss";

export const ButtonsBlock = () => {
  return (
    <div className="bts__wrapper">
      <button className="btn green">
        <svg width="30" height="30" className="btn--icon">
          <use href="/symbol-defs.svg#icon-like-color-20"></use>
        </svg>
      </button>
      <button className="btn red">
        <svg width="30" height="26" className="btn--icon">
          <use href="/symbol-defs.svg#icon-fav-20"></use>
        </svg>
      </button>
      <button className="btn yellow">
        <svg width="30" height="30" className="btn--icon">
          <use href="/symbol-defs.svg#icon-dislike-color-20"></use>
        </svg>
      </button>
    </div>
  );
};
