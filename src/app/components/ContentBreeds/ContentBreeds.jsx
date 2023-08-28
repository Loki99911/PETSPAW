"use client";

import "./ContentBreeds.scss";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { SortBreeds } from "../SortBreeds/SortBreeds";
import { useEffect, useState } from "react";
import { getBreedCats } from "@/app/API/CatApi";
import { ImageList } from "../ImageList/ImageList";

export const ContentBreeds = () => {
  const [breed, setBreed] = useState(null);
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("random");
  const [someCats, setSomeCats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBreedCats({ breed, limit, order });
        setSomeCats(data);
      } catch (error) {}
    };
    getData();
  }, [breed, limit, order]);

  return (
    <div className="breeds__page">
      <div className="breeds__page--head">
        <GoBackComp />
        <SortBreeds
          breed={breed}
          setBreed={setBreed}
          limit={limit}
          setLimit={setLimit}
          setOrder={setOrder}
        />
      </div>
      <ImageList catsList={someCats} />
    </div>
  );
};
