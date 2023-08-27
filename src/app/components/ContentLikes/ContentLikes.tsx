"use client";

import { useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import { SortGallery } from "../SortGallery/SortGallery";
import "./ContentLikes.scss";

export const ContentLikes = () => {
  const [someCats, setSomeCats] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await getBreedCats({ breed, limit });
  //       setSomeCats(data);
  //     } catch (error) {}
  //   };
  //   getData();
  // }, [breed, limit]);

  return (
    <div className="gallery__page">
      <GoBackComp />
      <ImageList catsList={someCats} />
      likes
    </div>
  );
};
