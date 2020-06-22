import getFetchOptions from "./config";

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/TRA/TRAApi_ODDailyTimetable
const API_BASE = "https://ptx.transportdata.tw/MOTC";

export function searchPriceByStation(OriginStationID, DestinationStationID) {
  // GET 取得指定[起訖站間]之票價資料
  const API_PRICE = `/v2/Rail/THSR/ODFare/${OriginStationID}/to/${DestinationStationID}`;
  return fetch(API_BASE + API_PRICE, getFetchOptions());
}

export const fetcher = url =>
  fetch(API_BASE + url, getFetchOptions()).then(r => r.json());
