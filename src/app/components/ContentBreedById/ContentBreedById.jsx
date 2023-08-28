"use client";


import { GoBackComp } from "../GoBackComp/GoBackComp";
import { useEffect, useState } from "react";
import { getCatsImgByBreed } from "@/app/API/CatApi";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ContentBreedById.scss";

export const ContentBreedById = ({ breedId }) => {

  const [breedInfo, setBreedInfo] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCatsImgByBreed(breedId);

        setBreedInfo(data);
      } catch (error) {}
    };
    getData();
  }, []);

  if (!breedInfo) return;

    const sliderSettings = {
      dots: true, 
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <div className="breeds__page">
      <div className="breeds__page--head">
        <GoBackComp />
      </div>
      <div className="image-wrapper">
        <Slider {...sliderSettings}>
          {breedInfo.map((info, index) => (
            <div key={index} className="image-thumb">
              <Image
                className="randomImg"
                src={info.url || "./upload-bg.png"}
                alt="Vote table"
                width={640}
                height={360}
              />
            </div>
          ))}
        </Slider>
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
