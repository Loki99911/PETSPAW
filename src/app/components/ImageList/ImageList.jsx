"use client";

import { usePathname } from "next/navigation";
import "./ImageList.scss";
import Image from "next/image";
import Link from "next/link";
import { addFavourites, addVotes, removeFavourites } from "@/app/API/CatApi";

export const ImageList = ({ catsList, currentFavourites, setFavoriteAction }) => {
  const activePage = usePathname();

  const inFavourite = (imageID) => {

    return currentFavourites.some((cat) => cat.id === imageID);
  };

  const toggleFavorite = async (imageID) => {

    if (!inFavourite(imageID)) {
      const data = await addFavourites(imageID);
    } else {
      setFavoriteAction(prev=>!prev);
      const favouriteElem = currentFavourites.find((cat) => cat.id === imageID);
      removeFavourites(favouriteElem.id);
      addVotes({ image_id: favouriteElem.image_id, value: 0 });
    }
  };

  return (
    <ul className="cat-list">
      {catsList.map((el) => (
        <li key={el.id}>
          {(activePage === "/likes" || activePage === "/dislikes") && (
            <Image
              src={el.image.url}
              alt="cat"
              className="cat-item__img"
              width={el.image.width || 100}
              height={el.image.height || 100}
            />
          )}
          {(activePage === "/breeds" || activePage === "/search") && (
            <Link href={`/breeds/${el.id}`}>
              <Image
                src={el?.image?.url || el.url}
                alt="cat"
                className="cat-item__img"
                width={el.image?.width || 100}
                height={el.image?.height || 100}
              />
              <div className="cat-item__overlay">
                <span className="cat-item__link--wrap">
                  <span className="cat-item__link">
                    {el.name || el.breeds[0].name}
                  </span>
                </span>
              </div>
            </Link>
          )}
          {(activePage === "/gallery" || activePage === "/favourites") && (
            <span onClick={() => toggleFavorite(el.id)}>
              <Image
                src={el?.image?.url || el.url}
                alt="cat"
                className="cat-item__img"
                width={el.image?.width || 100}
                height={el.image?.height || 100}
              />
              <div className="cat-item__overlay">
                <button className="cat-item__btn--fav">
                  <svg width="20" height="18" className="cat-item__btn--icon">
                    <use
                      href={
                        inFavourite(el.id)
                          ? "./symbol-defs.svg#icon-fav-color-20"
                          : "./symbol-defs.svg#icon-fav-20"
                      }
                    ></use>
                  </svg>
                </button>
              </div>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

