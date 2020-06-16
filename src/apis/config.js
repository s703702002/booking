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
