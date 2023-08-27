"use client";
import { usePathname, useRouter } from "next/navigation";
import "./SortGallery.scss";
import SelectComp, { OptionType } from "../SelectComp/SelectComp";
import { useEffect, useMemo, useState } from "react";
import { getBreeds } from "@/app/API/CatApi";

export const SortGallery = ({
  order,
  setOrder,
  type,
  setType,
  breed,
  setBreed,
  limit,
  setLimit,
}) => {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBreeds();
        setBreedList(data);
      } catch (error) {}
    };
    getData();
  }, []);
  const optionsOrder: OptionType[] = [
    {
      value: "Random",
      label: "Random",
    },
    {
      value: "Desc",
      label: "Desc",
    },
    {
      value: "Asc",
      label: "Asc",
    },
  ];
  const optionsType: OptionType[] = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Static",
      label: "Static",
    },
    {
      value: "Animated",
      label: "Animated",
    },
  ];

  const optionsBreeds: OptionType[] = useMemo(
    () =>
      breedList.map(({ name, id }: { name: string; id: string }) => ({
        label: name,
        value: id,
      })),
    [breedList]
  );

  const optionsLimit: OptionType[] = [
    {
      value: 5,
      label: "5 items per page",
    },
    {
      value: 10,
      label: "10 items per page",
    },
    {
      value: 15,
      label: "15 items per page",
    },
    {
      value: 20,
      label: "20 items per page",
    },
  ];

  const onChangeOrder = (e) => {
    setOrder(e.value);
  };
  const onChangeType = (e) => {
    setType(e.value);
  };
  const onChangeBreeds = (e) => {
    setBreed(e.value);
  };
  const onChangeLimit = (e) => {
    setLimit(e.value);
  };
  const onChangeRefresh = (e) => {
    console.log("refresh");
  };

  return (
    <div className="sort__wrapper">
      <div className="sort__select--wrapper">
        <p className="sort__select--title">order</p>
        <SelectComp
          width={100}
          options={optionsOrder}
          defaultValue={optionsOrder[0]}
          onChange={onChangeOrder}
          bgcolor={"#ffffff"}
        />
      </div>
      <div className="sort__select--wrapper">
        <p className="sort__select--title">type</p>
        <SelectComp
          width={100}
          options={optionsType}
          defaultValue={optionsType[1]}
          onChange={onChangeType}
          bgcolor={"#ffffff"}
        />
      </div>
      <div className="sort__select--wrapper">
        <p className="sort__select--title">breed</p>
        <SelectComp
          width={220}
          options={optionsBreeds}
          defaultValue={{
            value: "None",
            label: "None",
          }}
          placeholder="All breeds"
          onChange={onChangeBreeds}
          bgcolor={"#ffffff"}
        />
      </div>
      <div className="sort__select--wrapper">
        <p className="sort__select--title">limit</p>
        <div className="sort__btn--wrap">
          <SelectComp
            width={100}
            options={optionsLimit}
            defaultValue={optionsLimit[0]}
            onChange={onChangeLimit}
            bgcolor={"#ffffff"}
          />
          <button
            type="button"
            onClick={onChangeRefresh}
            className="sort__btn--refresh"
          >
            <svg width="18" height="20" className="sort__btn--icon">
              <use href="/symbol-defs.svg#icon-update-20"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
