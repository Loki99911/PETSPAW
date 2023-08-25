"use client";

import "./ContentVoting.scss";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import Image from "next/image";
import { ButtonsBlock } from "../ButtonsBlock/ButtonsBlock";
import { useEffect, useState } from "react";
import { getRandomCat } from "@/app/API/CatApi";

export const ContentVoting = () => {
  const [catImg, setCatImg] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRandomCat();
        console.log(data);
        setCatImg(data[0]);
      } catch (error) {}
    }
    getData();
  }, []);

  if (!catImg) return;

  return (
    <div className="voting__page">
      <GoBackComp />
      <div className="image-wrapper">
        <div className="image-thumb">
          <Image
            className="randomImg"
            src={catImg.url}
            alt="Vote table"
            width={640}
            height={360}
          />
        </div>
        <ButtonsBlock />
      </div>
      <div>Voting actions</div>
    </div>
  );
};
