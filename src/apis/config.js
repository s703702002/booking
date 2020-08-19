// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_DailyTimetable
const API_BASE = 'https://ptx.transportdata.tw/MOTC';

const getFetchOptions = () => ({
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate'
  }
});

export const fetcher = (url) =>
  fetch(API_BASE + url, getFetchOptions()).then((r) => r.json());

export const swrConfig = {
  suspense: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0
};
