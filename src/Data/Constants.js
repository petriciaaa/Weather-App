class DataState {
  #Tokens;
  #APIkey;
  #setWeatherData;
  setTokens(Tokens) {
    this.#Tokens = Tokens;
  }
  setAPIkey(APIkey) {
    this.#APIkey = APIkey;
  }
  setsetWeatherData(setWeatherData) {
    this.#setWeatherData = setWeatherData;
  }
  getTokens() {
    return this.#Tokens;
  }
  getAPIkey() {
    return this.#APIkey;
  }
}

let state = new DataState();
state.setTokens([
  `498817`,
  `524894`,
  `743615`,
  `1006984`,
  `5128638`,
  `690791`,
  `1735161`,
  `5809844`,
  `1850147`,
  `1796236`,
  `5368361`,
  `993800`,
  `745044`,
  `4887398`,
  `6167865`,
  `1819729`,
  `292223`,
]);

export const _Tokens = state.getTokens();

state.setAPIkey(`f9c6cf151741aa18fbd35a68b86a646d`);
export const _APIkey = state.getAPIkey();
