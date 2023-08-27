"use client";

import { usePathname } from "next/navigation";
import "./ImageList.scss";
import Image from "next/image";
import Link from "next/link";

export const ImageList = ({ catsList }) => {
  const activePage = usePathname();
  console.log("catsList", catsList);
  
  return (
    <ul className="cat-list">
      {catsList.map((el) => (
        <li key={el.id}>
          <Image
            src={el.image.url}
            alt="cat"
            className="cat-item__img"
            width={el.image.width}
            height={el.image.height}
          />
          <div className="cat-item__overlay">
            {activePage === "/breeds" ? (
              <span className="cat-item__link--wrap">
                <Link href={`/breeds/${el.id}`} className="cat-item__link">
                  {el.name}
                </Link>
              </span>
            ) : (
              <button className="cat-item__btn--fav">
                <svg width="20" height="18" className="menu__btn--icon">
                  <use href="/symbol-defs.svg#icon-fav-20"></use>
                </svg>
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
