"use client";
import { usePathname } from "next/navigation";
import { LinkComp } from "../LinksComp/LinkComp";
import { Welcome } from "../Welcome/Welcome";
import "./LeftSide.scss";

export const LeftSide = () => {
  const activePage = usePathname();
  return (
    <div
      className={activePage === "/" ? "left__wrapper shown" : "left__wrapper"}
    >
      <Welcome />
      <LinkComp />
    </div>
  );
};
