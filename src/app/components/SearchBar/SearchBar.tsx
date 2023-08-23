"use client";
import { useState } from "react";
import "./SearchBar.scss";
import { usePathname } from "next/navigation";

export const SearchBar = () => {
  const [breed, setBreed] = useState();
  const activePage = usePathname();
  const handleInput = (e) => {
    e.preventDefault();
    setBreed(e.target.value);
  };
  const searchBreed = () => {};
  return (
    <>
      <div className="search__wrapper">
        <form className="search__form">
          <input
            type="text"
            className="search__input"
            placeholder="Search for breeds by name"
            onChange={handleInput}
            value={breed}
          />
          <button type="submit" className="search__btn" onSubmit={searchBreed}>
            <svg width="20" height="20" className="search__btn--icon">
              <use href="/symbol-defs.svg#icon-search-20"></use>
            </svg>
          </button>
        </form>
        <div className="links__wrapper">
          {/* <Link className={
            activePage !== "/likes" ? "search__link" : "search__link active"
          } href={"/likes"}> */}
          <svg width="30" height="30" className="search__btn--icon">
            <use href="/symbol-defs.svg#icon-search-20"></use>
          </svg>
          {/* </Link> */}
          {/* <Link className={
            activePage !== "/favourites" ? "search__link" : "search__link active"
          } href={"/favourites"}> */}
          <svg width="30" height="30" className="search__btn--icon">
            <use href="/symbol-defs.svg#icon-search-20"></use>
          </svg>
          {/* </Link> */}
          {/* <Link className={
            activePage !== "/dislikes" ? "search__link" : "search__link active"
          } href={"/dislikes"}> */}
          <svg width="30" height="30" className="search__btn--icon">
            <use href="/symbol-defs.svg#icon-search-20"></use>
          </svg>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
