"use client";
import Link from "next/link";
import { LinkImage, LinkText, LinkWrapper } from "./LinkComp.styled.js";
import { useEffect } from "react";

export const LinkComp = () => {
  let activePage;
  useEffect(() => {
    activePage = window.location.pathname;
    console.log(activePage);
  }, []);

  return (
    <>
      <LinkWrapper>
        <Link href={"/voting"}>
          <LinkImage
            src={"/vote-table.png"}
            alt="Vote table"
            width={130}
            height={190}
            color="blue"
          />
          <LinkText>VOTING</LinkText>
        </Link>
        <Link href={"/breeds"}>
          <LinkImage
            src={"/pet-breeds.png"}
            alt="cat image"
            width={130}
            height={190}
            color="green"
          />
          <LinkText>BREEDS</LinkText>
        </Link>
        <Link href={"/gallery"}>
          <LinkImage
            src={"/images-search.png"}
            alt="hand with phone"
            width={130}
            height={190}
            color="yellow"
          />
          <LinkText>GALLERY</LinkText>
        </Link>
      </LinkWrapper>
    </>
  );
};
