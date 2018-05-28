const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/forecast/:location', (req, res) => {
  let location = req.params.location;
  
  
  axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${location}?units=ca`)
  .then(response => {
    let forecast = response.data;
    res.send(forecast);
  })
  .catch(error => {
    console.log(error);
  });
});

app.listen(3000, () => console.log('Weather app server running on port 3000!'));
