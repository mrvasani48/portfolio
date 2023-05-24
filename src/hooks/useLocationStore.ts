import { useDebugValue } from "react";

export const useLocationStore = (a: string, b: string) => {
  const fname = localStorage.getItem(a);
  const lname = localStorage.getItem(b);
  const c = {
    fname: fname,
    lname: lname,
  };
  useDebugValue(c);
  return c;
};
