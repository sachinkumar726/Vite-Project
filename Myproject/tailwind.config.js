const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjusted the glob pattern for source files
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Adjusted the glob pattern for Next UI theme files
  ],
  theme: {
    extend: {
      boxShadow: {
        pink: "0px 4px 6px rgba(255, 192, 203, 0.5)", // Adjusted boxShadow values
        blue: "0px 4px 6px rgba(173, 216, 230, 0.5)", // Adjusted boxShadow values
      },
      colors: {
        // Correctly defined the theme colors
        "purple-dark": {
          DEFAULT: "#DD62ED",
          foreground: "#ffffff",
          focus: "#F182F6",
          // Add other color shades as needed
        },
      },
      layout: {
        // Adjusted layout properties
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark",
          css: {
            // Adjusted color-background gradient values
            "--color-background":
              "linear-gradient(to bottom, purple, black, blue)",
          },
          colors: {
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
