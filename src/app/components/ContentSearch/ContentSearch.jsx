"use client";

import { useEffect, useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import "./ContentSearch.scss";
import { getBreeds, getCatsImgByBreed } from "@/app/API/CatApi";
import { useSearchParams } from "next/navigation";

export const ContentSearch = () => {
  const [someCats, setSomeCats] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword");

  useEffect(() => {
    const getData = async () => {
      try {
        const breeds = await getBreeds();
        const breedsObj = breeds.find((breed) => breed.name === search);
        const data = await getCatsImgByBreed(breedsObj.id);

        setSomeCats(data);
      } catch (error) {}
    };
    getData();
  }, [searchParams]);

  return (
    <div className="gallery__page">
      <GoBackComp />
      <p className="search__text">
        Search results for:
        <span className="search__text--accent">{search}</span>
      </p>
      <ImageList catsList={someCats} />
    </div>
  );
};
