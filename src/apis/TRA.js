import getFetchOptions from "./config";

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/TRA/TRAApi_ODDailyTimetable
const API_BASE = "https://ptx.transportdata.tw/MOTC";

export const fetcher = url =>
  fetch(API_BASE + url, getFetchOptions()).then(r => r.json());
