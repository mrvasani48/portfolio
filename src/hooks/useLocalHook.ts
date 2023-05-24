import { useDebugValue, useEffect, useState } from "react";

export const useLocalHook = (name: any) => {
  const v = localStorage.getItem(name);
  const [value, setValue] = useState<any>(v);
  useEffect(():void => localStorage.setItem(name, value), [value]);
  useDebugValue(value)
  return [value, setValue];
};
