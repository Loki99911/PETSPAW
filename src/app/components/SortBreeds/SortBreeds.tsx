"use client";
import { usePathname, useRouter } from "next/navigation";
import "./SortBreeds.scss";
import SelectComp, { OptionType } from "../SelectComp/SelectComp";
import { useEffect, useMemo, useState } from "react";
import { getBreeds } from "@/app/API/CatApi";

export const SortBreeds = ({ breed, setBreed, limit, setLimit, setOrder }) => {
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
      label: "Limit: 5",
    },
    {
      value: 10,
      label: "Limit: 10",
    },
    {
      value: 15,
      label: "Limit: 15",
    },
    {
      value: 20,
      label: "Limit: 20",
    },
  ];

  const onChangeBreeds = (e) => {
    setBreed(e.value);
  };
  const onChangeLimit = (e) => {
    setLimit(e.value);
  };
  const onChangeOrderAB = (e) => {
    setOrder("desc");
  };
  const onChangeOrderBA = (e) => {
    setOrder("asc");
  };

  return (
    <div className="sort__wrapper">
      <SelectComp
        width={220}
        options={optionsBreeds}
        placeholder="All breeds"
        onChange={onChangeBreeds}
      />
      <div className="sort__wrapper--btns">
        <SelectComp
          width={100}
          options={optionsLimit}
          defaultValue={optionsLimit[1]}
          onChange={onChangeLimit}
        />
        <button
          type="button"
          onClick={onChangeOrderAB}
          className="sort__btn"
          id="AB"
        >
          <svg width="19" height="22" className="sort__btn--icon">
            <use href="/symbol-defs.svg#icon-sort-20"></use>
          </svg>
        </button>
        <button
          type="button"
          onClick={onChangeOrderBA}
          className="sort__btn"
          id="AB"
        >
          <svg width="19" height="22" className="sort__btn--icon">
            <use href="/symbol-defs.svg#icon-soft-revert-20"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
