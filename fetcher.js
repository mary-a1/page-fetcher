const fs = require('fs');
const request = require('request');
const URL = process.argv[2];
const path = process.argv[3];

//http request
request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //get data into a file
  fs.writeFile(path, body, err => {
    // body brings the data being sent back to us
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("Downloaded and saved 3261 bytes to ./index.html")
  });
  
});


