#!/usr/bin/node

const request = require('request');
const url = 'http://swapi.co/api/films/';
let id = parseInt(process.argv[2], 10);
let characters = [];

request(url, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    const result = data.results;
    if (id < 4) {
      id += 3;
    } else {
      id -= 3;
    }
    for (let p = 0; p < result.length; p++) {
      if (result[p].episode_id === id) {
        characters = result[p].characters;
        break;
      }
    }
    for (let k = 0; k < characters.length; k++) {
      request(characters[k], function (error, response, body) {
        if (error == null) {
          console.log(JSON.parse(body).name);
        }
      });
    }
  }
});
