/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        "rose-gold": {
          "primary": "#FFC0CB",
          "secondary": "#FFD70099",
          "accent": "#FFB6C1",
          "neutral": "#F0E68C",
          "base-100": "#FFFFFF",
          "info": "#FF69B4",
          "success": "#FFDAB9",
          "warning": "#FFA500",
          "error": "#FF4500"
        },
        "lila-gray": {
          "color-scheme": "dark",
          "primary": "#EE82EE",
          "secondary": "#C0C0C099",
          "accent": "#D8BFD8",
          "neutral": "#E6E6FA",
          "base-100": "#FFFFFF",
          "info": "#DA70D6",
          "success": "#F0F8FF",
          "warning": "#DCDCDC",
          "error": "#A9A9A9"
        },
        "gray-blue": {
          "color-scheme": "light",
          "primary": "#000080",
          "secondary": "#FFC0CB",
          "accent": "#000000",
          "neutral": "#2B3440",
          "base-100": "#FFFFFF",
          "info": "#6495ED",
          "success": "#ADD8E6",
          "warning": "#FFA07A",
          "error": "#B22222"
        },
        "coral-turq": {
          "primary": "#3FE0D0",
          "secondary": "#FA8072",
          "accent": "#48D1CC",
          "neutral": "#FFE4E1",
          "base-100": "#FFFFFF",
          "info": "#20B2AA",
          "success": "#AFEEEE",
          "warning": "#FA8072",
          "error": "#CD5C5C"
        },
        "cupcake-mod": {
          ...require("daisyui/src/theming/themes")["cupcake"],
          primary: "#FFB6C1",
          secondary: "#FFFFFF",
          accent: "#FF69B4"
        }
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]
  }
}

