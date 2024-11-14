import { createTheme, Textarea, TextInput, Button, Input } from "@mantine/core";

const theme = createTheme({
  colorScheme: "dark", // Enables dark mode by default
  colors: {
    // Custom color palette
    dark: [
      "#d9d9d9", // Dark shade 0
      "#bfbfbf", // Dark shade 1
      "#a6a6a6", // Dark shade 2
      "#8c8c8c", // Dark shade 3
      "#737373", // Dark shade 4
      "#595959", // Dark shade 5
      "#404040", // Dark shade 6 (Main background)
      "#333333", // Dark shade 7
      "#1a1a1a", // Dark shade 8
      "#0d0d0d", // Dark shade 9
    ],
    red: [
      "#FFCDD2",
      "#EF9A9A",
      "#E57373",
      "#EF5350",
      "#F44336",
      "#E53935",
      "#D32F2F",
      "#C62828",
      "#B71C1C",
    ],
    blue: [
      "#BBDEFB",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#2196F3",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
    ],
    // Add custom colors
    primary: ["#556ee6"], // Custom primary color
    danger: ["#df2d03"], // Custom danger color
    success: ["#03b54a"], // Custom success color
  },
  //   primaryColor: "primary", // Set default primary color

  // Customizing the appearance of certain elements
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          fontWeight: 500,
        },
        root: {
          background: "#1A1B1E",
        },
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          marginBottom: 5,
          fontWeight: 500,
        },
        input: {
          fontSize: "small",
          "::placeholder": {
            fontSize: "small",
          },
          width: "100%",
        },
      },
    }),
    Input: Input.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        input: {
          fontSize: "small",
          "::placeholder": {
            fontSize: "small",
          },
        },
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        size: "lg",
      },
      styles: {
        label: {
          fontSize: "small",
          marginBottom: 5,
          fontWeight: 500,
        },
        input: {
          fontSize: "small",
          width: "100%",
        },
      },
    }),
  },

  // Customize spacing, font size, shadows, etc.
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  radius: {
    xs: 3,
    sm: 5,
    md: 8,
    lg: 12,
    xl: 16,
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.15)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.2)",
    xl: "0 12px 24px rgba(0, 0, 0, 0.25)",
  },
});

export default theme;
