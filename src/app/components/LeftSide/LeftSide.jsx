"use client";
import { usePathname } from "next/navigation";
import { LinkComp } from "../LinksComp/LinkComp";
import { Welcome } from "../Welcome/Welcome";
import "./LeftSide.scss";
import Image from "next/image";

export const LeftSide = () => {
  const activePage = usePathname();
  return (
    <div
      className={activePage === "/" ? "left__wrapper shown" : "left__wrapper"}
    >
      <Image src={"/logo.png"} alt="logo" width={107} height={24}/>
      <Welcome />
      <LinkComp />
    </div>
  );
};
