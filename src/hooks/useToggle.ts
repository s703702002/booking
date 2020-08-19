import { useState, useCallback } from 'react';

const useToggle = (init: boolean = false) => {
  const [value, setValue] = useState(init);
  const toggle = useCallback(() => setValue(!value), [value]);
  return [value, toggle] as const;
};

export default useToggle;
