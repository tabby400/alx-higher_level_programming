#!/usr/bin/node

const request = require('request');
// imprting request module
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;

    const wedgeAnt = films.filter(film => film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));
    const filmnum = wedgeAnt.length; // no of films matching are counted
    console.log(filmnum);
  }
});
