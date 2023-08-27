"use client";

import "./ContentBreedById.scss";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { SortBreeds } from "../SortBreeds/SortBreeds";
import { useEffect, useState } from "react";
import { getCatsImgByBreed } from "@/app/API/CatApi";
import { ImageList } from "../ImageList/ImageList";
import Image from "next/image";

export const ContentBreedById = ({ breedId }) => {
  console.log("breedId", breedId);

  const [breedInfo, setBreedInfo] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCatsImgByBreed(breedId);
        console.log(data);

        setBreedInfo(data);
      } catch (error) {}
    };
    getData();
  }, []);

  if (!breedInfo) return;
  console.log("breedInfo", breedInfo);

  return (
    <div className="breeds__page">
      <div className="breeds__page--head">
        <GoBackComp />
      </div>
      <div className="image-wrapper">
        <div className="image-thumb">
          <Image
            className="randomImg"
            src={breedInfo[0].url || "/upload-bg.png"}
            alt="Vote table"
            width={640}
            height={360}
          />
        </div>
      </div>
      <div className="breed__info--wrapper">
        <h3 className="breed__info--title">{breedInfo[0].breeds[0].name}</h3>
        <p className="breed__info--decription">
          {breedInfo[0].breeds[0].description}
        </p>
        <div className="breed__detal-info--wrapper">
          <p className="breed__detal-info--text">
            <span
              className="breed__detal-info--title"
              style={{ display: "block" }}
            >
              Temperament:
            </span>
            {breedInfo[0].breeds[0].temperament}
          </p>
          <div className="breed__detal-info--text-wrap">
            <p className="breed__detal-info--text">
              <span className="breed__detal-info--title">Origin:</span>
              {breedInfo[0].breeds[0].origin}
            </p>
            <p className="breed__detal-info--text">
              <span className="breed__detal-info--title">Weight:</span>
              {breedInfo[0].breeds[0].weight.metric} kgs
            </p>
            <p className="breed__detal-info--text">
              <span className="breed__detal-info--title">Life span:</span>
              {breedInfo[0].breeds[0].life_span} years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
