import cheerio from 'cheerio';
import fs from 'fs';
import got from 'got';

// Create new folder called ./memes
try {
  if (!fs.existsSync('./memes')) {
    fs.mkdirSync('./memes');
  }
} catch (err) {
  console.error(err);
}

// Fetching the HTML data with promise:r
(async () => {
  try {
    const response = await got(
      'https://memegen-link-examples-upleveled.netlify.app/',
    );
    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
})();

// the HTML is now defined in the const body, where I need to extract the img files from the source code by putting them into an array (the first 10 images)

/* Next steps:
From the HTML string, get an array of strings, which will contain the URL of the image
Idea 1: Slice the string by certain identifiers
Idea 2: Look for the .jpg in the string
This could work:
https://stackoverflow.com/questions/38444324/parsing-an-html-string-in-order-to-retrieve-and-change-the-src-url-from-an-image*/
