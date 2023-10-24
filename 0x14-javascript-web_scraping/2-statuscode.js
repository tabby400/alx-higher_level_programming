#!/usr/bin/node

// using the module request
const request = require('request');

// the url to send http get request to
const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
