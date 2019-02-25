const request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "Kl6hRXFy4LhxXlJLZrEuWWyfDN5vDfj1Cq1Mp1LRS1WevDIDIUkv1PIDzgHdpjL2";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = {
   find: (req, res, next) => {
       request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/kilometer',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: -1});
           }
       });

   }
};

module.exports = distance;