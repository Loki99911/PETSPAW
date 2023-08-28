"use client";

import { usePathname } from "next/navigation";
import "./RightSide.scss";

export const RightSide = ({ children }) => {
  const activePage = usePathname();
  return (
    <div
      className={
        activePage === "/" ? "right__wrapper unshown" : "right__wrapper"
      }
    >
      {activePage === "/" && <div className="right__img"></div>}
      <div
        className={
          activePage === "/" ? "right__field" : "right__field transparent"
        }
      >
        {children}
      </div>
    </div>
  );
};
