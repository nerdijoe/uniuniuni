const axios = require('axios');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

exports.getRandomNum = (req, res) => {
  axios.get('https://www.random.org/integers/?num=10000&min=0&max=1000&col=1&base=10&format=plain&rnd=new')
  .then((result) => {
    console.log(result.data);
    result = result.data.toString().split('\n');
    console.log(result);

    const width = 128;
    const height = 128;
    var grid = new Uint8ClampedArray(width * height * 4);

    for(let i = 0 ; i < (width*height*4) ; i += 4) {
      grid[i] = result[i%10000] % 255
      grid[i+1] = Math.floor(result[i%10000] / getRandomArbitrary(2, 5)) % 255
      grid[i+2] = Math.floor(result[i%10000] / getRandomArbitrary(2, 5)) % 255
      grid[i+3] = Math.floor(result[i%10000] / getRandomArbitrary(2, 5)) % 255
    }

    res.render('home', {
      grid
    });
  })
  .catch((err) => {
    console.log(err);
  })
}

