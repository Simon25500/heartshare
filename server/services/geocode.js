const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
  
    // Optional depending on the providers
    apiKey: "AIzaSyBbjMtABvfaw7Cq_un0llwAg8derao9yUk", // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
  };

  const geocoder = NodeGeocoder(options);


  exports.geocode = (address) => {
      return geocoder.geocode(address)
  }
