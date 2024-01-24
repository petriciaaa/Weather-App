import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import "./futureData.scss";

import {
  getNext4Days,
  geTime,
  getDay,
  getDayAndHour,
} from "../../../../Validation/DateConventor";
import { ImageCheck } from "../../../../Validation/ImageCheck";

const getFutureDataCard = function (Temp, WeatherDescription, index, date) {
  return (
    <div className=" flex flex-col items-center justify-between futureDataCard futureDataCard-layout bounce-top mx-6">
      <h1 className="futureDataCard-temp mt-3">{Temp}°C </h1>
      <div className=" w-24 h-24 flex futureDataCard-img">
        {ImageCheck(Temp, WeatherDescription, "10")}{" "}
      </div>
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

  for (let index = 0; index < Data.length; index++) {
    //Not equal to zero and %8 to go to the next day at the same time
    // if (index % 8 === 0 && index !== 0) {
    let element = Data[index].main.temp;
    element = parseFloat(Math.round(element - 273));
    cardsTemp.push(element);
    // }
  }

  let FutureDataCards = cardsTemp.map((element, index) => {
    let date = Data[index].dt_txt;
    return getFutureDataCard(
      cardsTemp[index],
      props.WeatherDescription,
      index,
      date
    );
  });

  // Trying useState

  let cardsThreeElements = [];
  for (let index = 0; index < FutureDataCards.length; index++) {
    if (cardsThreeElements.length < 4) {
      cardsThreeElements.push(FutureDataCards[index]);
    }
  }
  // Only God and i understand wtf is going there ))
  // Using state hook to manage the state of cards and countOfAddedCards
  const [cards, setCards] = useState(cardsThreeElements);
  const [countOfAddedCards, setCountOfAddedCards] = useState(0);

  function arrowButtonClick() {
    setCards((prev) => {
      if (prev.length) {
        return [
          ...prev.slice(1),
          FutureDataCards[cardsThreeElements.length + countOfAddedCards],
        ];
      } else {
        return [...prev];
      }
    });
    setCountOfAddedCards((prev) => prev + 1);
  }
  useEffect(() => {
    setCards(cardsThreeElements);
    setCountOfAddedCards(0);
  }, [Data]);
  useEffect(() => {
    console.log("state changed");
    setCards(cards);
  }, [cards]);

  return (
    <section className="futureData futureData-layout flex items-center justify-center mr-4 ">
      <Carousel />

      {cards}
      <button onClick={arrowButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
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
