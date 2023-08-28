"use client";

import { usePathname } from "next/navigation";
import "./LogsList.scss";
import { useState } from "react";

export const LogsList = ({ logList }) => {
  const [color, setColor] = useState();
  const dateToTime = (timeString) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(timeString).toLocaleString(undefined, options);
  };
  const actionType = (value) => {
    switch (value) {
      case 1:
        return "was added to Likes";
      case -1:
        return "was added to Dislikes";
      case 0:
        return "was removed from Favourites";
      default:
        return "was added to Favourites";
    }
  };
  const iconType = (value) => {
    switch (value) {
      case 1:
        return "./symbol-defs.svg#icon-like-color-20";
      case -1:
        return "./symbol-defs.svg#icon-dislike-color-20";
      default:
        return "./symbol-defs.svg#icon-fav-20";
    }
  };
  return (
    <ul className="logs-list">
      {logList.map((el) => (
        <li key={el.id} className="log-item">
          <span className="log-item__time">{dateToTime(el.created_at)}</span>
          <p className="log-item__text">
            Image ID:
            <span className="log-item__text--accent"> {el.image_id} </span>
            {actionType(el.value)}
          </p>
          {el.value !== 0 && (
            <svg
              width="20"
              height="20"
              className={
                el.value === 1
                  ? `log-item__text--icon green`
                  : el.value === -1
                  ? `log-item__text--icon yellow`
                  : `log-item__text--icon red`
              }
            >
              <use href={iconType(el.value)}></use>
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
};
