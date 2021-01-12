module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--t": "(min-width: 800px)" },
        },
        {
          customMedia: { "--d": "(max-width:1270px)" },
        },
      ],
    },
  },
};
