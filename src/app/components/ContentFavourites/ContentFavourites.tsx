"use client";

import { useEffect, useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import "./ContentFavourites.scss";
import { getFavourites } from "@/app/API/CatApi";
import { LogsList } from "../LogsList/LogsList";

export const ContentFavourites = () => {
  const [someCats, setSomeCats] = useState([]);
  const [currentLogs, setCurrentLogs] = useState([]);
  const [favoriteAction, setFavoriteAction] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getFavourites();
        setSomeCats(data);
        const dataVotes = await getVotes();
        setCurrentLogs(
          [...dataVotes, ...dataFavourites].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      } catch (error) {}
    };
    getData();
  }, [favoriteAction]);

  return (
    <div className="gallery__page">
      <GoBackComp />
      <ImageList
        catsList={someCats}
        currentFavourites={someCats}
        setFavoriteAction={setFavoriteAction}
      />
      <LogsList logList={currentLogs} />
    </div>
  );
};
