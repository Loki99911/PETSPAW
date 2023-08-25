"use client";

import "./ContentBreeds.scss";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { SortBreeds } from "../SortBreeds/SortBreeds";
import { useEffect, useState } from "react";
import { getSomeCats } from "@/app/API/CatApi";
import Image from "next/image";

export const ContentBreeds = () => {
  const [breed, setBreed] = useState(null);
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState(0);
  const [someCats, setSomeCats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSomeCats({ breed, limit });
        setSomeCats(data);
      } catch (error) {}
    };
    getData();
  }, [breed, limit]);

  console.log(someCats);

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
      <ul className="cat-list">
        {someCats.map((el) => (
          <li key={el.id}>
            <Image
              src={el.url}
              alt="cat"
              className="cat-item__img"
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
