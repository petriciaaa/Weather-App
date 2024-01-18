import React from "react";
import "./Main.scss";
import "./Components/Header/header.scss";
import CityList from "./Components/CityList/CityList";
import Header from "./Components/Header/Header";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import "./index.css";

export default function App(props) {
  return (
    <div className="main main-layout ">
      <Header />
      <section className="WeatherData flex items-start">
        <CityList Data={props.Data} />
        <WeatherInfo Data={props.Data} />
      </section>

      {/* Вынести в отдельную компоненту то что в теге section */}
      {/* Footer */}
    </div>
  );
}
