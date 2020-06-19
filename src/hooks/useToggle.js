import { useState, useCallback } from "react";

export default function useToggle(init = false) {
  const [value, setValue] = useState(init);
  const toggle = useCallback(() => setValue(!value), [value]);
  return [value, toggle];
}
