const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?types=country&access_token=pk.eyJ1Ijoia3lhd3N3YXJodGV0MTExIiwiYSI6ImNsM2swMm02ZTBqaW8zanFpcTZrOGJza3QifQ.rAmMGLVGhJjtZ5a6KqYz_w";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find Location.Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
