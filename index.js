// Importing dependencies
/* import fs from 'node:fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch'; */

const fs = require('node:fs');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

try {
  if (!fs.existsSync('./memes')) {
    fs.mkdirSync('./memes');
  }
} catch (err) {
  console.error(err);
}

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const listOfUrls = [];
const $ = cheerio.load(body);

for (let i = 0; i < (listOfUrls.length === 1 ? 1 : 10); i++) {
  const image = $('img', body)[i].attribs.src;
  console.log(image);

  fetch(image).then((res) => {
    const path = './memes/' + image.split('?')[0].split('/').slice(4).join('_');

    const dest = fs.createWriteStream(path);
    res.body.pipe(dest);
  });
}
