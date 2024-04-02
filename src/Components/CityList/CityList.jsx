import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import LiveSearch from "./LiveSearch/LiveSearch";

import "./cityList.scss";

export default function CityList(props) {
  let DataArray = props.Data;

  let CityList = DataArray.map(function (elem, index) {});

  return (
    <div className="cityList-layout flex flex-col mb-20 ">
      <LiveSearch Data={DataArray} />
    </div>
  );
}
