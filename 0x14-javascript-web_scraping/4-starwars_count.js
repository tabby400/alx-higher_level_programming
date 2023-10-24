#!/usr/bin/node

const request = require('request');
// imprting request module
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;

    const filmnum = films.reduce((count, film) => {
      if (film.characters.some(character => character.endsWith('/18/'))) {
        return count + 1;
      }
      return count;
    }, 0);

    console.log(filmnum);
  }
});
