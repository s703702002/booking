import { useState, useCallback } from 'react';

const useToggle = (init: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState(init);
  const toggle = useCallback(() => setValue(!value), [value]);
  return [value, toggle];
};

export default useToggle;
