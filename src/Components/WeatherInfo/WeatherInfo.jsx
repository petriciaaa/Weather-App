import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentWeatherInfo from "./DataBlock/CurrentData";

import "./weatherInfo.scss";

export default function WeatherInfo(props) {
  let arr = props.Data;
  let RouteToData = arr.map(function (element, index) {
    // Path - url in browser that needs to Route component
    // CurrData - Info about currert element of arr (WEATHER iNFO)
    let Path = element.city.name.replaceAll(" ", "");
    let CurrData = props.Data[index];
    return (
      <Route path={Path} element={<CurrentWeatherInfo Data={CurrData} />} />
    );
  });

  return (
    <section className="Info-block WeatherInfo-layout">
      <Routes>{[RouteToData]}</Routes>
    </section>
  );
}
