const axios = require('axios');

exports.getRandomNum = (req, res) => {
  axios.get('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new')
  .then((result) => {
    console.log(result.data);
    res.send(result.data);
  })
  .catch((err) => {
    console.log(err);
  })
}

