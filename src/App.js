import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.scss";
import "./Components/Header/header.scss";
import CityList from "./Components/CityList/CityList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import "./index.css";

export default function App(props) {
  // const [weatherData, setWeatherData] = useState([]);
  // const Tokens = [`498817`, `524894`, `743615`, `1006984`, `5128638`];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const promises = Tokens.map(async (token) => {
  //       try {
  //         const response = await fetch(
  //           `https://api.openweathermap.org/data/2.5/forecast?id=${token}&appid=42b92b30b77e3159a1b8a010dd129adb`
  //         );

  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }

  //         const data = await response.json();
  //         return data;
  //       } catch (error) {
  //         console.error(`Error fetching data for token ${token}:`, error);
  //         return null;
  //       }
  //     });

  //     const data = await Promise.all(promises);
  //     setWeatherData(data.filter((d) => d !== null));
  //   };

  //   fetchData();
  // }, []);

  const [weatherData, setWeatherData] = useState([]);

  let Interface = props.FetchApiInterface;

  useEffect(() => {
    Interface.fetchData(setWeatherData);
  }, []);

  return (
    <div className="main main-layout ">
      <Header />
      <main className="WeatherData flex items-start">
        <CityList Data={weatherData} />
        <WeatherInfo Data={weatherData} />
      </main>
      <Footer />
    </div>
  );
}
