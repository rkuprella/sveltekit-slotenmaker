const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        whatsapp: "#4dc247",
        "brand-main": "#172f4c",
        brand: colors.lightBlue,
      },
      animation: {
        ring: "ring 5s 5s linear infinite",
      },
      keyframes: {
        ring: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "2.5%, 97.5%": { transform: "rotate(12deg)" },
          "5%, 95%": { transform: "rotate(-3deg)" },
          "7.5%, 92.5%": { transform: "rotate(-6deg)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              color: "#172f4c",
            },
            h3: {
              color: "#172f4c",
            },
            h4: {
              color: "#172f4c",
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};

module.exports = config;
