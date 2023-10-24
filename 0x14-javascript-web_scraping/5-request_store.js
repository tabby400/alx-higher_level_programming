#!/usr/bin/node

// gets contents of a webpage and srote in a file
const fs = require('fs');
const request = require('request');

const url = process.argv[2]; // where data is gotten
const filepath = process.argv[3]; // index 3 where written

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(filepath, body, { encoding: 'utf-8' }, (error) => {
      if (error) {
        console.error(error); // errow when writing to the file
      }
    });
  }
});
