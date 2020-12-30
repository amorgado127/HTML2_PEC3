module.exports = {
  purge:[ './src/**/*.html',],
    
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: { personal: "#f2f2f2", estatico: "#d3dae4" },
        blue: {
          principal: "#007cba",
          formulario: "#cbeef2",
          nogrid: "#0b0b1a",
        },
      },
      maxHeight: {
        "200px": "200px",
      },
      maxWidth: {
        "30%": "30%",
        "60%": "60%",
        "90%": "90%",
        "95%": "95%",
      },
      width: {
        "288px": "288px",
        "320px": "320px",
        "90%": "90%",
        "95%": "95%",
      },
      height: {
        "90%": "90%",
        "95%": "95%",
        "192px": "192px",
        "260px": "260px",
        "240px": "240px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
