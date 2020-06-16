// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_DailyTimetable
const API_BASE = "https://ptx.transportdata.tw/MOTC";

const fetchOptions = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate"
  }
};

export function searchTrain(OriginStationID, DestinationStationID, TrainDate) {
  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const API_TRAIN = `/v2/Rail/THSR/DailyTimetable/OD/${OriginStationID}/to/${DestinationStationID}/${TrainDate}`;
  return fetch(API_BASE + API_TRAIN, fetchOptions);
}

export function searchPriceByStation(OriginStationID, DestinationStationID) {
  // GET 取得指定[起訖站間]之票價資料
  const API_PRICE = `/v2/Rail/THSR/ODFare/${OriginStationID}/to/${DestinationStationID}`;
  return fetch(API_BASE + API_PRICE, fetchOptions);
}

export function getStations() {
  // GET 取得車站基本資料
  const API_ODFARE = "/v2/Rail/THSR/Station";
  return fetch(API_BASE + API_ODFARE, fetchOptions);
}
