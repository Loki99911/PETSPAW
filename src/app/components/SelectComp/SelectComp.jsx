"use client";
import React from "react";
import Select from "react-select";

const selectStyles = (width, bgcolor) => ({
  control: (base, state) => ({
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
  menuList: (base, state) => ({
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
  option: (base, state) => ({
    ...base,
    color: state.isActive ? "#8C8C8C" : "#8C8C8C",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "transparent",
    },
  }),
  indicatorSeparator: (base, state) => ({ ...base, display: "none" }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
});

export default function SelectComp({
  width = 200,
  bgcolor = "#f8f8f7",
  options,
  placeholder = "Not selected",
  isDisabled = false,
  defaultValue,
  onChange,
}) {
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
