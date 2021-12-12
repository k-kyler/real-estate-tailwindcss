module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
        roboto: ['"Roboto"'],
        inter: ['"Inter"'],
      },
      colors: {
        brownOrange: "#FF9900",

        orangeRed: "#F85A47",
        whiteRed: "#EBEBEB",

        darkGray: "#DADADA",

        darkRed: "#333333",
        grayRed: "#666666",

        darkBlue: "#31353B",
        grayBlue: "#718087",
        lightGrayBlue: "#DEDFE1",
        lightBlue: "#BDCCFF",
        purpleBlue: "#9672FF",
        skyBlue: "#F1FFFF",
        darkSkyBlue: "#2CBDE7",
        greenBlue: "#4DDFFD",
        whiteBlue: "#FBFCFC",

        lightPink: "#F2B8EC",

        darkGreen: "#545A58",
      },
      zIndex: {
        infiniteNegative: "-99",
      },
      boxShadow: {
        cardIcon1:
          "0px 100px 80px rgba(150, 114, 255, 0.07), 0px 64.8148px 46.8519px rgba(150, 114, 255, 0.0531481), 0px 38.5185px 25.4815px rgba(150, 114, 255, 0.0425185), 0px 20px 13px rgba(150, 114, 255, 0.035), 0px 8.14815px 6.51852px rgba(150, 114, 255, 0.0274815), 0px 1.85185px 3.14815px rgba(150, 114, 255, 0.0168519)",
        cardIcon2:
          "0px 100px 80px rgba(77, 223, 253, 0.07), 0px 64.8148px 46.8519px rgba(77, 223, 253, 0.0531481), 0px 38.5185px 25.4815px rgba(77, 223, 253, 0.0425185), 0px 20px 13px rgba(77, 223, 253, 0.035), 0px 8.14815px 6.51852px rgba(77, 223, 253, 0.0274815), 0px 1.85185px 3.14815px rgba(77, 223, 253, 0.0168519)",
        cardIcon3:
          "0px 100px 80px rgba(242, 184, 236, 0.07), 0px 64.8148px 46.8519px rgba(242, 184, 236, 0.0531481), 0px 38.5185px 25.4815px rgba(242, 184, 236, 0.0425185), 0px 20px 13px rgba(242, 184, 236, 0.035), 0px 8.14815px 6.51852px rgba(242, 184, 236, 0.0274815), 0px 1.85185px 3.14815px rgba(242, 184, 236, 0.0168519)",
        headerSearchButton:
          "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222)",
        propertyTypesButton:
          "0px 100px 80px rgba(248, 90, 71, 0.07), 0px 64.8148px 46.8519px rgba(248, 90, 71, 0.0531481), 0px 38.5185px 25.4815px rgba(248, 90, 71, 0.0425185), 0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519)",
        featuredButton:
          "0px 100px 80px rgba(248, 90, 71, 0.07), 0px 64.8148px 46.8519px rgba(248, 90, 71, 0.0531481), 0px 38.5185px 25.4815px rgba(248, 90, 71, 0.0425185), 0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519)",
        testimonialCard:
          "0px 100px 80px rgba(0, 0, 0, 0.03), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0182222), 0px 20px 13px rgba(0, 0, 0, 0.015), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0117778), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00722222), 3px 44px 54px rgba(0, 0, 0, 0.08)",
        footerInput:
          "0px 163px 80px rgba(0, 0, 0, 0.04), 0px 105.648px 46.8519px rgba(0, 0, 0, 0.0303704), 0px 62.7852px 25.4815px rgba(0, 0, 0, 0.0242963), 0px 32.6px 13px rgba(0, 0, 0, 0.02), 0px 13.2815px 6.51852px rgba(0, 0, 0, 0.0157037), 0px 3.01852px 3.14815px rgba(0, 0, 0, 0.00962963)",
        footerButton:
          "0px 100px 80px rgba(248, 90, 71, 0.07), 0px 64.8148px 46.8519px rgba(248, 90, 71, 0.0531481), 0px 38.5185px 25.4815px rgba(248, 90, 71, 0.0425185), 0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519)",
      },
      backgroundImage: {
        "header-1": 'url("/images/header-1.png")',
        "header-2": 'url("/images/header-2.png")',
        "featured-1": 'url("/images/featured-1.png")',
        "featured-2": 'url("/images/featured-2.png")',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ["hover"],
      border: ["hover"],
      background: ["hover"],
    },
  },
};
