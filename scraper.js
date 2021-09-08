import fetch from 'node-fetch';

/* const cheerio = require('cheerio');
 */

// This will use node-fetch to point to the website to be scraped
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

// log of scraped website
console.log(body);

/* Next steps:
From the HTML string, get an array of strings, which will contain the URL of the image
Idea 1: Slice the string by certain identifiers
Idea 2: Look for the .jpg in the string

Open questions:

- is the website static or dynamic?
- how to make the scraper stop after the 10th image / file has been downloaded
- how to point it to the folder
*/
