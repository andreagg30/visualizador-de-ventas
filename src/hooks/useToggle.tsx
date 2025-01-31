import { useState } from "react";

export function useToggle(initialState: boolean = false) {
  const [toggle, setToggle] = useState(initialState);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, handleToggle };
}
