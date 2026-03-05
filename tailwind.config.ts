const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ["open-sans", ...defaultTheme.fontFamily.sans],
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      mono: ["Menlo", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
