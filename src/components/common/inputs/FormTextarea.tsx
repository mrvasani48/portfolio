import { Textarea } from "@mantine/core";

const FormTextarea = ({ label = "", error = "", className = "", ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <Textarea
        className={`w-full ${className}`}
        styles={{
          input: {
            backgroundColor: "#1A1B1E",
            border: "1px solid #2C2E33",
            color: "#C1C2C5",
            padding: "0.75rem 1rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            minHeight: "120px",
            "&:focus": {
              borderColor: "#ff014f",
              outline: "none",
            },
            "&:hover": {
              borderColor: "#ff014f",
            },
          },
          error: {
            color: "#ff014f",
          },
        }}
        error={error}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FormTextarea;
