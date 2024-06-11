/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#570df8",
            secondary: "#f000b8",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            info: "#3abff8",
            success: "#36d399",
            warning: "#fbbd23",
            error: "#f87272",
          },
        },
      ],
    },
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  plugins: [require("daisyui")],
};
