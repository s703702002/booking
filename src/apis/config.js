export default function getFetchOptions() {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate"
    }
  };
}

export const swrConfig = {
  suspense: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0
};
