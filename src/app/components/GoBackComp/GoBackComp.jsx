"use client";
import { usePathname, useRouter } from "next/navigation";
import "./GoBackComp.scss";

export const GoBackComp = () => {
  const activePage = usePathname();
  const router = useRouter();
  const pageFlags = activePage.split("/").slice(1);
  const goBack = () => {
    router.back();
  };

  return (
    <div className="back__wrapper">
      <button type="button" onClick={goBack} className="back__btn">
        <svg width="20" height="20" className="back__btn--icon">
          <use href="./symbol-defs.svg#icon-back-20"></use>
        </svg>
      </button>
      {pageFlags.map((flag) => (
        <span key={flag} className="back__current-page">{flag}</span>
      ))}
    </div>
  );
};
