module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
      },
      colors: {
        orange: "#FF9900",
        orangeRed: "#F85A47",
        darkBlue: "#31353B",
        grayBlue: "#718087",
        lightBlue: "#BDCCFF",
        darkGray: "#DADADA",
      },
      zIndex: {
        infiniteNegative: "-99",
      },
      boxShadow: {
        inputShadow:
          "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222)",
      },
      backgroundImage: {
        "header-1": 'url("/images/header-1.png")',
        "header-2": 'url("/images/header-2.png")',
      },
    },
  },
  plugins: [],
};
