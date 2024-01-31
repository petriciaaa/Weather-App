import React from "react";

import CurrentWeather from "./CurrentWeather";
import "./currentData.scss";

export default function CurrentWeatherInfo(props) {
  let FullData = props.Data;

  let Date = FullData.list[0].dt_txt;
  let CityName = FullData.city.name;
  // 273 - Celvins
  let Temperature =
    Math.round(parseFloat(FullData.list[0].main.temp - 273) * 10) / 10;
  let WindSpeed = Math.round(FullData.list[0].wind.speed * 10) / 10 + " km/h";
  let Precipitation = FullData.list[0].pop;
  let WeatherDescription = FullData.list[0].weather[0].main;
  let WeatherDetail = FullData.list[0].weather[0].description;

  return (
    <div className="CurrentWeather">
      <CurrentWeather
        className="block"
        CityName={CityName}
        Temperature={Temperature}
        WindSpeed={WindSpeed}
        Precipitation={Precipitation}
        Date={Date}
        WeatherDescription={WeatherDescription}
        FullData={FullData}
        WeatherDetail={WeatherDetail}
      />
    </div>
  );
}
