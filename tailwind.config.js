module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
      }
    },
    colors: {
      "black": "#000",
      "green": "#4ec5af",
      "white": "#fff", 
      "purple": "#7c00ff",
      "darker-text": "#8892b0"
    },
    screens: {
      'phone':  '560px', 
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}