"use client";
import { useState } from "react";
import "./SearchBar.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ModalMenu } from "../ModalMenu/ModalMenu";

export const SearchBar = () => {
  const [breed, setBreed] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const activePage = usePathname();
  const handleInput = (e) => {
    e.preventDefault();
    setBreed(e.target.value);
  };
  const searchBreed = () => {};
  const openMenu = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <>
      <div className="search__wrapper">
        <button type="button" onClick={openMenu} className="menu__btn">
          <svg width="30" height="18" className="menu__btn--icon">
            <use href="/symbol-defs.svg#icon-menu"></use>
          </svg>
        </button>
        <form className="search__form">
          <input
            type="text"
            className="search__input"
            placeholder="Search for breeds by name"
            onChange={handleInput}
            value={breed}
          />
          <Link
            href={{ pathname: "/search", query: { keyword: `${breed}` } }}
            className="search__btn"
          >
            <svg width="20" height="20" className="search__btn--icon">
              <use href="/symbol-defs.svg#icon-search-20"></use>
            </svg>
          </Link>
        </form>
        <div className="links__wrapper">
          <Link
            className={
              activePage !== "/likes" ? "search__link" : "search__link active"
            }
            href={"/likes"}
          >
            <svg width="30" height="30" className="search__link--icon">
              <use href="/symbol-defs.svg#icon-like-color-20"></use>
            </svg>
          </Link>
          <Link
            className={
              activePage !== "/favourites"
                ? "search__link"
                : "search__link active"
            }
            href={"/favourites"}
          >
            <svg width="30" height="30" className="search__link--icon">
              <use href="/symbol-defs.svg#icon-fav-20"></use>
            </svg>
          </Link>
          <Link
            className={
              activePage !== "/dislikes"
                ? "search__link"
                : "search__link active"
            }
            href={"/dislikes"}
          >
            <svg width="30" height="30" className="search__link--icon">
              <use href="/symbol-defs.svg#icon-dislike-color-20"></use>
            </svg>
          </Link>
        </div>
      </div>

      {modalOpen && <ModalMenu closeMenu={openMenu} />}
    </>
  );
};
