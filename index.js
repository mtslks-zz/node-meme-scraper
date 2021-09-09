import fs from 'node:fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

// 1. Create folder 'memes' if it doesn't exist yet
try {
  if (!fs.existsSync('./memes')) {
    fs.mkdirSync('./memes');
  }
} catch (err) {
  console.error(err);
}

// 2. Fetch HTML body from site to be scraped
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

// 3. Define array and load HTML with Cheerio
const $ = cheerio.load(body);
const listOfUrls = [];

// 4. Iterate over list of first 10 image URLs
for (let i = 0; i < (listOfUrls.length === 1 ? 1 : 10); i++) {
  const image = $('img', body)[i].attribs.src;

  // 5. Fetch images from the list of URLs, save them in specified folder
  fetch(image).then((res) => {
    const path = './memes/' + image.split('?')[0].split('/').slice(4).join('_');

    const dest = fs.createWriteStream(path);
    res.body.pipe(dest);
  });
}
// 6. Log success message
console.log('Scraping successfully completed - 10 images saved in ./memes.');
