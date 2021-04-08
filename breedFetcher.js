const request = require('request');
const breed = process.argv[2];


const breedFetcher = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Sorry the breed you specified was not found.');
      return;
    
    } else {
      console.log(data[0].description);
    }
  });

};

breedFetcher(breed);