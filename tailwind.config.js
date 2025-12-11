/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snappieYellow1: "#FAE446",
        snappieYellow2: "#FFE97F",
        snappieBlack: "#000000",
        snappieWhite: "#FFFFFF",
        snappieGray: "#1E1E1E",
        snappieBlue: "#3298E0",
        snappieGreen: "#BBDA97",
        snappiePink: "#F9ADB0",
        snappieGray2: "#FBFDFC",
        badgeGreen: "#D1F7C4", 
        badgeGreenText: "#277A43", 
        badgeRed: "#FAD4D4", 
        badgeRedText: "#8C1C1C", 
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "cursive"],
        press: ["'Press Start 2P'", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        pixel: "0 4px 0 #000",
        deep: "0 10px 25px rgba(0,0,0,0.18)",
      },
      dropShadow: {
        icon: "0 18px 32px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        sm: "6px",
      },
      borderRadius: {
        xl2: "32px",
      },  
    },
  },
  plugins: [],
}
