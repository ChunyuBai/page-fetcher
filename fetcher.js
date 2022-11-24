const request = require('request');
const url = process.argv[2];
const localPath = process.argv[3]
const fs = require('fs');
   request(url, (error, response, body) => {
    if(error){
      console.log('error:', error);} // Print the error if one occurred  
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the example homepage.
    fs.writeFile(localPath, body, error => {
      if(error) {
        console.log("fail to save file to local",error)
      } 
        console.log(`success! size:${body.length}bytes, path: ${localPath}`)
    })
  });

  
