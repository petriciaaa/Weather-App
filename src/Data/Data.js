const APIkey = `42b92b30b77e3159a1b8a010dd129adb`;

const SPBKey = `498817`;
const MoscowKey = `524894`;
const KazanKey = `743615`;
// 1006984 - London
// 5128638- New York
const LondonKey = `1006984`;
const NewYorkKey = `5128638`;

const SPBAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${SPBKey}&appid=${APIkey}`;
const MoscowAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${MoscowKey}&appid=${APIkey}`;
const KazanAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${KazanKey}&appid=${APIkey}`;
const LondonAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${LondonKey}&appid=${APIkey}`;
const NewYorkAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${NewYorkKey}&appid=${APIkey}`;

const responseSPB = await fetch(SPBAPI);
const dataSPB = await responseSPB.json();

const responseMoscow = await fetch(MoscowAPI);
const dataMoscow = await responseMoscow.json();

const responseKazan = await fetch(KazanAPI);
const dataKazan = await responseKazan.json();

const responseLondon = await fetch(LondonAPI);
const dataLondon = await responseLondon.json();

const responseNewYork = await fetch(NewYorkAPI);
const dataNewYork = await responseNewYork.json();

let DataArray = [];

DataArray.push(dataSPB);
DataArray.push(dataMoscow);
DataArray.push(dataKazan);
DataArray.push(dataLondon);
DataArray.push(dataNewYork);
export { DataArray };

// let tokens = ['token1', 'token2', 'token3'];
// let results = [];

// for (let i = 0; i < tokens.length; i++) {
//   let token = tokens[i];
//   let url = `https://api.example.com/data?token=${token}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       results.push(data);

//       if (results.length === tokens.length) {
//         // all data has been fetched, do something with results array
//         console.log(results);
//       }
//     })
//     .catch(error => console.error(error));
// }
