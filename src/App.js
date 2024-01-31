import React, { useEffect, useState } from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.scss";
import "./Components/Header/header.scss";

import CityList from "./Components/CityList/CityList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import Loader from "./Loader/Loader";

export default function App(props) {
  const [weatherData, setWeatherData] = useState([]);

  let Interface = props.FetchApiInterface;

  useEffect(() => {
    Interface.fetchData(setWeatherData);
  }, []);
  if (!weatherData || !weatherData.length) {
    return <Loader />;
  }

  return (
    <div className="main main-layout ">
      <Header />
      <main className="WeatherData ">
        <CityList Data={weatherData} />
        <WeatherInfo Data={weatherData} />
      </main>
      <Footer />
    </div>
  );
}
