"use client";

import { useEffect, useState } from "react";
import { GoBackComp } from "../GoBackComp/GoBackComp";
import { ImageList } from "../ImageList/ImageList";
import { SortGallery } from "../SortGallery/SortGallery";
import "./ContentGallery.scss";
import ModalUploadBtn from "../ModalUploadBtn/ModalUploadBtn";
import { getCatsImgForGalery, getFavourites } from "@/app/API/CatApi";

export const ContentGallery = () => {
  const [someCats, setSomeCats] = useState([]);
  const [currentFavourites, setCurrentFavourites] = useState(null);

  useEffect(() => {    
    const getData = async () => {
      try {
        const dataFavourites = await getFavourites();
        setCurrentFavourites(dataFavourites);
        const defaultCats = await getCatsImgForGalery({});    
        setSomeCats(defaultCats);
      } catch (error) {
        
      }
    };
    getData();
  }, []);

  return (
    <div className="gallery__page">
      <GoBackComp />
      <ModalUploadBtn />
      <SortGallery setSomeCats={setSomeCats} />
      <ImageList catsList={someCats} currentFavourites={currentFavourites} />
    </div>
  );
};
