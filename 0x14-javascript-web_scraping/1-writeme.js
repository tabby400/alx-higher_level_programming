#!/usr/bin/node

// fs module involves reading and writing ina  file

const fs = require('fs');
const filename = process.argv[2]; // where data is written
const data = process.argv[3]; // has data to be written on file

fs.writeFile(filename, data, { encoding: 'utf-8' }, (error) => {
  if (error) {
    console.error(error); // if error occurs
  }
});
