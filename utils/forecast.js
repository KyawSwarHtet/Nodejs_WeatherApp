const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d5ed26380766f803bb33619f6a4209f8&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the weather services!", undefined);
    } else if (response.body.error) {
      callback(
        "Unable to find Location of forecast.Try another search",
        undefined
      );
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          "it is currently " +
          response.body.current.temperature +
          " degree out and it is feel like " +
          response.body.current.feelslike +
          " degree out"
      );
    }
  });
};

module.exports = forecast;
