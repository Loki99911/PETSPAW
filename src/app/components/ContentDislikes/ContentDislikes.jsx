"use client";

import { useEffect, useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import "./ContentDislikes.scss";
import { getVotes } from "@/app/API/CatApi";

export const ContentDislikes = () => {
  const [someCats, setSomeCats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getVotes();
        
        setSomeCats(
          data.filter((el) => {
            if (el.value === -1) return el;
          })
        );
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div className="gallery__page">
      <GoBackComp />
      <ImageList catsList={someCats} />
    </div>
  );
};
