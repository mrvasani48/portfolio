import React, { useImperativeHandle, useRef } from "react";

const InputValue = ({ value }:any, ref:any) => {
  const myRef = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        focusMe: () => {
          myRef.current.focus();
        },
        alert: () => {
          alert("snfksfksdf");
        },
      };
    },
    []
  );
  return (
    <div>
      <p>InputValue:{value}</p>
      <input ref={myRef} type="" value="kishan" readOnly />
    </div>
  );
};

export default React.forwardRef(InputValue);
