#!/usr/bin/node

const request = require('request');
const { argv } = require('process');

const SwapiUrl = 'https://swapi-api.hbtn.io/api/films/';
function httpRequest (url) {
  return new Promise(function (resolve, reject) {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

async function main () { // use of await for promoses
  const movie = await httpRequest(SwapiUrl + argv[2]);
  const characters = JSON.parse(movie).characters;
  characters.forEach(async function (element) {
    const character = await httpRequest(element);
    const CharacterName = JSON.parse(character).name;
    console.log(CharacterName);
  });
}

main();
