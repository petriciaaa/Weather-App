import React, { useState, useEffect } from "react";

import {
  datePostscript,
  geTime,
  getDay,
} from "../../../Validation/DateConventor";

import { ImageCheck } from "../../../Validation/ImageCheck";

import FutureWeather from "./FutureWeather/FutureWeather";

import "./MainCardStyles/cardButtons.scss";
import "./MainCardStyles/cardInfo.scss";
import "./currentWeather.scss";

import Button from "react-bootstrap/Button";
export default function CurrentWeather(props) {
  let FullData = props.FullData;

  let TempCelsium = props.Temperature + " °C";
  let TempFahrenheit =
    Math.round(parseFloat((props.Temperature * 9) / 5 + 32) * 10) / 10 + " °F";
  let Date = datePostscript(props.Date);

  let currDate = props.Date.split(" ")[1];

  let WindSpeed = props.WindSpeed;
  let Precipitation = Math.round(props.Precipitation * 100);
  let WeatherDescription = props.WeatherDescription;
  let WeatherDetail = props.WeatherDetail;

  const [currentValue, setCurrentValue] = useState(TempCelsium);
  const [selectedButton, setSelectedButton] = useState(1);

  useEffect(() => {
    setSelectedButton(1);
    setCurrentValue(TempCelsium);
  }, [TempCelsium]);

  const handleClickFirstButton = () => {
    setCurrentValue(TempCelsium);
    setSelectedButton(1);
  };

  const handleClickSecondButton = () => {
    setCurrentValue(TempFahrenheit);
    setSelectedButton(2);
  };

  return (
    <div className="MainCard MainCard-layout">
      <section className="Card-header">
        <div>
          {/* {ImageCheck(TempCelsium, WeatherDescription, WeatherDetail, currDate)} */}
          <img
            src={` https://openweathermap.org/img/wn/${FullData.list[0].weather[0].icon}@4x.png`}
          />
        </div>

        <div className="btn-block mt-10">
          <button
            onClick={handleClickSecondButton}
            className={`switchTemp-btn btn ${
              selectedButton === 2 ? "white" : "gray"
            }`}
          >
            <p className="btn-txt">F</p>
          </button>
          <button
            onClick={handleClickFirstButton}
            className={`switchTemp-btn btn btn-first ${
              selectedButton === 1 ? "white" : "gray"
            }`}
          >
            <p className="btn-txt">C</p>
          </button>
        </div>
      </section>
      <article className="ml-3">
        <section className=" flex flex-col h-40 ">
          <p className="card-temp temp ml-5 mb-7 "> {currentValue} </p>
          <p className="card-date ml-5 ">{Date}</p>
          <section className="flex items-center">
            <p className="card-hour ml-5 mt-3">{getDay()}</p>
            <div className="card-stick ml-2 mt-3"></div>
            <p className="card-hour ml-2 mt-3">{geTime()}</p>
          </section>
        </section>
        {/* Wind rain */}
        <section className=" flex mb-20 ml-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            className="mr-5"
          >
            <g
              clip-path="url(#clip0_240_2402)"
              filter="url(#filter0_di_240_2402)"
            >
              <path
                d="M18.0646 10.8158C18.2274 10.8847 18.2274 11.1153 18.0646 11.1842L6.00205 16.2876C5.83055 16.3602 5.66168 16.1796 5.74556 16.0133L7.73684 12.0667L7.8265 11.885C8.10176 11.3271 8.10176 10.6729 7.8265 10.115L7.73684 9.93333L5.74556 5.98669C5.66168 5.82044 5.83055 5.63985 6.00205 5.7124L18.0646 10.8158ZM20.7776 11.9235C21.5994 11.582 21.5994 10.418 20.7776 10.0766L4.23756 3.20369C3.94126 3.08057 3.59989 3.14945 3.37451 3.37783C3.1483 3.60705 3.08438 3.95087 3.2131 4.24608L5.80937 10.2007C6.03162 10.7104 6.03162 11.2896 5.80937 11.7993L3.2131 17.7539C3.08439 18.0491 3.1483 18.3929 3.37451 18.6222C3.59989 18.8506 3.94126 18.9194 4.23756 18.7963L20.7776 11.9235Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_240_2402"
                x="-1.26241"
                y="0"
                width="24.2624"
                height="25.0165"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1.50827" dy="2.26241" />
                <feGaussianBlur stdDeviation="0.377069" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_240_2402"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_240_2402"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.754137" dy="0.754137" />
                <feGaussianBlur stdDeviation="0.754137" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_240_2402"
                />
              </filter>
              <clipPath id="clip0_240_2402">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(1)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="card-wind wind-info">Wind {WindSpeed}</span>
          <div className="card-stick ml-6 "></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            className="ml-4"
          >
            <g
              clip-path="url(#clip0_240_2235)"
              filter="url(#filter0_di_240_2235)"
            >
              <path
                d="M11.0001 2.84224L6.46263 7.37974C5.5653 8.27716 4.95424 9.4205 4.70671 10.6652C4.45917 11.9099 4.58628 13.2 5.07196 14.3725C5.55764 15.5449 6.38008 16.547 7.43528 17.2521C8.49049 17.9571 9.73106 18.3334 11.0001 18.3334C12.2692 18.3334 13.5098 17.9571 14.565 17.2521C15.6202 16.547 16.4426 15.5449 16.9283 14.3725C17.414 13.2 17.5411 11.9099 17.2935 10.6652C17.046 9.4205 16.4349 8.27716 15.5376 7.37974L11.0001 2.84224ZM11.0001 0.249908L16.8338 6.08358C17.9876 7.23736 18.7733 8.70737 19.0916 10.3077C19.4099 11.9081 19.2465 13.5668 18.6221 15.0743C17.9977 16.5818 16.9403 17.8703 15.5836 18.7768C14.2269 19.6833 12.6318 20.1672 11.0001 20.1672C9.36843 20.1672 7.77338 19.6833 6.41668 18.7768C5.05998 17.8703 4.00256 16.5818 3.37813 15.0743C2.7537 13.5668 2.59032 11.9081 2.90864 10.3077C3.22696 8.70737 4.01269 7.23736 5.16646 6.08358L11.0001 0.249908Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_240_2235"
                x="-2.26241"
                y="0"
                width="24.2624"
                height="25.0165"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1.50827" dy="2.26241" />
                <feGaussianBlur stdDeviation="0.377069" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_240_2235"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_240_2235"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.754137" dy="0.754137" />
                <feGaussianBlur stdDeviation="0.754137" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_240_2235"
                />
              </filter>
              <clipPath id="clip0_240_2235">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="wind-info ml-4 ">Hum {Precipitation}%</span>
        </section>
        <FutureWeather
          Data={props.FullData}
          WeatherDescription={props.WeatherDescription}
          Temperature={props.Temperature}
          Precipitation={Precipitation}
          WeatherDetail={WeatherDetail}
        />
      </article>
    </div>
  );
}
