import React, { useEffect, useState } from "react";
import BasicModal from "./Modals/ModalWindowToWeather";
import "./futureData.scss";

import {
  getNext4Days,
  geTime,
  getDay,
  getDayAndHour,
} from "../../../../Validation/DateConventor";
import { ImageCheck } from "../../../../Validation/ImageCheck";

const getFutureDataCard = function (
  Temp,
  WeatherDescription,
  Data,
  date,
  WindSpeed,
  WeatherDetail,
  FullData,
  index
) {
  return (
    <div className=" flex flex-col items-center justify-between futureDataCard futureDataCard-layout bounce-top mx-6">
      <h1 className="futureDataCard-temp mt-3">{Temp}°C </h1>

      <BasicModal
        image={
          <img
            src={` https://openweathermap.org/img/wn/${FullData.weather[0].icon}@4x.png`}
          />
        }
        Data={Data}
        WeatherDescription={WeatherDescription}
        Temp={Temp}
        WindSpeed={WindSpeed}
        date={date}
      />

      <section className="mb-2 flex flex-col justify-center  items-center">
        {/*getDayAndHour(date)[0] - day getDayAndHour(date)[1]-hour  */}
        <h1 className="futureDataCard-date ">{getDayAndHour(date)[0]}</h1>
        <h1 className="futureDataCard-date ">{getDayAndHour(date)[1]}</h1>
      </section>
    </div>
  );
};

export default function FutureWeather(props) {
  let Data = props.Data.list;
  let cardsTemp = [];
  let WeatherDetail = props.WeatherDetail;

  for (let index = 1; index < Data.length; index++) {
    let element = Data[index].main.temp;
    let date = Data[index].dt_txt;
    element = parseFloat(Math.round(element - 273));
    cardsTemp.push(element);
  }

  let FutureDataCards = cardsTemp.map((element, index) => {
    let date = Data[index].dt_txt;

    return getFutureDataCard(
      cardsTemp[index],
      props.WeatherDescription,
      Data[index],
      date,
      Data[index].wind.speed,
      WeatherDetail,
      Data[1 + index]
    );
  });

  let initialCards = [];
  let initialCardsLength = 4;
  //initialCardsLength - how many u want to see in a screen
  for (let index = 0; index < FutureDataCards.length; index++) {
    if (initialCards.length < initialCardsLength) {
      initialCards.push(FutureDataCards[index]);
    }
  }
  // Only God and me can understand wtf is going there ))
  // Using state hook to manage the state of cards and counterOfAddedCards
  const [cards, setCards] = useState(initialCards);
  const [counterOfAddedCards, setcounterOfAddedCards] = useState(0);

  function arrowButtonClick() {
    setCards((prev) => {
      if (initialCards.length + counterOfAddedCards <= 38) {
        return [
          ...prev.slice(1),
          FutureDataCards[initialCards.length + counterOfAddedCards],
        ];
      } else {
        alert("No future data availible");
        return [cards];
      }
    });
    setcounterOfAddedCards((prev) => prev + 1);
  }
  useEffect(() => {
    setCards(initialCards);
    setcounterOfAddedCards(0);
  }, [Data]);
  useEffect(() => {
    setCards(cards);
  }, [cards]);

  return (
    <section className="futureData futureData-layout  mr-4 ">
      <section className="futureDataCards">{cards}</section>

      <button onClick={arrowButtonClick} className="arrow-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          className="arrow-btn"
        >
          <circle
            cx="18.2569"
            cy="18.2569"
            r="16.6361"
            transform="rotate(-90 18.2569 18.2569)"
            stroke="white"
            stroke-width="2.08134"
            stroke-linejoin="round"
          />
          <path
            d="M23.9756 18.7768L10.4588 18.7768"
            stroke="white"
            stroke-width="2.08134"
            stroke-linejoin="round"
          />
          <path
            d="M18.7768 12.5382C21.2131 14.9745 22.5791 16.3404 25.0154 18.7767L18.7768 25.0153"
            stroke="white"
            stroke-width="2.08134"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
