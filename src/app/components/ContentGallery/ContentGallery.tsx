"use client";

import { useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import { SortGallery } from "../SortGallery/SortGallery";
import "./ContentGallery.scss";

export const ContentGallery = () => {
  const [order, setOrder] = useState("Random");
  const [type, setType] = useState("All");
  const [breed, setBreed] = useState(null);
  const [limit, setLimit] = useState(10);
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
      <SortGallery
        order={order}
        setOrder={setOrder}
        type={type}
        setType={setType}
        breed={breed}
        setBreed={setBreed}
        limit={limit}
        setLimit={setLimit}
      />
      <ImageList catsList={someCats} />
    </div>
  );
};
