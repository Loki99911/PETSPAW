"use client";

import "./ContentVoting.scss";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import Image from "next/image";
import { ButtonsBlock } from "../ButtonsBlock/ButtonsBlock";
import { useEffect, useState } from "react";
import { getFavourites, getRandomCat, getVotes } from "@/app/API/CatApi";
import { LogsList } from "../LogsList/LogsList";

export const ContentVoting = () => {
  const [catImg, setCatImg] = useState(null);
  const [onLike, setOnLike] = useState(false);
  const [favouriteId, setFavouriteId] = useState("");
  const [currentLogs, setCurrentLogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRandomCat();
        setCatImg(data[0]);
      } catch (error) {}
    };
    getData();
  }, [onLike]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataFavourites = await getFavourites();
        const dataVotes = await getVotes();
        setCurrentLogs(
          [...dataVotes, ...dataFavourites].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      } catch (error) {}
    };
    getData();
  }, [onLike, favouriteId]);

  if (!catImg) return;

  return (
    <div className="voting__page">
      <GoBackComp />
      <div className="image-wrapper">
        <div className="image-thumb">
          <Image
            className="randomImg"
            src={catImg.url}
            alt="Vote img"
            width={640}
            height={360}
          />
        </div>
        <ButtonsBlock
          setOnLike={setOnLike}
          favouriteId={favouriteId}
          setFavouriteId={setFavouriteId}
          imageID={catImg.id}
        />
      </div>
      <LogsList logList={currentLogs} />
    </div>
  );
};
