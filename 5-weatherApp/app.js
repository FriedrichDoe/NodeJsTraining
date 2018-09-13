const request = require("request");

request(
    {
        url:
            "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadephia",
        json: true
    },
    (error, response, body) => {
        console.log(JSON.stringify(body, undefined, 2));
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);
    }
);
