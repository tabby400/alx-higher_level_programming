#!/usr/bin/node

const request = require('request'); // module  request used
const { argv } = require('process');

const swapiUrl = 'https://swapi-api.alx-tools.com/api';
request(swapiUrl + '/films/' + argv[2], (error, response, body) => {
  if (error) {
    console.error(error); // error shown
  }
  console.log(JSON.parse(body).title); // Star wars title
});
