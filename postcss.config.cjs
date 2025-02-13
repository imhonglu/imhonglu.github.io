module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
    require("postcss-custom-media"),
    require("postcss-reporter"),
  ],
};
