const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "brand-headline": "#3c5068",
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
              color: "#3c5068",
            },
            h3: {
              color: "#3c5068",
            },
            h4: {
              color: "#3c5068",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

module.exports = config;
