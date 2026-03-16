import { useState } from "react";

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue((prev) => !prev);
  };

  return {
    value,
    toggle,
  };
};

export default useToggle;
