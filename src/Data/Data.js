import { _Tokens, _APIkey } from "./Constants";

export const FetchApiInterface = {
  Tokens: _Tokens,
  APIkey: _APIkey,

  fetchData: async function (setWeatherData) {
    const promises = this.Tokens.map(async (token) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${token}&appid=${this.APIkey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching data for token ${token}:`, error);
        return null;
      }
    });

    const data = await Promise.all(promises);
    setWeatherData(data.filter((d) => d !== null));
  },
};
