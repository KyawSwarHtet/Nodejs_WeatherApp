const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=d5ed26380766f803bb33619f6a4209f8&query=16.871311,96.199379&units=f";

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         "it is currently " +
//         response.body.current.temperature +
//         " degree out and it is feel like " +
//         response.body.current.feelslike +
//         " degree out"
//     );
//   }
// });

// Geocoding
const geocode =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1Ijoia3lhd3N3YXJodGV0MTExIiwiYSI6ImNsM2swMm02ZTBqaW8zanFpcTZrOGJza3QifQ.rAmMGLVGhJjtZ5a6KqYz_w";

request({ url: geocode, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect the location services!");
  } else if (response.body.features.length === 0) {
    console.log("unable to find location, Try another search");
  } else {
    const latitude = response.body.features[0].center[0];
    const longtitude = response.body.features[0].center[1];

    console.log(latitude, longtitude);
  }
});
