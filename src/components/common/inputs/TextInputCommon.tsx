import React from "react";
import { TextInput } from "@mantine/core";

const TextInputCommon = ({
  label = "",
  placeholder = "",
  error = "",
  className = "",
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <TextInput
        className={`w-full ${className}`}
        styles={{
          input: {
            backgroundColor: "#1A1B1E",
            // border: "1px solid #ff014f",
            color: "#C1C2C5",
            padding: "0.75rem 1rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            transition: "all 0.3s ease",
            "&:focus": {
              borderColor: "#ff014f",
              outline: "none",
              boxShadow: "0 0 0 1px #ff014f",
            },
            "&:hover": {
              borderColor: "#ff014f",
            },
          },
          error: {
            color: "#ff014f",
            marginTop: "10px",
          },
        }}
        error={error}
        {...props}
      />
    </div>
  );
};

export default TextInputCommon;
