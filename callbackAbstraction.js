const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}

// geocode("Heard and", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

// forecast;

// forecast(16.871311, 96.199379, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

// callbackAbstraction Chain
