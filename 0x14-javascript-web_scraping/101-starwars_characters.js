#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('Movie ID as the first argument please.');
  process.exit(1);
}

const swapiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(swapiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filmData = JSON.parse(body);
    filmData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        } else {
          console.error(`Error fetching character: ${characterUrl}`);
        }
      });
    });
  } else {
    console.error(`Error fetching movie data for Movie ID: ${movieId}`);
  }
});
