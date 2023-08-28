"use client";
import "./LinkComp.scss";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const LinkComp = () => {
  const activePage = usePathname();

  return (
    <div className="LinkWrapper">
      <Link
        className={
          activePage !== "/voting" ? "LinkStyled" : "LinkStyled active"
        }
        href={"/voting"}
      >
        <Image
          className="LinkImage blue"
          src={"./vote-table.png"}
          alt="Vote table"
          width={130}
          height={190}
        />
        <p className="LinkText">VOTING</p>
      </Link>
      <Link
        className={
          activePage !== "/breeds" ? "LinkStyled" : "LinkStyled active"
        }
        href={"/breeds"}
      >
        <Image
          className="LinkImage green"
          src={"./pet-breeds.png"}
          alt="cat image"
          width={130}
          height={190}
        />
        <p className="LinkText">BREEDS</p>
      </Link>
      <Link
        className={
          activePage !== "/gallery" ? "LinkStyled" : "LinkStyled active"
        }
        href={"/gallery"}
      >
        <Image
          className="LinkImage yellow"
          src={"./images-search.png"}
          alt="hand with phone"
          width={130}
          height={190}
        />
        <p className="LinkText">GALLERY</p>
      </Link>
    </div>
  );
};
