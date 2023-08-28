"use client";

import { addFavourites, addVotes, removeFavourites } from "@/app/API/CatApi";
import "./ButtonsBlock.scss";

export const ButtonsBlock = ({ setOnLike, favouriteId, setFavouriteId, imageID }) => {
  const onClickLike = () => {
    addVotes({ image_id: imageID, value: 1 });
    setOnLike((prev) => !prev);
    setFavouriteId("");
  };
  const onClickFav = async () => {
    if (!favouriteId) {
      const data = await addFavourites(imageID);
      setFavouriteId(data.id);
    } else {
      removeFavourites(favouriteId);
      addVotes({ image_id: imageID, value: 0 });
      setFavouriteId("");
    }
  };
  const onClickDisklike = () => {
    addVotes({ image_id: imageID, value: -1 });
    setOnLike((prev) => !prev);
    setFavouriteId("");
  };

  return (
    <div className="bts__wrapper">
      <button className="btn green" onClick={onClickLike}>
        <svg width="30" height="30" className="btn--icon">
          <use href="./symbol-defs.svg#icon-like-color-20"></use>
        </svg>
      </button>
      <button className="btn red" onClick={onClickFav}>
        <svg width="30" height="26" className="btn--icon">
          <use
            href={
              !favouriteId
                ? "./symbol-defs.svg#icon-fav-20"
                : "./symbol-defs.svg#icon-fav-color-20"
            }
          ></use>
        </svg>
      </button>
      <button className="btn yellow" onClick={onClickDisklike}>
        <svg width="30" height="30" className="btn--icon">
          <use href="./symbol-defs.svg#icon-dislike-color-20"></use>
        </svg>
      </button>
    </div>
  );
};
