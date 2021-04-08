const request = require('request');
// const breed = process.argv[2];


// const fetchBreedDescription = function(breedName, callback) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, _, body) => {
//     if (error) {
//       console.log('Error:', error);
//     }
//     const data = JSON.parse(body);
//     if (data.length === 0) {
//       console.log('Sorry the breed you specified was not found.');
//       return;
    
//     } else {
//       console.log(data[0].description);
//     }
//   });

// };

const fetchBreedDescription = function(breedName, callBack) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, _, body) => {
    if (error) {
      return callBack(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callBack(null, breed.description);
    } else {
      callBack("breed doesn't exist", null);
    }
  });
};

module.exports = { fetchBreedDescription };

