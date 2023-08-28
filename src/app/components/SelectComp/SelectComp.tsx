"use client";
import React from "react";
import Select from "react-select";

export type OptionType = {
  label: string;
  value: string | number;
};

export type SelectEventType = {
  value: string;
};

const selectStyles = (width: number, bgcolor: string) => ({
  control: (base: any, state: any) => ({
    ...base,
    width: "100%",
    minWidth: width + "px",
    backgroundColor: bgcolor,
    borderRadius: "10px",
    height: "40px",
    transition: "border-color 350ms ease-in-out",
    boxShadow: state.isFocused ? "unset" : "unset",
    borderColor: "white",
    fontSize: "16px",
    ":hover": {
      borderColor: "#ff868e",
    },
  }),
  menuList: (base: any, state: any) => ({
    ...base,
    color: "#8C8C8C",
    borderRadius: "10px",
    fontSize: "16px",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#ff868e",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    ":hover": {
      borderColor: "#ff868e",
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    color: state.isActive ? "#8C8C8C" : "#8C8C8C",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "transparent",
    },
  }),
  indicatorSeparator: (base: any, state: any) => ({ ...base, display: "none" }),
  container: (base: any) => ({
    ...base,
    flex: 1,
  }),
});

interface IProp {
  width?: number;
  bgcolor?: string;
  options: OptionType[];
  placeholder?: string;
  isDisabled?: boolean;
  defaultValue?: OptionType;
  onChange: (value: SelectEvent, TypenewValue: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
}

export default function SelectComp({
  width = 200,
  bgcolor = "#f8f8f7",
  options,
  placeholder = "Not selected",
  isDisabled = false,
  defaultValue,
  onChange,
}: IProp) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      styles={selectStyles(width, bgcolor)}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
