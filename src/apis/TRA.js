import getFetchOptions from "./config";

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/TRA/TRAApi_ODDailyTimetable
const API_BASE = "https://ptx.transportdata.tw/MOTC";

export function searchTrain(OriginStationID, DestinationStationID, TrainDate) {
  // GET 取得指定[日期],[起迄站間]之時刻表資料
  const API_TRAIN = `/v2/Rail/TRA/DailyTimetable/OD/${OriginStationID}/to/${DestinationStationID}/${TrainDate}?format=JSON`;
  return fetch(API_BASE + API_TRAIN, getFetchOptions());
}

export function searchPriceByStation(OriginStationID, DestinationStationID) {
  // GET 取得指定[起訖站間]之票價資料
  const API_PRICE = `/v2/Rail/THSR/ODFare/${OriginStationID}/to/${DestinationStationID}`;
  return fetch(API_BASE + API_PRICE, getFetchOptions());
}

export const fetcher = url =>
  fetch(API_BASE + url, getFetchOptions()).then(r => r.json());
