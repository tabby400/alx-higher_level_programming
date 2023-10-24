#!/usr/bin/node

// import fs with read and write funcitonality
// in a file

const fs = require('fs');

// the filepath porocess is now created
const filepath = process.argv[2];
// first element is the path to node.js exec in prosess.argv
// second one is path to the script being executed

fs.readFile(filepath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error); // if there is an error it is show n
  } else {
    console.log(data);
  }
});
